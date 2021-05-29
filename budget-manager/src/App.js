import React,{useState} from "react";
import Question from "./components/Question";
import Form from "./components/Form"



function App() {

  //Definir los estados para guardar el presupuesto y su restante
  //En este caso como el tipo de dato que necesitamos acumular es numerico, inciamos el state en 0.
  
const [budget, saveBudget]= useState(0);
const [remain, saveRemain]=useState(0);

//Ahora vamos a hacer el estado para mostrar o no el componente Question

const [showquestion,updateQuestion]=useState(true);



  
  return (
    <div className="container">
     <header>
      <h1>Weekly Budget</h1>
      <div className="contenido-principal contenido">
        {/* Aca vamos a usar componentes condicionales, en caso de agregue el presupuesto voy a mostrar algo , sino no  */}

{ showquestion ? (
  <Question 
          saveBudget={saveBudget} 
          saveRemain={saveRemain}
          updateQuestion={updateQuestion}
        />
) : (
<div className="row">
        <div className= "one-half column">
            <Form/>
        </div>

        <div className= "one-half column">
            2
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
