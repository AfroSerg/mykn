import React from 'react';
import './index.scss'
import DefaultLayout from '../../layouts/DefaultLayout';
import Banner from '../../molecules/Banner';
import OurPolicies from '../../molecules/OurPolicies';

import { plans } from '../../../data'

function HomePage() {
    return (
        <DefaultLayout>
            <div className="home-page">
                <Banner />
                <OurPolicies plans={plans} />
            </div>
        </DefaultLayout>

    )
}
export default HomePage