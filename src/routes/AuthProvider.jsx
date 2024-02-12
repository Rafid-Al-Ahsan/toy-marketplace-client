import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }


    useEffect(()=> {
        const unsuscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
        });

        return () => {
            unsuscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        logout
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;