import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";

export class Caisse implements ISubject {
    private observers: IObserver[] = []
    private debitCounter: number = 0
    private creditCounter: number = 0
    private totalDebit: number = 0
    private totalCredit: number = 0
    private transactions: Transaction[] = []

    constructor(private solde: number) {
        //
    }

    addTransaction(obj: Transaction) {
        this.transactions.push(obj)
        if (obj.getType() === 'debit') {
            this.solde -= obj.getAmount()
            this.debitCounter++
            this.totalDebit += obj.getAmount()
        } else {
            this.solde += obj.getAmount()
            this.creditCounter++
            this.totalCredit += obj.getAmount()
        }
        this.notify()
    }

    getSolde() {
        return this.solde
    }

    getDebitCounter() {
        return this.debitCounter
    }

    getCreditCounter() {
        return this.creditCounter
    }

    getTotalDebit() {
        return this.totalDebit
    }

    getTotalCredit() {
        return this.totalCredit
    }

    getTransaction() {
        return this.transactions
    }

    subscribe(obs: IObserver) {
        this.observers.push(obs)
        obs.update(this)
    }

    unsubscribe(obs: IObserver) {
        this.observers.splice(this.observers.indexOf(obs), 1)
    }

    notify() {
        for (const elem of this.observers) {
            elem.update(this)
        }
    }
}

export class Transaction {
    constructor(
        private _type: string, 
        private _amount: number, 
        private _who: string, 
        private _reason: string
    ) {}

    getType() {
        return this._type
    }
    getAmount() {
        return this._amount
    }
    getWho() {
        return this._who
    }
    getReason() {
        return this._reason
    }
}
