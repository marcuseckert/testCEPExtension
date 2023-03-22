function getTabs(level) {
    var str = "";
    for (var i = 0; i < level; ++i) {
        str += "\t";
    }
    return str;
}

function iterateOverProperty(property, level) {
    $.writeln(getTabs(level) + property.matchName, "\t\t", property.name);
    if (property.numProperties > 0) {

        for (var i = 1; i <= property.numProperties; ++i) {
            iterateOverProperty(property.property(i), level + 1);
        }
    }
}
$.level = 1
var activeItem = app.project.activeItem;
var cLayer = activeItem.layers[1]

for (var i = 1; i < cLayer.numProperties; ++i) {
    var p = cLayer.property(i);
    iterateOverProperty(p, 0);
    var nn = 1.0;
}
