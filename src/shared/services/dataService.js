import { Subject} from "rxjs";

export const dataSimulator = new Subject();

export function setDataSimulator(data) {
    dataSimulator.next(data);
}

export function getDataSimulator() {
    return dataSimulator.asObservable();
}

export function convertToBrl(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

