import React from "react";
import "./style.css";

// Will need to make a ul and make each card an li

function Card() {
    return <div className="card">
    <div class="container">
    <div class="card flex-row flex-wrap">
        <div class="card-header border-0">
            <img src="//placehold.it/200" alt=""/>
        </div>
        <div class="card-block px-2">
            <h4 class="card-title">Book Title</h4>
            <p class="card-text">Book Description</p>
        </div>
    </div>
    
</div>
</div>
}

export default Card;