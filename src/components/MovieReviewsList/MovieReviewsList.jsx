export const MovieReviewsList = ({reviews}) => {
    return (
        <ul>
                {reviews && reviews.map((review) => {
                    return <li key={review.id}>
                        <h3>{review.author}</h3>
                        <p>{ review.content}</p>
                    </li>
                })}
            </ul>
    )
}