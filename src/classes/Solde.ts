import { IObserver } from "../interfaces/IObserver";
import { Caisse } from "./Caisse";

export class Solde implements IObserver {
    private htmlSolde: HTMLParagraphElement
    private htmlState: HTMLDivElement
    constructor() {
        this.htmlSolde = document.querySelector('#soldeText') as HTMLParagraphElement
        this.htmlState = document.querySelector('#state') as HTMLDivElement
    }

    update(data: Caisse) {
        // SOLDE
        this.htmlSolde.innerText = data.getSolde().toString()
        this.htmlSolde.style.color = (data.getSolde() > 0) ? "green" : "red"
        // STATE
        this.htmlState.style.width = "70%"
        this.htmlState.style.margin = "0 auto"
        this.htmlState.style.height = "40px"
        this.htmlState.style.borderRadius = "5px"
        // FOR THE STATE WE'VE TO FIX A LIMIT IN ORDER TO SET THE BADGE BG COLOR
        this.htmlState.style.backgroundColor = (data.getSolde() > 0) ? "green" : "red"
    }
}
