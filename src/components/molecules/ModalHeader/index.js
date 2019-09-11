import React from 'react';
import './index.scss'

function ModalHeader({ pages, toggleModal }) {
    return (
        <div className="modal-header">
            <ul className="modal-header__tab-bar">
                {pages.map(({ pageNum, pageTitle, pageActive }) => (
                    <li key={pageNum} className={`modal-header__tab-bar__tab-item ${pageActive ? "-active" : null}`}><span>{`${pageNum}`}</span></li>
                ))}
            </ul>
            <i className="fa fa-times" onClick={() => toggleModal(false)} />
        </div>

    )
}
export default ModalHeader