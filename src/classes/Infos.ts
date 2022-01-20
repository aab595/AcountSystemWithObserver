import { IObserver } from "../interfaces/IObserver";

export class Infos implements IObserver {
    constructor() {}

    filterByType(data: object[], name: string) {
        let totalDebit = 0
        let totalCredit = 0
        for (const trans of data) {
            if (trans['type'] === 'debit' && trans['who'] === name) {
               totalDebit += trans['amount']
            }
            if (trans['type'] === 'credit' && trans['who'] === name) {
                totalCredit += trans['amount']
            }
        }
        return {
            _name: name,
            _totalDebit: totalDebit,
            _totalCredit: totalCredit
        }
    }

    update(data: object[]) {
        let arraOfName = data.map(res => {
            return res['who']
        })
        let arraOfNameFilter = Array.from(new Set(arraOfName))
        arraOfNameFilter.forEach(name => {
            const res = this.filterByType(data, name)
            // console.log(res._name, res._totalCredit, res._totalDebit);
            const personalTbody      = document.querySelector('#personal') as HTMLTableSectionElement
            const tr                 = document.createElement('tr')
            const tdName             = document.createElement('td')
            const tdDebit            = document.createElement('td')
            const tdCredit           = document.createElement('td')
                  tdName.innerText   = res._name
                  tdDebit.innerText  = res._totalDebit.toString()
                  tdCredit.innerText = res._totalCredit.toString()
            tr.appendChild(tdName)
            tr.appendChild(tdDebit)
            tr.appendChild(tdCredit)
            personalTbody.appendChild(tr)
        })
    }
}