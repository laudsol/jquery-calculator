  for (i = 0; i<$('.operator').length; i++) {
    var find = $('.operator')[i];
    var text = $(find).text();
    if (text == 'x') {
      $(find).html('*');
    } else if (text =='÷') {
      $(find).html('/');
    }
  }

var equation = [];

$('.buttons').on('click', 'span:not(#equals)', function(event){
	var $target = $(this);
  $('#screen').append($target.text());
  equation.push($target.text());

});

$('.buttons').on('click', '#clear', function(event){
	$('#screen').text("");
  equation = [];
});

$('.buttons').on('click', '#equals', function(event){
  var $target = $(this);
  var betterEquation = equation.join("");
  var solution = eval(betterEquation);
  var error = 'error';
  $('#screen').text("");
  if (solution =='Infinity') {
    $('#screen').append(error);
  } else if (typeof solution !='number') {
    $('#screen').append(error);
  } else {
    $('#screen').append(solution);
  }
});
