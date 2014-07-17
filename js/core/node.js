function Node(value, svg) {

    this.backgroundColor = "lightgray";
    this.borderColor = "black";
    this.textColor = "red";
    this.value = value;
    this.svg = svg;
}

Node.prototype.draw = function (x, y, r) {

    this.svg.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("fill", this.backgroundColor)
        .attr("stroke", this.borderColor)
        .attr("stroke-width", "3")
        .attr("r", 1)
        .transition()
        .attr("r", r);

    this.svg.append("text")
        .attr("x", x)
        .attr("y", y)
        .transition()
        .attr("fill", this.textColor)
        .text(this.value );
};