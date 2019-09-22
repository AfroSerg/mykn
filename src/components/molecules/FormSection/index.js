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
                return (
                    <Form className="form-section">
                        <div className="form-section__multi-page-container">
                            {page === 0 && <ChoosePlanFormPage />}
                            {page === 1 && <PersonalDetailsFormPage />}
                            {page === 2 && <BeneficiariesFormPage />}
                            <div className="form-section__button-group">
                                {page === 2 && <button type="submit">Submit</button>}
                                {page >= 0 && 2 && <button onClick={nextPage}>Next</button>}
                                {page !== 0 && <button onClick={prevPage}>Previous</button>}
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>

    )
}
export default FormSection