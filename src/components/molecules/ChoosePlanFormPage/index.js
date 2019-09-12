import React from 'react';
import "./index.scss"
import { Field } from 'formik';
import SelectInput from '../../atoms/SelectInput';
import { plans } from '../../../data'

function ChoosePlanFormPage() {
    return (
        <div className="choose-plan-form-page">
            <h2>Choose Your Plan</h2>
            <div className="form-page-group">
                <Field name="chooseplan" options={plans} label="Select The plan which you wish to apply for" component={SelectInput} />
            </div>
        </div>

    )
}

export default ChoosePlanFormPage