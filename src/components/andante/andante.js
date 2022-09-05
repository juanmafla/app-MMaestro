import React from "react";
import './andante.css';
import chartright from './img/chart-right.svg'

function Andante() {
    return (
        <div id="Mm-andante">
            <div className="Mm-andante-andante">
                <p className="Mm-andante-andante-number">100</p>
                <p className="Mm-andante-andante-text">Andante</p>
            </div>

            <div className="Mm-andante-andante-quarter">
                <p className="Mm-andante-andante-quarternumber">4/4</p>
            </div>

            <img src={chartright}  alt=""/>
        </div>
    );
}

export { Andante };