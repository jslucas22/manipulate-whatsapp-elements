class DownloadStrategy {
    manipulate() {
        this.tratarSeletorMsgDownload()
        this.tratarSeletorDownload()
    }

    tratarSeletorMsgDownload() {
        var downloadElement = document.querySelectorAll('[data-testid=mi-msg-download]');
        if (downloadElement != null)
            for (let element of downloadElement) {
                element.remove(element)
            }
    }

    tratarSeletorDownload() {
        var downloadElement = document.querySelectorAll('[data-testid=download]');
        if (downloadElement != null)
            for (let element of downloadElement) {
                element
                    .parentElement
                    .remove(element)
            }
    }
}