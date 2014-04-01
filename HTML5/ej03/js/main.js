$(function(){
    var $progress = $('progress');
    $(document).on('blur', 'input', function(e){
        var $this = $(this);
        if ($this.val().length>0){
            $progress.val($progress[0].value+1);
            console.log($progress[0].value);
        }
    });
});