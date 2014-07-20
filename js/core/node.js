function Node(value, color, level, svg) {

    this.svg = svg;
    this.circleObject;
    this.textObject;
    this.lineObject;
    this.x;
    this.y;
    
    this.leftNode = null;
    this.rightNode = null;
    this.alreadyDrawn = false;
    this.level = level;

    this.backgroundColor = "lightgray";
    this.borderColor = color;
    this.textColor = this.borderColor;
    this.textValue = value;
}

Node.prototype.rescale = function (x, y, r, parent) {
	if (parent != null) {
		console.log("parent: " + parent.id + " x=" + parent.x + " y=" + parent.y);
		d3.select("#line-" + this.textValue)
			.transition()
			.attr("x1", x)
			.attr("y1", y)
			.attr("x2", parent.x)
			.attr("y2", parent.y);
	}

    d3.select("#circle-" + this.textValue)
		.transition()
    	.attr("cx", x)
	    .attr("cy", y);
   
	d3.select("#text-" + this.textValue)
	    .transition()
	    .attr("x", x - r / 1.8)
		.attr("y", y + r / 2.8);
	
	this.x = x;
	this.y = y;
}

Node.prototype.draw = function (x, y, r, parent) {

    if (!this.alreadyDrawn) {

		if (parent != null) {
			this.lineObject = this.svg.append("line")	
			.attr("id", "line-" + this.textValue)
			.attr("x1", x)
			.attr("y1", y)
			.attr("x2", parent.x)
			.attr("y2", parent.y)
			.attr("stroke-width", 2)
			.attr("stroke", "black");	
		}

		this.circleObject = this.svg.append("circle")
			.attr("id", "circle-" + this.textValue)
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
		    .attr("id", "text-" + this.textValue)
		    .attr("x", x - r / 1.8)
		    .attr("y", y + r / 2.8)
		    .attr("font-size", 0)
		    .transition()
		    .attr("fill", this.textColor)
		    .attr("font-size", r)
		    .text(this.textValue);

		this.alreadyDrawn = true;
	}
    
    this.x = x;
    this.y = y;
};
