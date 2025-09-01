import './App.css';
import Home from './components/home/Home';
import Simulation from './components/simulation/Simulation';
import Menssage from './components/menssage/Menssage';
import Result from './components/result/Result';
import  { useState } from "react";

function App() {
 const [ showResult, setShowResult ] = useState(false);
  const [dataSimulator, setDataSimulator] = useState({
    valorInvest: 0,
    timeAplication: 0,
    valorBruto: 0
  });
  return (
    <div className="App">
      <div className='action p-5'>
      <Home/>
      <div>
        {showResult ? <Result  setShowResultView={setShowResult} getDataSimulator={dataSimulator}/> : <Simulation setShowResultView={setShowResult} setDataSimulator={setDataSimulator}/>}
      </div>
      </div>
       <Menssage  />
    </div>
  );
}

export default App;
