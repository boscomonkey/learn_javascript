var freezing = new Color(208, 230, 254);
var boiling = new Color(255, 50, 65);

function TemperatureWidget(id) {
    var self = this;

    if (undefined === id) {
        id = 'temperatureWidget';
    }

    this.widgetElement = document.getElementById(id);
    this.fahrenheit = document.getElementsByName('fahrenheit')[0];
    this.celcius = document.getElementsByClassName('celcius')[0];
    this.convertButton = document.getElementsByName('convert')[0];

    this.convert = function() {
        var fah = Number(this.fahrenheit.value);
        var cel = Math.round(
            new Temperature(fah).celcius()
        );

        this.celcius.innerHTML = cel;
        this.widgetElement.style.backgroundColor = this.colorFor(cel);
    };

    this.convertButton.onclick = function(event) { self.convert(); };

    this.colorFor = function(cel) {
        var percentage = cel / 100.0;
        return freezing.gradient(boiling, percentage).toHex();
    };
}
