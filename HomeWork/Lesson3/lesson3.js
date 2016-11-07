function factor(n){
  if (n==0) return 1;
  else return factor(n-1)*n;
}
function factorLoop(n){
  var f=1;
  for (var i=1; i<=n; i++){
    f*=i;
  }
  return f;
}
var n=5;
console.log("Factorial by recursion");
console.log("For n=", n, " factorial: ",factor(n));
console.log("Factorial by loop");
console.log("For n=", n, " factorial: ",factorLoop(n));

function step(x,n){
  if (n==0) return 1;
  else return step(x,n-1)*x;
}
function stepLoop(x,n){
  var s=1;
  for (var i=1; i<=n; i++){
    s*=x;
  }
  return s;
}
var x=2;
n=4;
console.log("\nPower by recursion");
console.log("For x=", x, " n=", n, " power: ",step(x,n));
console.log("Power by loop");
console.log("For x=", x, " n=", n, " power: ",stepLoop(x,n));

function sumInteger(x){
  if ((x%10)==x) return x;
  else return (x%10)+sumInteger((x-x%10)/10);
}

function sumIntegerLoop(x){
  var sumInt=0;
  do {
    sumInt+=x%10;
    x=(x-x%10)/10;
  } while (x!==0);
  return sumInt;
}
x=352;
console.log("\nSum of digits for Integer by recursion");
console.log("For x=", x, " sum of numeric: ",sumInteger(x));
console.log("Sum of digits for Integer by loop");
console.log("For x=", x, " sum of numeric: ",sumIntegerLoop(x));

function sum(n){
  if (n==0) return 0;
  else return sum(n-1)+n;
}
function sumLoop(n){
  var sum=0;
  for (var i=1; i<=n; i++){
    sum+=i;
  }
  return sum;
}
n=5;
console.log("\nSum by recursion");
console.log("For n=", n, " sum: ",sum(n));
console.log("Sum by loop");
console.log("For n=", n, " sum: ",sumLoop(n));

function fib(n){
  if (n<3) return 1;
  else return fib(n-1)+fib(n-2);
}
function fibLoop(n){
  var f0=0;
  var f1=1;
  if (n<2) return f1;
  for (var i=2; i<=n; i++){
    fi=f0+f1;
    f0=f1;
    f1=fi;
  }
  return fi;
}
n=4
console.log("\nFibonacci by recursion");
console.log("For fib(",n,"): ",fib(n));
console.log("Fibonacci by loop");
console.log("For fibLoop(",n,"): ",fibLoop(n));

//----------------------------------
//Time of work functions
//----------------------------------
function timer(f,argum){
  console.time("Time of run");
  for (var i=1; i<=10000; i++){
    f(argum);
  }
  console.timeEnd("Time of run");

}

console.log("\nTime factor:");
timer(factor,5);
console.log("Time factorLoop:");
timer(factorLoop,5);

console.log("\nTime sumInteger:");
timer(sumInteger,352);
console.log("Time sumIntegerLoop:");
timer(sumIntegerLoop,352);

console.log("\nTime sum:");
timer(sum,5);
console.log("Time sumLoop:");
timer(sumLoop,5);

console.log("\nTime fib:");
timer(fib,4);
console.log("Time fibLoop:");
timer(fibLoop,4);

console.log("\nTime step:");
console.time("Time of run");
for (var i=1; i<=10000; i++){
  step(2,4);
}
console.timeEnd("Time of run");

console.log("Time stepLoop:");
console.time("Time of run");
for (var i=1; i<=10000; i++){
  stepLoop(2,4);
}
console.timeEnd("Time of run");
