import { authActions } from "./auth-slice";

export const fetchCurrentUser = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/v1/auth/currentUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Could not fetch user data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const userData = await fetchData();
      dispatch(
        authActions.setUser({
          user: userData || {},
        })
      );
      dispatch(authActions.onLogin());
    } catch (error) {
      throw new Error("Could not fetch user data!");
    }
  };
};

export const fetchUserAllWatchlist = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/v1/anime?page=1&limit=all",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg);
      }

      return data;
    };

    try {
      const userData = await fetchData();

      dispatch(
        authActions.setUserWatchlist({
          user: userData,
        })
      );
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
