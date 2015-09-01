function generatePrime(a, b) {
    "use strict";
    var e = [],
        pC = function (g) {
            var limit = Math.sqrt(g),
                mod = 2,
                output = 1;
            while (mod <= limit) {
                if (g % mod === 0) {
                    output = 0;
                    break;
                }
                mod += 1;
            }
            return output;
        };
    a = Number(a);
    b = Number(b);
    if (a >= 2 && a % Math.floor(a) === 0 && b > 0) {
        while (b > 0) {
            if (pC(a)) {
                e.push(a);
                b -= 1;
            }
            a += 1;
        }
    } else {
        e.push("Error: a >= 2 && b > 0 && (a & b) positive integers.");
    }
    return e;
}
