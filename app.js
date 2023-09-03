var circle = document.getElementById("circle");
// console.log(circle);
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
// console.log(rotateValue);
var rorateSum;

upBtn.onclick = () => {
  //時計まわりに９０度回転
  rorateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rorateSum;
  rotateValue = rorateSum;
};

downBtn.onclick = () => {
  //半時計まわりに９０度回転
  rorateSum = rotateValue + "rotate(+90deg)";
  circle.style.transform = rorateSum;
  rotateValue = rorateSum;
};
