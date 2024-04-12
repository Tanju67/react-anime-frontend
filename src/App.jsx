import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
import ActorDetailPage, { loader as actLoader } from "./pages/ActorDetailPage";
import AllNewsPage, { loader as newsLoader } from "./pages/AllNewsPage";
import NewsDetailPage, {
  loader as singleNewsLoader,
} from "./pages/NewsDetailPage";
import SearchResultsPage, {
  loader as resultsLoader,
} from "./pages/SearchResultsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage, { action as registerAction } from "./pages/RegisterPage";
import WatchlistPage, {
  loader as watchlistLoader,
} from "./pages/WatchlistPage";
import {
  fetchCurrentUser,
  fetchUserAllWatchlist,
} from "./shared/store/auth-action";

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
      {
        path: ":id/actor/:charId",
        element: <ActorDetailPage />,
        loader: actLoader,
      },
      {
        path: "news/:id",
        element: <AllNewsPage />,
        loader: newsLoader,
      },
      {
        path: ":id/newsDetail/:newsId",
        element: <NewsDetailPage />,
        loader: singleNewsLoader,
      },
      {
        path: "search-result",
        element: <SearchResultsPage />,
        loader: resultsLoader,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
        action: registerAction,
      },
      {
        path: "watchlist",
        element: <WatchlistPage />,
        loader: watchlistLoader,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(fetchUserAllWatchlist());
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
