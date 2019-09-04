import React from 'react';
import "./index.scss"

function PersonalDetailsFormPage() {
    return (
        <div className="personal-details-form-page">
            <h2>Personal Details</h2>
            <div>
                <label>First Name</label>
                <input type="text" placeholder="e.g. Jonathan" />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" placeholder="e.g. Doe" />
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" name="Male" />
                <input type="radio" name="Female" />
            </div>
            <div>
                <label >Identity Number</label>
                <input type="text" placeholder="please enter you ID" />
            </div>
            <div>
                <label>Residential Address</label>
                <textarea></textarea>
            </div>
            <div>
                <label>Postal</label>
                <input type="checkbox" />
                <textarea></textarea>
            </div>
            <div>
                <label>Telephone/mobile</label>
                <input type="text" />
            </div>
            <div>
                <label>Email Address</label>
                <input type="text" />
            </div>

            <div>
                <label>Do you have a Spouse?</label>
                <input type="Checkbox" />
            </div>
        </div>

    )
}

export default PersonalDetailsFormPage