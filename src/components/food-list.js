class FoodList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="title-food">
          <h4>Food List</h4>
      </div>
      <div id="food-list" class="row mt-3">
      </div>
        `;
  }
}

customElements.define("food-list", FoodList);