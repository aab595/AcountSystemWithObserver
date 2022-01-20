import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";

export class Caisse implements ISubject {
    private observers: IObserver[] = []
    private debitCounter: number = 0
    private creditCounter: number = 0
    private results: object[] = []

    constructor(
        private solde: number, 
        private transactions: Transaction[] = []
    ) {
        this.notify()
    }

    addTransaction(obj: Transaction) {
        this.transactions.push(obj)
        // console.log("Trans : ", this.transactions);
        this.notify()
    }

    subscribe(obs: IObserver) {
        this.observers.push(obs)
        this.notify()
    }

    unsubscribe(obs: IObserver) {
        this.observers.splice(this.observers.indexOf(obs), 1)
    }

    notify() {
        for (const elem of this.observers) {
            elem.update(this.transactions)
        }
    }
}

export class Transaction {
    constructor(
        private type: string, 
        private amount: number, 
        private who: string, 
        private detail: string
    ) {}

    getType() {
        return this.type
    }
    getAmount() {
        return this.amount
    }
    getWho() {
        return this.who
    }
    getDetail() {
        return this.detail
    }
}
