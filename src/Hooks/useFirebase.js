import { useEffect, useState } from "react";
import initializeAuthentication from "../component/Firebase/firebase.init";
import {
    getAuth,
    signOut,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    // google sign in function 
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // onstage change set user 
    useEffect(() => {
        setIsLoading(true);
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                setIsLoading(false)
            }
            else {
                setUser({})
                setIsLoading(false)
            }
        })
        return () => unSubscribe;
    }, []);


    // logout function
    const logOutUser = () => {
        signOut(auth).then(() => setUser({}))
    }

    // Create a new user  with email and password 
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // add user display name 
    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => { })
            .catch(err => setError(err.message));
    }

    // login with email and password 
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    return {
        user,
        error,
        setUser,
        setIsLoading,
        isLoading,
        setError,
        googleSignIn,
        logOutUser,
        createNewUser,
        updateUserName,
        loginWithEmail,
    };
}

export default useFirebase;