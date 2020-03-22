
function myFunction(){
  var txt;
  if (confirm("Your query has been submitted!")){
    txt = "Your query has been submitted!";
  } else {
    txt = "Please fill out all the boxes!";
  }
  document.getElementById("demo").innerHTML = txt;
}
