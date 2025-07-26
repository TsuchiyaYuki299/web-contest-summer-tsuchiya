'use strict';

const problemElement = document.getElementById('problem-text');
problemElement.textContent = '左のメニューからソース管理を選んで、リポジトリを初期化しよう！';


const hintTimer = setTimeout(() => {
// タイマーの処理の中
const correctButton = document.getElementById('source-control-button');
correctButton.classList.add('highlight-hint'); // ボタンにヒントのクラスを追加
},6000);


document.getElementById('source-control-button').addEventListener('click', function() {
  // 点滅をとめる
  clearTimeout(hintTimer);
  // サイドバーの内容をソース管理版に変更
  const sideText = document.getElementById('side-text');
  sideText.innerHTML = "ソース管理 <br> リポジトリ <br> 変更 <br> <button id='init-button'>リポジトリを初期化する</button> <br> <p id='correct-img'></p>";
  
})


document.getElementById('init-button').addEventListener('click', function() {
  // p（#correct-img）をanimal_quiz_usagi_maru.pngに変更
  const correctImg = document.getElementById('correct-img');
  correctImg.src = 'images/animal_quiz_usagi_maru.png';
  
});