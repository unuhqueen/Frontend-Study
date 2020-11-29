var Links = {
  setColor: function(color) {
    var aList = document.querySelectorAll('a'); //a tag를 가진 애들을 모두 불러서 aList에 넣//
    var i = 0;
    while (i < aList.length) {
      aList[i].style.color = color;
      i = i + 1; //a tag가 달린 애들의 색을 모두 바꿈
    }
  }
}
var Body = { //객체여 이건
  setColor: function(color) { //setColor는 key값, function은 내용!
    document.querySelector('body').style.color = color; //이거는 밑에있는 함수여
    //$('body').css('color', color);
  },
  setBackgroundColor: function(color) {
    document.querySelector('body').style.backgroundColor = color;
    //$('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self) {
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
  }
  //this -> nightDayHandler가 소속된 태그 자체를 가리킴
  //self -> this를 매개변수로 받은거 (매개변수로 받아야 밑에 코드들이 동작함)
}
