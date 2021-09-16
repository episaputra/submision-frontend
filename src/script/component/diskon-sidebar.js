class DiskonSideBar extends HTMLElement {

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
          color: red;
          padding: 5px 22px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 10px;
          border-radius: 6px;
          border: solid 2px red;
          font-weight: bold;
        }
        p {
          font-family: "Times New Roman", Times, serif;
        }
        .green {
          color: green;
          border: solid 2px green;
        }
      </style>
      <li><button class="btn-sm green">List Minuman Tren Kekikinian</button></li>
        <p>AT&T</p>
        <p>ACID</p>
        <p>Derby</p>
        <p>Zorro</p>
      <li><button class="btn-sm green">Discount 25 %</button></li>
        <p>Karsk</p>
        <p>Boxcar</p>
        <p>Melya</p>
        <p>Kir</p>`
  }
}

customElements.define("diskon-sidebar", DiskonSideBar);



//Epi Saputra  - Dicoding Indonesia