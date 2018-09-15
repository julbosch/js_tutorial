// alert(new Date());

let Phrase = require("julbosch-palindrome");

function palindromeTester(event) {
  event.preventDefault();
  let phrase = new Phrase(event.target.phrase.value); 
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `<strong>${phrase.content}</strong> is a palindrome.`;
  } else {
    palindromeResult.innerHTML = `<strong>${phrase.content}</strong> is NOT a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("submit", function() {
    palindromeTester(event);
  });
});