import * as React from "react";
import RouteProvider from "./router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  getUser,
  onAuthStateChangedListener,
} from "./utils/firebase/auth";
import { setCurrentUser } from "./redux/user/reducer";
import { selectUser, selectisAuthenticated } from "./redux/user/selector";
import { useGetUserDataQuery } from "./redux/query/apiSlice";

function App() {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  const { data: user, error, isLoading } = useGetUserDataQuery();

  useEffect(() => {
    if (user) {
      dispatch(
        setCurrentUser({
          user,
          isAuthenticated: true,
        })
      );
    }
  }, [user, dispatch]);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener(async (user) => {
  //     if (user) {
  //       await createUserDocumentFromAuth(user);
  //       const userSnapshot = await getUser(user.uid);
  //       dispatch(
  //         setCurrentUser({
  //           user: userSnapshot.data(),
  //           isAuthenticated: true,
  //         })
  //       );
  //     }
  //   });

  //   return unsubscribe;
  // }, [dispatch]);
  return (
    <div className="h-full bg-primary overflow-auto">
      <RouteProvider />
    </div>
  );
}

export default App;
