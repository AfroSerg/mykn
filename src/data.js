export const plans = [
    {
        plan_id: 0,
        name: "VALUE BACK CASH PLAN",
        premium: "R29.99p/m",
        benefits: [
            "R5 000 Cash back",
            "R500 Free airtime benefit",
            "R3 000 Accidental death benefit"
        ],
        accent: "red",
        conditions: [
            "Single member plan",
            "3 month waiting period",
            "Foreign Nationals with valid passport or work permit may apply",
            "Free repartiation into furthest point of any SADC country",
            "48 hour cash payout on successful claim"
        ],
        maxBeneficiares: 1
    },
    {
        plan_id: 1,
        name: "YOUNG PROFESSIONALS CASH BACK PLAN",
        premium: "R79.99p/m",
        benefits: [
            "R10 000 Cash back",
            "R700 Free airtime benefit",
            "R10 000 Accidental death benefit",
            "R5 000 Grocery benefit"
        ],
        accent: "green",
        conditions: [
            "Single member plan",
            "6 month waiting period",
            "Foreign Nationals with valid passport or work permit may apply",
            "Free repartiation into furthest point of any SADC country",
            "48 hour cash payout on successful claim"
        ],
        maxBeneficiares: 1
    },
    {
        plan_id: 2,
        name: "ONE FAMILY CASH BACK PLAN",
        premium: "R149.99p/m",
        benefits: [
            "R12 500 Cash back",
            "R1 000 Free airtime benefit",
            "R15 000 Accidental death benefit",
            "R9 000 Income protection benefit"
        ],
        accent: "blue",
        conditions: [
            "Family plan, Main member, Spouse and up to 6 children",
            "6 month waiting period",
            "Foreign Nationals with valid passport or work permit may apply",
            "Free repartiation into furthest point of any SADC country",
            "48 hour cash payout on successful claim",
            "Income protection benefit in case of main member death claim"
        ],
        maxBeneficiares: 6
    },
    {
        plan_id: 3,
        name: "TRADITIONAL FAMILY CASH BACK PLAN",
        premium: "R249.99p/m",
        benefits: [
            "R10 000 Cash back",
            "R5 000.00 Grocery benefit"
        ],
        accent: "brown",
        conditions: [
            "Traditional society plan, main member + 9 extended",
            "6 month waiting period",
            "Free repartiation into furthest point of any SADC country",
            "48 hour cash payout on successful claim"
        ],
        maxBeneficiares: 9
    },
]

export const initialFormState = {
    chosenPlan: "",
    firstName: "",
    lastName: "",
    gender: "male",
    identityNumber: "",
    residentialAddress: "",
    postalAddress: "",
    contactNumber: "",
    emailAddress: "",
    hasSpouse: false,
    spouse: {
        hasSpouse: false,
        firstName: "",
        lastName: "",
        gender: "male",
        identityNumber: "",
    },
    beneficiaries: []
}
