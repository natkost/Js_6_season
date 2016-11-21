var cragMain = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
console.log("For array: ",cragMain.join());

// Use recursion
var findDeep = function(crag){
    if(crag.length == 0){return 0;}
    else {
      var startMax = Math.max.apply(null,crag); // Value Currant Left Crag
      var startIndex = crag.indexOf(startMax);  // Position Currant Left Crag
      var deep = crag.slice(startIndex+1); // Currant Deep
      var water = deep.reduce(function(previousValue, currentValue, index, array){
        return previousValue + (startMax-currentValue); // Sum up blue ceils
      },0);

      crag.length = startIndex; // Delete Currant Deep
      return water+findDeep(crag); // Sum for All Deep
    }
};
var everest = Math.max.apply(null,cragMain);
var everestIndex = cragMain.indexOf(everest);
var cragLeft = cragMain.slice(0,everestIndex); // Array Left at Everest
console.log("Array Left at Max: ", cragLeft);
var cragRight = cragMain.slice(everestIndex+1); // Array Right at Everest
console.log(" Array Right at Max: ", cragRight);
cragRight = cragRight.reverse();
console.log("\nAll water in the ocean: ",findDeep(cragLeft)+findDeep(cragRight));
