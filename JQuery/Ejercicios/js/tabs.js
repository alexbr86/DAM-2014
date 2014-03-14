$(function(){
    var $divm = $('div.module');
    $divm.hide();

    var items = [];
    $divm.each(function() {
        var $this = $(this);
        var $li = $('<li/>', {
            'text' : $this.find('h2').first().text()
        });
        $li.data('contentdiv', $this);
        items.push($li.get(0));
    });

    var $newlist = $('<ul/>',{ 
        'id' : 'myTabs'
        }).addClass('tabs');
    $newlist.append(items);
    $newlist.insertBefore($divm.first());
    
    $(document).on('click', '.tabs li', function(e){
        var $this = $(this);
        $this.addClass('current').siblings('.current').removeClass('current');
        $this.data('contentdiv').show().siblings('.module').hide();
    });

    $divm.eq(0).show();
    $newlist.find('li').filter(':first').addClass('current');

});