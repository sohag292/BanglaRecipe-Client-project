import React, { createContext, useEffect, useState } from 'react'
export const AuthContext =createContext(null)
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import app from '../../fireBase/firebase.config';

const auth = getAuth(app);
export default function AuthProvider({children}) {
   const [user,setUser] =  useState(null)

  
const createUser = (email, password) =>{
  return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) =>{
  return signInWithEmailAndPassword(auth, email, password);
}

const logOut =()=>{
  return signOut(auth);
}

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
    console.log("Logged in user inside auth statea observer", loggedUser)
    setUser(loggedUser)
    
  })
  return ()=>{
    unsubscribe();
  }
})


    const authInfo={
      user,
      createUser,
      signIn,
      logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
