"use strict";

const sideText = document.getElementById("side-text");
  

const problemElement = document.getElementById("problem-text");
problemElement.textContent =
  "左のメニューからソース管理を選んで、リポジトリを初期化しよう！(git init)";

const hintTimer = setTimeout(() => {
  // タイマーの処理の中
  const correctButton = document.getElementById("source-control-button");
  correctButton.classList.add("highlight-hint"); // ボタンにヒントのクラスを追加
}, 6000);

document
  .getElementById("source-control-button")
  .addEventListener("click", function () {
    this.classList.remove("highlight-hint");
    clearTimeout(hintTimer);
    // サイドバーの内容をソース管理版に変更
    
    sideText.innerHTML =
      "ソース管理 <br> リポジトリ <br> 変更 <br> <button id='init-button' onclick='init()'>リポジトリを初期化する</button> <br> <div id='correct-img'></div>";
  });

function init() {
  if (document.getElementById("usagi-img") !== null) {
    return;
  }
  // 画像を表示する場所を見つける
  const correctImgArea = document.getElementById("correct-img");

  // 新しいimg要素を作成する
  const correctImg = document.createElement("img");
  const correctP = document.createElement("p");


  // 作成したimg要素に、どの画像を表示するか設定する
  correctImg.src = "images/animal_quiz_usagi_maru.png";

  correctImg.alt = "正解";
  correctImg.id = "usagi-img";

correctP.innerHTML = "うさちゃんをクリックして次の問題へ！";

  //  画像を表示する場所に作成したimg要素を追加する
  correctImgArea.appendChild(correctImg);
  
correctImgArea.appendChild(correctP);
  
correctImgArea.addEventListener("click", function () {
problemElement.textContent = "ステージングしてからコミットしてしよう！（git add と git commit）";
  const initButton = document.getElementById("init-button");
  initButton.innerText = "✓コミット";
  correctImgArea.remove();
  sideText.append("+");
}); 
}

sideText("+").addEventListener("click", function () {
  sideText.append("");

});
