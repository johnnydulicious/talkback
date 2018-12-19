export default class Util {
    constructor(options) {
        this.options = options;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}