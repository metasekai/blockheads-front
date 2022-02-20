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
      }
    }
  }
`;

const useGetNFTInformation = tokenId => {
  const { data, loading } = useQuery(GET_CHARACTER_BY_TOKENID, {
    variables: {
      tokenId: parseInt(tokenId, 10),
    },
  });

  console.log('useGetNFTInformation', data);

  return { loading, character: data && data.characters };
};

export default useGetNFTInformation;
