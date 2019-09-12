import React, { useState, useEffect } from 'react';
import { hasParent } from '../../../utils'
import './index.scss'

function SelectInput({ options, label }) {

    const [selected, selectOption] = useState({ keyMap: null, content: "Select" })
    const [isOpen, toggleSelect] = useState(false)

    const handleSelection = (option, key) => {
        selectOption({ keyMap: key, content: option.name })
        toggleSelect(false);
    }
    useEffect(
        () => {
            const selEl = document.querySelector('.select-input')
            const monitorClick = (e) => {
                console.log('click')
                var target = e.target;
                console.log(isOpen, target, selEl, hasParent(target, selEl));

                if (isOpen && target !== selEl && !hasParent(target, selEl)) {
                    toggleSelect(false)
                }
            }
            document.addEventListener('click', monitorClick);
            return () => {
                document.removeEventListener('click', monitorClick)
            };
        },
        [isOpen],
    );
    return (
        <div className="select-input">
            <label className="select-input__label">{label}:</label>
            <div className={`select-input__container ${isOpen ? 'active' : null}`}>
                <span className="select-input__container__placeholder" onClick={() => toggleSelect(true)}>{selected.content}</span>
                <div className="select-input__container__options">
                    <ul>
                        {options.map(
                            (option, key) => {
                                return (<li key={key} className={`${key === selected.keyMap ? 'selected' : null}`} onClick={() => handleSelection(option, key)}><span>{option.name}</span></li>)
                            }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SelectInput