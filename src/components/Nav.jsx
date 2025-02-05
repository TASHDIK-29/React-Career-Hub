import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-200 w-[1000px] mx-auto p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="font-bold"><a>Statistics</a></li>
                        <li className="font-bold"> <NavLink to={"/applied"} className="btn">Applied Jobs</NavLink></li>
                        <li className="font-bold"><a>Blog</a></li>
                    </ul>
                </div>
                <NavLink to={"/"} className="btn btn-ghost text-3xl font-bold">CareerHub</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="font-bold"><a>Statistics</a></li>
                    <li className="font-bold"><NavLink to={"/applied"}>Applied Jobs</NavLink></li>
                    <li className="font-bold"><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn font-bold">Apply</a>
            </div>
        </div>
    );
};

export default Nav;