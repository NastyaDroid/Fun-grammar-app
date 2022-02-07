import React from 'react';
import './Input.css';

const Input = ({ word, onChange }) => {
    return (
        <div className='input'>
            <label className='input__label' htmlFor="word">Введите существительное в единственном числе</label>
            <input 
            className='input__area'
            type="text" 
            id="word" 
            name="word"
            value={word}
            onChange={onChange}/>
        </div>
    )
}

export default Input;