import {Page} from "./Page.js";

class HomePage extends Page {
    constructor() {
        super();
        const HOURS = [
            "Sunday: 11am-5pm", 
            "Monday: 7am-3pm", 
            "Tuesday: 7am-5pm", 
            "Wednesday: 7am-5pm",
            "Thursday: 7am-5pm",
            "Friday: 7am-10pm",
            "Saturday: 11am-10pm",
        ];

        this.addTitle("Slushy's Smoothie Bar");
        this.addCard("Customer Review", '"This bar has the most delicious smoothies and best bartenders!"');
        this.addHours("Hours", HOURS);
        this.addCard("Location", "6769 Top Bars Street, Barstool, NY, 69420");
    }   
    addHours(inputHeader, list) {
        const card = this.addBlankCard(inputHeader);
        const ul = document.createElement('ul');

        ul.setAttribute('role', 'list');
        list.forEach((item) => {
            const addItem = document.createElement('li');
            addItem.textContent = item;
            ul.appendChild(addItem);
        });

        card.appendChild(ul);
    }
}

export {HomePage};