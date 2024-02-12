// import React, { useState } from 'react';
// import { getAuth } from "firebase/auth";
// import app from './../firebase/firebase.config';
// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// import { getAuth } from "firebase/auth";
// import app from './../firebase/firebase.config';
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const Login = () => {

    // const auth = getAuth(app);
    // const provider = new GoogleAuthProvider();
    // const [user, setUser] = useState(null);

    // const handleGoogleSignIn = () => {
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             const loggedInUser = result.user;
    //             console.log(user);
    //             setUser(loggedInUser);
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         })
    // }

    // const handleSignOut = () => {
    //     signOut(auth)
    //     .then(result => {
    //         setUser(null);
    //     })
    //     .catch((error) => {
    //         console.log(error.message);
    //     })
    // }

    // const auth = getAuth(app);
    // const provider = new GoogleAuthProvider();
    // const [user, setUser] = useState(null);

    // const googleSignIn = () => {
    //     signInWithPopup(auth, provider)
    //     .then((result) => {
    //         const loggedInUser = result.user;
    //         console.log(loggedInUser);
    //         setUser(loggedInUser);
    //     })
    //     .catch((error) => {
    //         console.log(error.message);
    //     })
    // }

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label my-0">
                                <p>Don't have an account? <Link to="/registration" className="text-[#1d28ba]">Register</Link><br /></p>
                            </label>
                            <button className='btn bg-white  my-2 text-black'><Icon icon="mdi:github" color="black" width="37" height="37" />  Login using Github</button>
                            <button className='btn bg-white my-2 text-black'><Icon icon="flat-color-icons:google" color="white" width="34" height="34" />  Login using Google</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>

    );
};

export default Login;