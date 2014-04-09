beforeEach(function() {
    jasmine.addMatchers({
        toBeCloseTo: function() {
            return {
                compare: function(expected, precision) {
	            precision = precision || 2;
	            var multiplier = Math.pow(10, precision);
	            var actual = Math.round(this.actual * multiplier);
	            expected = Math.round(expected * multiplier);
	            return {pass: expected == actual};
                }

            }
        }
    })
});
