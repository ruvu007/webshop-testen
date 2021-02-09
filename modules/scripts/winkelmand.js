import {Voorraad} from "./voorraad.js";
import {Chocola, Koek, Snoep} from "./artikelen.js";

function Winkelmand() {
    // Properties
    let totaalBedrag;
    let snoep, chocola, koek;

    const hoeveelheid = {
        snoep: 0,
        chocola: 0,
        koek: 0
    }

    // Initialisatie
    let initWinkelmand = function () {
        snoep = new Snoep();
        chocola = new Chocola();
        koek = new Koek();

        totaalBedrag = 0;
    }
    initWinkelmand();

    // Getters

    // Setters

}
export {Winkelmand};