class LinkStrategy {
    manipulate() {
        this.tratarSeletorLink();
    }

    tratarSeletorLink() {
        if (document.getElementsByTagName('a') != null) {
            var elements = document.getElementsByTagName('a');
            for (var i = elements.length; i-- > 0;) {
                var element = elements[i];
                element.text = element.innerHTML = '| \u{274C}' + '[ Mensagem bloqueada ]' + '\u{274C} |';
                var text = document.createTextNode(element.firstChild.nodeValue);
                element.parentNode.replaceChild(text, element);
            }
        }
    }
}