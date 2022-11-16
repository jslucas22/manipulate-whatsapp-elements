class CanvasStrategy {
    manipulate() {
        this.tratarSeletorCanvas();
    }

    tratarSeletorCanvas() {
        if (document.getElementById('main')
            .getElementsByTagName('canvas') != null) {
                
            var elements = document.getElementById('main')
                .getElementsByTagName('canvas');
            for (var i = elements.length; i-- > 0;) {
                var element = elements[i];
                element
                    .parentElement
                    .remove(element);
            }
        }
    }
}