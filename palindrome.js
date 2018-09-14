// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();