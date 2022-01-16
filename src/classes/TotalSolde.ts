import { IObserver } from "../interfaces/IObserver";

export class TotalSolde implements IObserver {
    update(data: object) {
        console.log(data["amount"]);
    }
}