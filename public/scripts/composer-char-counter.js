

$(document).ready(function() {

  const maxLength = 140;

  $("#form-text").keydown(function() {
    let length = $(this).val().length;
    tweetLength = maxLength-length;
    let $counter = $(this).siblings("span");
    $counter.text(tweetLength);
    
    if (tweetLength < 0) {
      $counter.addClass( "error" );
    } else {
      $counter.removeClass( "error" );
    }
  })
});

//toggle-class