//paper.install(window);

jQuery(function ($) {

    var $canvas = $('#canvas');
		var scope = paper.setup('canvas');

    var tool = new paper.Tool();

    var color = 'black';
    var width = 5;

    var path;
    var background;

    function refreshBackground() {
      if(background){
        background.remove();
      }

      background = new paper.Path.Rectangle(scope.view.bounds);
      background.fillColor = $canvas.css('background-color');
      background.sendToBack();
    }

    refreshBackground();

    $colors = $('.colors');
    $('#menu-button').on('click', function (){
      $colors.toggle();
    })

    $('.color').on('click', function (){
      color = $(this).css('background-color');
      $colors.hide();
    });

    $('#download').on('click', function (){
      this.href = canvas.toDataURL('image/png');
      this.download = 'dibu-'+ Date.now() + '.png';
    });

    tool.minDistance = 10;

    tool.onMouseDown = function(event) {
        path = new paper.Path();
        path.add(event.point);
        path.strokeColor = color;
        path.strokeWidth = width;
        path.strokeCap = 'round';
    }

    tool.onMouseDrag = function(event) {
        path.add(event.point);
        path.smooth({ type: 'continuous' });
    }

    scope.view.onResize = refreshBackground;

});
