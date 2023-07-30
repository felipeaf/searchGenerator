export default class ParamParser {


    tryParseConfig() {

        if(window.location.search.length<=1) {
            return;
        }

        let queryData = new URLSearchParams(window.location.search)
        this._config = {
            url: queryData.get("url"),
            max: queryData.get("max"),
            tmin: queryData.get("tmin"),
            tmax: queryData.get("tmax")
        }

    }

    constructor() {
        this.tryParseConfig();
        
    }

    get config() {
        return this._config;
    }
}