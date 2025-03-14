import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth,
    GoogleAuthProvider, onAuthStateChanged
} from "firebase/auth";
import { app } from '../firebase.config'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ip, setIp] = useState("");

    useEffect(() => {
        fetch("https://api64.ipify.org?format=json")
            .then(response => response.json())
            .then(res => setIp(res.ip))
            .catch(err => {
                console.log(err.code);
            });
    }, []);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log(user);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user, setUser, setLoading, loading, auth, provider,ip
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;