import React from "react";

const Question = () => {
    return(
        <>
        <h2>Insert your budget</h2>
        
        <form>
            <input
                type="number"
                className="u-full-width"
                placeholder="Insert your budget"
            />
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Define Budget"
            />

        </form>
        </>
    )
};

export default Question;