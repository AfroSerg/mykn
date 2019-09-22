import './index.scss'
import React from 'react';
import { Switch } from 'antd';

function SwitchInput({ name, value, onChange, label }) {
    return (
        <div className="switch-input">
            <label className="switch-input__label">{label}</label>
            <Switch checked={value} onChange={() => onChange(prevValue => !prevValue)} />
        </div>
    )
}
export default SwitchInput