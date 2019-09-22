import './index.scss'
import React from 'react';
import { Form, Input } from 'antd';

const { Item } = Form
const { TextArea } = Input;

function TextAreaInput(
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
            <TextArea autosize {...field} {...props} onChange={onChange} />
        </Item>
    )
}

export default TextAreaInput