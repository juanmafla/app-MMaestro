import './App.css';
import { Header } from './components/header/header';
import { Keyboard } from './components/keyboard/keyboard'
import { Player } from './components/player/player'
import { Instruments } from './components/instruments/instruments'
import { Andante } from './components/andante/andante'
import { Control } from './components/control/control'

function App() {
  return (
    <div id="Mm-layout">
        <div className="MM-layout-header">
            <Header/>
        </div>
        <div className="MM-layout-board-player">
            <div>
                <Keyboard>
                    <Control/> 
                </Keyboard>
            </div>
            <div>
                <Player/>
            </div>
        </div>
        <div className="MM-layout-right">
            <div>
                <Instruments/>
            </div>
            <div>
                <Andante/>
            </div>
        </div>
    </div>
  );
}

export default App;
