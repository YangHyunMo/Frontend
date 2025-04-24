let person = {
  name: '유인성',
  eat: function (food) {
    console.log(this.name + '이 ' + food + '을/를 먹습니다.');
  },
};
// 메서드를호출합니다.
person.eat('밥');
