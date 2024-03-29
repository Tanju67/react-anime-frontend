import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// function App() {
//   const [query, setQuery] = useState("");
//   const getAnime = async (endPoint) => {
//     try {
//       //search -anime
//       const res1 = await fetch(`https://api.jikan.moe/v4/anime?q=${endPoint}`);
//       //getAnimeFullById
//       const res2 = await fetch(`https://api.jikan.moe/v4/anime/${21}/full`);
//       //getAnimeCharacters
//       const res3 = await fetch(
//         `https://api.jikan.moe/v4/anime/${21}/characters`
//       );
//       //getAnimeEpisode
//       const res4 = await fetch(`https://api.jikan.moe/v4/anime/${21}/episodes`);
//       //getAnimeEpisodeById
//       const res = await fetch(`https://api.jikan.moe/v4/anime/${21}/pictures`);
//       const data = await res.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     getAnime(query);
//   };

//   return (
//     <>
//       <img
//         src="https://static.crunchyroll.com/fms/landscape_large/1920x1080/94/png/282e7f28-1692-4e56-8c36-4e51a3b9e979.webp"
//         alt=""
//       />
//       <iframe width="420" height="315" src=""></iframe>
//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button type="submit">send</button>
//       </form>
//     </>
//   );
// }
