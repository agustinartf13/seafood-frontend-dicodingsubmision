class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <a class="navbar-brand" href="#"><h3>Restaurant</h3></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">All Menu</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Food Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Drink Menu</a>
                    </li>
                </ul>
            </div>
        </nav>
        `;
    }

}
customElements.define("nav-bar", NavBar);