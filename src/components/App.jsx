import { Route, Routes } from "react-router-dom";
import { MovieCast } from "./MovieCast/MovieCast";
import { MovieReviews } from "./MovieReviews/MovieRevievs";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const SingleMovie = lazy(() => import('pages/SingleMovie'));
const ErrPage = lazy(() => import('pages/ErrPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<SingleMovie />} >
          <Route path="cast" element={<MovieCast/>} />
          <Route path="reviews" element={<MovieReviews/>} />
        </Route>
      </Route>
      <Route path="*" element={<ErrPage/>} />
      </Routes>
  );
};
