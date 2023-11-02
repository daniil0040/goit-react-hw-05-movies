import { getMovieById } from "api"
import { SingleMovieInfo } from "components/SingleMovieInfo/SingleMovieInfo"
import { BackBtn } from "components/SingleMovieInfo/SingleMovieInfo.styled"
import { useEffect, useRef, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"

export default function SingleMovie() {
    const [movie, setMovie] = useState()
    const [error, setError] = useState(false)
    const [loading,setLoading]=useState(false)
    const params = useParams()
    const location = useLocation()
    const backLinkLocationRef = useRef(location.state?.from ?? "/movies")
    useEffect(() => {
            const controller = new AbortController()
            async function getMovie() {
                try {
            setLoading(true)
            const fetchedMovie = await getMovieById(params.movieId,controller)
            setMovie(fetchedMovie)
        } catch (error) {
            if (error.code !== "ERR_CANCELED") {
                setError(true)
            }
                } finally {
                    setLoading(false)
        }
    }
        getMovie()
        return () => {
            controller.abort()
        }
        }, [params.movieId])
    
    return (
        <main>
            {loading && <div>Loading...</div>}
            {error && <div>Something went wrong...Try reload page!</div>}
            <BackBtn><Link to={backLinkLocationRef.current}>Go back</Link></BackBtn>
            {movie && <SingleMovieInfo movie={movie} />}
    </main>
        )
}