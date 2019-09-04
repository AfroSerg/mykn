import React, { Fragment } from 'react';
import PropTypes from "prop-types"
import Header from "../../molecules/Header"
import Footer from "../../molecules/Footer";
import SignUpModal from '../../molecules/SignUpModal';


function DefaultLayout({ children, isModalOpen, toggleModal }) {
    return (
        <Fragment>
            {isModalOpen && <SignUpModal toggleModal={toggleModal} />}
            <Header toggleModal={toggleModal} />
            <main>{children}</main>
            <Footer />
        </Fragment>

    )
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout


