import React, { useState } from 'react';
import './index.scss'
import DefaultLayout from '../../layouts/DefaultLayout';
import Banner from '../../molecules/Banner';
import OurPolicies from '../../molecules/OurPolicies';

import { plans } from '../../../data'

function HomePage() {
    const [isModalOpen, toggleModal] = useState(true)
    return (
        <DefaultLayout isModalOpen={isModalOpen} toggleModal={toggleModal}>
            <div className="home-page">
                <Banner toggleModal={toggleModal} />
                <OurPolicies plans={plans} toggleModal={toggleModal} />
            </div>
        </DefaultLayout>
    )
}
export default HomePage