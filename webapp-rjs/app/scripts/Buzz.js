define('Buzz', [], function() {

    var print = function(){
        return "Buzz";
    };

    var check = function(){
        var a;
        var resp;
        if ((arguments[0])&&(arguments[0].length !== 1) && (arguments[0] !== parseInt(arguments[0]))){
            console.log('Is not a number');
            resp = false;
        }
        else {
            a = arguments[0];
            resp = a%5 === 0;
        }
        return resp;
    };
    

  return {check : check,
          print: print};
});