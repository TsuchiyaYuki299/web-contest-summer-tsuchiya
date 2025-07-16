// indexページでSTARTボタンを押すと、選択画面が出てくる
function start() {
  const select = document.getElementById("title")
  select.innerHTML = "<div id='select'></div><button id='step1-button' onclick='onClickStep1Button()'> STEP 1. 使い方レクチャー</button> <br> <button id='step2-button' onclick='onClickStep2Button()'>STEP 2. 問題</button><br> <button id='step3-button' onclick='onClickStep3Button()'> STEP 3. 実践形式</button>"
  
  const startButton = document.getElementById("start-button")
  startButton.style.display = "none"
}

function buttonDisplayHidden() {
  const step1Button = document.getElementById("step1-button")
  step1Button.style.display = "none"
  const step2Button = document.getElementById("step2-button")
  step2Button.style.display = "none"
  const step3Button = document.getElementById("step3-button")
  step3Button.style.display = "none"
}

function onClickStep1Button() {
  buttonDisplayHidden()
  const select = document.getElementById("select")
  select.innerHTML = "<div id='step1'>STEP 1 : 使い方レクチャー</div>"
}


function onClickStep2Button() {
  buttonDisplayHidden()
  const select = document.getElementById("select")
  select.innerHTML = "<div id='step2'>STEP 2 : 問題</div>"
}


function onClickStep3Button() {
  buttonDisplayHidden()
  const select = document.getElementById("select")
  select.innerHTML = "<div id='step3'>STEP 3 : 実践形式</div>"
}