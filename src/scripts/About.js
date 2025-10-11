import {Page} from "./Page.js"

class About extends Page {
    constructor() {
        super();
    }
    render() {
        this.addTitle("About Us");
        this.addCard("Sarah Davis (Owner)", "Hi, I am Sarah with a passion to share healthy and delicious smoothies at a young age of 20 years old.");
        this.addCard("Marry Jane (Manager)", "Hey! I am Marry and my biggest passion aside from healthy foods are people. That's why I love fostering such a good employee team.");
        this.addCard("John Doe (Star Employee)", "Hello, I am John and have really loved working here for over 5 years. The customers are great, and we have a really encouraging work environment.");
    }
}

export {About};