import React from "react";
import "./style.css";

function Nav() {
    return <div className="nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="google.com">Google Books</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="google.com">Search <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link active" href="google.com">Saved</a>
      
      
    </div>
  </div>
</nav>
    
    </div>;
}

export default Nav;