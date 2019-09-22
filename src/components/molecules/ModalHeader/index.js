import React from 'react';
import './index.scss'

function ModalHeader({ pages, currentPageIdx, toggleModal }) {
    return (
        <div className="modal-header">
            <ul className="modal-header__tab-bar">
                {pages.map((page, key) => (
                    <li key={key} className={`modal-header__tab-bar__tab-item ${currentPageIdx === key ? "-active" : null}`}><span>{`${key + 1}.`}</span></li>
                ))}
            </ul>
            <i className="fa fa-times" onClick={() => toggleModal(false)} />
        </div>

    )
}
export default ModalHeader