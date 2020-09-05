class BannerFood extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron">
        <div class="intro">
            <h1 class="text-banner">Seafood Resto</h1>
            <button type="button" class="btn btn-outline-light btn-gofood">GO FOOD</button>
        </div>
    </div>
        `;
    }
}

customElements.define("banner-food", BannerFood);