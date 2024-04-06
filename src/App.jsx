import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage, { loader as homePageLoader } from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import WatchTrailerPage, {
  loader as trailerLoader,
} from "./pages/WatchTrailerPage";
import AnimeDetailPage, {
  loader as detailLoader,
} from "./pages/AnimeDetailPage";
import ReviewsPage, { loader as reviewsLoader } from "./pages/ReviewsPage";
import AllEpisodesPage, {
  loader as episodesLoader,
} from "./pages/AllEpisodesPage";
import AllCharactersPage, {
  loader as charactersLoader,
} from "./pages/AllCharactersPage";
import AllActorsPage, { loader as actorsLoader } from "./pages/AllActorsPage";
import CharacterPage, { loader as charLoader } from "./pages/CharacterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: homePageLoader },
      {
        path: "trailer/:id",
        element: <WatchTrailerPage />,
        loader: trailerLoader,
      },
      {
        path: "anime/:id",
        element: <AnimeDetailPage />,
        loader: detailLoader,
      },
      {
        path: "reviews/:id",
        element: <ReviewsPage />,
        loader: reviewsLoader,
      },
      {
        path: "episodes/:id",
        element: <AllEpisodesPage />,
        loader: episodesLoader,
      },
      {
        path: "characters/:id",
        element: <AllCharactersPage />,
        loader: charactersLoader,
      },
      {
        path: ":id/character/:charId",
        element: <CharacterPage />,
        loader: charLoader,
      },
      {
        path: "actors/:id",
        element: <AllActorsPage />,
        loader: actorsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
