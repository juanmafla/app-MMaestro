import React from "react";
import './andante.css';
import chartright from './img/chart-right.svg'

function Andante() {
    return (
        <div id="Mm-andante">
            <div class="Mm-andante-andante">
                <p class="Mm-andante-andante-number">100</p>
                <p class="Mm-andante-andante-text">Andante</p>
            </div>

            <div class="Mm-andante-andante-quarter">
                <p class="Mm-andante-andante-quarternumber">4/4</p>
            </div>

            <img src={chartright}  alt=""/>
        </div>
    );
}

export { Andante };