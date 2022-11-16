class ImagemStrategy {
    manipulate() {
        this.tratarSeletorImagem();
    }

    tratarSeletorImagem() {
        var imagemElements = document.querySelectorAll('[data-testid=link-preview-thumbnail-jpeg]');
        for (let element of imagemElements) {
            element.parentElement
                .parentElement
                .remove(element)
        }
    }
}