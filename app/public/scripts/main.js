var nameForm = "#form-name",
    playAgainForm = "#form-continue",
    choiceForm = "#form-choice",
    handImages = ".player-hand",
    contentContainer = "#main-content";


$("body").on("submit", nameForm, function(e) {
  e.preventDefault();
  $.ajax({
    type: $(nameForm).attr("method"),
    url: $(nameForm).attr("action"),
    data: $(nameForm).serialize(),
    success: function(data) {
      var content = $(data).filter(contentContainer).html();
      $(contentContainer).html(content);
    }
  });
});

$("body").on("submit", playAgainForm, function(e) {
  e.preventDefault();
  $(handImages).addClass("close");
  $(playAgainForm).fadeOut();

  setTimeout(function(){
    $.ajax({
      type: $(playAgainForm).attr("method"),
      url: $(playAgainForm).attr("action"),
      data: $(playAgainForm).serialize(),
      success: function(data) {
        var content = $(data).filter(contentContainer).html();
        $(contentContainer).html(content);
      }
    });
  }, 1250);
});

$("body").on("submit", choiceForm, function(e) {
  e.preventDefault();
  $(handImages).addClass("countdown");
  $(choiceForm).fadeOut();

  setTimeout(function(){
    $.ajax({
      type: $(choiceForm).attr("method"),
      url: $(choiceForm).attr("action"),
      data: $(choiceForm).serialize(),
      success: function(data) {
        var content = $(data).filter(contentContainer).html();
        $(contentContainer).html(content);
      }
    });
  }, 3000);
});
