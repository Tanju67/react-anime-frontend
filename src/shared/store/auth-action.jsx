import { authActions } from "./auth-slice";

export const fetchCurrentUser = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:5000/api/v1/auth/currentUser",
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

// export const postLogin = (body) => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       try {
//         dispatch(authActions.setIsLoading(true));
//         const response = await fetch(
//           "http://localhost:5000/api/v1/auth/login",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(body),
//           }
//         );

//         const data = await response.json();
//         if (!response.ok) {
//           throw new Error(data.msg);
//         }
//         localStorage.setItem("token", data.user.token);
//         dispatch(
//           authActions.setUser({
//             user: data || {},
//           })
//         );
//         dispatch(authActions.onLogin());
//         dispatch(authActions.setIsLoading(false));
//         return data;
//       } catch (error) {
//         dispatch(authActions.setError(error.message));
//         dispatch(authActions.setIsLoading(false));
//       }
//     };
//     fetchData();

//     // try {
//     //   const userData = await fetchData();
//     //   localStorage.setItem("token", userData.user.token);
//     //   dispatch(
//     //     authActions.setUser({
//     //       user: userData || {},
//     //     })
//     //   );
//     //   dispatch(authActions.onLogin());
//     // } catch (error) {
//     //   throw new Error(error.message);
//     // }
//   };
// };

export const fetchUserAllWatchlist = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/v1/anime?page=1&limit=all",
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
