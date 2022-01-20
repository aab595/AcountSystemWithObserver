import { IObserver } from "../interfaces/IObserver";

export class ListTrans implements IObserver {
    constructor() { }

    update(data: object[]) {
        const mainContentDiv = document.querySelector('#main-content')
        const li             = document.createElement('li')
        const pHead          = document.createElement('p')
        const pBody          = document.createElement('p')
        data.forEach(transaction => {
            if (transaction['type'] === 'debit') {
                li.style.backgroundColor = '#ff2424'
            } else {
                li.style.backgroundColor = '#119311'
            }
            li.className    = "trans-li"
            pHead.innerText = transaction['type'] === "debit" ? "Débit" : "Crédit"
            pBody.innerText = `${transaction['amount']} ont été déposé par ${transaction['who']} suite à ${transaction['detail']}`
            li.appendChild(pHead)
            li.appendChild(pBody)
            mainContentDiv.appendChild(li)
        })
    }
}
