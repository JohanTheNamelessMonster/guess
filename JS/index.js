function startgame() {
  var x = prompt("What's the username ?")
  var b = "G man"
  var y = b.localeCompare(x)
  if(y === 0){
    var z = prompt("What's the password")
    var c = "S man"
    var d = c.localeCompare(z)
    if(d === 0){
      alert("Good job")
    }else{
      var a = 3;
      var x = prompt("You have " + a   + " chances left")
      a = a-1;
    }
  }else{
  for(i = 0; i<3 ; i++){
    var reattempt = prompt(retry);
  }
  }
}
