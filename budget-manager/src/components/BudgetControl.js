import React from "react";
import PropTypes from "prop-types";
import {budgetReview } from "../helpers";


const BudgetControl =({budget,remain}) => {
    return (
        <>
        <div className= "alert alert-primary">
        Bubget: ${budget}

        </div>

        <div className={budgetReview(budget,remain)}>

        Remain: {remain}
 

        </div>
        </>
    )
}

BudgetControl.propTypes= {
    budget:PropTypes.number.isRequired,
    remain:PropTypes.number.isRequired

}

export default BudgetControl;