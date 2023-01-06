import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) => {
    setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const login = (email, password) => {
    setLoading(false)
    return signInWithEmailAndPassword(auth, email, password)

  }

  //google sign in 
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  };

  //logOut
  const logOut = () => {
    //remove token when user log out
    localStorage.removeItem('geniusToken')
    return signOut(auth)
  }

  // current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  //send data
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    googleSignIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
