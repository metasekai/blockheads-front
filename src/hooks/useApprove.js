import React, { useCallback, useEffect } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { ethers } from 'ethers';
import { erc20ABI } from '../artifacts/abi';
import config from '../artifacts/config';

const useApprove = tokenAddress => {
  const auth = useAuth();
  const [approved, setApproved] = React.useState(false);

  const fetchAllowance = useCallback(async () => {
    if (!auth.provider) {
      return;
    }

    console.log('Fetching Allowance');
    const readOnlyContract = new ethers.Contract(tokenAddress, erc20ABI, auth.provider);
    const allowance = await readOnlyContract.allowance(auth.address, config.preminterAddress);
    console.log('allowance', allowance);

    if (allowance.lte(0)) {
      setApproved(false);
      return;
    }

    setApproved(true);
  }, [auth.address, auth.provider, tokenAddress]);

  const approveSpending = useCallback(async () => {
    if (!auth.signer) {
      return;
    }

    console.log('Approve Allowance');
    // approve token if not enough
    const tokenContract = new ethers.Contract(tokenAddress, erc20ABI, auth.signer);
    const approveTx = await tokenContract.approve(config.preminterAddress, ethers.constants.MaxUint256);
    await approveTx.wait();

    setApproved(true);
  }, [auth.signer, tokenAddress]);

  useEffect(() => {
    if (auth.address) {
      fetchAllowance();
    }
  }, [auth.address, fetchAllowance]);

  return { approved, fetchAllowance, approveSpending };
};

export default useApprove;
