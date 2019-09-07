import React from 'react';
import "./index.scss"

function BeneficiariesFormPage() {
    return (
        <div className="beneficiaries-form-page">
            <h2>Beneficiaries</h2>
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
        </div>

    )
}

export default BeneficiariesFormPage