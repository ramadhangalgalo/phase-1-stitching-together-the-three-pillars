const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red": "",
  "": "red"
};

// STEP 1:
function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function (serverMessage) {
      // STEP 2:
      console.log(serverMessage);
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function (error) {
      alert("Something went wrong!");
    });
}

// STEP 3: 
document.querySelectorAll(".like-glyph").forEach(heart => {
  heart.addEventListener("click", likeCallback);
});

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
