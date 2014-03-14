$(function(){
    var $input = $('input[name=q]');
    var $label = ($input.closest('form').find('label[for="' + $input.attr('name') +'"]'));
    $input.val($label.text());   
    console.log($input.val());


    $input.addClass('hint');
    $label.hide();

    $(document).on('focus', 'input[name=q]', function(e){
        var $this = $(this);
        if($this.val() === $label.text()) {
        $this.removeClass('hint').val('');
        }
    } );

    $(document).on('blur', 'input[name=q]', function(e){
        var $this = $(this);
        if($this.val().trim().length === 0) {
        $this.addClass('hint').val($label.text());
        }
    } );




});