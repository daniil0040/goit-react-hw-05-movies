export const MovieCastList = ({ casts }) => {
    return <ul>
        {casts.map((cast) => {
            return <li key={cast.id}>
                {cast.profile_path && <img src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} alt="" />}
                <h3>{cast.name}</h3>
        </li>
        })}
    </ul>
}