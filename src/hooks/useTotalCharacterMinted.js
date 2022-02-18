import React, { useCallback, useEffect } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { ethers } from 'ethers';
import { erc20ABI } from '../artifacts/abi';
import config from '../artifacts/config';

const useTotalCharacterMinted = () => {
  const auth = useAuth();
  const [totalSupply, setTotalSupply] = React.useState(0);

  const fetchTotalSupply = useCallback(async () => {
    if (!auth.provider) {
      return;
    }

    console.log('Fetching Character Total Supply');
    const readOnlyContract = new ethers.Contract(config.characterAddress, erc20ABI, auth.provider);
    const totalMinted = await readOnlyContract.totalSupply();
    console.log('totalMinted', totalMinted);

    if (totalMinted.lte(0)) {
      setTotalSupply(0);
      return;
    }

    setTotalSupply(true);
  }, [auth.provider]);

  useEffect(() => {
    if (auth.address) {
      fetchTotalSupply();
    }

    auth.provider.on('block', fetchTotalSupply);
    return () => {
      auth.provider.off('block', fetchTotalSupply);
    };
  }, [auth.address, auth.provider, fetchTotalSupply]);

  return { totalSupply, fetchTotalSupply };
};

export default useTotalCharacterMinted;
