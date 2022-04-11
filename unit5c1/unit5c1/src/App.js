import logo from './logo.svg';
import {useState} from "react";
import './App.css';

function App(){
  const [counter,setCounter] =useState(76);
  const [counter1,setState]=useState(50);
  const [counter2,setStr]=useState(5);
    return (
        <div className="App">
          <h3>INDIA</h3>
            <h3>Score ={counter}</h3>
        <button onClick={() =>{
          setCounter(counter+1);
        }}>score 1</button>
        <button onClick={() =>{
          setCounter(counter+4);
        }}>score 4 </button>
        <button onClick={() =>{
          setCounter(counter+6);
        }}>score 6</button>
        <h3>Wickets={counter2}</h3>
        <button onClick={() =>{
          setStr(counter2+1);
        }}>Wickets</button>
         <h3>balls={counter1}</h3>
        <button onClick={() =>{
          setState(counter1+1);
        }}>balls</button>
        </div>
    );
}

export default App;