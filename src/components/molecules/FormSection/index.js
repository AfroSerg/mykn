import React from 'react';
import ChoosePlanFormPage from '../ChoosePlanFormPage'
import PersonalDetailsFormPage from '../PersonalDetailsFormPage'
import BeneficiariesFormPage from '../BeneficiariesFormPage'
import './index.scss'
function FormSection({ pages }) {
    return (
        <form className="form-section">
            {pages[0].pageActive && <ChoosePlanFormPage />}
            {pages[1].pageActive && <PersonalDetailsFormPage />}
            {pages[2].pageActive && <BeneficiariesFormPage />}
            <div className="form-section__button-group">
                <button>Previous</button>
                <button>Next</button>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default FormSection