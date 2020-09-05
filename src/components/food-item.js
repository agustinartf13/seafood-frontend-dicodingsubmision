class FoodItem extends HTMLElement {
  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="row" style="margin-left: 50px">
        <div class="col-md-4 img-food">
          <div class="card mb-5" style="width: 18rem;">
          <img class="card-img-top img-food" src="${this._food.strMealThumb}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${this._food.strMeal}</h5>
            <button type="button" class="btn btn-warning mt-2 btn-food"  id="${this._food.idMeal}" data-toggle="modal" data-target="#exampleModal">
              Detail Food
            </button>
          </div>
        </div>
        </div>
      </div>
    `;
  }
}

customElements.define("food-item", FoodItem);