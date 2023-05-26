class BuscaIt {

    constructor(_url, _dicionarioIt) {
        this._url = _url;
        this._dicionario = _dicionarioIt;
        this.done = false;
    }

    next() {
        let r = this._dicionario.next();
        if(r.done) {
            return r;
        }
        return {
            value: `${this._url}${encodeURIComponent(r.value)}`,
            done: false
        }
    }

}

export default BuscaIt;