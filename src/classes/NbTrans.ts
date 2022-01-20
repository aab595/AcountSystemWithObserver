import { IObserver } from "../interfaces/IObserver";

export class NbTrans implements IObserver {
    constructor() {}

    update(data: object[]) {
        let countDebit: number = 0
        let countCredit: number = 0
        data.forEach(transaction => {
            if (transaction['type'] === 'debit') {
                countDebit++
            } else {
                countCredit++
            }
        })
        const tdD           = document.querySelector('#totalTransD') as HTMLTableColElement
        const tdC           = document.querySelector('#totalTransC') as HTMLTableColElement
              tdD.innerText = countDebit.toString()
              tdC.innerText = countCredit.toString()
    }
}