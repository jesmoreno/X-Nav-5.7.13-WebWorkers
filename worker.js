
onmessage = function (Event) {

    var n = 1;
    primelist = "";
    search: while (n<Event.data) {
      n += 1;
      for (var i = 2; i <= Math.sqrt(n); i += 1)
        if (n % i == 0)
          continue search;
      // found a prime!
      primelist += " " + n;

    }
    postMessage(primelist);
    //postMessage("Primos de "+Event.data);
};
