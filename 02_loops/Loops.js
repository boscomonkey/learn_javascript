function repeat(string, count) {
    var buffer = [];
    for (var ii = 0; ii < count ; ii++) {
        buffer.push(string);
    }
    return buffer.join('');
}

function join(arry, delimiter) {
    if (undefined === delimiter) {
        delimiter = '';
    }
    return arry.join(delimiter);
}

function sum(numbers) {
    var total = 0;
    for (var ii = 0; ii < numbers.length; ii++) {
        total += numbers[ii];
    }
    return total;
}

function paramify(hash) {
    var keys = [];
    for (var key in hash) {
        keys.push(key);
    }
    var sortedKeys = keys.sort();

    var arry = [];
    for (var ii = 0; ii < sortedKeys.length; ii++) {
        var key = sortedKeys[ii];
        if (hash.hasOwnProperty(key)) {
            arry.push(key + '=' + hash[key]);
        }
    }
    return arry.join('&');
}

function factorial(n) {
    if (n < 2) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
