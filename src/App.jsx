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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
        const userSnapshot = await getUser(user.uid);
        dispatch(
          setCurrentUser({
            user: userSnapshot.data(),
            isAuthenticated: true,
          })
        );
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="h-full bg-primary overflow-auto">
      <RouteProvider />
    </div>
  );
}

export default App;
