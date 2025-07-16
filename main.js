// indexページでSTARTボタンを押すと、選択画面が出てくる
function start() {
  const select = document.getElementById("title")
  select.innerHTML = "<button> STEP1. 使い方レクチャー</button> <br> <button>STEP2. 問題</button><br> <button> STEP3. 実践形式</button>"
  
  const startButton = document.getElementById("start-button")
  startButton.style.display = "none"
}