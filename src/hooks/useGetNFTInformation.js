import { useQuery, gql } from '@apollo/client';

const GET_CHARACTER_BY_TOKENID = gql`
  query GetCharacters($tokenId: Int!) {
    characters(where: { tokenId: { _eq: $tokenId } }) {
      _id
      owner
      tokenId
      type
      rarity
      class
      stats {
        vitality
        strength
        defense
        morale
        agility
      }
    }
  }
`;

const useGetNFTInformation = tokenId => {
  return useQuery(GET_CHARACTER_BY_TOKENID, {
    variables: {
      tokenId: parseInt(tokenId, 10),
    },
  });
};

export default useGetNFTInformation;
