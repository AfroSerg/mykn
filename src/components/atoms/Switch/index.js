import React from 'react';
import './index.scss'
function Switch({ checked, toggleOnClicked }) {
    return (
        <label className="switch" >
            <input type="checkbox" checked onChange={() => toggleOnClicked(!checked)} />
            <span className="switch__slider"></span>
        </label>
    )
}


export default Switch