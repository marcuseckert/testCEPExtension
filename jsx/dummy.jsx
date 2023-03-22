$.level = 1;
$.dummy = (function () {

    var ob = {}

    ob.iterate = function () {
        $.level = 1;
         $.writeln("do iterate");
        var activeItem = app.project.activeItem;
        var cLayer = activeItem.layers[1]

        for (var i = 1; i < cLayer.numProperties; ++i) {
            var p = cLayer.property(i);
            
            $.writeln(p.name);
        }
        return 12;
    };

    return ob;

})();