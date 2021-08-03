import GitHubButton from 'react-github-btn'

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}
let button = document.getElementById("button");
if (button != null) {
  button.addEventListener("click", myFunction);
}

function showresult(choise) {
  var n1 = parseFloat(document.getElementById('num1').value);
  var n2 = parseFloat(document.getElementById('num2').value);
  var r;
  var c = choise;

  switch (c) {
    case '1':
      r = n1 + n2;
      break;
    case '2':
      r = n1 - n2;
      break;
    case '3':
      r = n1 * n2;
      break;
    case '4':
      r = n1 / n2;
      break;
    case '5':
      r = n2 * 100 / n1;
      break;
    default:
      break;

  }
  document.getElementById('result').value = r;
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

function absolute() {
  var a = parseFloat(document.getElementById("number").value);
  var abs;
  abs = Math.abs(a);

  document.getElementById("absolute_value").value = abs;
}

// function s_qrt(){
//   var a = parseFloat(document.getElementById("n").value);
//   var r;
//   r = Math.sqrt(a);

//   document.getElementById("sqrt_r").value = r;
// }

// dowolna potega
function sqrt_rr(value, degree) {
  var value = parseFloat(document.getElementById("n").value);
  var exponent = parseFloat(document.getElementById("exponent").value);
  var degree = parseFloat(document.getElementById("dg").value);
  var r;

  r = Math.pow(value, 1.0 / degree);

  document.getElementById("sqrt_rr").value = r;
}

function exponentiation() {
  var a = parseFloat(document.getElementById("n").value);
  var e = parseFloat(document.getElementById("exponent").value)
  var r;
  r = Math.pow(a, e);

  document.getElementById("exp").value = r;
}

function square_root() {
  var base = parseFloat(document.getElementById("base").value);
  var exponent_1 = parseFloat(document.getElementById("exp_1").value);
  var denominator = parseFloat(document.getElementById("denominator").value);
  var square_root_result = Math.pow(base, exponent_1 / denominator);

  document.getElementById("square_root_result").value = square_root_result;
}

function exponentiation_2() {
  var base_a = parseFloat(document.getElementById("base_a").value);
  var base2_a = parseFloat(document.getElementById("base2_a").value);
  var r = parseFloat(document.getElementById("r").value);
  var s = parseFloat(document.getElementById("s").value);
  var b = parseFloat(document.getElementById("b_123").value);
  var result;

  if (base_a == base2_a) {
    result = Math.pow(base_a, r + s)
  }

  else if (a != b) {
    result = (Math.pow(base_a, r) * Math.pow(b, r));
  }

  else if (r = !0 && s != 0) {
    result = Math.pow(base_a, r + s);
  }

  document.getElementById("exponentation_2").value = result;
}

function exponentiation_4() {
  var base_a = parseFloat(document.getElementById("base_a").value);
  var r = parseFloat(document.getElementById("r").value);
  var b = parseFloat(document.getElementById("b_123").value);
  var result;

  var tmp = base_a / b;
  result = Math.pow(tmp, r);

  document.getElementById("exponentation_2").value = result;
}

function exponentiation_5() {
  var base_a = parseFloat(document.getElementById("base_a").value);
  var r = parseFloat(document.getElementById("r").value);
  var s = parseFloat(document.getElementById("s").value);
  var result;

  var tmp = r - s;
  result = Math.pow(base_a, tmp);

  document.getElementById("exponentation_2").value = result;
}

function logharitms() {
  var a = parseFloat(document.getElementById("base_of_logharitm").value);
  var b = parseFloat(document.getElementById("exponent_of_logharitm").value);
  var c = parseFloat(document.getElementById("logharitms_of_number_c").value);

  var c = Math.log(a) / Math.log(c);

  document.getElementById("result_of_logharitms").value = c;
}



function rectangle() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var r;
  r = a * b;

  document.getElementById('results').value = r;
}

function triangle() {
  var a1 = parseFloat(document.getElementById("a1").value);
  var h = parseFloat(document.getElementById("h").value);
  var t;
  t = (a1 * h) / 2;

  document.getElementById('results2').value = t;
}

function pitagoras() {
  var p1 = parseFloat(document.getElementById("p1").value);
  var p2 = parseFloat(document.getElementById("p2").value);
  var p3;
  p3 = Math.sqrt(Math.pow(p1, 2) + Math.pow(p2, 2));

  document.getElementById('p3_r').value = p3;
}
