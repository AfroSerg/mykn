import React, { Fragment } from 'react';
import PropTypes from "prop-types"
import Header from "../../molecules/Header"
import Footer from "../../molecules/Footer";


function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <main>{children}</main>
            <Footer />
        </Fragment>

    )
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout


