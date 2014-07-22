function Canvas() {
    this.svg;
    this.init();
}

Canvas.prototype.init = function () {
    this.svg = d3.select("body").append("svg")
        .attr("id", "svg-canvas")
        .attr("width", "90%")
        .attr("height", "200")
        .style("background-color", "darkgray")
        .style("margin", "20, auto")
        .style("border", "1px solid grey")
        .style("fill-opacity", "0.8");
}

Canvas.prototype.getCanvas = function () {
    return this.svg;
}
