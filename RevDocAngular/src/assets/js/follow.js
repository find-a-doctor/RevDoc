$('button').click(function() {
    $(this).text(function(_, text) {
      return text === "Follow" ? "Unfollow" : "Follow";
    });
    if($(this).text() == "Follow") {
      $(this).removeClass('unfollow');
    } else if($(this).text() == "Unfollow") {
      $(this).addClass('unfollow');
    }
  });