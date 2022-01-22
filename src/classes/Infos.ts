import { IObserver } from "../interfaces/IObserver";
import { Caisse, Transaction } from "./Caisse";

export class Infos implements IObserver {
    private htmlTbody: HTMLTableSectionElement
    constructor() {
        this.htmlTbody = document.querySelector('#personal-info')
    }

    update(data: Caisse) {
        let result = []
        for (const trans of data.getTransaction()) {
            let nb = result.filter(e => e.name === trans.getWho()).length
            if (nb === 0) {
                let employee = {
                    name: trans.getWho(),
                    debit: (trans.getType() === 'debit') ? trans.getAmount() : 0,
                    credit: (trans.getType() === 'credit') ? trans.getAmount() : 0
                }
                result.push(employee)
            } else {
                let idx = result.findIndex(elem => elem.name === trans.getWho())
                if (trans.getType() === 'debit') {
                    result[idx].debit += trans.getAmount()
                } else {
                    result[idx].credit += trans.getAmount()
                }
            }
        }

        this.htmlTbody.innerHTML = ""

        for (const res of result) {
            const tr = document.createElement('tr')
            const tdName = document.createElement('td')
            const tdDebit = document.createElement('td')
            const tdCredit = document.createElement('td')
            tdName.innerText = res.name
            tdDebit.innerText = res.debit.toString()
            tdCredit.innerText = res.credit.toString()
            tr.append(tdName)
            tr.append(tdDebit)
            tr.append(tdCredit)
            this.htmlTbody.append(tr)
        }
    }
}