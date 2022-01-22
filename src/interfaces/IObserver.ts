import { Caisse } from "../classes/Caisse";

export interface IObserver {
    update(data: Caisse)
}