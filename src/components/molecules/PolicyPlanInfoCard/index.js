import React from 'react';
import './index.scss'
import SVGLogo from '../../atoms/Logo'

function PolicyPlanInfoCard({ plan }) {
    const { name, premium, benefits, conditions, accent } = plan;
    return (
        <div className="policy-plan-info-card">
            <SVGLogo className="policy-plan-info-card__logo" accent={accent} />
            <h4 className="policy-plan-info-card__plan-header">{name}</h4>
            <span className="policy-plan-info-card__premium">Premium: <h5 style={{ color: accent }}>{premium}</h5></span>
            <div className="policy-plan-info-card__benefits">
                <h6>Includes:</h6>
                <ul>
                    {benefits.map((benefit, key) => (<li key={key}>{benefit}</li>))}
                </ul>
            </div>
            <div className="policy-plan-info-card__benefits">
                <h6>Conditions:</h6>
                <ul>
                    {conditions.map((condition, key) => (<li key={key}>{condition}</li>))}
                </ul>
            </div>

        </div>
    )
}
export default PolicyPlanInfoCard