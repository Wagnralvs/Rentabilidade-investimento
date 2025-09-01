import { useState, useEffect } from "react"
//import { getDataSimulator, dataSimulator } from "../../shared/services/dataService";

export default function Result ({setShowResultView, getDataSimulator}){
    const [compoundInterest, setCompoundInterest ] = useState(0);
    const [valorRealLiqui, setValorRealLiqui] = useState(0);
    const [IR, setIR] = useState(0);
    const [valorInvest, setValorInvest] = useState(0);
    const [timeAplication, setTimeAplication] = useState(0);
    const [valorBruto, setValorBruto] = useState(0);

    useEffect(() => {
        setValorInvest(getDataSimulator.valorInvest);
        setTimeAplication(getDataSimulator.timeAplication);
        setValorBruto(getDataSimulator.valorBruto);
   
      console.log("2 Data received in Result:",valorInvest, timeAplication, valorBruto);
        let aliquota = 0;
        const days = timeAplication * 30;
        
        if(days <= 180) aliquota = 0.0225;
        else if(days <= 360) aliquota = 0.20;
        else if(days <= 720) aliquota = 0.175;
        else aliquota = 0.15;
        
        setIR(aliquota * 100);
        setValorRealLiqui(valorInvest + ((valorBruto - valorInvest) * (1 - aliquota)));
        setCompoundInterest(valorBruto - valorInvest);

     return () => {
       // subscription.unsubscribe();
      };
    }, [ valorInvest, timeAplication, valorBruto, valorRealLiqui ]);

    // calculationIR();

    return (
        <div>
            <form class="form">
          <h3 class="border-bottom pb-4">Rentabilidade do Investimento</h3>
          <div>
            <label for="valorInvest" class="form-label">
              Dinheiro Investimento
            </label>
            <div class="input-group">
              <span class="input-group-text">R$</span>
              <input
                readOnly
                type="number"
                id="valorInvest"
                class="form-control form-control-lg"
                value={valorInvest.toFixed(2)}
              />
            </div>
          </div>
          <div>
            <label for="compoundInterest" class="form-label">
              Juros Ganhos com juros compostos
            </label>
            <div class="input-group">
              <input
                readOnly
                type="number"
                id="compoundInterest"
                class="form-control form-control-lg"
                value={compoundInterest.toFixed(2)}
              />
            </div>
          </div>
          <div>
            <label for="valorBruto" class="form-label">
              Total bruto
            </label>
            <div class="input-group">
              <span class="input-group-text">R$</span>
              <input
                readOnly
                type="number"
                id="valorBruto"
                class="form-control form-control-lg"
                value={valorBruto.toFixed(2)}
              />
            </div>
          </div>
          <div>
            <label for="IR" class="form-label">
              Imposto de Renda Sobre a Rentabilidade
            </label>
            <div class="input-group">
              <input
                readOnly
                type="number"
                id="IR"
                class="form-control form-control-lg"
                value={IR}
              />
            </div>
            </div>
             <div>
            <label for="valorRealLiqui" class="form-label">
              Total a Receber
            </label>
            <div class="input-group">
              <input
                readOnly
                type="number"
                id="valorRealLiqui"
                class="form-control form-control-lg"
                value={valorRealLiqui.toFixed(2)}
              />
            </div>
          </div>
          <div class="d-flex align-items-end justify-content-end pt-4">
              <button type="button"  class="btn btn-primary" onClick={() => setShowResultView(false)} ><i class="bi bi-floppy"></i> Refazer Simulação</button>
          </div>
        </form>
       
        </div>
    )
}