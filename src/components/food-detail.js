class FoodDetail extends HTMLElement {
    set DetailFood(detail) {
        this._detail = detail;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="modal fade bd-example-modal-lg" id="foodDetail" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="card m-auto" style="max-width:700px">
                    <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="${this._detail.strMealThumb}" class="card-img img-thumbnail" alt="...">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this._detail.strMeal}</h5>
                                <h6 class="text-category">${this._detail.strArea} | ${this._detail.strCategory}</h6>
                                <h5 class="mt-3">Receipes</h5>
                                <p class="text-desc">${this._detail.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        `;
    }
}

customElements.define('food-detail', FoodDetail);