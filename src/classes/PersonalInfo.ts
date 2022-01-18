import { IObserver } from "../interfaces/IObserver";
import { Transaction } from "./Transaction";

export class PersonalInfo implements IObserver {

    constructor(transObs: Transaction) {
        const personalTbody      = document.querySelector('#personal') as HTMLTableSectionElement
        const tr                 = document.createElement('tr')
        const tdName             = document.createElement('td')
        const tdDebit            = document.createElement('td')
        const tdCredit           = document.createElement('td')
              tdName.innerText   = transObs.getWho()
              tdDebit.innerText  = transObs.getType() === 'debit' ? `${transObs.getAmount()}` : "-"
              tdCredit.innerText = transObs.getType() === 'credit' ? `${transObs.getAmount()}` : "-"
        tr.appendChild(tdName)
        tr.appendChild(tdDebit)
        tr.appendChild(tdCredit)
        personalTbody.appendChild(tr)
    }

    update(data: object) {
        //
    }
}