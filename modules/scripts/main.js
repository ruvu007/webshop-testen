import {Snoep, Chocola, Koek} from "./artikelen.js";
import {Winkelmand} from "./winkelmand.js";
import {Voorraad} from "./voorraad.js";
import {btw} from "./tax.js";

let snoep = new Snoep();

alert(
    snoep.getSoort() + '\n' +
    Koek.name + '\n' +
    Chocola.name + '\n' +
    Voorraad.name + '\n' +
    btw.hoog
);
