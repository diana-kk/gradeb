// B01
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var voca06 = Paper.image('img/voca06.png', 0, 0, 180, 150).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#D4EFF5'
});

home.use().transform('t14, 8').appendTo(topBox).click(handlerHome).attr({
  'cursor': 'pointer'
});

function handlerHome() {
  location.replace('NB0001.html');
}

topBox.text(180, 30, 'B01').attr({
  'font-size': 22,
  'text-anchor': 'middle'
});

migi.use().transform('t325, 9').appendTo(topBox).click(handlerHome).attr({
  'cursor': 'pointer'
});

// 상단
var topArea = Paper.g();

voca06.use().transform('t90, 80').click(playAud01).appendTo(topArea).attr({
  'cursor': 'pointer'
});

var t1 = topArea.text(180, 300, ['しゅふ', '주부']).click(playAud01).attr({
  'font-size': 40,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});
t1.selectAll('tspan')[1].attr({
  x: 180,
  y: 350,
  'font-size': 25,
  'fill': 'gray',
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

function playAud01() {
  var audio1 = new Audio('aud/voca06.wav');
  audio1.play();
}

// 하단
var bottomArea = Paper.g();

bottomArea.rect(20, 430, 320, 170, 6).attr({
  'fill': '#FFF1E2'
});

bottomArea.text(180, 462, '나는 주부입니다.').attr({
  'font-size': 18,
  'text-anchor': 'middle'
});

bottomArea.rect(30, 480, 300, 100, 6).click(handler).attr({
  'fill': 'white',
  'cursor': 'pointer'
});
// bottomArea.rect(30, 480, 300, 50, 6).attr({
//   'fill': 'white',
//   'stroke': 'red'
// });

var t2 = bottomArea.text(180, 545, '?').click(handler).attr({
  'font-size': 30,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

function handler() {
  t2.attr({
    'fill': 'none'
  });

  // bottomArea.text(180, 605, 'わたしは しゅふです。').attr({
  //   'font-size': 25,
  //   'text-anchor': 'middle'
  // });

  var t3 = bottomArea.text(73, 540, ['わたし', 'は', 'しゅふ', 'です。']).attr({
    'font-size': 25,
    'fill': 'gray'
  });
  t3.selectAll('tspan')[1].attr({
    x: 137,
    'fill': 'blue'
  });
  t3.selectAll('tspan')[2].attr({
    x: 167,
    'fill': 'gray'
  });
  t3.selectAll('tspan')[3].attr({
    x: 232,
    'fill': 'blue'
  });

  var audio2 = new Audio('aud/sen06.wav');
  audio2.play();
}
