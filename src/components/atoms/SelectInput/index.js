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
    console.log(field, props);

    const errorMsg = touched[field.name] && errors[field.name];
    return (
        <Item label={label} help={errorMsg} validateStatus={errorMsg ? "error" : undefined}>
            <Select {...field} {...props} onChange={(e) => { console.log('change', e); onChange(e) }}>
                {options.map(
                    (opt, key) => (
                        <Option key={key} value={opt.plan_id}>{opt.name}</Option>
                    )
                )}
            </Select>
        </Item >

    )
}

export default SelectInput
