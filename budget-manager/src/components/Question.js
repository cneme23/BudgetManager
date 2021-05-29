import React, {useState} from "react";
import Error from "./Error";

const Question = ({saveBudget,saveRemain}) => {
    
    //Aca definimos el primer State. Inicialmente va a estar en 0
    const [quantity,saveQuantity] = useState(0);

    //Aca definimos el segundo State para manejar las validaciones
    const [error,saveError]= useState(false);
    
    //Aca definimos la funcion que se encarga de leer el presupuesto
    //Esta funcion a su vez se encarga de ejecutar la funcion "saveQuantity " que es la encargada de modificar el estado del componente
    //Con el metodo parseÍnt , me aseguro de convertir a entero todo
    const readBudget= e => {
        saveQuantity( parseInt(e.target.value,10) )
    }
    
    //Submit para agregar el presupuesto

    const addingBudget = e => {
        e.preventDefault();
    //Validación: Aqui validamos que el usuario no deje vacio el input o ponga valores negativos

    if(quantity <1 || isNaN(quantity) ){
        saveError(true);
        return; 
    }

    //Si pasa la validacion van a pasar 3 cosas:
    //A-No se va a guardar el error
    //B-Se guarda la cantidad de $ dispo
    //C- Se guarda lo que queda disponible como plata restante
    saveError(false);
    saveBudget(quantity);
    saveRemain(quantity);
    
    }
    


    return(
        <>
        <h2>Insert your budget</h2>
        {error ? <Error message="The budget is incorrect" /> : null}
        
        <form
            onSubmit={addingBudget}>
            <input
                type="number"
                className="u-full-width"
                placeholder="Insert your budget"
                onChange={readBudget}
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