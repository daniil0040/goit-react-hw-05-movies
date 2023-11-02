import { getMovieReview } from "api"
import { MovieReviewsList } from "components/MovieReviewsList/MovieReviewsList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const MovieReviews = () => {
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const params = useParams()
    useEffect(() => {
        const controller = new AbortController()
        async function getReviews() {
            try {
                setLoading(true)
                const fetchedReviews = await getMovieReview(params.movieId, controller)
                setReviews(fetchedReviews.results)
            } catch (error) {
                if (error.code !== "ERR_CANCELED") {
                    setError(true)
                }
            } finally {
                setLoading(false)
            }
        }
        getReviews()
        return () => {
            controller.abort()
        }
    }, [params.movieId])
    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Something went wrong...Try reload page!</div>}
            {reviews.length > 0 ? <MovieReviewsList reviews={reviews}/> : <p>We don't have any reviews for this movie :(</p>}
        </div>
    )
}