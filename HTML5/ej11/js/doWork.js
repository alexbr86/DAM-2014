this.addEventListener('message', function(e) {
    var data = e.data;
    var ctr = 0;
    var sieve = [], i, j;
    var primes = "";
        for (i = 2; i <= data.number; ++i) {
            if (!sieve[i]) {
                // i has not been marked -- it is prime
                primes = primes + i.toString() + " ";
                for (j = i << 1; j <= data.number; j += i) {
                    sieve[j] = true;
                }
            }
        }
     this.postMessage(primes);
  
}, false);
