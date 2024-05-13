import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/FireBase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Observer
  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      // console.log("auth state changed user", currentUser);
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("response", res.data);
          });
      } else {
        axios
          .post("http://localhost:5000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      unsubsCribe();
    };
  }, []);

  // signIn user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut
  const logOut = () => {
    setLoading(true);
    setUser(null);
    signOut(auth);
  };

  // GoogleLogin
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Github Login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  const userInfo = {
    createUser,
    signIn,
    googleLogin,
    githubLogin,
    logOut,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
