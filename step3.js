"use strict";

// サイドバーと問題文の要素を取得
const sideText = document.getElementById("side-text");
const problemElement = document.getElementById("problem-text");

// 6秒後にヒントを点灯させるタイマーをセット
const hintTimerInit = setTimeout(() => {
  const correctButton = document.getElementById("source-control-button");
  correctButton.classList.add("highlight-hint");
}, 6000);

// 「ソース管理」ボタンがクリックされたときの処理
document
  .getElementById("source-control-button")
  .addEventListener("click", function () {
    this.classList.remove("highlight-hint");
    clearTimeout(hintTimerInit);
    // サイドバーに初期化ボタンとGitHubに公開ボタンを表示
    sideText.innerHTML =
      "ソース管理 <br> リポジトリ <br> 変更 <br> <button id='init-button' onclick='init()'>リポジトリを初期化する</button><br><br><br> <button id='github-button' onclick='github()'>GitHubに公開</button> <br> <div id='correct-img'></div>";
  });

  // 「githubに公開」ボタンを押したときの処理
function github() {
  // 二度押し防止
  if (document.getElementById("usagi-img") !== null) {
    return;
  }

  // 正解のうさちゃん画像とメッセージを表示
  const correctImgArea = document.getElementById("correct-img");
  const correctImg = document.createElement("img");
  const correctP = document.createElement("p");

  correctImg.src = "images/animal_quiz_usagi_maru.png";
  correctImg.alt = "正解";
  correctImg.id = "usagi-img";

  correctP.innerHTML = "うさちゃんをクリックして次の問題へ！";
  correctImgArea.appendChild(correctImg);
  correctImgArea.appendChild(correctP);

  // うさちゃんをクリックしたら次のステップへ
  correctImgArea.addEventListener("click", function () {
    problemElement.textContent =
      "ステージングしてからコミットしてみよう！（git add と git commit）";
    const initButton = document.getElementById("init-button");
    initButton.innerText = "✓コミット";
    correctImgArea.remove();
    document.getElementById("github-button").remove();

    // ステージングボタン（＋）を追加
    const plusElement = document.createElement("h1");
    plusElement.id = "staging-text";
    plusElement.innerHTML = "<span id='staging-text-plus'>+</span>";
    sideText.appendChild(plusElement);

    // ステージングボタン（＋）がクリックされたときの処理
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
  // 二重追加防止（くまさんの画像がすでにある場合）
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

  // 完了メッセージ
  problemElement.textContent = "すべてのステップが完了しました！おめでとう！";
}