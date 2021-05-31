import React from "react";
import PropTypes from "prop-types";
import {budgetReview} from "../helpers"


const Expense = ({expense}) => {
    return (
        <li className="gastos">
            <p>
                {expense.name}
                <span className="gasto">${expense.quantity}</span>
            </p>


        </li>
    )
}

Expense.PropTypes = {
    expense : PropTypes.object.isRequired
}

export default Expense;