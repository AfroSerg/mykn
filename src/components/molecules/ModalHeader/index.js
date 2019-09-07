import React from 'react';
import './index.scss'

function ModalHeader({ pages }) {
    return (
        <ul className="modal-header">
            {pages.map(({ pageNum, pageTitle, pageActive }) => (
                <li key={pageNum} className={`modal-header__tab-item ${pageActive ? "-active" : null}`}><span>{`${pageNum}.  ${pageTitle}`}</span></li>
            ))}
        </ul>
    )
}
export default ModalHeader