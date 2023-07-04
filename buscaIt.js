class SearchIt {

    constructor(_url, _dictionaryIt) {
        this._url = _url;
        this._dicionary = _dictionaryIt;
        this.done = false;
    }

    next() {
        let r = this._dicionary.next();
        if(r.done) {
            return r;
        }
        return {
            value: `${this._url}${encodeURIComponent(r.value)}`,
            done: false
        }
    }

}

export default SearchIt;