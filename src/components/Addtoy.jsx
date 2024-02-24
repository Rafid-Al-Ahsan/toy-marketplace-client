import React from 'react';
import { Link } from 'react-router-dom';

const Addtoy = () => {

    const handleAddToy = () => {

    }

    return (
        <div>
            <h4>Please add a toy</h4>
            <form onSubmit={handleAddToy} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
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

                </div>

            </form>
        </div>
    );
};

export default Addtoy;