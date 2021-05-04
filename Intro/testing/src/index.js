import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB'


function soma(a, b){
  return alert(a+b)
}

function App(){

    return(
      <div className="App">
      hello world
      <Button onClick={ () =>
        soma(5,3)} 
        name="tati hola"/>
      <ComponentA>
        <ComponentB>
          <Button onClick={ () =>
          soma(4,2)} 
          name="que tal"/>
        </ComponentB>
      </ComponentA>
      </div>
    )
}



const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)


