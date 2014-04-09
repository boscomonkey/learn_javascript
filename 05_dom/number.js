Number.prototype.toHex = function() {
    var color = new Color();
    return color.hex(this, 2);
};
