export default class View {
    constructor() {
        this._maxInput = document.getElementById("max");
        this._urlInput = document.getElementById("url");
    }

    updateView(config) {
        this._maxInput.value = config.max;
        this._urlInput.value = config.url;
    }
}