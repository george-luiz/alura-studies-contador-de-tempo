import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from "./App.module.scss";
 
//Componente class components
function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario /> 
      <Lista />
    </div>
  );
}

export default App;
