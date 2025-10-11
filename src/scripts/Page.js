class Page {
    #board = document.querySelector('.board');
    constructor() {}
    #addBlankTitle(inputTitle) {
        const title = document.createElement('div');
        const h1 = document.createElement('h1');

        h1.textContent = inputTitle;

        this.#board.appendChild(title);
        title.appendChild(h1);

        return title;
    }
    addTitle(inputTitle) {
        const title = this.#addBlankTitle(inputTitle);
        title.classList.add('card', 'title');
    }
    addSubTitle(inputTitle) {
        const title = this.#addBlankTitle(inputTitle);
        title.classList.add('card', 'subtitle');
    }
    addBlankCard(inputHeader) {
        const card = document.createElement('div');
        const header = document.createElement('h2');

        card.classList.add('card');
        header.textContent = inputHeader;

        this.#board.appendChild(card);
        card.appendChild(header);

        return card;
    }
    addCard(inputHeader, inputBody) {
        const card = this.addBlankCard(inputHeader);
        const body = document.createElement('p');
        body.textContent = inputBody;
        card.appendChild(body);
    }}

export {Page};