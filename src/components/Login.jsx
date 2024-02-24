import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './../firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { GithubAuthProvider } from "firebase/auth";


const Login = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const gitprovider = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    
    
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})

    
        })
        .catch(error => {
            // setError(error.message);
            console.log(error.message);
       })
     
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, {replace: true})
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const githubLogin = () => {
        signInWithPopup(auth, gitprovider)
        .then(result => { 
            const credential = result.user;
            console.log(credential);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label my-0">
                                <p>Don't have an account? <Link to="/registration" className="text-[#1d28ba]">Register</Link><br /></p>
                                <br></br>
                            </label>
                            <label className="label my-0">
                                <p className='text-center'>OR</p>
                            </label>

                        </div>

                    </form>
                    
                    {/* <button onClick={githubLogin} className='btn bg-white  my-2 text-black w-[80%] m-auto'><Icon icon="mdi:github" color="black" width="37" height="37" />  Login using Github</button> */}
                    <button onClick={handleGoogleSignIn} className='btn bg-white my-2 text-black m-auto w-[80%]'><Icon icon="flat-color-icons:google" color="white" width="34" height="34" />  Login using Google</button>
                </div>

            </div>
        </div>

    );
};

export default Login;