// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var error = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    var cash = {};
    if (currency > 10000)
        return error;
    else if (currency <= 0) return cash;
    else {
     var h = Math.floor(currency/50);
     if (h > 0) cash.H = h;
     var q = Math.floor((currency - 50*h)/25);
     if (q > 0) cash.Q = q;
     var d = Math.floor((currency - 50*h - 25*q)/10);
     if (d > 0) cash.D = d;
     var n = Math.floor((currency - 50*h - 25*q - 10*d)/5);
     if (n > 0) cash.N = n;
     var p = Math.floor((currency - 50*h - 25*q - 10*d - 5*n)/1);
     if (p > 0) cash.P = p;


        return cash;
    }

}
