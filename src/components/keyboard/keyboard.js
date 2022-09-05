import React from "react";
import './keyboard.css'
import Triangle from './img/Triangle.svg'
import kboard from './img/kboard.svg'
import expression from './img/expression.svg'
import tempo from './img/tempo.svg'
import ScrollContainer from 'react-indiana-drag-scroll'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler
  );
  
  export const options = {
    responsive: true,
    elements: {
        point:{
            radius: 0
        }
    },
    legend: {
        display: false
    },    
    scales: {
        x: {
            ticks: {
              color: '#FFFFFF',
              font: {
                family: 'Avenir Roman',
                size: 10
              }  
            },
            grid: {
                display: false,
                color: '#fff'
            }
        },
        y: {
            ticks: {
              color: '#FFFFFF',
              font: {
                family: 'Avenir Roman',
                size: 9
              }
            },
            grid: {
                color: '#fff',
                borderDash: [1, 4]
            }
        }
    }
  };
  
  const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [0, 10, 5, 2, 20, 30, 45, 17, 28, 2],
        backgroundColor: '#f5df758f',
        borderColor: '#f5df758f',
        fill: true
      },
      {
        label: 'Dataset 2',
        data: [0, 56, 24, 38, 20, 21, 32, 20, 30, 40],
        backgroundColor: '#c07560b3',
        borderColor: '#c07560b3',
        fill: true
      },
    ],
  };

function Keyboard(props) {
    return (
        <div id="MM-maestro-keyboard">
            <div className="MM-maestro-keyboard-main">
                <div className="MM-maestro-keyboard-main-wrapper">
                    <div className="MM-maestro-keyboard-main-rule">
                        <div className="MM-maestro-keyboard-main-rule-linemarker">
                            <img className="MM-maestro-keyboard-main-rule-linemarker-tmarker" src={Triangle} alt="" />
                            <div className="MM-maestro-keyboard-main-rule-linemarker-line"></div>
                        </div>
                        
                        <div className="MM-maestro-keyboard-main-rule-marker">
                            4/4
                        </div>
                        <div className="MM-maestro-keyboard-main-rule-lines">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>                
                        <div className="MM-maestro-keyboard-main-rule-marker">
                            2/4
                        </div>
                        <div className="MM-maestro-keyboard-main-rule-lines">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>   
                        <div className="MM-maestro-keyboard-main-rule-marker">
                            4/4
                        </div>
                        <div className="MM-maestro-keyboard-main-rule-lines">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>   
                        <div className="MM-maestro-keyboard-main-rule-marker">
                            2/4
                        </div>
                    </div>
                    <div className="MM-maestro-keyboard-main-board">
                        <div className="MM-maestro-keyboard-main-board-key">
                            <img src={kboard} alt="" />
                        </div>
                        <ScrollContainer className="scroll-container MM-maestro-keyboard-main-board-lines">
                        
                            <div className="MM-maestro-keyboard-main-board-lines-notes" style={{top: '69px', left: '89.33px', backgroundColor: '#B8715C', maxWidth: '69px'}} ></div>
                            <div className="MM-maestro-keyboard-main-board-lines-notes" style={{top:'179px', left: '167.33px', backgroundColor:'#B48A6E', maxWidth:'69px'}}></div>
                            <div className="MM-maestro-keyboard-main-board-lines-notes" style={{top:'305px', left: '89.33px', backgroundColor:'#B48A6E', maxWidth:'69px'}}></div>
                            <div className="MM-maestro-keyboard-main-board-lines-notes" style={{top:'255px', left: '290.33px', backgroundColor:'#F2E6B1', maxWidth:'118px'}}></div>
                            <div className="MM-maestro-keyboard-main-board-lines-notes" style={{top:'64px', left: '290.33px', backgroundColor:'#B48A6E', maxWidth:'69px'}}></div>
                            <div className="MM-maestro-keyboard-main-board-lines-notes" style={{top:'96px', left: '419.33px', backgroundColor:'#DE9478', maxWidth:'69px'}}></div>
                            <div className="MM-maestro-keyboard-main-board-lines-notes" style={{top:'45px', left: '505.33px', backgroundColor:'#C19958', maxWidth:'37px'}}></div>
                            <div className="MM-maestro-keyboard-main-board-lines-notes" style={{top:'223px', left: '522.33px', backgroundColor:'#726B5B', maxWidth:'98px'}}></div>
                            <div className="MM-maestro-keyboard-main-board-lines-notes" style={{top:'24px', left: '620.33px', backgroundColor:'#B5C2B7', maxWidth:'50px'}}></div>
                            <div className="MM-maestro-keyboard-main-board-lines-notes" style={{top:'331px', left: '675.33px', backgroundColor:'#E5D771', maxWidth:'69px'}}></div>
                            <div className="MM-maestro-keyboard-main-board-lines-notes" style={{top:'96px', left: '792.33px', backgroundColor:'#FBA786', maxWidth:'69px'}}></div>
                            <div className="MM-maestro-keyboard-main-board-lines-notes" style={{top:'96px', left: '1500.33px', backgroundColor:'#FBA786', maxWidth:'69px'}}></div>
                        
                        </ScrollContainer>
                    </div>
                    <div className="MM-maestro-keyboard-main-chart">
                        <div className="MM-maestro-keyboard-main-chart-controls">
                            <div className="MM-maestro-keyboard-main-chart-control-ex">
                                <img src={expression} alt="" />
                                <p>
                                    Expression
                                </p>
                            </div>
                            <div className="MM-maestro-keyboard-main-chart-control-tem">
                                <img src={tempo} alt="" />
                                <p>Tempo</p>
                            </div>
                            <div className="MM-maestro-keyboard-main-chart-control-btn">
                                <button>
                                    Normalize
                                </button>
                            </div>
                        </div>
                        <div className="MM-maestro-keyboard-main-chart-chart">
                            <Line options={options} data={data} />
                        </div>
                        
                    </div>
            </div>
                <div className="MM-maestro-keyboard-main-control-range">
                    <input type="range" />
                </div>
            </div>
            <div className="MM-maestro-keyboard-controls">
                <div className="MM-maestro-keyboard-controls-control1">
                    {props.children}
                </div>
                <div className="MM-maestro-keyboard-controls-control2">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export { Keyboard };