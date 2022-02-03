import React from 'react';
import './Select.css';

const Select = ({ value, onChange, cases }) => {

    return (
        <div className='select'>
            <label className='select__label' htmlFor="casetype">Выберите падеж:</label>
            <select className='select__option' id="casetype" name="casetype" value={value} onChange={onChange}>
                {cases.map((casetype, index) => {
                    return (
                        <option  key={casetype} value={index}>{casetype}</option>
                    )
                })}
            </select>
        </div >
    )
}

export default Select;