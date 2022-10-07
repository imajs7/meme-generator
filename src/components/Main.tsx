import React, { useState } from 'react';

const Main = () => {

    const [ headerInput, setHeaderInput ] = useState('Enter some text');
    const [ footerInput, setFooterInput ] = useState('Enter some more text');
    const [ imageInput, setImageInput ] = useState('//unsplash.it/500/500');

    return (

        <div 
            className='max-w-sm rounded overflow-hidden shadow-lg mx-auto 
                        my-3 p-4 border-solid border-2 border-blue-500 '>
                <form action="">
                    <div>
                        <div>
                            <input 
                                type="text" 
                                name="headerInput" 
                                id="headerInput" 
                                value={headerInput}
                                onChange={ event => {
                                    setHeaderInput(event.target.value)
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                name="footerInput" 
                                id="footerInput" 
                                value={footerInput}
                                onChange={ event => {
                                    setFooterInput(event.target.value)
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"
                            />
                        </div>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="imageInput" 
                            id="imageInput" 
                            value={imageInput}
                            onChange={ event => {
                                setImageInput(event.target.value)
                            }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"
                        />
                    </div>
                    <div id="meme-text" style={ {position: 'relative'} }>
                        <img src={imageInput} alt="" />
                        <h2 style={ {top: '50px'} }>{headerInput}</h2>
                        <h2 style={ {bottom: '50px'} }>{footerInput}</h2>
                    </div>
                    <div>
                        <button 
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3' type="submit"
                            onClick={ event => {
                                event.preventDefault();
                            }}
                        >Generate</button>
                    </div>
                </form>
            </div>

    );

};

export default Main;