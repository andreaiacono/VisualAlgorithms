function Node(value, color, svg) {
    this.backgroundColor = "lightgray";
    this.borderColor = color;
    this.textColor = this.borderColor;
    this.value = value;
    this.svg = svg;
    this.circle;
    this.value;
    this.leftNode = null;
    this.rightNode = null;
}

Node.prototype.draw = function (x, y, r) {

    this.circle = this.svg.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("fill", this.backgroundColor)
        .attr("stroke", this.borderColor)
        .attr("r", 1)
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
        .text(this.value);
};


Node.prototype.setLeftNode = function (node) {
    this.leftNode = node;
}

Node.prototype.setRightNode = function (node) {
    this.rightNode = node;
}


Node.prototype.getLeftNode = function () {
    return this.leftNode;
}

Node.prototype.getRightNode = function () {
    return this.rightNode;
}
