// indexページでSTARTボタンを押すと、選択画面が出てくる
function start() {
  const select = document.getElementById("message")
  select.innerHTML = "STEP1. 使い方レクチャー<br>STEP2. 問題<br>STEP3. 実践形式"
  
  const startButton = document.getElementById("start-button")
  startButton.style.display = "none"
}