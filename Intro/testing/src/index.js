import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button'

function soma(a, b){
  return a+b
}

function App(){

    return(
      <div className="App">
      hello world
      <Button onClick={ () =>
        soma(5,3)} 
        name="tati hola"/>
      </div>
    )
}



const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)


