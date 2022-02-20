import { useAuth } from '../providers/AuthProvider';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS_BY_TOKENIDS = gql`
  query GetCharacters($address: String!) {
    characters(where: { owner: { _eq: $address } }) {
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

const useGetOwnNFT = () => {
  const auth = useAuth();
  const { data, loading: loadingCharacters } = useQuery(GET_CHARACTERS_BY_TOKENIDS, {
    variables: {
      address: auth.address,
    },
    skip: !auth.address,
  });

  return { loadingCharacters, characters: data && data.characters };
};

export default useGetOwnNFT;
