 
const chatBubble = document.getElementById("chatBubble");
const bubbleClose = document.getElementById("bubbleClose");
const chatBtn = document.getElementById("chatBtn");
const chatPanel = document.getElementById("chatPanel");
const panelClose = document.getElementById("panelClose");

const delayMs = 15000;
let timer = null;

timer = setTimeout( () => {
    if (!chatPanel.classList.contains("is-open")){
        chatBubble.classList.add("is-visible");
    };
}, delayMs);

function openChat() {
    clearTimeout(timer);
    chatBubble.classList.remove("is-visible");
    chatPanel.classList.add("is-open");
};

function closeChat() {
    chatPanel.classList.remove("is-open");
}

panelClose.addEventListener("click" , closeChat);
bubbleClose.addEventListener("click", () => {
    chatBubble.classList.remove("is-visible");
});
chatBtn.addEventListener("click" , () => {
    chatPanel.classList.contains("is-open")?closeChat():openChat();
})
