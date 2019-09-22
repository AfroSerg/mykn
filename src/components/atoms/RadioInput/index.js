import "./index.scss"
import React from 'react';
import { Form, Radio } from 'antd';

const { Item } = Form;

function RadioInput(
    {
        field: { onChange, ...field },
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        label,
        ...props
    }
) {
    const errorMsg = touched[field.name] && errors[field.name];
    return (
        <Item label={label} help={errorMsg} validateStatus={errorMsg ? "error" : undefined}>
            <div className="radio-input">
                <Radio.Group {...field} {...props} onChange={onChange} />
            </div>
        </Item>
    )
}

export default RadioInput