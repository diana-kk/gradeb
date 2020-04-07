// B01
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var bi = Paper.image('img/bi.jpg', 0, 0, 270, 38).toDefs();
var start = Paper.image('img/start.png', 0, 0, 90, 130).toDefs();
var bubble = Paper.image('img/bubble.png', 0, 0, 210, 150).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topArea = Paper.g();

bi.use().transform('t45, 40').appendTo(topArea);

topArea.text(180, 145, '문형 카드').attr({
  'font-size': 35,
  'text-anchor': 'middle'
});

start.use().transform('t40, 240').appendTo(topArea);
bubble.use().transform('t125, 230').appendTo(topArea);

var t1 = topArea.text(165, 270, ['< B01 >', '~は …です。', '(~는 …입니다.)']).attr({
  'font-size': 25
});
t1.selectAll('tspan')[1].attr({
  x: 165,
  y: 317,
  'font-size': 30
});
t1.selectAll('tspan')[2].attr({
  x: 165,
  y: 352,
  'font-size': 20,
  'fill': 'gray'
});

var r1 = topArea.rect(50, 480, 260, 50, 5).attr({
  'fill': '#D4EFF5'
});
var t1 = topArea.text(180, 515, '시 작').attr({
  'font-size': 25,
  'text-anchor': 'middle',
  'font-weight': 'bold'
});

var rt1 = topArea.g(r1, t1).click(handler01).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('NB0001_01.html');
}
