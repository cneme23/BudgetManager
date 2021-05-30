import React from "react";

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


export default Expense;