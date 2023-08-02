import React, { createContext, useContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';
import { toastErrorNotify, toastSuccessNotify } from '../helpers/ToastNotify';

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {


    const [currentUser, setCurrentUser] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        userObserver()

    }, [])



    const createUser = async (email, password, displayName) => {
        try {
            let userCredential = await createUserWithEmailAndPassword(auth, email, password)

            await updateProfile(auth.currentUser, {
                displayName: displayName
            });

            console.log(userCredential);
            navigate("/");
            toastSuccessNotify("Registered successfuly !")
        } catch (error) {
            toastErrorNotify(`Opps.. ${error.message} `)
        }

    }

    const signIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toastSuccessNotify("Hey Mr. Man You Are Logged In !")

        } catch (error) {
            toastErrorNotify(`Opps.. ${error.message} `)
        }
    }


    const logOut = () => {
        signOut(auth)
        toastSuccessNotify("Come Back Soon Mr Man !")
    }

    const userObserver = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, displayName, photoURL } = user
                setCurrentUser({ email, displayName, photoURL })
            } else {
                setCurrentUser(false)
            }
        });
    }

    const signUpProvider = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                toastSuccessNotify("Hey Mr. Man You Are Logged In !")
                navigate("/")
            }).catch((error) => {
            toastErrorNotify(`Opps.. ${error.message} `)
              
            });
    }




    const values = {
        createUser,
        signIn,
        logOut,
        userObserver, currentUser, signUpProvider
    }

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuthContext = () => {
    return useContext(AuthContext)
}