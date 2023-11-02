import './Button.css';
import {useState} from 'react';
function Button({textBtn}) {

    return (
        <button className='button accent'>{textBtn}</button>
    );
}

export default Button;