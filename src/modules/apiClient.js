const APIKEY = process.env.REACT_APP_API_KEY

const requests = {
    getMovieList: `/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
    getTVList: `/tv/popular?api_key=${APIKEY}&language=en-US&page=1`,
    getFamilyMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751`,
    getDocumentaryMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`
}

export default requests;