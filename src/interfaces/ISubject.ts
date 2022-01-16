import { IObserver } from "./IObserver";

export interface ISubject {
    subscribe(obs: IObserver)
    unsubscribe(obs: IObserver)
    notify()
}