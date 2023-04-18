import React , { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../Login/Firebase";

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    //creates User with input email and PW
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //used to sign out current user.
    const logoutUser = () => {
        return signOut(auth);
    };
    //sign in existing user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email,  password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={ {createUser, user, logoutUser, signInUser} }>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};
