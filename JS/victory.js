var password = "wordpass";
var entryCount = 0;
var entryLimit = 3;

function gamebegins(){
  if (entryCount < entryLimit) {
    if (input != password){
      answer.innerHTML = "Wrong Password";
      entryCount++;
      textbox.value = "";
    } else {
      // success!
      entryCount = 0;
      getElementById('answer').innerHTML = "Correct Password";
    }
  } else {
      getElementById('answer').innerHTML = "Out of entries";
  }
}


function gamer() {
  var input = prompt("Password:")
  gamebegins()
}
