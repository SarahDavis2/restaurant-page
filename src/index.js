// scripts
import {Home} from "./scripts/Home.js";
import {About} from "./scripts/About.js";
import {Menu} from "./scripts/Menu.js";

// styles
import "./styles/reset.css";
import "./styles.css";

class LoadPage {
    constructor() {
        // load renders
        this.home = new Home();
        this.menu = new Menu();
        this.about = new About();        
        
        // initiate data
        this.board = document.querySelector('.board');
        this.addBtnEventListener();
        
        // initiate initial home render
        this.home.render();
        const nav = document.querySelector('nav')
        const homeBtn = nav.firstElementChild;
        homeBtn.classList.add('selected');
        this.prvSelected = homeBtn;
    }
    addBtnEventListener() {
        const nav = document.querySelector('nav');
        nav.addEventListener('click', (e) => {
            this.btnSelect(e.target);
            this.clear();
            switch(e.target.textContent) {
                case 'Home':
                    this.home.render();
                    break;
                case 'Menu':
                    this.menu.render();
                    break;
                case 'About':
                    this.about.render();
            }
        });   
    }
    clear() {
        this.board.innerHTML = '';
    }
    btnSelect(btnSelected) {
        this.prvSelected.classList.remove('selected');
        btnSelected.classList.add('selected');
        this.prvSelected = btnSelected;
    }
}
new LoadPage();


// TODO: ADD IMAGES TO MENU WITH WEBPACK SUPPORT
// ALSO AM I SUPPOSE TO ADD STYLING THROUGH JAVASCRIPT AND NOT CSS?
// MAY NEED TO EXTEND ENTIRE PAGE TO WINDOW HEIGHT
// MAKE SURE PAGE VARIABLES AER PRIVATE?