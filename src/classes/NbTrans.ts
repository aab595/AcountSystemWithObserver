import { IObserver } from "../interfaces/IObserver";
import { Transaction } from "./Transaction";

export class NbTrans implements IObserver {

    constructor(transObs: Transaction) {
        const tdD           = document.querySelector('#totalTransD') as HTMLTableColElement
        const tdC           = document.querySelector('#totalTransC') as HTMLTableColElement
              tdD.innerText = transObs.getTotalDebit().toString()
              tdC.innerText = transObs.getTotalCredit().toString()
    }

    update(data: object) {
        //
    }
}