import "./index.scss"
import React from 'react';
import { Field } from 'formik'
import TextInput from '../../atoms/TextInput'

function BeneficiaryCard() {
    return (
        <div className="beneficiary-card">
            <div className="form-page-group">
                <h4>Full Name</h4>
                <Field name="firstName" label="First Name(s):" placeholder="e.g John" component={TextInput} />
                <Field name="lastName" label="Last Name:" placeholder="e.g Doe" component={TextInput} />
            </div>
            <Field name="identityNumber" label="Identity Number:" component={TextInput} />
            <Field name="relationship" label="Relationship:" component={TextInput} />
        </div>
    )
}
export default BeneficiaryCard