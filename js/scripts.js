$(document).ready(function() {
  var countTo = parseInt(prompt("What number do you want to count to?"));
  var multiple = parseInt(prompt("What number do you want to count by?"));

  if (isNaN(countTo) || isNaN(multiple)) {
    alert("Thats not a number");
    return;
  }

  if (countTo <= 0 || multiple <= 0) {
    alert("Too small");
    return;
  }

  if (multiple > countTo) {
    alert("multiple is too big");
    return;
  }

  $(".output").append("Count to: " + countTo + "<br>");
  $(".output").append("Count by: " + multiple + "<br>");
  $(".output").append("Output: ");

  for (var index = multiple; index <= countTo; index += multiple) {
    if ((countTo - index) < multiple) {
      $(".output").append(index);
    } else {
      $(".output").append(index + ", ");
    }
  }
});
