import React, { useState } from 'react';
import { Field } from 'formik'
import TextInput from '../../atoms/TextInput'
import "./index.scss"
import Switch from '../../atoms/Switch';


function PersonalDetailsFormPage() {
    const [hasSpouse, toggleHasSpouse] = useState(false);
    const [sameAsResidential, toggleSameAsResidential] = useState(false)
    return (
        <div className="personal-details-form-page">
            <h2>Personal Details</h2>
            <div className="form-page-group">
                <h4>Full Name</h4>
                <Field name="firstname" label="First Name(s)" component={TextInput} />
                <Field name="lastname" label="Last Name" component={TextInput} />
            </div>

            <div className="form-page-group">
                <h4>Gender</h4>
                <div className="input-div">
                    <label>Male</label>
                    <input type="radio" name="gender" />
                </div>
                <div className="input-div">
                    <label>Female</label>
                    <input type="radio" name="gender" />
                </div>
            </div>

            <Field name="idnum" label="Identity Number" component={TextInput} />
            <div className="input-div">
                <label>Residential Address</label>
                <textarea></textarea>
            </div>
            <div className="input-div">
                <label>Postal</label>
                <span>Same as residential?</span>
                <Switch checked={sameAsResidential} toggleOnClicked={toggleSameAsResidential} />
                <textarea></textarea>
            </div>
            <Field name="contactnum" label="Telephone/Mobile" component={TextInput} />
            <Field name="email" label="Email Address" component={TextInput} />


            <div className="">
                <span>Do you have a spouse?</span>
                <Switch checked={hasSpouse} toggleOnClicked={toggleHasSpouse} />
            </div>
        </div>

    )
}

export default PersonalDetailsFormPage