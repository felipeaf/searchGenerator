import { getRandomArbitrary } from "./utils.js"

const STATES = {
    "RUNNING": Symbol("RUNNING"),
    "STOPPED": Symbol("STOPPED")
}

export default class GeraBuscaView {
    constructor(_buscaIt) {
        this._buscaIt = _buscaIt;
        this._state = STATES.STOPPED;
        document.getElementById("stopButton").addEventListener("click", this.stop.bind(this));
    }

    _randomTimeout() {
        return getRandomArbitrary(3000, 10000);
    }

    run() {
        this._state= STATES.RUNNING;
        this._runLoop();
    }

    _runLoop() {
        const atual = this._buscaIt.next();
        
        if(atual.done) return;
        
        if(this._state !== STATES.RUNNING) return;
        
        window.open(atual.value, '_blank');
        //console.log(`${new Date()} ${atual.value}`)
        setTimeout(() => this._runLoop(), this._randomTimeout());
    }

    stop() {
        console.log("stop clicked", this._state)
        this._state = STATES.STOPPED;
    }
}