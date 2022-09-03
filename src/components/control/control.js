import React from "react";
import './control.css'
import plus from './img/plus.svg'
import minus from './img/minus.svg'

function Control() {
    return (
        <div className="MM-maestro-control">
            <div className="MM-maestro-control-range">
                <input type="range" />
            </div>
            <div>
                <button>
                    <img src={plus} alt="" />
                </button>
            </div>
            <div>
                <button>
                    <img src={minus} alt="" />
                </button>
            </div>
        </div>
    );
}

export { Control };