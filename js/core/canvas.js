function Canvas(tagname, canvasWidth) {
    this.svg;
    this.canvasWidth = canvasWidth;
    this.init(tagname);
}

Canvas.prototype.init = function (tagname) {
    this.svg = d3.select(tagname).append("svg")
        .attr("id", tagname + "-canvas")
        .attr("width", this.canvasWidth)
        .style("height", "100%")
        .style("background", "rgba(230, 230, 230, 0.85")
        .style("margin", "20, auto")
        .style("border", "2px solid #555")
        .style("fill-opacity", "0.8")
}

Canvas.prototype.getCanvas = function () {
    return this.svg;
}
