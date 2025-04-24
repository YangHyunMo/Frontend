let date = new Date();
// let date2 = new Date();
// alert(date == date2);
// false임

let time = date.getHours();
let day;

if (time < 12) {
  day = '오전입니다.';
  alert(day);
} else {
  day = '오후입니다.';
  alert(time + '시이고 ' + day);
}
