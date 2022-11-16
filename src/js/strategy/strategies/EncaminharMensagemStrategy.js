class EncaminharMensagemStrategy {
    manipulate() {
        this.tratarSeletorEncaminharMensagem();
    }

    tratarSeletorEncaminharMensagem() {
        var encaminharMensagemElements = document.querySelectorAll('[data-testid=forward-chat]');
        for (let element of encaminharMensagemElements) {
            element.parentElement.remove(element);
        }
    }
}