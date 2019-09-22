import React from 'react';
import "./index.scss"
import { Field } from 'formik';
import SelectInput from '../../atoms/SelectInput';
import { plans } from '../../../data'

function ChoosePlanFormPage() {
    return (
        <div className="choose-plan-form-page">
            <h2>Choose Your Plan</h2>
            <div className="choose-plan-form-page__container">
                <div className="form-page-group">
                    <Field name="choosePlan" defaultValue="Select a Plan." options={plans} label="Select the plan which you wish to apply for" component={SelectInput} />
                </div>
            </div>
        </div>
    )
}

export default ChoosePlanFormPage