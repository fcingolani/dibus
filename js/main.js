//paper.install(window);

jQuery(function ($) {
		paper.setup('canvas');

    var tool = new paper.Tool();

    var color = 'black';
    var width = 30;
    var path;

    tool.minDistance = 10;

    $('.color').on('click', function (){
      color = $(this).css('background-color');
    })

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

});
