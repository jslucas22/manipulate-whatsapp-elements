class DownloadStrategy {
    manipulate() {
        this.tratarSeletorDownload()
    }

    tratarSeletorDownload() {
        var downloadElement = document.querySelectorAll('[data-testid=mi-msg-download]');
        if (downloadElement != null)
            for (let element of downloadElement) {
                element.remove(element)
            }
    }
}