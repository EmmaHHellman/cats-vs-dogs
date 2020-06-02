$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").append("<li>Meow!</li>");
    $("ul#dog").append("<li>Bark!</li>");
  });

  $("button#bark").click(function() {
    $("ul#cat").append("<li>Meow!</li>");
    $("ul#dog").append("<li>Bark!</li>");
  });

  $(".jumbotron").click(function() {
    $(this).after("<img src='img/walrus.jpeg' alt='Surprise Walrus!'>");
  });
});