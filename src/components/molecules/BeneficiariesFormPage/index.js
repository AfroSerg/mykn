import React from 'react';
import "./index.scss"
import FormButtonGroup from '../FormButtonGroup';
import BeneficiaryCard from '../BeneficiaryCard';
import { Field } from 'formik'

const initialBeneficiaryState = {
    firstName: "",
    lastName: "",
    identityNumber: "",
    relationship: ""
}
const beneficiariesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BENEFICIARY':
            return [...state, initialBeneficiaryState]
        case 'REMOVE_BENEFICIARY':
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
        default:
            return state;
    }
}

function BeneficiariesList(
    {
        field: { onChange, value, ...field },
        form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        ...props
    }
) {

    const addBeneficiary = () => {

        setFieldValue('beneficiaries', beneficiariesReducer(value, { type: 'ADD_BENEFICIARY' }))
    }

    return (
        <>
            {value.map((beneficiary, key) => <BeneficiaryCard key={key} beneficiary={beneficiary} />)}
            {/* have we not yet reached max beneficiaries for chosenPlan? */}
            {true && <p onClick={addBeneficiary} ><i className="fa fa-plus" /> Add Another Beneficiary</p>}
        </>
    )

}

function BeneficiariesFormPage({ prevPage, nextPage, page }) {

    return (
        <div className="beneficiaries-form-page">
            <h2>Beneficiaries</h2>
            <div className="beneficiaries-form-page__container">
                <Field name="beneficiaries" component={BeneficiariesList} />
                <FormButtonGroup nextPage={nextPage} prevPage={prevPage} page={page} />
            </div>
        </div>
    )
}

export default BeneficiariesFormPage