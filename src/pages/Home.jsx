import { allTrendingMovies } from "api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";

export default function Home() {
    const [movieItems, setMovies] = useState([]);
        const [error, setError] = useState(false)
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        const controller = new AbortController()
        async function getMovies() {
            try {
                 setLoading(true)
                 const movies = await allTrendingMovies(controller)
            setMovies(movies.results)
        } catch (error) {
            if (error.code !== "ERR_CANCELED") {
                setError(true)
            }
        }finally {
                    setLoading(false)
        }
        }
        getMovies()
        return () => {
            controller.abort();
        }
    }, [])

    return <main>
        {loading && <div>Loading...</div>}
            {error && <div>Something went wrong...Try reload page!</div>}
        <MoviesList movies={ movieItems} />
    </main>
}