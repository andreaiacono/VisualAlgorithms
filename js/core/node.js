function Node(value, color, level, svg) {

    this.svg = svg;
    this.circleObject;
    this.textObject;
    this.x;
    this.y;
    this.r;


    this.leftNode = null;
    this.rightNode = null;
    this.alreadyDrawn = false;
    this.level = level;

    this.backgroundColor = "lightgray";
    this.borderColor = color;
    this.textColor = this.borderColor;
    this.textValue = value;
}

Node.prototype.draw = function (x, y, r, parent) {

    if (!this.alreadyDrawn) {

	this.x = x;
	this.y = y;
	this.r = r;

	if (parent != null) {
		this.svg.append("line")
		
		.attr("x1", x)
		.attr("y1", y)
		.attr("x2", parent.x)
		.attr("y2", parent.y)
		.attr("stroke-width", 2)
		.attr("stroke", "black");	
	}

        this.circleObject = this.svg.append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("fill", this.backgroundColor)
            .attr("stroke", this.borderColor)
            .attr("r", 0)
            .transition()
            .attr("r", r)
            .transition()
            .attr("stroke-width", r / 20);

        this.textObject = this.svg.append("text")
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
