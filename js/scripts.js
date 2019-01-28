var words = [];
var words2 = [];
$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var input = $("input#word").val();
    words = input.split(" ");
    words.forEach(function(word) {
      if (word.length >= 3) {
        words2.push(word);
      }
    });
    words2.reverse();
    var newsentence = words2.join(" ");
    $(".mysentence").append(newsentence);
    $(".mysentence").show();
  });
});
