import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import MoviesByCategory from "./pages/MoviesByCategory";
import ShowsByCategory from "./pages/ShowsByCategory";
import MovieDetails from "./ui/MovieDetails";
import ShowDetails from "./ui/ShowDetails";
import { lazy } from "react";
import ScrollToTop from "./components/ScrollToTop";
const Movies = lazy(() => import("./pages/Movies"));
const Shows = lazy(() => import("./pages/Shows"));
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:categoryName" element={<MoviesByCategory />} />
          <Route
            path="/movies/:movieTitle/:movieId"
            element={<MovieDetails />}
          />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows/:categoryName" element={<ShowsByCategory />} />
          <Route path="/shows/:showTitle/:showId" element={<ShowDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
