import React, { useState, useRef } from 'react';
import './index.scss'

function TextInput(
    {
        field: { name, value, onChange, onBlur },
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        label,
        ...props
    }) {
    const [isFilled, toggleIsFilled] = useState(false)

    const onInputFocus = (e) => {
        e.preventDefault()
        toggleIsFilled(true);
    }
    const onInputBlur = (e) => {
        e.preventDefault()
        if (e.target.value === '') {
            toggleIsFilled(false);
        }
        onBlur()
    }

    const inputEl = useRef(null)
    const focusInput = (e) => {
        inputEl.current.focus()
    }
    return (
        <div className={`text-input ${isFilled ? 'text-input--filled' : null}`}>
            <input ref={inputEl} className="text-input__field" type="text" name={name} value={value} onFocus={onInputFocus} onBlur={onInputBlur} onChange={onChange} />
            <label className="text-input__label" onClick={focusInput}>
                <span className="text-input__label__content">{label}</span>
            </label>
        </div>
    )
}

export default TextInput