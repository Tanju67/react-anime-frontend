import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useControlWatchlist(idAnime) {
  const [isWatchlist, setIsWatchlist] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userWatchlist = useSelector((state) => state.auth.userWatchlist);

  useEffect(() => {
    if (!isLoggedIn) return;
    setIsWatchlist(
      userWatchlist?.filter((item) => item.animeId === idAnime).length > 0
    );
  }, [userWatchlist, idAnime]);
  return [isWatchlist];
}
