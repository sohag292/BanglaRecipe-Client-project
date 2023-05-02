import React, { createContext } from 'react'
export const AuthContext =createContext(null)
import {  createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

import app from '../../fireBase/firebase.config';

const auth = getAuth(app);
export default function AuthProvider({children}) {
   const user = (null)

const createUser = (email, password) =>{
  return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) =>{
  return signInWithEmailAndPassword(auth, email, password);
}



    const authInfo={
      user,
      createUser,
      signIn,
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
