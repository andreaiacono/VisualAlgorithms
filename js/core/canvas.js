function Canvas() {
    this.svg;
    this.init();
}

Canvas.prototype.init = function () {
    this.svg = d3.select("body").append("svg")
        .attr("id", "svg-canvas")
        .attr("width", "90%")
        .attr("height", "200")
        .style("background", "rgba(200,200,200,0.85")
        .style("margin", "20, auto")
        .style("border", "2px solid lightgrey")
        .style("fill-opacity", "0.8")
        .style("margin-top", "70px");
}

Canvas.prototype.getCanvas = function () {
    return this.svg;
}
