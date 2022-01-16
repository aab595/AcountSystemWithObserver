import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";

export class Transaction implements ISubject {
    private transaction: IObserver[] = []

    constructor(private type: string, private amount: number, private who: string, private detail: string) {
        //
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
        this.notify()
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