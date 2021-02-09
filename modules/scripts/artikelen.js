function Snoep() {
    const prijs = 2.45;
    const soort = ['Salmiak drop', 'Zoute drop', 'Winegums'];

    this.getPrijs = function () {
        return prijs;
    }

    this.getSoort = function () {
        return soort;
    }

}
export {Snoep};

function Chocola() {

}
export { Chocola};

function Koek() {

}
export {Koek};