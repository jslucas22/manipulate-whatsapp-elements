class CanvasStrategy {
    manipulate() {
        this.tratarSeletorCanvas();
    }

    tratarSeletorCanvas() {
        var main = document.getElementById('main');

        if (main != null) {
            var elements = main.getElementsByTagName('canvas')

              if (elements != null) {
                  for (var i = elements.length; i-- > 0;) {
                      var element = elements[i];
                      element
                          .remove();
                  }
              }
        }
    }
}
