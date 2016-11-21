
function addToList(){
  var inputMain = document.body.getElementsByTagName("input")[1];
  var str = inputMain.value+' ';
  var li = document.createElement('li');
  var input1 = document.createElement('input');
  var input2 = document.createElement('input');
  var ul = document.body.getElementsByTagName("ul")[0];
  ul.appendChild(li);
  li.appendChild(input1);
  input1.type = "checkbox";
  li.innerHTML += ' '+str;
  inputMain.value = "";
  inputMain.focus();

}

function addToActive(){
  var li = document.body.getElementsByTagName("li");
  for(var i = 0; i<li.length; i++){
    var check = li[i].children[0];
    if (check.checked) {
      li[i].style.textDecoration = "line-through";
      li[i].className = 'invisible';
      check.checked = '';
      li[i].hidden = true;}
  }
}

function selectAll(){
  var input = document.body.getElementsByTagName("input")[0];
  var li = document.body.getElementsByTagName("li");
  for(var i = 0; i<li.length; i++){
    var check = li[i].children[0];
    if (input.checked) check.checked = true;
    else check.checked = '';

  }
}

function viewList(){
  var li = document.body.getElementsByTagName("li");
  for(var i = 0; i<li.length; i++){
    if (li[i].className == 'invisible') {
      //li[i].style.color = "red";
      li[i].hidden = false;
    }
  }
}

function delFromList(){
  var li = document.body.getElementsByTagName("li");
  for(var i = li.length-1; i>=0; i--){
    var check = li[i].children[0];
    if (check.checked) {li[i].remove();}
  }
}

function editList(){
  var li = document.body.getElementsByTagName("li");
  var ul = document.body.getElementsByTagName("ul")[0];
  for(var i = 0; i<=li.length-1; i++){
    var check = li[i].children[0];
    if (check.checked) {
      var input3 = document.createElement('input');

      ul.insertBefore(input3, li[i]);
      input3.id = 'inputField';
      li[i].hidden = true;
      input3.focus();

      addEventListener("keydown", function(event) {
        if (event.keyCode == 13){
          input3.blur();
          li[i].childNodes[1].textContent = ' '+input3.value+' ';
          input3.remove();
          li[i].hidden = false;
        }

        else if (event.keyCode == 27){
          input3.blur();
          input3.remove();
          li[i].hidden = false;
        }
      });

      li[i].children[0].checked = '';
      break;
    }
  }
}
