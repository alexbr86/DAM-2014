function sayHI() { worker.postMessage({'cmd': 'start', 'msg': 'Hi'});}
function stop() { worker.postMessage({'cmd': 'stop', 'msg': 'Bye'});}
function unknownCmd() { worker.postMessage({'cmd': 'foobard', 'msg':'???'});}
var worker = new Worker('js/doWork.js');
var showNumbers = function(e){
    var $number = $('#number');
    worker.postMessage({'number' : $number[0].value});



};
worker.addEventListener('message', function(e) {
document.getElementById('result').textContent = e.data;
}, false);

$(document).on('click', '#btn', showNumbers);