import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";

export class Transaction implements ISubject {
    private transaction: IObserver[] = []
    static totalAmount: number = 0 // class attribute
    static totalDebit: number = 0 // class attribute
    static totalCredit: number = 0 // class attribute

    constructor(private type: string, private amount: number, private who: string, private detail: string) {
        if (this.type === "debit") {
            Transaction.totalAmount -= this.amount
            Transaction.totalDebit++
        } else {
            Transaction.totalAmount += this.amount
            Transaction.totalCredit++
        }
    }

    getTotalAmount() {
        return Transaction.totalAmount
    }

    getTotalDebit() {
        return Transaction.totalDebit
    }
    
    getTotalCredit() {
        return Transaction.totalCredit
    }

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
    
    setType(value: string) {
        this.type = value
        this.notify()
    }
    
    setAmount(value: number) {
        this.amount = value
        this.notify()
    }
    
    setWho(value: string) {
        this.who = value
        this.notify()
    }
    
    setDetail(value: string) {
        this.detail = value
        this.notify()
    }

    subscribe(obs: IObserver) {
        this.transaction.push(obs)
        // this.notify()
    }

    unsubscribe(obs: IObserver) {
        const idx = this.transaction.indexOf(obs)
        this.transaction.splice(idx, 1)
    }

    notify() {
        for (const observer of this.transaction) {
            observer.update(
                {
                    type: this.type,
                    amount: this.amount,
                    who: this.who,
                    detail: this.detail
                }
            )
        }
    }
}