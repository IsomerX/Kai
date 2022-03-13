import { auth, firestore } from "../lib/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = firestore.collection("users").doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setLoggedIn(doc.data()?.loggedIn);
      });
    } else {
      setLoggedIn(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, loggedIn };
}
