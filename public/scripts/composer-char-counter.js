//CHARACTER COUNTER LOGIC

$(document).ready(function() {

//maximum character length
  const maxLength = 140;

//counts character length using keydown on the form-text element, displays the result in the counter element
  $("#form-text").keydown(function() {
    const length = $(this).val().length;
    const tweetLength = maxLength - length;
    const $counter = $(this).siblings("span");
    $counter.text(tweetLength);
    
    //if the tweet length goes over the max, text colour becomes red (class called error)
    //removes red colour if no longer too long
    if (tweetLength < 0) {
      $counter.addClass( "error" );
    } else {
      $counter.removeClass( "error" );
    }
  })
});

