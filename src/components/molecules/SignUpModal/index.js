
import React, { Component } from "react"
import './index.scss'
import ModalHeader from '../../atoms/ModalHeader';
import PersonalDetailsFormPage from '../../atoms/PersonalDetailsFormPage'

function FormSection({ pages }) {
    return (
        <form>
            {pages[1].pageActive && <PersonalDetailsFormPage />}
            <div>
                <button>Previous</button>
                <button>Next</button>
                <button>Submit</button>
            </div>
        </form>
    )
}

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
                    pageActive: false,
                },
                {
                    pageNum: 3,
                    pageTitle: "Beneficiaries",
                    pageActive: false,
                }
            ]
        }
    }

    render() {
        const { toggleModal } = this.props;
        const { pages } = this.state;
        return (
            <div className="sign-up-modal" onClick={() => toggleModal(false)}>
                <div className="sign-up-modal__container">
                    <ModalHeader pages={pages} />
                    <FormSection pages={pages} />
                </div>
            </div>
        )
    }
}

export default SignUpModal