import { UserContext } from "../lib/context";
import "../styles/globals.css";
import { firebaseApp } from "../lib/firebase";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged(setUser);
    console.log(user);
    return unsubscribe;
  }, [user]);

  return (
    <UserContext.Provider value={{ user: user, username: null }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
