import { useState } from 'react';
import { useCallback } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { ethers } from 'ethers';
import { premintABI } from '../artifacts/abi';
import config from '../artifacts/config';

const NewCharacterMintedTopic = '0x7a24f227bd6b4e20d868408f3e66df824206e3ed7993a2261bd3ff4743d39da0';

const findTopicFromReceipt = receipt => {
  let topic = [];
  // find the event topic from all the receipt
  for (let i = 0; i < receipt.logs.length; i++) {
    const log = receipt.logs[i];
    for (let j = 0; j < log.topics.length; j++) {
      if (log.topics[j] === NewCharacterMintedTopic) {
        topic = log.topics;
      }
    }
  }

  const tokenId = parseInt(topic[2], 16);

  return tokenId;
};

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

      console.log(buyTx);
      console.log('receipt', receipt);
      const eventData = findTopicFromReceipt(receipt);

      console.log(eventData);
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
