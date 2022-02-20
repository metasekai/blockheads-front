import React, { useCallback, useEffect } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { ethers } from 'ethers';
import { characterABI } from '../artifacts/abi';
import config from '../artifacts/config';

const useGetOwnNFT = () => {
  const auth = useAuth();
  const [blockheads, setBlockHeads] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchOwnedNFTs = useCallback(async () => {
    if (!auth.provider || !auth.address) {
      return;
    }
    setLoading(true);

    try {
      console.log('Fetching own NFTs');
      const readOnlyContract = new ethers.Contract(config.characterAddress, characterABI, auth.provider);

      const nftBalance = await readOnlyContract.balanceOf(auth.address);
      console.log('nftBalance', nftBalance);

      const getTokenId = async index => {
        const blockhead = await readOnlyContract.tokenOfOwnerByIndex(auth.address, index);
        // sleep for a bit to avoid hitting the gas limit
        await new Promise(resolve => setTimeout(resolve, 400));

        return blockhead.toNumber();
      };

      const blockHeads = await Promise.all(Array.from({ length: nftBalance.toNumber() }, (_, i) => getTokenId(i)));
      setBlockHeads(blockHeads);

      console.log('blockHeads', blockHeads);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [auth.address, auth.provider]);

  useEffect(() => {
    fetchOwnedNFTs();
  }, [fetchOwnedNFTs]);

  //   useEffect(() => {
  //     auth.provider.on('block', fetchTotalSupply);
  //     return () => {
  //       auth.provider.off('block', fetchTotalSupply);
  //     };
  //   }, [auth.provider, fetchTotalSupply]);

  return { blockheads, fetchOwnedNFTs, loading };
};

export default useGetOwnNFT;
