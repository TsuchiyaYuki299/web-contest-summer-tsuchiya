// indexページでSTARTボタンを押すと、選択画面が出てくる
function start() {
  const select = document.getElementById("title")
  select.innerHTML = "<div id='select'></div><button id='lesson1-button' onclick='onClickLesson1Button()'> Lesson 1. 使い方レクチャー</button> <br> <button id='lesson2-button' onclick='onClickLesson2Button()'>Lesson 2. 問題</button><br> <button id='lesson3-button' onclick='onClickLesson3Button()'> Lesson 3. 実践形式</button>"
  
  const startButton = document.getElementById("start-button")
  startButton.style.display = "none"
}

// メニューボタンを隠す処理
function buttonDisplayHidden() {
  const lesson1Button = document.getElementById("lesson1-button")
  lesson1Button.style.display = "none"
  const lesson2Button = document.getElementById("lesson2-button")
  lesson2Button.style.display = "none"
  const lesson3Button = document.getElementById("lesson3-button")
  lesson3Button.style.display = "none"
}

//メニュー選択
function onClickLesson1Button() {
  buttonDisplayHidden()
  const select = document.getElementById("select")
  select.innerHTML = "<div id='lesson1'>Lesson 1 : 使い方レクチャー</div><div id='git-or-github1'>Git</div><div id='lecture-title1'>①リポジトリの初期化</div><div id='lecture-content1'>まず、プロジェクトのフォルダをVSCodeで開きます。<br>1. 左側のアクティビティバーから「ソース管理」アイコン (枝分かれのようなマーク) をクリックします。<br>2. 「リポジトリを初期化する」ボタンをクリックすると、そのフォルダがGitリポジトリとして管理されるようになります (<span id='green-text'>git init</span>が実行されます)。</div><div id='next-step'><button id='next-step-button-commit' onclick='stepCommitButton()'>次のステップ<br>- commit -<br>へ</button></div>"
}


function onClickLesson2Button() {
  buttonDisplayHidden()
  const select = document.getElementById("select")
  select.innerHTML = "<div id='lesson2'>Lesson 2 : 問題</div><h2>プロジェクトのバージョン管理をローカル環境で行うためのシステムはどちらですか？ <br><br>ヒント：自分のPCにインストールして使うのはどちらでしょう。</h2><button>GitHub</button><button>Git</button>"
}


function onClickLesson3Button() {
  buttonDisplayHidden()
  const select = document.getElementById("select")
  select.innerHTML = "<div id='lesson3'>Lesson 3 : 実践形式</div>"
}

// レッスン 1 使い方レクチャー
function stepCommitButton() {
  buttonDisplayHidden()
  const gitOrGithub1 = document.getElementById("git-or-github1")
  gitOrGithub1.innerHTML = "<div>Git</div>"
  const lectureTitle1 = document.getElementById("lecture-title1")
  lectureTitle1.innerHTML = "②変更を記録する (コミット)"
  const lectureContent1 = document.getElementById("lecture-content1")
  lectureContent1.innerHTML = "ファイルの変更を記録する手順です。<br>1. ファイルを変更・保存すると、「ソース管理」ビューの「変更」欄にファイルが表示されます。<br>2. 記録したいファイルの「+」アイコン (変更をステージ) をクリックして、ステージングエリアに移動させます。これは<span id='green-text'> git add</span> に相当します。<br>3. 上部のメッセージボックスにコミットメッセージ (例: 最初のコミット) を入力します。<br>4. 「コミット」ボタンをクリックすると、変更がローカルリポジトリに記録されます (<span id='green-text'>git commit</span>)。"
  const nextStep = document.getElementById("next-step")
  nextStep.innerHTML = "<button onclick='stepIntegrationWithGithubButton()'>次のステップ<br>- GitHubとの連携 -<br>へ</button>"
}

function stepIntegrationWithGithubButton() {
  buttonDisplayHidden()

  const gitOrGithub1 = document.getElementById("git-or-github1")
  gitOrGithub1.innerHTML = "<div>GitHubとの連携<br>ローカルでの作業をGitHub上のリポジトリと同期させます。</div>"
  const lectureTitle1 = document.getElementById("lecture-title1")
  lectureTitle1.innerHTML = "③GitHubへの公開"
  const lectureContent1 = document.getElementById("lecture-content1")
  lectureContent1.innerHTML = '1. 「ソース管理」ビューで、「リポジトリを公開」ボタンをクリックします。<br>2. VSCodeがGitHubへのサインインを求めてくるので、ブラウザで認証します。<br>3. リポジトリ名を入力し、公開範囲 (PublicまたはPrivate) を選択して公開します。これで、ローカルのコードがGitHub上にアップロード (<span id="green-text">git push</span>) されます。'
  const nextStep = document.getElementById("next-step")
  nextStep.innerHTML = "<button onclick='stepPushButton()'>次のステップ<br>- push -<br>へ</button>"
}

function stepPushButton() {
  buttonDisplayHidden()

  const gitOrGithub1 = document.getElementById("git-or-github1")
  gitOrGithub1.innerHTML = "<div>GitHubとの連携<br>ローカルでの作業をGitHub上のリポジトリと同期させます。</div>"
  const lectureTitle1 = document.getElementById("lecture-title1")
  lectureTitle1.innerHTML = '④変更をGitHubにアップロード (<span id="green-text">push</span>)'
  const lectureContent1 = document.getElementById("lecture-content1")
  lectureContent1.innerHTML = 'ローカルでコミットした変更をGitHubに反映させます。<br>1. VSCodeの左下のステータスバーにある、矢印が円を描いている同期ボタンをクリックします。<br>2. 確認ダイアログが表示されたら「OK」をクリックすると、ローカルのコミットがGitHubにプッシュされます。'
  const nextStep = document.getElementById("next-step")
  nextStep.innerHTML = "<button onclick='stepPullButton()'>次のステップ<br>- pull -<br>へ</button>"
}

function stepPullButton() {
  buttonDisplayHidden()

  const gitOrGithub1 = document.getElementById("git-or-github1")
  gitOrGithub1.innerHTML = "<div>GitHubとの連携<br>ローカルでの作業をGitHub上のリポジトリと同期させます。</div>"
  const lectureTitle1 = document.getElementById("lecture-title1")
  lectureTitle1.innerHTML = '④ GitHubの変更をローカルにダウンロード(プル)'
  const lectureContent1 = document.getElementById("lecture-content1")
  lectureContent1.innerHTML = '他の人が変更した内容など、GitHub上の最新の状態をローカルに持ってきたい場合も、同様に同期ボタンをクリックします。これにより、リモートの変更がプル (<span id="green-text">git pull</span>) されます。'
  const nextStep = document.getElementById("next-step")
  nextStep.innerHTML = "<button onclick='stepCloneButton()'>次のステップ<br>- clone -<br>へ</button>"
}

function stepCloneButton() {
  buttonDisplayHidden()

  const gitOrGithub1 = document.getElementById("git-or-github1")
  gitOrGithub1.innerHTML = "<div>GitHubとの連携<br>ローカルでの作業をGitHub上のリポジトリと同期させます。</div>"
  const lectureTitle1 = document.getElementById("lecture-title1")
  lectureTitle1.innerHTML = '④ 既存のGitHubリポジトリを使う (クローン)'
  const lectureContent1 = document.getElementById("lecture-content1")
  lectureContent1.innerHTML = 'すでにGitHub上に存在するリポジトリをローカルに持ってきたい場合はクローンします。<br>1. VSCodeを開き、Ctrl+Shift+P (macOS: Cmd+Shift+P) でコマンドパレットを開きます。<br>2. <span id="green-text">Git: Clone</span> と入力して選択します。<br>3. クローンしたいGitHubリポジトリのURLを貼り付けます。<br>4. ローカルのどこに保存するかを選択すると、リポジトリのダウンロードが始まります。'
  const nextStep = document.getElementById("next-step")
  nextStep.innerHTML = "<button onclick='onClickLesson2Button()'>Lesson 2 : 問題へ</button>"
}

// レッスン 2 問題
