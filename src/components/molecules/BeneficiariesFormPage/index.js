import React, { useState } from 'react';
import "./index.scss"
import FormButtonGroup from '../FormButtonGroup';
import BeneficiaryCard from '../BeneficiaryCard';

function BeneficiariesFormPage({ prevPage, nextPage, page }) {

    const [canAddMoreBeneficiaries] = useState(true)
    return (
        <div className="beneficiaries-form-page">
            <h2>Beneficiaries</h2>
            <div className="beneficiaries-form-page__container">
                <BeneficiaryCard />
                {canAddMoreBeneficiaries && <button >Add another beneficiary</button>}
                <FormButtonGroup nextPage={nextPage} prevPage={prevPage} page={page} />
            </div>
        </div>
    )
}

export default BeneficiariesFormPage