import React from "react";
import './header.css'
import Monitor from './img/Monitor.svg'
import Setting from './img/Setting.svg'

function Header() {
    return (
        <header id="MM-header">
            <div className="MM-header-grid">
                <div className="MM-header-grid-col1">
                    <h1>M Maestro</h1>
                </div>
                <div  className="MM-header-grid-col2">
                    <p>Iberia Book 1 Evocation</p>
                </div>
                <div  className="MM-header-grid-col3">
                    <div>
                        <p>MIDI CH</p>
                        <ul>
                            <li className="active">1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                    <div>
                        <p>PAN</p>
                        <input type="range" />
                    </div>
                    <div>
                        <p>TUNE</p>
                        <input type="range" />
                    </div>
                    <div>
                        <p>VOL</p>
                        <input type="range" />
                    </div>
                </div>
                <div className="MM-header-grid-col4">
                    <img src={Monitor} alt="" />
                </div>
                <div className="MM-header-grid-col5">
                    <img src={Setting} alt="" />
                </div>
            </div>
        </header>
    );
}

export { Header };