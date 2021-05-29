import React, {useState} from "react";

const Form = () => {
    
    const [name,saveName]= useState("");
    const [quantity, saveQuantity]= useState(0);
    

//Aqui vamos a hacer una funcion para que el usuario agregue el gasto

const addExpense = e => {
    e.preventdefault();
}

//Aqui vamos a hacer la validacion 

//Aqui vamos a construir el gasto

//Aqui vamos a pasar el gasto al componente principal

//Aqui vamos a resetear al form

    return(
        <form>
            <h2>Agrega tus gastos aquí</h2>

            <div className="campo">
                <label>Expense type</label>
                <input type="text"
                       className="u-full-width"
                       placeholder="Ex.Trasportation"
                       value={name}
                       onChange={e => saveName(e.target.value)}
                />
            </div>



            <div className="campo">
                <label>Expenses´ amount</label>
                <input type="number"
                       className="u-full-width"
                       placeholder="ex.300"
                       value={quantity}
                       onChage={e => saveQuantity(parseInt (e.target.value,10))}
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
