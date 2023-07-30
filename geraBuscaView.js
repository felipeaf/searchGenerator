import { getRandomArbitrary } from "./utils.js"

const STATES = {
    "RUNNING": Symbol("RUNNING"),
    "STOPPED": Symbol("STOPPED")
}

export default class GeraBuscaView {
    constructor(buscaIt, tmin, tmax) {
        this._buscaIt = buscaIt;
        this._tmin = tmin*1000;
        this._tmax = tmax*1000;
        this._state = STATES.STOPPED;
        document.getElementById("stopButton").addEventListener("click", this.stop.bind(this));
    }

    _randomTimeout() {
        return getRandomArbitrary(this._tmin, this._tmax);
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