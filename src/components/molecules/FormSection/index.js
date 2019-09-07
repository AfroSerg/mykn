import React from 'react';
import PersonalDetailsFormPage from '../PersonalDetailsFormPage'
import './index.scss'
function FormSection({ pages }) {
    return (
        <form className="form-section">
            {pages[1].pageActive && <PersonalDetailsFormPage />}
            <div className="form-section__button-group">
                <button>Previous</button>
                <button>Next</button>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default FormSection