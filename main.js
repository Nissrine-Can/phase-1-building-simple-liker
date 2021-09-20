// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeHearts = document.querySelectorAll(".like-glyph");
for (const like of likeHearts) {
  
  like.addEventListener ('click', function(event) {
    const heart = event.target;
  
    if (heart.innerText === EMPTY_HEART) {
      likeBack(event, heart);
    } else {
      
      dislikeBack(event, heart);
    }
  })
}

function likeBack(event, heart) {
     
        mimicServerCall()
        .then(function() {
          heart.innerText = FULL_HEART;
          heart.classList.add("activated-heart", "like-glyph");
          })
        .catch(function(error) {
        
          document.querySelector(".hidden").classList.remove("hidden");

          alert("Random server error. Try again.");
          document.querySelector("#modal-message").innerHTML = "Random server error. Try again.";

          setTimeout(function() {
            const modalDiv = document.querySelector("#modal")
            modalDiv.className = "hidden";
          }, 3000);
      })
} 

function dislikeBack(event, heart) {

    mimicServerCall()
    .then(function() {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove("activated-heart");
      })
}




    



    









//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
