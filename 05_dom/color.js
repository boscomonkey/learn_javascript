function Color(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;

    this.gradient = function(other, amount) {
        if (amount < 0) {
            amount = 0;
        }
        else if (amount > 1) {
            amount = 1;
        }

        var dRed = other.red - this.red;
        var dGreen = other.green - this.green;
        var dBlue = other.blue - this.blue;

        var percentRed = dRed * amount;
        var percentGreen = dGreen * amount;
        var percentBlue = dBlue * amount;

        return new Color(
            Math.floor(this.red + percentRed),
            Math.floor(this.green + percentGreen),
            Math.floor(this.blue + percentBlue)
        );
    };

    this.toHex = function() {
        return '#' +
            this.hex(this.red) +
            this.hex(this.green) +
            this.hex(this.blue);
    };

    // utility

    this.hex = function(num, padding) {
        var str = num.toString(16);
        padding = typeof (padding) === "undefined" || padding === null ?
            2 :
            padding;

        while (str.length < padding) {
            str = "0" + str;
        }

        return str;
    };
}
