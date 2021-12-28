function calculate2() {
  var input = document.getElementById("input2");
  var number = parseInt(input.value);
  if (isNaN(number) || number > 9 || number < 0) {
    alert("неверный формат данных");
    return;
  }
  switch (number) {
    case 0:
      alert(")");
      break;
    case 1:
      alert("!");
      break;
    case 2:
      alert("@");
      break;
    case 3:
      alert("#");
      break;
    case 4:
      alert("$");
      break;
    case 5:
      alert("%");
      break;
    case 6:
      alert("^");
      break;
    case 7:
      alert("&");
      break;
    case 8:
      alert("*");
      break;
    case 9:
      alert("(");
      break;
  }
}
