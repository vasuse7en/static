function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}

bindEvent(window, 'message', function(e) {
    if (e.data === "enable-popup") {
        document.getElementById("chatbot-iframe").className = "iframe-transifex-popped";
    } else if (e.data === "disable-popup") {
        document.getElementById("chatbot-iframe").className = "iframe-transifex-mini";
    }
});
