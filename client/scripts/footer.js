export class Footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <footer class="footer-container">
            <div class="container">
                Copyright &copy; 2011 - 2018 Sabka Bazaar Grocery Supplies Pvt Ltd
            </div>
        </footer>
        `
    }
}