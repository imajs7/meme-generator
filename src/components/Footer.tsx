import React, { useContext } from 'react';
import SiteContext from '../SiteContext';
const logo = require( "../img/logo.jpg" );

const Footer = () => {

    const { siteTitle, firstRelease, developer, about } = useContext( SiteContext );

    return (

        <>
            <div className='text-center w-1/2 max-w-2xl mx-auto'>
                <img src={logo} width='60' height='60' alt="" className='mx-auto mb-5' />
                <h2 className='text-2xl font-extrabold'>{siteTitle}</h2>
                <p className='my-5'>{about}</p>
                <hr />
                <h4 className='my-3'>Developed by: {developer}</h4>
                <h5 className='my-3'>&copy; {`${(new Date(firstRelease)).getFullYear()} ${siteTitle}`}</h5>
            </div>
        </>

    );

};

export default Footer;