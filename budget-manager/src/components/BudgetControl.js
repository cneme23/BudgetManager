import React from "react";
const BudgetControl =({budget,remain}) => {
    return (
        <>
        <div className= "alert alert-primary">
        Bubget: ${budget}

        </div>

        <div className="alert">

        Remain: {remain}
 

        </div>
        </>
    )
}

export default BudgetControl;