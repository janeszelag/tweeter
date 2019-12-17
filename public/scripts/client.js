//✧✧✧✧✧✧✧✧✧✧HELPER FUNCTIONS✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧

//function to ensure that content is read as text and not a script for security reasons
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//uses moment to return the age of the tweet
function tweetAge(time) {
  let timeSince = moment(time).fromNow();
  return timeSince; 
}

//fake data
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]




// loops through an array of tweets, creating a DOM structure for each one via createTweetElement
// appends to tweets container


const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    console.log($tweet);
    $('#tweets-container').append($tweet);
  }
  return;
}




//function that will generate the DOM structure for a tweet, given a tweet object
const createTweetElement = function(tweet) {

  let ageOfTweet = tweetAge(tweet.created_at);

  const markup = `
  <article class="tweet-container">
  <header>
    <span id="user-name">${escape(tweet.user.name)}</span>
    <span id="user-handle">${escape(tweet.user.handle)}</span>
  </header>
  <p class="tweet-text">${escape(tweet.content.text)}.</p>
  <footer>
    <p id=tweet-age>${ageOfTweet}</p>
  </footer>
</article>
 `;
  let $markup =  $(markup);
  return $markup; 
}


$(document).ready(function() {
  renderTweets(data);
});



