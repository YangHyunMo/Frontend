// 현재 날짜를 통한 현재 월 확인
let date = new Date();
let month = date.getMonth() + 1;
// console.log(month);

let season;
switch (month) {
  case 3:
  case 4:
  case 5:
    season = '봄';
    break;
  case 6:
  case 7:
  case 8:
    season = '여름';
    break;
  case 9:
  case 10:
  case 11:
    season = '가을';
    break;
  default:
    season = '겨울';
}
alert('현재 계절: ' + season);
// console.log('현재 계절: ' + season);
