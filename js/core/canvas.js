function Canvas(tagname, canvasWidth, canvasHeight) {
    this.svg;
    this.init(tagname, canvasWidth, canvasHeight);
}

Canvas.prototype.init = function (tagname, canvasWidth, canvasHeight) {
    this.svg = d3.select(tagname).append("svg")
        .attr("id", tagname + "-canvas")
        .style("width", canvasWidth)
        .style("height", canvasHeight)
        .style("background", "rgba(230, 230, 230, 0.85")
        .style("margin", "20, auto")
        .style("border", "2px solid #555")
        .style("fill-opacity", "0.8");
}

Canvas.prototype.getCanvas = function () {
    return this.svg;
}
