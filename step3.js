"use strict";

const sideText = document.getElementById("side-text");
const problemElement = document.getElementById("problem-text");

const hintTimerInit = setTimeout(() => {
  const correctButton = document.getElementById("source-control-button");
  correctButton.classList.add("highlight-hint");
}, 6000);

document
  .getElementById("source-control-button")
  .addEventListener("click", function () {
    this.classList.remove("highlight-hint");
    clearTimeout(hintTimerInit);
    sideText.innerHTML =
      "ソース管理 <br> リポジトリ <br> 変更 <br> <button id='init-button' onclick='init()'>リポジトリを初期化する</button> <br> <div id='correct-img'></div>";
  });

function init() {
  if (document.getElementById("usagi-img") !== null) {
    return;
  }

  const correctImgArea = document.getElementById("correct-img");
  const correctImg = document.createElement("img");
  const correctP = document.createElement("p");

  correctImg.src = "images/animal_quiz_usagi_maru.png";
  correctImg.alt = "正解";
  correctImg.id = "usagi-img";

  correctP.innerHTML = "うさちゃんをクリックして次の問題へ！";
  correctImgArea.appendChild(correctImg);
  correctImgArea.appendChild(correctP);

  correctImgArea.addEventListener("click", function () {
    problemElement.textContent =
      "ステージングしてからコミットしてみよう！（git add と git commit）";
    const initButton = document.getElementById("init-button");
    initButton.innerText = "✓コミット";
    correctImgArea.remove();
    const plusElement = document.createElement("p");
    plusElement.id = "staging-text";
    plusElement.innerHTML = "<span id='staging-text-plus'>+</span>";
    sideText.appendChild(plusElement);

    const staging = document.getElementById("staging-text-plus");
    staging.addEventListener("click", function () {
      sideText.innerHTML =
        "ソース管理 <br> リポジトリ <br> 変更 <br> <input type='text' id='commitMessage' placeholder='コミットメッセージを入力してください'> <br> <button id='commit-button' onclick='commit()'>✓コミット</button> <br> <div id='correct-img'></div>ステージされている変更 ◯個";
    });
  });
}

function commit() {
  const commitMessage = document.getElementById("commitMessage").value;

  if (commitMessage === "") {
    alert("コミットメッセージを入力してください。");
    return;
  }
  sideText.innerHTML =
    "ソース管理 <br> リポジトリ <br> 変更<br> <div id='correct-img'></div>";
  const correctImgArea = document.getElementById("correct-img");
  if (correctImgArea.querySelector("#kuma-img")) {
    return;
  }
  
  const correctImg = document.createElement("img");
  const correctP = document.createElement("p");
  correctImg.src = "images/animal_quiz_kuma_maru.png";
  correctImg.alt = "正解";
  correctImg.id = "kuma-img";
  correctP.innerHTML = "やったね！Gitを覚えたよ！";
  correctImgArea.appendChild(correctImg);
  correctImgArea.appendChild(correctP);

  problemElement.textContent = "すべてのステップが完了しました！おめでとう！";

}