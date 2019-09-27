
import React, { Component } from "react"
import './index.scss'
import ModalHeader from '../ModalHeader';
import FormSection from '../FormSection'
class SignUpModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pages: [
                {
                    pageNum: 1,
                    pageTitle: "Choose Your Plan",
                    pageActive: true,
                },
                {
                    pageNum: 2,
                    pageTitle: "Personal Details",
                    pageActive: true,
                },
                {
                    pageNum: 3,
                    pageTitle: "Beneficiaries",
                    pageActive: false,
                }
            ],
            page: 0
        }

        this.nextPage = this.nextPage.bind(this)
        this.prevPage = this.prevPage.bind(this)
    }
    nextPage(e) {
        e.preventDefault()
        this.setState(({ page }) => ({ page: page + 1 }))
    }
    prevPage(e) {
        e.preventDefault()
        this.setState(({ page }) => ({ page: page - 1 }))
    }
    submit(values) {
        console.log(`values: ${values}`)
    }

    render() {
        const { toggleModal } = this.props;
        const { pages, page } = this.state;
        return (
            <div className="sign-up-modal">
                <div className="sign-up-modal__container">
                    <ModalHeader pages={pages} currentPageIdx={page} toggleModal={toggleModal} />
                    <FormSection page={page} nextPage={this.nextPage} prevPage={this.prevPage} submit={this.submit} />
                </div>
            </div>
        )
    }
}

export default SignUpModal