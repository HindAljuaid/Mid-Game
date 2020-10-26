function bgChange() {
  var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Light blue', 'Blue', 'White', 'Gray', 'Pink'];
  // You could easily add more colors to this array.''
var boxes = document.querySelectorAll(".box");
var button = document.querySelector("button");
var randomNo = Math.random();
button.addEventListener("click", function () {
  for (i = 0; i < boxes.length; i++) {
    // Pick a random color from the array 'colors'.
    boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    boxes[i].style.width = '100px';
    boxes[i].style.height = '100px';
    boxes[i].style.display = 'inline-block';
  }
});
for (i = 0; i < boxes.length; i++) {
  // Pick a random color from the array 'colors'.
  boxes[i].innerHTML = Math.floor(Math.random() * 9) + 1;
}

button.style.cursor = "pointer";

}

function randomNumber() {
  var boxes = document.querySelectorAll(".box");
  for (i = 0; i < boxes.length; i++) {
    // Pick a random color from the array 'colors'.
    boxes[i].innerHTML = Math.floor(Math.random() * 9) + 1;
}
}

function over(x) {
  var test = document.getElementByClass("number");
  // highlight the mouseenter target
  x.style.visibility = "hidden";
  alert("gj");
}
/*function bg(bg) {
  var color = document.getElementById('co');

  something.style.cursor = 'pointer';
  something.onclick = function() {
  this.style.backgroundColor = 'red';
};*/
