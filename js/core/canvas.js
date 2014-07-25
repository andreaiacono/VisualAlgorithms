function Canvas() {
    this.svg;
    this.init();
}

Canvas.prototype.init = function () {
    this.svg = d3.select("svg-container").append("svg")
        .attr("id", "svg-canvas")
        .attr("width", "90%")
        .attr("height", "100%")
        .style("background", "rgba(230, 230, 230, 0.85")
        .style("margin", "20, auto")
        .style("border", "2px solid #555")
        .style("fill-opacity", "0.8")
        .style("position", "relative");
}

Canvas.prototype.getCanvas = function () {
    return this.svg;
}
