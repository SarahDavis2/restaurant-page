import {Page} from "./Page.js";

class Menu extends Page {
    constructor() {
        super();

        this.addTitle("Menu");
        this.addSubTitle("Drinks");
        this.addItem("Barry's Blastoff!", '"This mixed berry smoothie is ABSOLUTELY SCRUMPTIOUS!" -Barry', "$5");
        this.addSubTitle("Food");
        this.addItem("Avocado Toast", `"OMG. IT'S SO Creamy! :)" -Bernie`, "$7")
    }
    addItem(inputName, inputDesc, inputPrice) {
        const card = this.addBlankCard(inputName);
        const desc = document.createElement('p');
        const price = document.createElement('p');

        price.classList.add('price');
        desc.textContent = inputDesc;
        price.textContent = inputPrice;

        card.appendChild(desc);
        card.appendChild(price);
    }
}

export {Menu};