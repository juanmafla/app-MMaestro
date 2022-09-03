import React from "react";
import './player.css';
import pback from './img/pback.svg'
import pplay from './img/pplay.svg'
import ppause from './img/ppause.svg'
import precord from './img/precord.svg'
import pforward from './img/pforward.svg'
import prepeat from './img/prepeat.svg'

function Player() {
    return (
        <div id="Mm-player">
            <div className="Mm-player-col1">
                <p className="Mm-player-col1-m1">00:32 </p>
                <p className="Mm-player-col1-m2">04:21</p>
            </div>
            <div className="Mm-player-col2">
                <ul>
                    <li>
                        <button>
                            <img src={pback} alt="" />
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src={pplay} alt=""/>
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src={ppause} alt=""/>
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src={precord} alt=""/>
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src={pforward} alt=""/>
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src={prepeat} alt=""/>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="Mm-player-col3">
                <p>4.3.1.2</p>
            </div>
        </div>
    );
}

export { Player };