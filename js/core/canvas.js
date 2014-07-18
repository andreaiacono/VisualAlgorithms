function Canvas() {
    this.svg;
    this.init();
}

Canvas.prototype.init = function () {
    this.svg = d3.select("body").append("svg")
        .attr("id", "svg-canvas")
        .attr("width", "95%")
        .attr("height", "90%")
        .style("border", "1px solid black")
        .style("margin", "0, auto");
}

Canvas.prototype.getCanvas = function () {
    return this.svg;
}
