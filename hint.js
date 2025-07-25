'use strict';

const button = document.getElementById('hint-button-2-2')
const message = document.getElementById('hint-message-2-2')
button.addEventListener('click', () => {
  message.textContent = 'ウェブサイトとして提供されているサービスはどちらでしょう。';
});

const button3 = document.getElementById('hint-button-2-3')
const message3 = document.getElementById('hint-message-2-3')
button.addEventListener('click', () => {
  message.textContent = 'このコマンドは、リモートリポジトリをローカルの変更で更新します。';
});

const button4 = document.getElementById('hint-button-2-4')
const message4 = document.getElementById('hint-message-2-4')
button.addEventListener('click', () => {
  message.textContent = 'コードのためのパラレルワールドのようなものです。';
});

const button5 = document.getElementById('hint-button-2-5')
const message5 = document.getElementById('hint-message-2-5')
button.addEventListener('click', () => {
  message.textContent = 'これは、オープンソースプロジェクトに貢献したいときの最初のステップです。';
});

const button6 = document.getElementById('hint-button-2-6')
const message6 = document.getElementById('hint-message-2-6')
button.addEventListener('click', () => {
  message.textContent = 'これは、リポジトリへの訪問者が最初に読むことが多いファイルです。';
});