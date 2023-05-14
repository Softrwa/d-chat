// JavaScript code for real-time chat functionality
const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input');
const sendButton = document.querySelector('.send-button');

sendButton.addEventListener('click', () => {
    const messageContent = chatInput.value;
    if (messageContent.trim() !== '') {
        const message = document.createElement('div');
        message.classList.add('message');
        message.innerHTML = `
      <div class="message-sender">You</div>
      <div class="message-content">${messageContent}</div>
    `;
        chatMessages.appendChild(message);
        chatInput.value = '';
    }
});



// JavaScript code for dynamic content loading
const loadMoreButton = document.querySelector('.load-more-button');
const feedContainer = document.querySelector('.feed-container');

loadMoreButton.addEventListener('click', () => {
    // Fetch additional posts from server or JSON file
    // Append the new posts to the feedContainer
});


// JavaScript code for post commenting functionality
const postComments = document.querySelectorAll('.post-comments');

postComments.forEach((comments) => {
    const commentInput = comments.querySelector('.comment-input');
    const commentSubmit = comments.querySelector('.comment-submit');
    const commentList = comments.querySelector('.comment-list');

    commentSubmit.addEventListener('click', () => {
        const commentContent = commentInput.value;
        if (commentContent.trim() !== '') {
            const comment = document.createElement('div');
            comment.classList.add('comment');
            comment.innerText = commentContent;
            commentList.appendChild(comment);
            commentInput.value = '';
        }
    });
});

// JavaScript code for like button interactivity
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
  });
});
