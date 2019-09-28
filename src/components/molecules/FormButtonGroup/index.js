import './index.scss'
import React from 'react';

function FormButtonGroup({ page, nextPage, prevPage }) {
    return (
        <div className="form-section__button-group">
            {page === 2 && <button type="submit">Submit</button>}
            {page >= 0 && page !== 2 && <button type="button" onClick={nextPage}>Next</button>}
            {page !== 0 && <button type="button" onClick={prevPage}>Previous</button>}
        </div>
    )
}

export default FormButtonGroup