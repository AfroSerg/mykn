import './index.scss'
import React from 'react';
import { Form, Select } from 'antd';

const { Item } = Form
const { Option } = Select;

function SelectInput({
    field: { onChange, ...field },
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    label,
    options,
    ...props
}) {
    const errorMsg = touched[field.name] && errors[field.name];
    return (
        <Item label={label} help={errorMsg} validateStatus={errorMsg ? "error" : undefined}>
            <Select style={{ width: 350 }} {...field} {...props} onChange={onChange}>
                {options.map(
                    (opt, key) => (
                        <Option key={key} value={opt.name}>{opt.name}</Option>
                    )
                )}
            </Select>
        </Item >

    )
}

export default SelectInput
