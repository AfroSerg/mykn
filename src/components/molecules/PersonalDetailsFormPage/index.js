import "./index.scss"
import React, { useState } from 'react'
import { Field } from 'formik'
import TextInput from '../../atoms/TextInput'
import SwitchInput from '../../atoms/SwitchInput'
import TextAreaInput from '../../atoms/TextAreaInput'
import RadioInput from '../../atoms/RadioInput'
import PersonalDetails from "../PersonalDetails"

function PersonalDetailsFormPage() {
    const [hasSpouse, toggleHasSpouse] = useState(false)
    return (
        <div className="personal-details-form-page">
            <h2>Personal Details</h2>
            <div className="personal-details-form-page__container">
                <div className="form-page-group">
                    <h4>Full Name</h4>
                    <Field name="firstName" label="First Name(s):" placeholder="e.g John" component={TextInput} />
                    <Field name="lastName" label="Last Name:" placeholder="e.g Doe" component={TextInput} />
                </div>
                <div className="form-page-group">
                    <h4>Gender</h4>
                    <Field name="gender" options={['male', 'female']} component={RadioInput} />
                </div>
                <Field name="identityNumber" label="Identity Number:" component={TextInput} />

                <Field name="residentialAddress" label="Residential Address:" component={TextAreaInput} />
                <Field name="postalAddress" label="Postal Address:" component={TextAreaInput} />
                <Field name="contactNumber" label="Telephone/Mobile" component={TextInput} />
                <Field name="emailAddress" label="Email Address" component={TextInput} />
                <SwitchInput name="hasSpouse" value={hasSpouse} label="Do you have a spouse?" onChange={toggleHasSpouse} />
                {hasSpouse && <PersonalDetails />}
            </div>
        </div>

    )
}

export default PersonalDetailsFormPage