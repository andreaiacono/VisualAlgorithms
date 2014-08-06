function Canvas(tagname, canvasWidth, canvasHeight) {
    this.svg;
    this.init(tagname, canvasWidth, canvasHeight);

}

Canvas.prototype.init = function (tagname, canvasWidth, canvasHeight) {

    if (tagname != undefined) {
        this.svg = d3.select(tagname).append("svg")
            .attr("id", tagname + "-canvas")
            .style("width", canvasWidth)
            .style("height", canvasHeight)
            .style("background", "rgba(230, 230, 230, 0.85")
            .style("margin", "20, auto")
            .style("border", "2px solid #555")
            .style("fill-opacity", "0.8");

        var width = document.getElementById(tagname + "-canvas").clientWidth;
        var height = document.getElementById(tagname + "-canvas").clientHeight;

        this.svg.append("text")
            .attr("id", tagname + "-label")
            .attr("x", width / 2.9)
            .attr("y", height * 0.95)
            .attr("font-size", 20)
            .attr("font-weight", "bold")
            .style("cursor", "default")
            .text("");
    }
}

Canvas.prototype.getCanvas = function () {
    return this.svg;
}
