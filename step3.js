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
  
})
