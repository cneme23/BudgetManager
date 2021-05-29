import React, {useState} from "react";

const Form = () => {
    return(
        <form>
            <h2>Agrega tus gastos aquí</h2>

            <div className="campo">
                <label>Expense type</label>
                <input type="text"
                       className="u-full-width"
                       placeholder="Ex.Trasportation"
                />
            </div>



            <div className="campo">
                <label>Expenses´ amount</label>
                <input type="number"
                       className="u-full-width"
                       placeholder="ex.300"
                />
            </div>

            <input 
                type="submit"
                className ="button-primary u-full-width"
                value="Add Expense"
            />




        </form>
    )
}

export default Form;
