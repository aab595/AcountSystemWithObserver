import { Caisse, Transaction } from "./classes/Caisse";
import { Infos } from "./classes/Infos";
import { ListTrans } from "./classes/ListTrans";
import { NbTrans } from "./classes/NbTrans";
import { Solde } from "./classes/Solde";

// DOM variables
const addBtn      = document.querySelector('#addBtn') as HTMLButtonElement
let   transType   = document.querySelector('#transType') as HTMLSelectElement
let   transAmount = document.querySelector('#transAmount') as HTMLInputElement
let   transWho    = document.querySelector('#transWho') as HTMLInputElement
let   transDetail = document.querySelector('#transDetail') as HTMLInputElement

// Observers object
const caisse    = new Caisse(0)
const solde     = new Solde()
const nbTrans   = new NbTrans()
const listTrans = new ListTrans()
const infos = new Infos()
// Subscribe obervers
caisse.subscribe(solde)
caisse.subscribe(nbTrans)
caisse.subscribe(listTrans)
caisse.subscribe(infos)

// Add transaction while clicking on add button
addBtn.addEventListener('click', (e: Event) => {
    if (transType.value && transAmount.value && transWho.value && transDetail.value) {
        const transaction = new Transaction(
            transType.value, 
            transAmount.valueAsNumber,
            transWho.value,
            transDetail.value
        )
        caisse.addTransaction(transaction)
    } else {
        console.log("All fields are required");
    }
})
