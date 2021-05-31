import React from "react";
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

export default BudgetControl;