import React, { useCallback } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

const providerOptions = {};

const web3modal = new Web3Modal({
  network: 'mainnet',
  cacheProvider: true,
  providerOptions,
});

const initialState = {
  provider: null,
  signer: null,
  address: null,
  connected: false,
  connect: () => {},
  disconnect: () => {},
  getShortenedAddress: () => {},
};

const AuthContext = React.createContext(initialState);

function AuthProvider({ children }) {
  const [provider, setProvider] = React.useState(null);
  const [signer, setSigner] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [connected, setConnected] = React.useState(false);

  const signMessage = async (message, walletSigner) => {
    const messageHash = ethers.utils.solidityKeccak256(['string'], [message]);
    const signature = await walletSigner.signMessage(messageHash);

    return signature;
  };

  const changeChainId = async () => {
    try {
      return await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x13881' }],
      });
    } catch (e) {
      if (e.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x13881',
                chainName: 'Polygon Testnet',
                rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
              },
            ],
          });
        } catch (addError) {
          // handle "add" error
        }
      }
    }
  };

  const connect = useCallback(async () => {
    if (connected) {
      return;
    }

    // Check the current metamask chainId
    const chainId = await window.ethereum.request({
      method: 'eth_chainId',
    });
    console.log('chainId', chainId);

    if (chainId.result !== '0x13881') {
      // Invalid chainId
      console.log('Invalid chainId');

      // Request to change the metamask chainId
      await changeChainId();
    }

    const instance = await web3modal.connect();
    const _provider = new ethers.providers.Web3Provider(instance);
    const _signer = _provider.getSigner();
    const _address = await _signer.getAddress();

    setProvider(_provider);
    setSigner(_signer);
    setAddress(_address);
    setConnected(true);

    // check localstorage if user is not yet loggedin
    const sessionKey = localStorage.getItem('sessionKey');
    if (!sessionKey) {
      // We can use this to verify sessions and signatures
      const signedMessage = await signMessage('Hello World', _signer);
      localStorage.setItem('sessionKey', signedMessage);

      console.log(`Signed message: ${signedMessage}`);
      console.log('connection status', connected);
    }
  }, [connected]);

  const disconnect = useCallback(async () => {
    setProvider(null);
    setSigner(null);
    setAddress(null);
    setConnected(false);

    // clear cache
    web3modal.clearCachedProvider();
  }, []);

  const getShortenedAddress = () => {
    return address.substring(0, 6) + '...' + address.substring(address.length - 4);
  };

  React.useEffect(() => {
    if (!connected) {
      connect();
    }
  }, [connected, connect]);

  React.useEffect(() => {
    if (!provider) {
      return;
    }

    console.log('provider', provider);

    // Subscribe to accounts change
    provider.on('accountsChanged', accounts => {
      console.log('accountsChanged', accounts);
    });

    // Subscribe to chainId change
    provider.on('chainChanged', chainId => {
      console.log('chainChanged', chainId);
    });

    // Subscribe to provider connection
    provider.on('connect', info => {
      console.log('connect', info);
    });

    // Subscribe to provider disconnection
    provider.on('disconnect', error => {
      console.log('disconnect', error);
    });

    return () => {
      provider.removeAllListeners();
    };
  }, [provider]);

  return (
    <AuthContext.Provider
      value={{
        provider,
        signer,
        address,
        connected,
        connect,
        disconnect,
        getShortenedAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);

  if (!window.ethereum) {
    throw new Error('No web3 provider found');
  }

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
