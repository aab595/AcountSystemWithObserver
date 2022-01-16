import { TotalSolde } from "./classes/TotalSolde";
import { Transaction } from "./classes/Transaction";

const transaction = new Transaction("debit", 1500, "Amina", "No comment")

const addBtn = document.querySelector('#addBtn') as HTMLButtonElement
addBtn.addEventListener('click', (e: Event) => {
    const solde = new TotalSolde()
    transaction.subscribe(solde)
})