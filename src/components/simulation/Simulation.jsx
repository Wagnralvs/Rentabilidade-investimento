import { useState } from "react";
import  "./Simulation.css"

export default function Simulation({ setShowResultView , setDataSimulator}) {
  const [valorStart, setValorStart] = useState("");
  const [taxa, setTaxa] = useState("");
  const [valorMonthly, setValorMonthly] = useState("");
  const [timeAplication, setTimeAplication] = useState("");
  const [result, setResult] = useState(0)

  const valueTotalSimulation = () => {
    let valor = +valorStart;
    const taxaMonthly = ( +taxa / 100 )/ 12;
    const timeInvest = parseFloat(timeAplication);
    const monthlyInvest = parseFloat(valorMonthly);

    for(let i  = 0; i < +timeInvest; i++){
        valor = (valor * (1 + taxaMonthly) + monthlyInvest).toFixed(2);
        console.log(i , valor)
    }
    setResult(valor);
    setDataSimulator({
      valorInvest: +valorStart + (monthlyInvest * timeInvest),
      timeAplication: timeInvest,
      valorBruto: +valor
    });
    setShowResultView(true);
  }

    return (
      <div class="container-simulation d-flex">
        <form class="form">
          <h3 class="border-bottom pb-4">Simulador de Investimentos</h3>
          <div>
            <label for="valorStart" class="form-label">
              Investimento Inicial
            </label>
            <div class="input-group">
              <span class="input-group-text">R$</span>
              <input
                type="number"
                id="valorStart"
                class="form-control form-control-lg"
                value={valorStart}
                onChange={(e)=> setValorStart(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label for="taxa" class="form-label">
              Rentabilidade
            </label>
            <div class="input-group">
              <input
                type="number"
                id="taxa"
                class="form-control form-control-lg"
                value={taxa}
                onChange={(e)=> setTaxa(e.target.value)}
              />
              <span class="input-group-text">% ao ano</span>
            </div>
          </div>
          <div>
            <label for="valorMonthly" class="form-label">
              Investimento Mensal
            </label>
            <div class="input-group">
              <span class="input-group-text">R$</span>
              <input
                type="number"
                id="valorMonthly"
                class="form-control form-control-lg"
                value={valorMonthly}
                onChange={(e)=> setValorMonthly(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label for="taxa" class="form-label">
              Prazo ou vencimento
            </label>
            <div class="input-group">
              <input
                type="number"
                id="taxa"
                class="form-control form-control-lg"
                value={timeAplication}
                onChange={(e)=> setTimeAplication(e.target.value)}
              />
              <span class="input-group-text">meses</span>
            </div>
          </div>
          <div class="d-flex align-items-end justify-content-end pt-4">
              <button type="button"  class="btn btn-primary" onClick={valueTotalSimulation}><i class="bi bi-floppy"></i> Calcular</button>
          </div>
        </form>
       
      </div>
    );
}

