import { Subject} from "rxjs";

export const dataSimulator = new Subject();

export function setDataSimulator(data) {
    dataSimulator.next(data);
}

export function getDataSimulator() {
    return dataSimulator.asObservable();
}

