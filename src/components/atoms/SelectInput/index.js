import React from 'react';
import './index.scss'

function SelectInput({ options }) {
    return (
        <select className="select-input">
            <option hidden>Label</option>
            {options.map(
                ({ name, value }) => {
                    return (<option key={value} value={value}>{name}</option>)
                }
            )}
        </select>
    )
}

export default SelectInput