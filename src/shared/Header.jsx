import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../routes/AuthProvider';

const Header = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
        logout()
            .then()
            .catch((error) => console.error(error.message))
    }

    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/alltoy">All Toys</Link></li>
                            {user && <li><Link to="/mytoy">My Toys</Link></li>}
                            {user && <li><Link to="/addtoy">Add A Toy</Link></li>}
                            <li><Link to="">Blog</Link></li>
                        </ul>
                    </div>
                    <h1 className="text-3xl font-bold p-2 ml-10 text-[#fff] bg-[#cb191f]">S-VALLEY</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold text-lg'><Link to="/" className="my-link">Home</Link></li>
                        <li className='font-bold text-lg'><Link to="/alltoy">All Toys</Link></li>
                        {user && <li className='font-bold text-lg'><Link to="/mytoy">My Toys</Link></li>}
                        {user && <li className='font-bold text-lg'><Link to="/addtoy">Add A Toy</Link></li>}
                        <li className='font-bold text-lg'><Link to="">Blog</Link></li>
                    </ul>
                </div>

            
              
                <div className="navbar-end">
                {user &&
                        <img
                            src={user?.photoURL}
                            alt="Profile Photo"
                            className='mx-5 rounded-full'
                            style={{ width: "3rem", height: "3rem" }}
                            title={user?.displayName}
                        />}
                    {user ? <button onClick={handleLogOut} className="btn btn-active bg-[#a3174f] px-8 rounded-full font-bold text-lg mr-10">Logout</button> : <Link to='login' className="btn bg-[#a3174f] px-8 rounded-full font-bold text-lg mr-10">Login</Link>}
                </div>
                
            </div>
            
        </div>
    );
};

export default Header;