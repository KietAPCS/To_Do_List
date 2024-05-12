const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask() {
  if (inputBox.value == '') {
    alert('You must add something!');
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

function handleEvent(event) {
  // console.log(event.key);
  if (event.key == "Enter") {
    addTask();
  }
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName == 'LI') {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName == 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }

}, false);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}
function showData() {
  localStorage.getItem('data', listContainer.innerHTML);
}

showData();

var container1 = document.getElementById('container1');
var borderArray = ['50%', '0'];
var blurArray = ['0', '5px'];
var colorsArray = ['#FF6B6B', '#FFE66D', '#4472CA'];
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var count = 60;

function createRandomElement() {
  for (var i = 0; i < count; i++) {
    var randomLeft = Math.floor(Math.random() * width);
    var randomTop = Math.floor(Math.random() * height);
    var color = colorsArray[Math.floor(Math.random() * 3)];
    var border = borderArray[Math.floor(Math.random() * 2)];
    var blur= blurArray[Math.floor(Math.random() * 2)];
    var timeAnimation = Math.floor(Math.random() * 8) + 5;
    var widthElement = Math.floor(Math.random() * 5) + 5;

    var div = document.createElement('div');
    div.style.backgroundColor = color;
    div.style.borderRadius = border;
    div.style.position = 'absolute';
    div.style.width = widthElement + 'px';
    div.style.height = widthElement + 'px';
    div.style.marginLeft = randomLeft + 'px';
    div.style.marginTop = randomTop + 'px';
    div.style.filter = 'blur(' + blur + ')';
    div.style.animation = 'move ' + timeAnimation + 's ease-in infinite';
    container1.appendChild(div);
  }
}

createRandomElement();