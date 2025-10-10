// scripts
import {HomePage} from "./scripts/HomePage.js";
import {About} from "./scripts/About.js";
import {Menu} from "./scripts/Menu.js";

// styles
import "./styles/reset.css";
import "./styles.css";

class LoadPage {
    constructor() {
        this.board = document.querySelector('.board');
        new HomePage;
    }
    clear() {
        this.board.innerHTML = '';
    }
}
new LoadPage();

// for tests
// new HomePage();
// new About();
// new Menu();

// TODO: ADD IMAGES TO MENU WITH WEBPACK SUPPORT
// ALSO AM I SUPPOSE TO ADD STYLING THROUGH JAVASCRIPT AND NOT CSS?
// MAY NEED TO EXTEND ENTIRE PAGE TO WINDOW HEIGHT
// MAKE SURE PAGE VARIABLES AER PRIVATE?