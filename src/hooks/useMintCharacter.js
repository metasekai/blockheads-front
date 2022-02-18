import { useState } from 'react';
import { useCallback } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { ethers } from 'ethers';
import { premintABI } from '../artifacts/abi';
import config from '../artifacts/config';

const useMintCharacter = () => {
  const [error, setError] = useState(null);
  const auth = useAuth();

  const mintNewCharacter = useCallback(async () => {
    if (!auth.signer) {
      return;
    }

    console.log('Minting new character');
    try {
      const tokenContract = new ethers.Contract(config.preminterAddress, premintABI, auth.signer);
      const buyTx = await tokenContract.buyNewCharacter(1);
      const receipt = await buyTx.wait();

      console.log('receipt', receipt);
      setError(null);
      return true;
    } catch (err) {
      console.log('error', err);
      setError(err);
      // alert(error.data.message);
      return false;
    }
  }, [auth.signer]);

  return { mintNewCharacter, error };
};

export default useMintCharacter;
