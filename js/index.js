  for (i = 0; i<$('.operator').length; i++) {
    var find = $('.operator')[i];
    var text = $(find).text();
    if (text == 'x') {
      $(find).html('*');
    } else if (text =='÷') {
      $(find).html('/');
    }
  }

  var set = [];
  var temp1 = [];
  var temp2 = [];
  var temp3 = [];
  var temp4 = []

$('.buttons').on('click','span',function(event){
  var op = ["+","-","*","/"];
  var num = [1,2,3,4,5,6,7,8,9,0];
  var $target = $(this);
  var $screen = $('#screen');
  var active = 'a';

  function activeButton (){
    if (num.includes(parseInt($target.text()))) {
    active = (parseInt($target.text(),10));
    } else {
    active = ($target.text());
    }
  }

  activeButton();

  if (active==='C'){
    set = [];
    temp1 = [];
    temp2 = [];
    temp3 = [];
    temp4 = [];
    $screen.text("");
  }

  if(set.length <=1){
    if(num.includes(active)) {
      temp1 += active;
      $screen.append(active);
      console.log(set);
    } else if (op.includes(active)) {
      set.push(parseInt(temp1,10));
      temp1 = [];
      temp2 += active;
      set.push(temp2);
      $screen.append(active);
      console.log(set);
    }
  } else {
  if (num.includes(active)) {
      temp3 += active;
      $screen.append(active);
      console.log(set);
  } else if (active==='=') {
      $screen.text("");
      set.push(parseInt(temp3,10));
      $screen.append(calculate());
      temp1 = calculate();
      set = [];
      console.log(set);
      temp2 = [];
      temp3 = []
    }
  }
});

function calculate () {
  if (set[1]=='+'){
    return set[0]+set[2];
  } else if (set[1]=='-'){
    return set[0]-set[2];
  } else if (set[1]=='*'){
    return set[0]*set[2];
  } else if (set[1]=='/' && set[2]==0) {
    return 'error';
  } else if (set[1]=='/'){
    return set[0]/set[2];
  }
}
