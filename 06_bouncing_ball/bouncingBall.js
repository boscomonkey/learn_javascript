function BouncingBall(arena) {
    this.div = document.createElement('div');
    with (this.div.style) {
        height          = '10px';
        width           = '10px';
        backgroundColor = 'rgb(255, 0, 0)';
        left            = '0px';
        top             = '0px';
        position        = 'relative';
    }
    arena.appendChild(this.div);

    this.height = 10;
    this.width  = 10;
    this.x      = 0;
    this.y      = 0;
    this.color  = '#FF0000';

    this.velocity = 10;

    this.move = function(x, y) {
        with (this.div.style) {
            left = String(x) + 'px';
            top = String(y) + 'px';
        }
        return this;	// allows chaining
    };
}
