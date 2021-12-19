window.onload = function (e) {
  document.getElementById("btn").addEventListener("click", click);

  function click() {
    var acc = document.getElementById("sub1").value;
    var name = document.getElementById("sub2").value;
    var ent = document.getElementById("sub3").value;
    var ict = document.getElementById("sub4").value;
    var finance = document.getElementById("sub5").value;
    var totalgrades =
      parseFloat(acc) +
      parseFloat(ent) +
      parseFloat(finance) +
      parseFloat(ict) +
      parseFloat(name);
    var ave = totalgrades / 5;
    var per = ((ave * 1) / 100) * 100;
    if (per <= 100 && per >= 80) {
      var grades = "A+";
    } else if (per <= 79 && per >= 70) {
      var grades = "A ";
    } else if (per <= 69 && per >= 60) {
      var grades = "A-";
    } else if (per <= 59 && per >= 50) {
      var grades = "B";
    } else if (per <= 49 && per >= 40) {
      var grades = "C";
    } else {
      var grades = "F";
    }
    if (per >= 40) {
      document.getElementById("showresult").innerHTML =
        "Congratulations!" +
        " Your total grade is " +
        totalgrades +
        ". You have got " +
        per +
        "% Marks." +
        " Your grade is " +
        grades +
        ". You are pass.";
    } else {
      document.getElementById("showresult").innerHTML =
        "Sorry :(" +
        " Your total grade is " +
        totalgrades +
        ". You have got " +
        per +
        "% Marks." +
        " Your grade is " +
        grades +
        ". You are failed.";
    }
  }
};
