

//✧✧✧✧✧✧✧✧✧✧HELPER FUNCTIONS✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧

//escape function to ensure that content is read as text and not a script for security reasons
function escape(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//uses moment to return the age of the tweet
function tweetAge(time) {
  // const newTime = time / 1000; 
  const timeSince = moment(time).fromNow();
  return timeSince; 
}



//✧✧✧✧✧✧✧✧✧✧Recieving & Rendering Tweets Functions✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧


// loops through an array of tweets, creating a DOM structure for each one via createTweetElement
// appends to tweets container
const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    console.log($tweet);
    $('#tweets-container').append($tweet);
  }
  return;
}




//function that will generate the DOM structure for a tweet, given a tweet object
const createTweetElement = function(tweet) {

  const ageOfTweet = tweetAge(tweet.created_at);

  const markup = `
  <article class="tweet-container">
  <header>
    <img src=${tweet.user.avatars}>
    <span id="user-name">${escape(tweet.user.name)}</span>
    <span id="user-handle">${escape(tweet.user.handle)}</span>
  </header>
  <p class="tweet-text">${escape(tweet.content.text)}.</p>
  <footer>
    <p id=tweet-age>${ageOfTweet}</p>
    <div>
      <i class="fas fa-heart"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-flag"></i>
    </div>
  </footer>
</article>
 `;
  const $markup =  $(markup);
  return $markup; 
}


//ajax POST request for new tweet submission 
function newTweet() {
  const $submitTweet = $('#tweet-form');
  console.log('hiiiiiii',$submitTweet);
  
  $submitTweet.submit( function () {
    event.preventDefault();
    const tweetTextLength = $("#form-text").val().length;
    if (tweetTextLength === 0) {
      alert("Sorry, your tweet was empty...");
    } else if (tweetTextLength > 140) {
      alert("Sorry, your tweet is too long...");
    } else {
      $.post('/tweets',  $submitTweet.serialize(), () => {
        console.log("Success!")
      })
    }
  })
}


//ajax GET request from /tweets to receive the array of tweets as JSON
const loadTweets = function () {
  const url = "/tweets";
  $.getJSON(url)
  .done(data => {
    renderTweets(data);
  })
}


//calls these functions when the page index.html is loaded 
$(document).ready(function() {
  newTweet();
  loadTweets();
});

  // const characterCount = characterCounter();
  // if (!Tweet) {
  //   alert("Sorry, your tweet was empty...");
  //   return; 
  // } else if (characterCount < 0 ) {
  //   alert("Sorry, your tweet is too long...");
  //   return; 
  // } else {
