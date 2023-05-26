export default class mainView {


    tryParseConfig() {

        if(window.location.search.length<=1) {
            return;
        }

        let queryData = new URLSearchParams(window.location.search)
        this._config = {
            url: queryData.get("url"),
            max: queryData.get("max")
        }

    }

    constructor() {
        this.tryParseConfig();
        
    }

    get config() {
        return this._config;
    }
}