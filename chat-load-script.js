(function () {
    // write html wherever this function is called
document.write(`<iframe id="chatbot-iframe" class='chat-iframe-mini' src="http://192.168.100.239:3000" name="targetframe" allowtransparency="true" scrolling="no" frameborder="0" >
</iframe>`);
var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.id   = "css-chat";
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'https://cdn.jsdelivr.net/gh/vasuse7en/static@latest/chat-iframe.css';
link.media = 'all';
head.appendChild(link);
})();
function bindEvent(element, eventName, eventHandler) {
if (element.addEventListener) {
    element.addEventListener(eventName, eventHandler, false);
} else if (element.attachEvent) {
    element.attachEvent('on' + eventName, eventHandler);
}
}

bindEvent(window, 'message', function(e) {
if (e.data === "enable-popup") {
    document.getElementById("chatbot-iframe").className = "chat-iframe-popped";
} else if (e.data === "disable-popup") {
    document.getElementById("chatbot-iframe").className = "chat-iframe-mini";
}
});
