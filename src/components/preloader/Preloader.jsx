import React from 'react';
import preloader from '../../images/preloader.gif';
import './Preloader.css';

const Preloader = (props) => {
    return (
        <div className='container'>
            <div className='preloader' >
                <img alt='preloader' src={preloader} />
            </div>
        </div>
    );
};

export default Preloader;