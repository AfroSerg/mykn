import React from 'react';
import "./index.scss"
import { Field } from 'formik';
import RadioInput from '../../atoms/RadioInput';
import FormButtonGroup from '../FormButtonGroup'
import { plans } from '../../../data'
import PolicyPlanInfoCard from '../PolicyPlanInfoCard';

function ChoosePlanFormPage({ prevPage, nextPage, page, chosenPlan }) {
    const planOpts = plans.map((plan) => plan.name)
    const plan = plans.find(plan => plan.name === chosenPlan)
    return (
        <div className="choose-plan-form-page">
            <h2>Choose Your Plan</h2>
            <div className="choose-plan-form-page__container">
                <div className="form-page-group">
                    <Field name="chosenPlan" options={planOpts} label="Select the plan which you wish to apply for" component={RadioInput} />
                </div>
                {plan && <PolicyPlanInfoCard plan={plan} />}
                <FormButtonGroup nextPage={nextPage} prevPage={prevPage} page={page} />
            </div>
        </div>
    )
}

export default ChoosePlanFormPage