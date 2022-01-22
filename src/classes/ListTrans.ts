import { IObserver } from "../interfaces/IObserver";
import { Caisse } from "./Caisse";

export class ListTrans implements IObserver {
    private htmlUlList: HTMLUListElement
    constructor() {
        this.htmlUlList = document.querySelector('#main-content')
    }

    update(caisse: Caisse) {
        const li    = document.createElement('li')
        const pHead = document.createElement('p')
        const pBody = document.createElement('p')
        caisse.getTransaction().forEach(element => {
            if (element.getType() === 'debit') {
                li.style.backgroundColor = '#ff2424'
            } else {
                li.style.backgroundColor = '#119311'
            }
            li.className    = "trans-li"
            pHead.innerText = element.getType() === "debit" ? "Débit" : "Crédit"
            pBody.innerText = `${element.getAmount()} ont été déposé par ${element.getWho()} suite à ${element.getReason()}`
            li.appendChild(pHead)
            li.appendChild(pBody)
        });
        this.htmlUlList.appendChild(li)
    }
}
