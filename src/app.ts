import { ListTrans } from "./classes/ListTrans";
import { NbTrans } from "./classes/NbTrans";
import { PersonalInfo } from "./classes/PersonalInfo";
import { TotalSolde } from "./classes/TotalSolde";
import { Transaction } from "./classes/Transaction";


const addBtn = document.querySelector('#addBtn') as HTMLButtonElement
let transType = document.querySelector('#transType') as HTMLSelectElement
let transAmount = document.querySelector('#transAmount') as HTMLInputElement
let transWho = document.querySelector('#transWho') as HTMLInputElement
let transDetail = document.querySelector('#transDetail') as HTMLInputElement

addBtn.addEventListener('click', (e: Event) => {
    if (transType.value && transAmount.value && transWho.value && transDetail.value) {
        const transaction = new Transaction(
            transType.value, 
            transAmount.valueAsNumber,
            transWho.value,
            transDetail.value
        )
        const solde        = new TotalSolde(transaction)
        const nbTrans      = new NbTrans(transaction)
        const listTrans    = new ListTrans(transaction)
        const personalInfo = new PersonalInfo(transaction)
        transaction.subscribe(solde)
        transaction.subscribe(nbTrans)
        transaction.subscribe(listTrans)
        transaction.subscribe(personalInfo)
        console.log(Transaction.totalAmount);
        
    } else {
        console.log("All fields are required");
    }
})
