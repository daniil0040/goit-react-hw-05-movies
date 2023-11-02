import { MoviesGalleryList, MoviesGalleryListItem } from "components/AllPagesMoviesList.styled"
import { MoviesListByQueryItem } from "components/MoviesListByQueryItem/MoviesListByQueryItem"



export const MoviesListByQuery = ({ movies }) => {
    return (
        <MoviesGalleryList>
            {movies.results.map(movie => {
                return <MoviesGalleryListItem key={movie.id}>
                        <MoviesListByQueryItem movie={movie} />
                </MoviesGalleryListItem>
            })}
        </MoviesGalleryList>
    )
}