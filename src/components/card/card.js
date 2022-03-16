import React from "react";
import './styles.css'

function Card({pokemon}){

    return (
        <div class="card mx-auto" id="crd">
        <div class="card-body">
            <img src={pokemon.sprites.front_default} alt=''></img>
            <h5 class="card-title">{pokemon.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
    )

}
export default Card