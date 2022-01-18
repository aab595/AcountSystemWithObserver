import { IObserver } from "../interfaces/IObserver";
import { Transaction } from "./Transaction";

export class TotalSolde implements IObserver {

    constructor(transObs: Transaction) {
        const soldePara           = document.querySelector('#soldeText') as HTMLParagraphElement
              soldePara.innerText = transObs.getTotalAmount().toString()
    }

    update(data: object): void {
        console.log(data["amount"]);
    }
}