import './App.css'
import { Boton } from './components/boton';
import { useState } from 'react';


function App({texto}) {
  const [estado, setEstado] = useState(true)
  return <>
  <div>
    <h1>
      {estado}
    </h1>
    <button onClick={()=>{
      if(estado == "verdadero"){
        setEstado("False");
      }else{
        setEstado("verdadero")
      }
    }}
    >Cambiar estado</button>

    <Boton texto={"texto"}></Boton>

  </div>
  </>;
}

export default App
