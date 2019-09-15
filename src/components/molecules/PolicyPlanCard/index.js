import React from 'react';
import './index.scss'
import SVGLogo from '../../atoms/Logo'

function PolicyPlanCard({ plan }) {
    const { name, premium, benefits, accent } = plan;
    return (
        <div className="policy-plan-card">
            <SVGLogo className="policy-plan-card__logo" accent={accent} />
            <h4 className="policy-plan-card__plan-header">{name}</h4>
            <span className="policy-plan-card__premium">Premium: <h5 style={{ color: accent }}>{premium}</h5></span>
            <div className="policy-plan-card__benefits">
                <h6>Includes:</h6>
                <ul>
                    {benefits.map((benefit, key) => (<li key={key}>{benefit}</li>))}
                </ul>
            </div>
            <div className="policy-plan-card__btn-group">
                <button className="policy-plan-card__btn-group__sign-up-btn" onClick={() => console.log('sign up button')}>Sign Up</button>
            </div>
        </div>
    )
}

export default PolicyPlanCard