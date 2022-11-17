class CanvasStrategy {
    manipulate() {
        this.tratarSeletorCanvas();
    }

    tratarSeletorCanvas() {
        var elements = document.getElementById('main').getElementsByTagName('canvas');

        if (elements != null)
            if (elements != null) {
                for (var i = elements.length; i-- > 0;) {
                    var element = elements[i];
                    element
                        .remove();
                }
            }
    }
}