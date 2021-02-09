const API_KEY = "4f4d874fb5bc08b8a58d7a0a52fd7491"

const requests = {
    fetchTrending : `/discover/tv?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals :`discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated : `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies :`discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies :`discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies :`discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies :`discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries :`discover/tv?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
