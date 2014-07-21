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
        alpha = Math.atan2(y -parent.y, x-parent.x);
        coords1 = this.getLineCoords(x, y, alpha, r, false);
        coords2 = this.getLineCoords(parent.x, parent.y, alpha, r, true);

		d3.select("#line-" + this.textValue)
			.transition()
            .attr("x1", coords1[0])
            .attr("y1", coords1[1])
            .attr("x2", coords2[0])
            .attr("y2", coords2[1])
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
            alpha = Math.atan2(y -parent.y, x-parent.x);
            coords1 = this.getLineCoords(x, y, alpha, r, false);
            coords2 = this.getLineCoords(parent.x, parent.y, alpha, r, true);
			this.lineObject = this.svg.append("line")
			.attr("id", "line-" + this.textValue)
			.attr("x1", coords1[0])
			.attr("y1", coords1[1])
			.attr("x2", coords2[0])
			.attr("y2", coords2[1])
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


Node.prototype.getLineCoords = function (x, y, alpha, r, isParent) {

    if (isParent) {
        x += Math.cos(alpha) * r;
        y += Math.sin(alpha) * r;
    }
    else {
        x -= Math.cos(alpha) * r;
        y -= Math.sin(alpha) * r;
    }

    return [x, y];

}