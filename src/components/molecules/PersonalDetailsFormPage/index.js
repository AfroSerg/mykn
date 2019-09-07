import React from 'react';
import "./index.scss"

function PersonalDetailsFormPage() {
    return (
        <div className="personal-details-form-page">
            <h2>Personal Details</h2>
            <div className="form-page-group">
                <h4>Full Name</h4>
                <div className="input-div">
                    <label>First Name</label>
                    <input type="text" placeholder="e.g. Jonathan" />
                </div>
                <div className="input-div">
                    <label>Last Name</label>
                    <input type="text" placeholder="e.g. Doe" />
                </div>
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

            <div className="input-div">
                <label>Identity Number</label>
                <input type="text" placeholder="Please enter you ID Number" />
            </div>
            <div className="input-div">
                <label>Residential Address</label>
                <textarea></textarea>
            </div>
            <div className="input-div">
                <label>Postal</label>
                <input type="checkbox" />
                <textarea></textarea>
            </div>
            <div className="input-div">
                <label>Telephone/Mobile</label>
                <input type="text" placeholder="e.g. 0791628490" />
            </div>
            <div className="input-div">
                <label>Email Address</label>
                <input type="text" placeholder="e.g. johndoe@example.com" />
            </div>

            <div className="input-div">
                <label>Do you have a Spouse?</label>
                <input type="Checkbox" />
            </div>
        </div>

    )
}

export default PersonalDetailsFormPage