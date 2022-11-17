class ButtonStrategy {
    manipulate() {
        this.tratarSeletorDocThumb();
        this.tratarSeletorUrl();
        this.tratarSeletorAudioPlay();
    }

    tratarSeletorDocThumb() {
        if (document.querySelectorAll('[data-testid= document-thumb]') != null) {
            var botaoElements = document.querySelectorAll('[data-testid= document-thumb]');
            for (let element of botaoElements) {
                element.text = element.innerHTML = '| \u{274C}' + '[ Mensagem bloqueada ]' + '\u{274C} |';
                var text = document.createTextNode(element.firstChild.nodeValue);
                element.parentNode.replaceChild(text, element);
            }
        }
    }

    tratarSeletorUrl() {
        var botaoUrlElements = document.querySelectorAll('[data-testid=url-element]');
        for (let element of botaoUrlElements) {
            element
                .parentElement
                .remove(element);
        }
    }

    tratarSeletorAudioPlay() {
        var botaoUrlElements = document.querySelectorAll('[data-testid=audio-play]');
        for (let element of botaoUrlElements) {
            element
                .parentElement
                .remove(element);
        }
    }
}