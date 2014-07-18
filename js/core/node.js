function Node(value, color, svg) {
    this.backgroundColor = "lightgray";
    this.borderColor = color;
    this.textColor = this.borderColor;
    this.textValue = value;
    this.svg = svg;
    this.circle;
    this.leftNode = null;
    this.rightNode = null;
    this.alreadyDrawn = false;
}

Node.prototype.draw = function (x, y, r) {

    if (!this.alreadyDrawn) {

        this.circle = this.svg.append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("fill", this.backgroundColor)
            .attr("stroke", this.borderColor)
            .attr("r", 0)
            .transition()
            .attr("r", r)
            .transition()
            .attr("stroke-width", r / 20);

        this.value = this.svg.append("text")
            .attr("x", x - r / 1.8)
            .attr("y", y + r / 2.8)
            .attr("font-size", 0)
            .transition()
            .attr("fill", this.textColor)
            .attr("font-size", r)
            .text(this.textValue);

        this.alreadyDrawn = true;
    }

};

