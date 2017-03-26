// http://jquery.keicode.com/ui/autocomplete.php
// http://jquery.keicode.com/ui/autocomplete.js

$(document).ready( function() {
  $( "#ac1" ).autocomplete({
    source: [
        'HPI', 'Kyosho', 'Losi',
        'Tamiya', 'Team Associated',
        'Team Durango', 'Traxxas', 'Yokomo', 'Ç†Ç¢Ç§Ç¶Ç®', 'Ç†Ç†Ç†Ç†Ç†', 'Ç©Ç´Ç≠ÇØÇ±', 'ìåãû', 'ëÂç„'
    ]
  });

  $("#ac2").autocomplete({
    source: function(req, resp){
      $.ajax({
          url: "search_yahoo.php",
          type: "GET",
          cache: false,
          dataType: "json",
          data: {
            tag: req.term
          },
          success: function(json_yahoo){
            resp(json_yahoo[1]); // [1]  see:http://www.ka-net.org/blog/?p=1652
          },
          error: function(xhr, textStatus, errorThrown){
            resp(['']);
          }
      });
    }
  });


  // http://maicodes.blogspot.jp/2012/09/php-google.html
  // use JQuery's textchange event
  // still doesn't work (2014/4/28)
  $('#tags').on('textchange', function() {
    $.ajax({
      url: 'search.php?tag='+$('#tags').val(),
      type: 'GET',
      dataType: 'xml',
      success: function(xml) {
        var availableTags=[];
        $(xml).find('CompleteSuggestion').each(function() {
          var suggestion=$(this).find('suggestion').attr('data');
          availableTags.push(suggestion);
        });
        $('#tags').autocomplete({
          source:availableTags
        });
      },
    });
    alert("comlete");
  });

});
