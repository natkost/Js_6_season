'use strict';

/**
 * Красивый год
 *
 * А знали ли Вы забавный факт о том, что 2013 год является первым годом после далекого 1987 года,
 * в котором все цифры различны?
 *
 * Теперь же Вам предлагается решить следующую задачу: задан номер года, найдите наименьший номер года,
 * который строго больше заданного и в котором все цифры различны.
 *
 * Входные данные
 * В единственной строке задано целое число y (1000 ≤ y ≤ 9000) — номер года.
 *
 * Выходные данные
 * Выведите единственное целое число — минимальный номер года, который строго больше y, в котором все цифры различны.
 * Гарантируется, что ответ существует.
 */

var prettyYearTests = [
    {
        parameters: ["1987"],
        expectedResult: 2013
    },
    {
        parameters: ["2013"],
        expectedResult: 2014
    },
    {
        parameters: ["8796"],
        expectedResult: 8901
    }
];


function prettyYear(y) {
  var diff = function (x){
    var result = true;
    var mas = x.split("");
      for (var i = 0; i<4; i++){
        for (var j=i+1; j<4; j++){
          if (mas[i]==mas[j]) {
          result = false;
          break;
          }
        }
      }
  return result;
  };
  var year=+y;
  do {
    year ++;
  } while(diff(""+year)==false);
  return (year);
}


tasks.push({
    title: "Красивый год",
    solution: prettyYear,
    tests: prettyYearTests
});
