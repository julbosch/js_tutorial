let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
  describe("#palindrome", function() {
    it("should return FALSE for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return TRUE for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return TRUE for a mixed-case palindrome.", function() {
      let mixedCasePalindrome = new Phrase("RaceCar");
      assert(mixedCasePalindrome.palindrome());
    });

    it("should return TRUE for a palindrome with punctuation.", function() {
      let puncPalindrome = new Phrase("Madam, I'm Adam.");
      assert(puncPalindrome.palindrome());
    });
  });

  describe("#letters", function() {
    it("should return only the letters from the Phrase.", function() {
      let puncPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(puncPalindrome.letters(), "MadamImAdam");
    });
  });

})