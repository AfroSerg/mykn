import React from 'react';
import "./index.scss"

function PersonalDetailsFormPage() {
    return (
        <div className="personal-details-form-page">
            <h2>Personal Details</h2>
            <div className="form-control">
                <label>First Name</label>
                <input type="text" placeholder="e.g. Jonathan" />
            </div>
            <div className="form-control">
                <label>Last Name</label>
                <input type="text" placeholder="e.g. Doe" />
            </div>
            <div className="form-control">
                <label>Gender</label>
                <input type="radio" name="Male" />
                <input type="radio" name="Female" />
            </div>
            <div className="form-control">
                <label>Identity Number</label>
                <input type="text" placeholder="please enter you ID" />
            </div>
            <div className="form-control">
                <label>Residential Address</label>
                <textarea></textarea>
            </div>
            <div className="form-control">
                <label>Postal</label>
                <input type="checkbox" />
                <textarea></textarea>
            </div>
            <div className="form-control">
                <label>Telephone/Mobile</label>
                <input type="text" />
            </div>
            <div className="form-control">
                <label>Email Address</label>
                <input type="text" />
            </div>

            <div className="form-control">
                <label>Do you have a Spouse?</label>
                <input type="Checkbox" />
            </div>
        </div>

    )
}

export default PersonalDetailsFormPage