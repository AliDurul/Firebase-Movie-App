import React, { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate()

    const createUser = async (email, password) => {
        try {
            let userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredential);
            navigate("/");
        } catch (error) {
            console.log(error);
        }

    }

    const signIn = async (email, password) => {
        try {
            let userCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log(userCredential);
        } catch (error) {
            console.log(error.message);
        }
    }


    const values = {
        createUser,
        signIn
    }

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuthContext = () => {
    return useContext(AuthContext)
}