import React from "react";
import './instruments.css';
import check from './img/check.svg'
import instruments from './img/instruments.svg'

function Instruments() {
    return (
        <div id="Mm-instruments">
            <div className="Mm-instruments-topbar">
                <img src={check} alt="" />
            </div>
            <div className="Mm-instruments-instruments">
                <h3>All Instruments</h3>
                <img src={instruments} alt="" />
            </div>
        </div>
    );
}

export { Instruments };