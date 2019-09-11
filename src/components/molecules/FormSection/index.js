import React from 'react';
import { Formik, Form } from 'formik'
import ChoosePlanFormPage from '../ChoosePlanFormPage'
import PersonalDetailsFormPage from '../PersonalDetailsFormPage'
import BeneficiariesFormPage from '../BeneficiariesFormPage'
import './index.scss'

const pages = [<ChoosePlanFormPage />, <PersonalDetailsFormPage />, <BeneficiariesFormPage />]

function FormSection({ page, nextPage, prevPage, submit }) {
    return (
        <Formik initialValues={{
            firstname: "",
            lastname: ""
        }} onSubmit={submit}>
            {() => (
                <Form className="form-section">
                    <div className="form-section__multi-page-container">
                        {pages[page]}
                    </div>
                    <div className="form-section__button-group">
                        {page !== 0 && <button onClick={prevPage}>Previous</button>}
                        {page >= 0 && page !== pages.length - 1 && <button onClick={nextPage}>Next</button>}
                        {page === pages.length - 1 && <button type="submit">Submit</button>}
                    </div>
                </Form>
            )}
        </Formik>

    )
}
export default FormSection