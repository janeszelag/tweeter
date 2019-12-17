
// function tweetAge (time) {
// let age = jQuery.timeago(time); 
// return age; 
// }




function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function tweetAge(time) {
  let timeSince = moment(time).fromNow();
  return timeSince; 
}

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


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}
//standard unix time
//moment.js
const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like

$(document).ready(function() {
  $('#tweets-container').append($tweet);
});
 // to add it to the page so we can make sure it's got all the right elements, classes,