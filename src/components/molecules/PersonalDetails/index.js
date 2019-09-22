import "./index.scss"
import React, { useState } from 'react';
import { Field } from 'formik'
import TextInput from '../../atoms/TextInput'
import RadioInput from '../../atoms/RadioInput';

function PersonalDetails() {
    const [genderArray] = useState([['male', 'female']])
    return (
        <>
            <div className="form-page-group">
                <h4>Full Name</h4>
                <Field name="firstName" label="First Name(s):" placeholder="e.g John" component={TextInput} />
                <Field name="lastName" label="Last Name:" placeholder="e.g Doe" component={TextInput} />
            </div>

            <div className="form-page-group">
                <h4>Gender</h4>
                <Field name="gender" options={genderArray} component={RadioInput} />
            </div>
            <Field name="identityNumber" label="Identity Number:" component={TextInput} />
        </>
    )
}
export default PersonalDetails