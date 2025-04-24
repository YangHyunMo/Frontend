let day = new Date();
let time = day.getHours();
console.log(time);

if (time < 5) {
  toDo = '잠을 자렴';
  alert(toDo);
} else if (time < 7) {
  toDo = '준비';
  alert(toDo);
} else if (time < 9) {
  toDo = '출근';
  alert(toDo);
} else if (time < 12) {
  toDo = '빈둥 빈둥';
  alert(toDo);
} else if (time < 14) {
  toDo = '식사';
  alert(toDo);
} else {
  toDo = '여러 가지 업무를 수행합니다.';
  alert(toDo);
}
