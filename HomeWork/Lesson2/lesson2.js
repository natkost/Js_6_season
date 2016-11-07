var Object1 = {
    pop: function (){
         var width = this.length-1;
         var last = this[width];
         this.length --;
         return last;
    },
    push: function (){
          var width = this.length;
          for (var i = 0; i < arguments.length; i++){
              this[width+i] = arguments[i];
          }
          return this.length;
    },
    slice: function() {
          var subArr = [];
          var start = arguments[0];
          var finish;
          if(arguments[1] == undefined) {
             finish = this.length;
          }
          else {
             finish = arguments[1];
          }
          if  (start < 0){
               start = this.length+start;
          }
          if  (finish < 0){
               finish = this.length+finish;
          }
          if (finish > start){
             for (var i = start; i < finish; i++){
                  subArr.push(this[i]);
             }
          }
          return subArr;
    },
    join: function (){
          var width = this.length-1;
          var str = "";
          for (var i = 0; i < width; i++){
              str += this[i] + arguments[0];
          }
          str += this[width];
          return str;
    },
    reverse: function (){
          var width = this.length-1;
          var tmp;
          for (var i = 0; i < width/2; i++){
              tmp = this[i];
              this[i] = this[width-i];
              this[width-i]= tmp;
          }
          return this;
    }
};

var arr = ['a','b','c',4,5,6];

// ----------Test method POP----------------------
var delElement = Object1.pop.call(arr);
console.log('pop - the method of Object',
          '\nInput array: [\'a\', \'b\', \'c\', 4, 5, 6]',
          '\nDeleted element: ', delElement,
          '\nResult array afte Object1.pop: ',arr,
          '\n-----------------------------');
Array.prototype.pop = Object1.pop;
console.log("pop - the method of Array",
          "\nDeleted element:", arr.pop(),
          "\nResult array afte array.pop: ",arr,
          "\n-----------------------------");

// ----------Test method PUSH----------------------
var x = [5, 6]; // New elements of array
var str = x.join(); // String for enter to scrine
console.log("-----------------------------",
          "\npush - the method of Object",
          "\nWill be add: ", str,
          "\nNew Length array afte Object1.push: ", Object1.push.apply(arr,x),
          "\nResult array afte Object1.push: ",arr,
          "\n-----------------------------");
Array.prototype.push = Object1.push;
console.log("push - the method of Array",
          "\nWill be add: ", str,
          "\nNew Length array afte array.push: ", arr.push(x[0],x[1]),
          "\nResult array afte array.push: ",arr,
          "\n-----------------------------");

// ----------Test method SLICE----------------------
console.log("-----------------------------");
arr = ['a','b','c',4,5,6];
var newArr = Object1.slice.call(arr,-5,-3);
console.log("slice - the method of Object",
          "\nTest array: ",arr,
          "\nSet range \[-5,-3\]",
          "\nCreated subArray: ", newArr,
          "\n-----------------------------");
newArr = arr.slice(2);
console.log("slice - the method of Array",
          "\nSet range \[2,--\]",
          "\nCreated subArray: ", newArr,
          "\n-----------------------------");

// ----------Test method JOIN---------------------
var stick = " and "; // for merge
console.log("-----------------------------",
          "\njoin - the method of Object",
          "\nUsing: \"", stick, "\" for Object1.join",
          "\nResult string afte Object1.join: ", Object1.join.call(arr, stick),
          "\n-----------------------------");
Array.prototype.join = Object1.join;
stick = "+";
console.log("join - the method of Array",
          "\nUsing: \"", stick, "\" for transformed Array to String. ",
          "\nResult string afte array.join: ",arr.join(stick),
          "\n-----------------------------");

// ----------Test method REVERSE---------------------
arr = ['a','b','c',4,5,6];
console.log("-----------------------------",
          "\nreverse - the method of Object",
          "\nSet Array: ", arr);
console.log("Result array afte Object1.reverse: ", Object1.reverse.call(arr),
          "\n-----------------------------");
Array.prototype.reverse = Object1.reverse;
console.log("reverse - the method of Array",
          "\nSet Array: ", arr);
console.log("Result array afte array.reverse: ", arr.reverse(),
          "\n-----------------------------");

// ----------Test method SUM---------------------
Number.prototype.sum = function (x) {
    if (!isNaN(x)) {
        return (this + x);
    }
    else {
        return 0;
    }
};
var num1 = 100;
var num2 = 250;
var summa = num1.sum(num2);
console.log("-----------------------------",
          "\nsum - the method of Numbers",
          "\nInpute Number1=", num1," and Number2=",num2,
          "\nNumber1+Number2=", summa,
          "\n-----------------------------");
