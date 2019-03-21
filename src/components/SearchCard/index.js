import React from "react";
import "./style.css";

// Will need to make a ul and make each card an li

function SearchCard() {
    return <div className="card">
    <div class="container">
    <div class="card flex-row flex-wrap">
        <div class="card-header border-0">
<input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </div>
        <div class="card-block px-2">
            <h4 class="card-title">Search for a book!</h4>
        </div>
    </div>
    
</div>
</div>
}

export default SearchCard;