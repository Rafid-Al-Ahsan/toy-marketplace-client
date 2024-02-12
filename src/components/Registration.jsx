import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../routes/AuthProvider';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const Registration = () => {

    //For giving succes or error msg after clicking registration btn
    const [error , setError] = useState('');
    const [success , setSuccess] = useState('');

    const { createUser } = useContext(AuthContext);
    console.log(createUser);

    const handleRegister = (event) => {
        setSuccess("");
        setError("");
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        createUser(email, password)
            .then((result) => {
                const createUser = result.user;
                console.log(createUser);
                event.target.reset();
                setSuccess("User created successfully")
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            })

    }
    return (
        <div>

            
            {/* <form  onSubmit={handleRegister} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="photo" className="block mb-1">Photo URL</label>
                    <input type="text" name="photo" placeholder="Photo URL" className="w-full border border-gray-300 rounded-md py-2 px-3" />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <input type="text" name="name" placeholder="Your Name" className="w-full border border-gray-300 rounded-md py-2 px-3" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="block mb-1">Email address</label>
                    <input type="email" name="email" placeholder="Enter email" className="w-full border border-gray-300 rounded-md py-2 px-3" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="block mb-1">Password</label>
                    <input type="password" name="password" placeholder="Password" className="w-full border border-gray-300 rounded-md py-2 px-3" required />
                </div>
                <div className="mb-3">
                    <input
                        type="checkbox"
                        name="accept"
                        id="accept"
                        className="mr-2"
                    />
                    <label htmlFor="accept" className="text-sm">
                        Accept <a href="/terms" className="text-blue-500">Terms and Conditions</a>
                    </label>
                </div>
                <button
                    className={`bg-blue-500 text-white py-2 px-4 rounded`}
                    type="submit"
                   
                >
                    Register
                </button>
            </form> */}

            <div className="hero min-h-screen bg-base-200">   
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h3 className="text-3xl font-semibold text-center mt-5 ">Please Register</h3>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="email" name="photo" placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <label className="label my-0">
                                <p>Already have an account? <Link to="/login" className="text-[#1d28ba]">Login</Link><br /></p>
                            </label>

                            <label className="label my-0">
                                <p className='text-[#30bb45]'>{success}</p>
                            </label>
                            <label className="label my-0">
                                <p className='text-[#bb3030]'>{error}</p>
                            </label>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Registration;