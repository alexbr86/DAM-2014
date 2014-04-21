define('FizzBuzz', ['Fizz', 'Buzz'], function(Fizz, Buzz) {
    var test = function(){
        var a;
        if ((arguments[0])&&(arguments[0].length !== 1) && (arguments[0] !== parseInt(arguments[0]))){
            a = 42;
            console.log('Is not a number, by default we choose 42');
        }
        else {
            a = arguments[0];
        }
        var str;
        str = [];
        for (var i=1;i<=a;i++)
        {
            if((Fizz.check(i))&&(Buzz.check(i)))
            {
                str.push(Fizz.print()+Buzz.print());
            }
            else if(Fizz.check(i))
            {
                str.push(Fizz.print());
            }
            else if (Buzz.check(i))
            {
                str.push(Buzz.print());
            }
            else if (!(Fizz.check(i)||Buzz.check(i)))
            {
                str.push(i);
            }
        }
        return str.join(', ');
    };
    

  return {test : test};
});