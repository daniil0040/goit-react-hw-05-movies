import { MoviesListItemTextContent } from "components/AllPagesMoviesListItem.styled"
import { Link, useLocation } from "react-router-dom"

export const MoviesListByQueryItem = ({ movie }) => {
    const location = useLocation()
    return <div>
        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <div>
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://psculturalcenter.org/template_1/img/default-movie-portrait.jpg'} alt="" />
                <MoviesListItemTextContent>{movie.original_title ?? movie.original_name}</MoviesListItemTextContent>
                </div>
        </Link>
    </div>
}