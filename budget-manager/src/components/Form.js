import React, {useState} from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Error from "./Error";

const Form = ({saveExpense,saveCreateExpense}) => {
    
    const [name,saveName]= useState("");
    const [quantity, saveQuantity]= useState(0);
    const [error, saveError] = useState(false);
    

//Aqui vamos a hacer una funcion para que el usuario agregue el gasto

const addExpense = e => {
    e.preventDefault();
//Aqui vamos a hacer la validacion 
if(quantity < 1 || isNaN(quantity)|| name.trim()=== ""){
    saveError(true);
    return;
}
saveError(false);

//Aqui vamos a construir el gasto
const expense = {
    name,
    quantity,
    //Aca vamos a generar un short id para idenificar a cada gasto
    id:shortid.generate()
}

//Aqui vamos a pasar el gasto al componente principal
saveExpense(expense);
saveCreateExpense(true);
//Aqui vamos a resetear al form

saveName("");
saveQuantity(0);

}
    return (
        <form
            onSubmit={addExpense}
        >
            <h2>Add your expenses here</h2>

            {error ? <Error message="Both imputs are obligatory or wrong budget" /> : null}

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
                       onChange={e => saveQuantity(parseInt(e.target.value,10))}
                />
            </div>

            <input 
                type="submit"
                className ="button-primary u-full-width"
                value="Agregar gasto"
            />




        </form>
    )
}

Form.propTypes= {
    saveExpense: PropTypes.func.isRequired,
    saveCreateExpense: PropTypes.func.isRequired
}

export default Form;
