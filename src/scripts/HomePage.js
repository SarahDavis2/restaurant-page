class Page {
    constructor() {
        this.board = document.querySelector('.board');
    }
    addTitle(inputTitle) {
        const title = document.createElement('div');
        const h1 = document.createElement('h1');

        title.classList.add('card', 'title');
        h1.textContent = inputTitle;

        this.board.appendChild(title);
        title.appendChild(h1);
    }
    addCard(inputHeader, inputBody) {
        const card = document.createElement('div');
        const header = document.createElement('h2');
        const body = document.createElement('p');

        card.classList.add('card');
        header.textContent = inputHeader;
        body.textContent = inputBody;

        this.board.appendChild(card);
        card.appendChild(header);
        card.appendChild(body);
    }
}


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
        const card = document.createElement('div');
        const header = document.createElement('h2');
        const ul = document.createElement('ul');

        card.classList.add('card');
        header.textContent = inputHeader;
        ul.setAttribute('role', 'list');
        list.forEach((item) => {
            const addItem = document.createElement('li');
            addItem.textContent = item;
            ul.appendChild(addItem);
        });

        this.board.appendChild(card);
        card.appendChild(header);
        card.appendChild(ul);
    }
}

export {HomePage};


// We creating stuff inside the board element