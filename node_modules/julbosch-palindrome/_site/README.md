Phrase object (with palindrome detector)
===

This is a sample NPM module created in _[Learn Enough Javascript to be Dangerous](https://www.learnenough.com/javascript-tutorial)_ by Michael Hartl

The module can be used as follows:

`$ npm install --global julbosch-palindrome

$ vim test.js

let Phrase = require("julbosch-palindrome");

let napoleonsLament = new Phrase("Able was I, ere I saw Elba.")

console.log(napoleonsLament.palindrome());

$ node test.js

true`