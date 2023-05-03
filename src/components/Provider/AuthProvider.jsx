import React, { createContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../fireBase/firebase.config';

export const AuthContext = createContext(null)
export const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const GoogleProvider = new GoogleAuthProvider()
  const GithubProvider = new GithubAuthProvider()

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      console.log("Logged in user inside auth statea observer", loggedUser)
      setUser(loggedUser)
    })
    return () => {
      unsubscribe();
    }
  }, [])

  const signInWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider)
  };

  const signInWithGithub= () =>{
    return signInWithPopup(auth,GithubProvider )
  }

  const updateUserData = (user, name, photoURL)=>{
    updateProfile(user,{
      displayName:name, photoURL: photoURL
    })
    .then(()=>{
      console.log('user name and photo URL updated');
    })
    .catch(error =>{
      console.log(error)
    })
  }

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    signInWithGoogle,
    signInWithGithub,
    updateUserData
  }
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
