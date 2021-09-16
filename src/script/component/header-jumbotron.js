class HeaderJumbotron extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .btn-sm {
                background-color: white; 
                border: none;
                color: #46acfa;
                padding: 10px 27px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 14px;
                border-radius: 6px;
                border: solid 2px #0757ad;
            }
            .card {
                margin-top: 2.23%;
                margin-left: 8%;
            }
            .btn-clicked {
                background-color: #0757ad;
                color: white; 
            }
            @media screen and (max-width: 600px) {
                .btn-sm {
                    width: 100%;
                    margin-left: -4.5%;
                }
            }
        </style>
        <div class="card">
            <button class="btn-clicked card btn-sm">All Minuman Tren</button>
            <button class="card btn-sm">Varian Rasa</button>
            <button class="card btn-sm">Product Kekinian</button>
            <button class="card btn-sm">Populer</button>
        </div>
        `
    }
}

customElements.define("header-jumbotron", HeaderJumbotron);





//Epi Saputra  - Dicoding Indonesia