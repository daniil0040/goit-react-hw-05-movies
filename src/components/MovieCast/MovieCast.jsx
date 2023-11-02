import { getMovieCast } from "api"
import { MovieCastList } from "components/MovieCastList/MovieCastList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const MovieCast = () => {
    const [casts, setCasts] = useState([])
    const [error, setError] = useState(false)
    const [loading,setLoading]=useState(false)
    const params = useParams()
    useEffect(() => {
            const controller = new AbortController()
            async function getCast() {
                try {
            setLoading(true)
                    const fetchedCast = await getMovieCast(params.movieId, controller)
            setCasts(fetchedCast.cast)
        } catch (error) {
            if (error.code !== "ERR_CANCELED") {
                setError(true)
            }
                } finally {
                    setLoading(false)
        }
    }
        getCast()
        return () => {
            controller.abort()
        }
    }, [params.movieId])

    return <div>
        {loading && <div>Loading...</div>}
        {error && <div>Something went wrong...Try reload page!</div>}
        {casts.length >= 1 ? <MovieCastList casts={casts} /> : <p>We don't have any casts fo this movie :(</p>}
    </div>
}