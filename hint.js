'use strict';

const button2 = document.getElementById('hint-button-2-2')
const message2 = document.getElementById('hint-message-2-2')
button2.addEventListener('click', () => {
  message2.textContent = 'ウェブサイトとして提供されているサービスはどちらでしょう。';
});

const button3 = document.getElementById('hint-button-2-3')
const message3 = document.getElementById('hint-message-2-3')
button3.addEventListener('click', () => {
  message3.textContent = 'このコマンドは、リモートリポジトリをローカルの変更で更新します。';
});

const button4 = document.getElementById('hint-button-2-4')
const message4 = document.getElementById('hint-message-2-4')
button4.addEventListener('click', () => {
  message4.textContent = 'コードのためのパラレルワールドのようなものです。';
});

const button5 = document.getElementById('hint-button-2-5')
const message5 = document.getElementById('hint-message-2-5')
button5.addEventListener('click', () => {
  message5.textContent = 'これは、オープンソースプロジェクトに貢献したいときの最初のステップです。';
});

const button6 = document.getElementById('hint-button-2-6')
const message6 = document.getElementById('hint-message-2-6')
button6.addEventListener('click', () => {
  message6.textContent = 'これは、リポジトリへの訪問者が最初に読むことが多いファイルです。';
});