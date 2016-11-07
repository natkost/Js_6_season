'use strict';

/**
 * Чат
 * Совсем недавно Вася научился печатать на клавиатуре и выходить в интернет.
 * Он сразу же зашел в чат и решил поздороваться со всеми. Вася напечатал слово s.
 * Считается, что у Васи получилось поздороваться, если из напечатанного слова можно удалить некоторые буквы так,
 * чтобы получилось слово "hello". Например, если Вася напечатал слово "ahhellllloou", считается, что он поздоровался,
 * а если он напечатал "hlelo", считается, что Васю не поняли, и ему не удалось поздороваться.
 * По заданному слову s определите, удалось ли Васе поздороваться.
 *
 * Входные данные
 * В первой и единственной строке записано слово s, которое напечатал Вася.
 * Это слово состоит из маленьких букв латинского алфавита, его длина не меньше 1 и не больше 100 букв.
 *
 * Выходные данные
 * Если Васе удалось поздороваться, выведите "true", иначе выведите "false".
 */

var chatTest = [
    {
        parameters: ["ahhellllloou"],
        expectedResult: "true"
    },
    {
        parameters: ["hlelo"],
        expectedResult: "false"
    }
];


function chat(s) {
    var numChar = []; // Array of index
    numChar[0] = s.indexOf("h");
    numChar[1] = s.indexOf("e");
    numChar[2] = s.indexOf("l");
    numChar[3] = s.indexOf("l", numChar[2]+1);
    numChar[4] = s.indexOf("o");
    var lastChar = numChar.join(); // String of index befor sort
    numChar.sort(); // Array past sort
    if (numChar.join()==lastChar) return "true";
    else return "false";
}


tasks.push({
    title: "Чат",
    solution: chat,
    tests: chatTest
});
