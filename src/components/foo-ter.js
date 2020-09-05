class Footer extends HTMLElement {
        connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="page-footer font-small cyan darken-3">
  <div class="container">
    <div class="row">
      <div class="col-md-12 py-5">
        <div class="icon-footer mb-2">
          <a class="fb-ic">
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>

          <a class="tw-ic">
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>

          <a class="gplus-ic">
            <i class="fa fa-map-marker fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>

          <a class="ins-ic">
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
    
        </div>
      </div>
    </div>
  </div>
</footer>
        `
    }
}

customElements.define("foo-ter", Footer);