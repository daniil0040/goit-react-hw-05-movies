import { getMoviesByQuery } from "api"
import { MoviesListByQuery } from "components/MoviesListByQuery/MoviesListByQuery"
import { MoviesSearch } from "components/MoviesSearch/MoviesSearch"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function Movies() {
    const [params,setParams] = useSearchParams()
    const query = params.get('query') ?? ''
    const [movies, setMovies] = useState([])
            const [error, setError] = useState(false)
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        if (query === '') {
            return
        }
        const controller = new AbortController()
        async function getMovies() {
            try {
                setLoading(true)
                const movies = await getMoviesByQuery(query,controller)
                setMovies(movies)
            } catch (error) {
                if (error.code !== "ERR_CANCELED") {
                setError(true)
            }
            }finally {
                    setLoading(false)
        }
        }
        getMovies()
    },[query])
    
    const getQuery = (evt) => {
        evt.preventDefault()
        setParams({query: evt.target.elements.query.value})
    }

    return <main>
        <MoviesSearch onGetQuery={getQuery} value={query} />
        {loading && <div>Loading...</div>}
            {error && <div>Something went wrong...Try reload page!</div>}
        {movies.length !== 0  && <MoviesListByQuery movies={movies}/>}
    </main>
}