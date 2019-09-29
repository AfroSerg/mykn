import './index.scss'
import React from 'react';
import { Formik, Form } from 'formik'
import ChoosePlanFormPage from '../ChoosePlanFormPage'
import PersonalDetailsFormPage from '../PersonalDetailsFormPage'
import BeneficiariesFormPage from '../BeneficiariesFormPage'

import { initialFormState } from "../../../data";

function FormSection({ page, nextPage, prevPage, submit }) {
    return (
        <Formik initialValues={initialFormState} onSubmit={submit}>
            {({ values }) => {

                const { chosenPlan } = values;
                return (
                    <Form className="form-section">
                        <div className="form-section__multi-page-container">
                            {page === 0 && <ChoosePlanFormPage chosenPlan={chosenPlan} nextPage={nextPage} prevPage={prevPage} page={page} />}
                            {page === 1 && <PersonalDetailsFormPage nextPage={nextPage} prevPage={prevPage} page={page} />}
                            {page === 2 && <BeneficiariesFormPage nextPage={nextPage} prevPage={prevPage} page={page} />}
                        </div>
                    </Form>
                )
            }}
        </Formik>

    )
}
export default FormSection