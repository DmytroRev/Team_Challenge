import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/search">Search</NavLink>
                <NavLink to="/categories">Categories</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/about-us">About us</NavLink>
                <NavLink to="/donations">Help/Donations</NavLink>
                <NavLink to="/sign-in">Sign In</NavLink>
                <NavLink to="/registration">Create account</NavLink>
            </nav>
        </>
    );
}

export default Navigation;
