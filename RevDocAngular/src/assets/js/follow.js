$('button').click(function(){
    var $this = $(this);
    $this.toggleClass('following')
    if($this.is('.following')){
      $this.addClass('wait');
    }
  }).on('mouseleave',function(){
    $(this).removeClass('wait');
  })