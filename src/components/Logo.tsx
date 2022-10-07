import React, { useContext } from 'react';
import SiteContext from '../SiteContext';
const logo = require( "../img/logo.jpg" );

const Logo = () => {

    const { siteTitle, siteTagline } = useContext( SiteContext );

    return (

        <div className="logo flex gap-3 items-center">
            <div className="logo-img">
                <img src={logo} width='60' height='60' alt="" />
            </div>
            <div className="logo-txt">
                <h1 className="font-bold text-xl mr-4">{siteTitle}</h1>
                <h4>{siteTagline}</h4>
            </div>
        </div>

    );

};

export default Logo;