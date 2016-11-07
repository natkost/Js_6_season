var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8];
var arr3 = arr2.concat(arr1);
if (confirm(arr3 +"\nSort these numbers?")){
	arr3.sort();
	alert (arr3);
}
