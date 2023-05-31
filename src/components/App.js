import {  Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";
// import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import MovieDetails from "./pages/MovieDetails";
// import {Cast} from "./Cast";
import Reviews from "./Reviews/Reviews";



const HomePage = lazy(() => import('./pages/HomePage').then(mod => {
  
  return mod;
}))
const MoviePage = lazy(() => import('./pages/MoviePage'))
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'))
const Cast = lazy(() => import('./Cast/Cast').then(module => {
 
  return {
    ...module,
  default:module.Cast
  };
}))

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

      </Routes>


    </div>
  );
};

export default App;