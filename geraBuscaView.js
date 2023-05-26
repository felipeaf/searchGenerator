import { getRandomArbitrary } from "./utils.js"

export default class GeraBuscaView {
    constructor(_buscaIt) {
        this._buscaIt = _buscaIt;
    }

    _randomTimeout() {
        return getRandomArbitrary(3000, 10000);
    }

    run() {
        const atual = this._buscaIt.next();
        if(atual.done) {return};
        window.open(atual.value, '_blank');
        //console.log(`${new Date()} ${atual.value}`)
        setTimeout(() => this.run(), this._randomTimeout());
    }
}