import React from "react"
import './index.scss'
import PolicyPlanCard from "../../atoms/PolicyPlanCard";

function OurPolicies({ plans }) {
  return (
    <section id="our-policies" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="header-section">
            <h2>Our Policies</h2>
            <p>GYKN Life has on offer a full range of dignified funeral policies to cover yourself and up to 12 family
            members. Each policy includes: </p>
          </div>
          <div className="feature-info">
            {
              plans.map((plan, key) => (
                <div className="col-md-6">
                  <PolicyPlanCard plan={plan} />
                </div>)
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}


export default OurPolicies
