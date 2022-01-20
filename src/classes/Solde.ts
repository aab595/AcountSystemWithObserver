import { IObserver } from "../interfaces/IObserver";

export class Solde implements IObserver {
    private solde: number

    constructor() {}

    update(data: object[]) {
        let totalDebit: number = 0        
        let totalCredit: number = 0
        data.forEach(transaction => {
            if (transaction['type'] === 'debit') {
                totalDebit += transaction['amount']
            } else {
                totalCredit += transaction['amount']
            }
        })
        this.solde = totalCredit - totalDebit
        // console.log(`totalDebit : ${totalDebit} | totalCredit : ${totalCredit}`);
        // console.log("Solde : ", this.solde);

        const soldePara           = document.querySelector('#soldeText') as HTMLParagraphElement
              soldePara.innerText = this.solde.toString()

        const stateDiv = document.querySelector('#state') as HTMLDivElement
        stateDiv.style.width = "100%"
        stateDiv.style.height = "80px"
        stateDiv.style.borderRadius = "5px"
        // for the state we've to fix a limit and with that we'll set the bg color
        stateDiv.style.backgroundColor = (this.solde > 0) ? "green": "red"
    }
}