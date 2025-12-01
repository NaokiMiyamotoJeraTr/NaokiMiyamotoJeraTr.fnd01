const students = ["naoki", "kaito", "natsumi", "enrique", "moemi", "goichi", "hiroshi", "jo", "aya", "natalie","risako","mayu","kota"];
const dataObject = []
const changeButton = document.getElementById("change-button");

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function shuffleSeats() {
  let shuffleStudents = shuffleArray(students.slice());
  for (let i = 0; i < shuffleStudents.length; i++){
    document.getElementById(`seat-${i}`).textContent = shuffleStudents[i];
  }
}

changeButton.addEventListener("click", shuffleSeats);

// フォーム入力画面
const target = document.getElementById("submit_button");

function pushObject(){
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  dataObject.push({username: username, email: email});
  return dataObject;
}

target.addEventListener('click', pushObject);
