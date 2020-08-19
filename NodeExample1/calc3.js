var util = require('util');
var EventEmitter = require('events').EventEmitter


class Calc {
    constructor() {
        var self = this;

        this.on('stop', function () {
            console.log('stop event');
        });
    }
    add(a, b) {
        return a + b;
    }
}

util.inherits(Calc, EventEmitter);


module.exports = Calc;
module.exports.title = 'calculator'