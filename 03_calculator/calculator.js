function Calculator() {
    this.stack = [0];

    this.add = function(num) {
        var lastValue = this.pop();
        this.push(lastValue + num);
    };

    this.subtract = function(num) {
        var lastValue = this.pop();
        this.push(lastValue - num);
    };

    this.value = function() {
        var ii = this.stack.length - 1;
        return this.stack[ii];
    };

    // RPN

    this.divide = function() {
        var arg2 = this.pop();
        var arg1 = this.pop();
        this.push(arg1 / arg2);
    };

    this.minus = function() {
        var arg2 = this.pop();
        var arg1 = this.pop();
        this.push(arg1 - arg2);
    };

    this.plus = function() {
        this.push(this.pop() + this.pop());
    };

    this.pop = function() {
        if (this.stack.length < 1) {
            throw 'calculator is empty';
        }

        return this.stack.pop();
    }

    this.push = function(num) {
        this.stack.push(num);
    };

    this.times = function() {
        this.push(this.pop() * this.pop());
    };

}
