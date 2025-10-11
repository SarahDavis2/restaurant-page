import {Page} from "./Page.js";
import berry from "../assets/pics/berry-smoothie.jpg";
import green from "../assets/pics/green-smoothie.jpg";
import toast from "../assets/pics/avocado-toast.jpg";
import bagel from "../assets/pics/bagel.jpg";

class Menu extends Page {
    constructor() {
        super();
    }
    #addItem(inputName, inputDesc, inputPrice, inputImg) {
        const card = this.addBlankCard(inputName);
        const img = document.createElement('img');
        const desc = document.createElement('p');
        const price = document.createElement('p');

        card.classList.add('item');
        price.classList.add('price');
        img.src = inputImg;
        desc.textContent = inputDesc;
        price.textContent = inputPrice;

        card.appendChild(desc);
        card.appendChild(price);
        card.appendChild(img);
    }
    render() {
        this.addTitle("Menu");
        this.addSubTitle("Drinks");
        this.#addItem("Barry's Blastoff!", '"This mixed berry smoothie is ABSOLUTELY SCRUMPTIOUS!" -Barry', "$7", berry);
        this.#addItem("Greenie's Garden", 'This is the best grounded green leaf in town!"-Stone', "$6", green);
        this.addSubTitle("Food");
        this.#addItem("Avocado Toast", `"OMG. IT'S SO Creamy! :)" -Bernie`, "$7", toast);
        this.#addItem("Bagel Byte", "This bagel is larger than a bit, because you're taking large bytes!", "$5", bagel);
    }
}

export {Menu};