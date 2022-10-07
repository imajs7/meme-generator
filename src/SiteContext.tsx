import { createContext } from "react";

const SiteContext = createContext( { 
    logo: '',
    siteTitle: '',
    siteTagline: '',
    tech: '',
    developer: '',
    version: '',
    firstRelease: '',
    lastUpdate: '',
    about: ''
 } );

export default SiteContext;