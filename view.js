export default class View {
    constructor() {
        this._maxInput = document.getElementById("max");
        this._urlInput = document.getElementById("url");
        this._tminInput = document.getElementById("tmin");
        this._tmaxInput = document.getElementById("tmax");
    }

    updateView(config) {
        this._maxInput.value = config.max;
        this._urlInput.value = config.url;
        this._tminInput.value = config.tmin;
        this._tmaxInput.value = config.tmax;
    }
}