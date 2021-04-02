import { gql } from 'apollo-server-express';

const Search = gql`
	type Search {
		albums: [Album]
		artists: [Artist]
		tracks: [Track]
		playlists: [Playlist]
		shows: [Show]
		episodes: [Episode]
	}
`;
export default Search;
