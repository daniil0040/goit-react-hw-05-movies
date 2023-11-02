import { MoviesListItem } from "../MoviesListItem/MoviesListItem"
import { MoviesGalleryList, MoviesGalleryListItem } from "../AllPagesMoviesList.styled"

export const MoviesList = ({movies}) => {
    return <div>
        <MoviesGalleryList>
                {movies.map((movie) => {
                    return (<MoviesGalleryListItem key={movie.id}>
                    <MoviesListItem movie={movie} />
                        </MoviesGalleryListItem>)
            })}
        </MoviesGalleryList>
    </div>
}