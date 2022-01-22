import { IObserver } from "../interfaces/IObserver";
import { Caisse } from "./Caisse";

export class NbTrans implements IObserver {
    constructor() {}

    update(data: Caisse) {
        const tdD           = document.querySelector('#totalTransD') as HTMLTableColElement
        const tdC           = document.querySelector('#totalTransC') as HTMLTableColElement
              tdD.innerText = data.getDebitCounter().toString()
              tdC.innerText = data.getCreditCounter().toString()
    }
}