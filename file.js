function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}
let button = document.getElementById("button");
if(button != null)
{
  button.addEventListener("click", myFunction);
}

function showresult(choise){
  var n1=parseFloat(document.getElementById('num1').value);
  var n2=parseFloat(document.getElementById('num2').value);
  var r;
  var c=choise;
  
  switch(c)
  {
    case '1':
    r=n1+n2;
    break;
    case '2':
    r=n1-n2;
    break;
    case '3':
    r=n1*n2;
    break;
    case '4': 
    r=n1/n2;
    break;
    case '5':
    r=n2*100/n1;
    break;
    default:
    break;
    
  }
  document.getElementById('result').value=r;
}

function goBack() {
  window.history.back();
}

function testLet() {
  for (let i = 0; i < 20; i++) {
      console.log("dupa");
  }
}
testLet();

function square (a,b) {
  a = 5;
  b = 7;
  return a*b;
}
document.getElementById("demo").innerHTML = square();

function square2(){
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var r = parseFloat(document.getElementById("results"));
  r = a * b;

  return r;
}
