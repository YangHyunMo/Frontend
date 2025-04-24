let date = new Date();
let month = date.getMonth() + 1;
console.log(month);

if (3 <= month <= 5) {
  season = '봄';
  alert(season);
} else if (6 <= month <= 8) {
  season = '여름';
  alert(season);
} else if (9 <= month <= 11) {
  season = '가을';
  alert(season);
} else {
  season = '겨울';
  alert(season);
}
