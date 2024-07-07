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
import { selectUser } from "./redux/user/selector";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
        const userSnapshot = await getUser(user.uid);
        dispatch(setCurrentUser(userSnapshot.data()));
      }
    });

    return unsubscribe;
  }, [dispatch]);
  console.log(user)
  return (
    <div className="h-full bg-primary overflow-auto">
      <RouteProvider />
    </div>
  );
}

export default App;
