function Node(value, color, level, isRedBlack, svg) {

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
    this.isRedBlack = isRedBlack;

    if (color == "red") {
        this.backgroundColor = "pink";
    }
    else {
        this.backgroundColor = "lightgray";
    }
    this.borderColor = color;
    this.textColor = this.borderColor;
    this.textValue = value;
}

Node.prototype.rescale = function (x, y, r, parent) {
    if (parent != null) {
        var alpha = Math.atan2(y - parent.y, x - parent.x);
        var coords1 = this.getLineCoords(x, y, alpha, r, false);
        var coords2 = this.getLineCoords(parent.x, parent.y, alpha, r, true);

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

var tooltips = [];

Node.prototype.draw = function (x, y, r, parent) {

    var val = parseInt(this.textValue);
    tooltips[val] = this.getToolTip(x, y, r);
    if (!this.alreadyDrawn) {

        if (parent != null) {
            var alpha = Math.atan2(y - parent.y, x - parent.x);
            var coords1 = this.getLineCoords(x, y, alpha, r, false);
            var coords2 = this.getLineCoords(parent.x, parent.y, alpha, r, true);

            this.lineObject = this.svg.append("line")
                .attr("id", "line-" + this.textValue)
                .attr("x1", coords1[0])
                .attr("y1", coords1[1])
                .attr("x2", coords2[0])
                .attr("y2", coords2[1])
                .attr("stroke-width", 1)
                .attr("stroke", "black");
        }

        this.circleObject = this.svg.append("circle")
            .attr("id", "circle-" + this.textValue)
            .attr("cx", x)
            .attr("cy", y)
            .attr("fill", this.backgroundColor)
            .attr("stroke", this.borderColor)
            .attr("r", 0)
            .on("mouseover", function () {
                return tooltips[val].style("visibility", "visible");
            })
            .on("mouseout", function () {
                return tooltips[val].style("visibility", "hidden");
            })
            .transition()
            .attr("r", r)
            .transition()
            .attr("stroke-width", r / 20)

        this.textObject = this.svg.append("text")
            .attr("id", "text-" + this.textValue)
            .attr("x", x - r / 1.8)
            .attr("y", y + r / 2.8)
            .attr("font-size", 0)
            .attr("text-anchor", "right")
            .style("cursor", "default")
            .on("mouseover", function () {
                return tooltips[val].style("visibility", "visible");
            })
            .on("mouseout", function () {
                return tooltips[val].style("visibility", "hidden");
            })
            .transition()
            .attr("fill", this.textColor)
            .attr("font-size", r)
            .text(this.textValue);

        this.alreadyDrawn = true;
    }

    this.x = x;
    this.y = y;
};


Node.prototype.getToolTip = function (x, y, r) {

    var name = "circle-tooltip-" + this.textValue;
    if (d3.select(name) != null) {
        d3.select(name).remove();
    }

    var svgRect = document.getElementById("svg-canvas").getBoundingClientRect();

    return d3.select("body")
        .append(name)
        .style("position", "absolute")
        .style("z-index", "100")
        .style("color", "#444")
        .style("top", svgRect.top + (y - r * 2) + "px")
        .style("left", svgRect.left + (x + r * 2) + "px")
        .style("background-color", "rgba(220, 220, 220, 0.9)")
        .style("border-radius", "8px")
        .style("border", "2px solid #555")
        .style("padding", "5px 15px")
        .style("visibility", "hidden")
        .html(this.getInfo());
}


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

Node.prototype.getInfo = function () {

    var info = "";
    if (this.level != undefined && this.level == 0) {
        info += "<center><b>Root Node</b></center>";
    }
    else if (this.leftNode == null && this.rightNode == null) {
        info += "<center><b>Leaf Node</b></center>";
    }
    info += "Key: <b>" + this.textValue;

    if (this.leftNode != null || this.rightNode != null) {
        info += "</b><br>Left child: ";
        if (this.leftNode != null) info += "<b>" + this.leftNode.textValue + "</b>";
        else info += "<i>not present</i>";
        info += "<br>Right child: ";
        if (this.rightNode != null) info += "<b>" + this.rightNode.textValue + "</b>";
        else info += "<i>not present</i>";
    }
    else {

    }
    if (this.isRedBlack) {
        info += "<br>Color: " + this.borderColor;
    }

    return info;
}