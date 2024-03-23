function a() {
  console.log("Button 1 clicked");
}
function b() {
  console.log("Button 2 clicked");
}
function c() {
  console.log("Button 3 clicked");
}
function d() {
  console.log("Button 4 clicked");
}
function e() {
  console.log("Button 5 clicked");
  var btn = document.getElementById("4button");
  btn.onclick = d;
}
function f() {
  console.log("Button 6 clicked");
}
function g() {
  var btn = document.getElementById("6button");
  btn.onclick = f;
}
window.onload = g;
window.onload = function () {
  var btn = document.getElementById("7button");
  btn.onclick = function () {
    console.log("button 7 clicked"); 
  };
};
