import { NavLink, Outlet} from "react-router-dom"
import { BtnList, MainInfoWrapper, Name, Text, Wrapper } from "./SingleMovieInfo.styled"

export const SingleMovieInfo = ({movie}) => {

    return (<Wrapper>
        <MainInfoWrapper>
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        </div>
        <div>
                <Name>{movie.original_title ?? movie.original_name}</Name>
                <Text>{`User rating: ${movie.vote_average}`}</Text>
                <h3>Overview</h3>
                <Text>{movie.overview}</Text>
                <h3>Genres</h3>
                <Text>{movie.genres.map(({name}) => {
                    return name
                }).join(",")}</Text>
        </div>
        </MainInfoWrapper>
                <BtnList>
            <li>
                <button>
                    <NavLink to='cast'>Cast</NavLink>
                    </button>
                    </li>
            <li>
                <button>
                    <NavLink to='reviews'>Reviews</NavLink>
                    </button>
                    </li>
                </BtnList>
                <Outlet/>
    </Wrapper>)
}