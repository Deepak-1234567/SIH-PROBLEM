document.addEventListener('DOMContentLoaded', function () {
    const messages = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        const messageText = messageInput.value;
        if (messageText) {
            appendMessage('You', messageText);
            messageInput.value = '';
            // Send the message to the server (server-side code not included in this example)
        }
    });

    function appendMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
        messages.appendChild(messageDiv);
    }
});
