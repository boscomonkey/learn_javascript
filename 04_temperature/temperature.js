function f2c(fah) {
    return new Temperature(fah).celcius();
}

function c2f(cel) {
    return new Temperature().setCelcius(cel).fahrenheit();
}

function Temperature(initialFahrenheit) {
    this.celcius = function() {
        return this.fahrenheitToCelcius(initialFahrenheit);
    };

    this.celciusToFahrenheit = function(cel) {
        return cel * 9 / 5 + 32;
    };

    this.fahrenheit = function() {
        return initialFahrenheit;
    };

    this.fahrenheitToCelcius = function(fah) {
        return (fah - 32) * 5 / 9;
    };

    this.setCelcius = function(cel) {
        initialFahrenheit = this.celciusToFahrenheit(cel);
        return this;	// allows chaining
    };

    this.setFahrenheit = function(fah) {
        initialFahrenheit = fah;
        return this;	// allows chaining
    };

}
