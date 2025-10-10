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

export {Page};

// class HomePage {
//     constructor() {
//         console.log('hello');
//         const div = document.createElement('div');
//         div.textContent = "TEST";
//         const board = document.querySelector('.board');
//         board.appendChild(div);
//     }
// }

// export {HomePage};

// We creating stuff inside the board element