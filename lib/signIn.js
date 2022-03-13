import { auth, googleAuthProvider } from "./firebase";
export const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
};

export const signInAnonymously = async () => await auth.signInAnonymously();

export const signOut = async () => await auth.signOut();
