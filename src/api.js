import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';

export const allTrendingMovies = async (controller) =>{
    const response = await axios.get(`${BASE_URL}/trending/all/week`, {
        params: {
            api_key: "c9faed3b28959f4add95b6006f9dae43"
        },
        signal: controller.signal,
    })
    return response.data
}

export const getMovieById = async (movieId,controller) => {
    const response  = await axios.get(`${BASE_URL}/movie/${movieId}`,{
        params: {
            api_key: "c9faed3b28959f4add95b6006f9dae43"
        },
        signal: controller.signal,
    })
    return response.data
}

export const getMoviesByQuery = async (query,controller) => {
    const response  =await axios.get(`${BASE_URL}/search/movie`,{
        params: {
            api_key: "c9faed3b28959f4add95b6006f9dae43",
            query: `${query}`
        },
        signal: controller.signal,
    })
    return response.data
}

export const getMovieCast = async (movieId,controller) => {
    const response  = await axios.get(`${BASE_URL}/movie/${movieId}/credits`,{
        params: {
            api_key: "c9faed3b28959f4add95b6006f9dae43"
        },
        signal: controller.signal,
    })
    return response.data
}

export const getMovieReview = async (movieId,controller) => {
    const response  = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`,{
        params: {
            api_key: "c9faed3b28959f4add95b6006f9dae43"
        },
        signal: controller.signal,
    })
    return response.data
}