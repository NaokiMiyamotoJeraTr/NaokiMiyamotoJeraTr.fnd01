const students = ["Naoki", "Kaito", "Natsumi", "Enrique", "Moemi", "Goichi", "Hiroshi", "Jo", "Aya", "Natalie","Risako","Mayu","Kota"];
const dataObject = []
const changeButton = document.getElementById("change-button");
const submitButton = document.getElementById("submit_button");
const resetDefaultButton = document.getElementById("reset-default");
const studentListDiv = document.getElementById("student-list");

// 関数の設定
// 配列をシャッフルする関数
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// 席をシャッフルする関数
function shuffleSeats() {
  if (students.length === 0) {
    alert("学生が登録されていません。まず学生を追加してください。");
    return;
  }
  
  let shuffleStudents = shuffleArray(students.slice());
  for (let i = 0; i < shuffleStudents.length; i++){
    document.getElementById(`seat-${i}`).textContent = shuffleStudents[i];
  }
  
  // 空席をクリア
  for (let i = shuffleStudents.length; i < 13; i++) {
    document.getElementById(`seat-${i}`).textContent = '';
  }
}

// 学生一覧を表示する関数
function showStudentList() {
  document.getElementById("student-count").textContent = students.length;
  document.getElementById("student-list").innerHTML = ''; // 既存のリストをクリア(初期化)
  
  for (let i = 0; i < students.length; i++) {
    const studentItem = document.createElement('div');
    studentItem.className = 'student-item';
    studentItem.innerHTML = `
      <span class="student-name">${students[i]}</span>
      <button class="delete-button" onclick="removeStudent(${i})">欠席</button>
    `;
    studentListDiv.appendChild(studentItem);
  }
}

// 学生を追加する関数
function addStudent() {
  const username = document.getElementById('username').value;
  
  if (username === '') {
    alert('新規受講生を入力してください。');
  }
  
  if (students.includes(username)) {
    alert('その名前の受講生は既に登録されています。');
  }
  
  students.push(username);

  showStudentList();
  
  // フォームをクリア
  document.getElementById('username').value = '';
  document.getElementById('gender').value = '';
  document.getElementById('project_experience').value = '';
  
  alert(username + 'さんを追加しました！');
}

// 学生を削除する関数(欠席の学生を除くことが目的)
function removeStudent(index) {
  const studentName = students[index];
  if (confirm(studentName + 'さんは欠席ですか？')) {
    students.splice(index, 1);
    showStudentList(); // 学生一覧を更新
  }
}



// デフォルトに戻す関数
function resetToDefault() {
  if (confirm('受講生リストをデフォルトに戻しますか？')) {
    students.length = 0; // 配列をクリア
    students.push("naoki", "kaito", "natsumi", "enrique", "moemi", "goichi", "hiroshi", "jo", "aya", "natalie","risako","mayu","kota");
    showStudentList();
  }
}

// イベントリスナーの設定
changeButton.addEventListener("click", shuffleSeats);
submitButton.addEventListener("click", addStudent);
resetDefaultButton.addEventListener("click", resetToDefault);

// ページ読み込み時に学生一覧を表示
showStudentList();
