import React from "react";
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = ( ) => {

    return (

        <header className="flex justify-between items-center h-24 text-white bg-purple-700 p-4">
            <Logo />
            <div className="mainmenu">
                <Link className="mr-4" to="/">Home</Link>
                <Link className="mr-4" to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>

    );

};

export default Header;