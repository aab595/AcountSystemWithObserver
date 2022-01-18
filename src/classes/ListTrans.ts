import { IObserver } from "../interfaces/IObserver";
import { Transaction } from "./Transaction";

export class ListTrans implements IObserver {

    constructor(transObs: Transaction) {
        const mainContentDiv = document.querySelector('#main-content')
        const li             = document.createElement('li')
        const pHead          = document.createElement('p')
        const pBody          = document.createElement('p')
        if (transObs.getType() === 'debit') {
            li.style.backgroundColor = '#ff2424'
        } else {
            li.style.backgroundColor = '#119311'
        }
        li.className    = "trans-li"
        pHead.innerText = transObs.getType() === "debit" ? "Débit" : "Crédit"
        pBody.innerText = `${transObs.getAmount()} ont été déposé par ${transObs.getWho()} suite à ${transObs.getDetail()}`
        li.appendChild(pHead)
        li.appendChild(pBody)
        mainContentDiv.appendChild(li)
    }

    update(data: object) {
        //
    }
}