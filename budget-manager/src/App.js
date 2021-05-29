import React,{useState} from "react";
import Question from "./components/Question";



function App() {

  //Definir los estados para guardar el presupuesto y su restante
  //En este caso como el tipo de dato que necesitamos acumular es numerico, inciamos el state en 0.
  
const [budget, saveBudget]= useState(0);
const [remain, saveRemain]=useState(0);

  
  return (
    <div className="container">
     <header>
      <h1>Weekly Budget</h1>
      <div className="contenido-principal contenido">
        {/* Aca le paso por props las funciones que se van a encargar de cambiar el estado.
        Ahora tendriamos en el componente question ambas funciones para usar */}
        <Question 
          saveBudget={saveBudget} 
          saveRemain={saveRemain}/>
      </div>
     </header>
     
    </div>
  );
}

export default App;
