$(function(){
    
    for (var i in Modernizr.inputtypes){
        if(Modernizr.inputtypes[i]===false){
            $('input[type="'+ i + '"]').addClass('disabled');
        }
        

    }
    $div= $('<div/>',{
        'class' : 'disabled'
    });
    for (var j in Modernizr.video){
        if(Modernizr.video[j].length===0){
            var str = j + ':' + Modernizr.video[j]; 
            $div.append( str);
        }
        

    }
    var $form = $('form');
$div.insertAfter($form);
            
        
    
});
