import Question from "./components/Question";

function App() {

  //Definir el state
const [budget, saveBudget]= useState(0);
const [remain, saveRemain]=useState(0);

  
  return (
    <div className="container">
     <header>
      <h1>Weekly Budget</h1>
      <div className="contenido-principal contenido"><Question saveBudget={saveBudget} saveRemain={saveRemain}/></div>
     </header>
     
    </div>
  );
}

export default App;
