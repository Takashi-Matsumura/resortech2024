(function() {
  // スクリプトタグからデータ属性を取得
  const script = document.currentScript;
  const token = script.dataset.token;
  const baseUrl = script.dataset.baseurl;

  // グローバル設定
  window.difyChatbotConfigR = {
    token: token,
    baseUrl: baseUrl
  };

  // チャットボタンを動的に作成
  function createChatButton() {
    const button = document.createElement('div');
    button.id = 'dify-chatbot-bubble-buttonR';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.width = '60px';
    button.style.height = '60px';
    button.style.backgroundColor = '#1C64F2';
    button.style.borderRadius = '50%';
    button.style.cursor = 'pointer';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.color = 'white';  // テキストを白に設定
    button.style.fontSize = '14px';
    button.innerHTML = 'Chat';
    button.onclick = toggleChatWindow;
    document.body.appendChild(button);
  }

  // チャットウィンドウを開閉する
  function toggleChatWindow() {
    const chatWindow = document.getElementById('dify-chat-windowR');
    if (chatWindow) {
      closeChatWindow();
    } else {
      openChatWindow();
    }
  }

  // チャットウィンドウを開く
  function openChatWindow() {
    // 既にチャットウィンドウが開いている場合は何もしない
    if (document.getElementById('dify-chat-windowR')) return;

    // iframeでチャットウィンドウを作成
    const chatWindow = document.createElement('iframe');
    chatWindow.id = 'dify-chat-windowR';  // IDを設定して後で削除しやすくする
    chatWindow.src = window.difyChatbotConfigR.baseUrl + '/chat/' + window.difyChatbotConfigR.token;
    chatWindow.style.position = 'fixed';
    chatWindow.style.bottom = '80px';
    chatWindow.style.right = '20px';
    chatWindow.style.width = '600px';
    chatWindow.style.height = '600px';
    chatWindow.style.border = 'none';
    chatWindow.style.zIndex = '9999';  // 他の要素より前面に表示
    document.body.appendChild(chatWindow);

    // 「閉じる」ボタンを作成
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.position = 'fixed';
    closeButton.style.bottom = '690px';  // チャットウィンドウの上に表示されるように調整
    closeButton.style.right = '20px';
    closeButton.style.width = '20px';
    closeButton.style.height = '20px';
    closeButton.style.backgroundColor = '#ff5c5c';  // 赤い背景
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '20px';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';
    closeButton.style.zIndex = '10000';  // iframeの上に表示
    closeButton.onclick = closeChatWindow;
    document.body.appendChild(closeButton);
  }

  // チャットウィンドウを閉じる
  function closeChatWindow() {
    const chatWindow = document.getElementById('dify-chat-windowR');
    if (chatWindow) {
      document.body.removeChild(chatWindow);
    }
    const closeButton = document.querySelector('button[style*="bottom: 690px"]');
    if (closeButton) {
      document.body.removeChild(closeButton);
    }
  }

  // キーボードショートカットを設定
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      event.preventDefault(); // ブラウザのデフォルトの挙動をキャンセル
      toggleChatWindow();
    }
  });

  // チャットボタンを作成
  createChatButton();
})();