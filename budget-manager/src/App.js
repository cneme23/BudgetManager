import React,{useState,useEffect} from "react";
import Question from "./components/Question";
import Form from "./components/Form"
import ExpensesList from "./components/ExpensesList";
import BudgetControl from "./components/BudgetControl";


function App() {

  //Definir los estados para guardar el presupuesto y su restante
  //En este caso como el tipo de dato que necesitamos acumular es numerico, inciamos el state en 0.
  
const [budget, saveBudget]= useState(0);
const [remain, saveRemain]=useState(0);

//Ahora vamos a hacer el estado para mostrar o no el componente Question

const [showquestion,updateQuestion]=useState(true);
const [expenses,saveExpenses]=useState([]);
const [expense, saveExpense]=useState({});
const [createxpense,saveCreateExpense]= useState(false);

//UseEffect que actualice el restatnte

useEffect( () => {
  if(createxpense){

//Agrega el nuevo presupuesto
  saveExpenses([
    ...expenses,expense
  ]);

  //Resta del presupuesto actual
const remainBudget = remain - expense.quantity;
saveRemain(remainBudget);

  
saveCreateExpense(false)
}
},[expense,createxpense,expenses,remain]);


//Aca definimos una funcion que se va a ejecutar cuando agreguemos un nuevo gasto


  
  return (
    <div className="container">
     <header>
      <h1>Weekly Budget</h1>
      <div className="contenido-principal contenido">
        {/* Aca vamos a usar componentes condicionales, en caso de agregue el presupuesto voy a mostrar algo , sino no  */}

{ showquestion ?
 (
  <Question 
          saveBudget={saveBudget} 
          saveRemain={saveRemain}
          updateQuestion={updateQuestion}
        />
      ) : (
       <div className="row">
        <div className= "one-half column">
            <Form
            saveExpense={saveExpense}
            saveCreateExpense={saveCreateExpense}
            />
        </div>

        <div className= "one-half column">
            <ExpensesList
            expenses={expenses}
            />

            <BudgetControl
              budget={budget}
              remain={remain}
              />
        </div>

      </div>
)

}
   
    </div>
     </header>
     
    </div>
  );
}

export default App;
