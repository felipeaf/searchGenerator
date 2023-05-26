import { getRandomArbitrary } from "./utils.js"

export default class ArrayRandomIterator {
    constructor(array, max) {
        this._array=array;
        if(max) {
            this._max=max;
        }
        this._counter=0;
        this._pastIndexes = new Set();
        this._doneObj = {
            value: undefined,
            done: true
        }
        Object.freeze(this._doneObj);
    }

    _nextIndex() {
        let result;
        while(true) {
            result = Math.floor(getRandomArbitrary(0, this._array.length));
            if(!this._pastIndexes.has(result)) {
                this._pastIndexes.add(result);
                return result;
            }
        }
    }

    next() {
        if(this._counter++ == this._max) {
            return this._doneObj;
        }
        
        if(this._pastIndexes.size === this._max || this._pastIndexes.size === this._array.length) {
            return this._doneObj;
        }

        return {
            value: this._array[this._nextIndex()],
            done: false
        };
    }
}