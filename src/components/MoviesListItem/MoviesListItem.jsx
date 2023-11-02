import { Link } from "react-router-dom"
import { MoviesListItemTextContent } from "../AllPagesMoviesListItem.styled";

export const MoviesListItem = ({ movie }) => {
console.log(movie);
    return <div>
        <Link to={`/movies/${movie.id}`}>
            <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                <MoviesListItemTextContent>{movie.original_title ?? movie.original_name}</MoviesListItemTextContent>
                </div>
        </Link>
    </div>
}