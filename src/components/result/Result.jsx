import { useState, useEffect } from "react"
import { convertToBrl } from "../../shared/services/dataService";

export default function Result ({setShowResultView, getDataSimulator}){
    const [compoundInterest, setCompoundInterest ] = useState(0);
    const [valorRealLiqui, setValorRealLiqui] = useState(0);
    const [IR, setIR] = useState(0);
    const [getValorInvest, setValorInvest] = useState(0);
    const [getTimeAplication, setTimeAplication] = useState(0);
    const [getValorBruto, setValorBruto] = useState(0);
    const { timeAplication, valorBruto, valorInvest } = getDataSimulator;
    
    useEffect(() => {
        setValorInvest(valorInvest);
        setTimeAplication(timeAplication);
        setValorBruto(valorBruto);

        let aliquota = 0;
        const days = getTimeAplication * 30;
        
        if(days <= 180) aliquota = 0.225;
        else if(days <= 360) aliquota = 0.20;
        else if(days <= 720) aliquota = 0.175;
        else aliquota = 0.15;
        
        setIR(aliquota * 100);
        setValorRealLiqui(getValorInvest + ((getValorBruto - getValorInvest) * (1 - aliquota)));
        setCompoundInterest(getValorBruto - getValorInvest);
        console.log("valorRealLiqui", valorRealLiqui);
        console.log("compoundInterest", compoundInterest);  
     return () => {
       // subscription.unsubscribe();
      };
    }, [ getValorInvest, getTimeAplication, getValorBruto, valorBruto, valorInvest, timeAplication, compoundInterest, valorRealLiqui]);

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
                id="valorInvest"
                class="form-control form-control-lg"
                value={convertToBrl(getValorInvest)}
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
                id="compoundInterest"
                class="form-control form-control-lg"
                value={convertToBrl(compoundInterest)}
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
                id="valorBruto"
                class="form-control form-control-lg"
                value={convertToBrl(getValorBruto)}
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
                id="valorRealLiqui"
                class="form-control form-control-lg"
                value={convertToBrl(valorRealLiqui)}
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