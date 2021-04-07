const APIKEY = "ced6e2375b75f3b35fbfa226c4500fd5";

const requests = {
    getMovieList: `/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
    getTVList: `/tv/popular?api_key=${APIKEY}&language=en-US&page=1`,
    getFamilyMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751`,
    getDocumentaryMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`
}

export default requests;