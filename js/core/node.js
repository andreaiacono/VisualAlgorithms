function Node(value, color, level, isRedBlack, svg) {

    this.svg = svg;
    this.circleObject;
    this.textObject;
    this.lineObject;
    this.x;
    this.y;
    this.oldX;
    this.oldY;
    this.r;

    this.leftNode = null;
    this.rightNode = null;
    this.alreadyDrawn = false;
    this.level = level;
    this.isRedBlack = isRedBlack;

    if (color == "red") {
        this.backgroundColor = "pink";
    }
    else {
        this.backgroundColor = "#AAA";
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
            .transition().duration(200)
            .attr("x2", coords1[0])
            .attr("y2", coords1[1])
            .attr("x1", coords2[0])
            .attr("y1", coords2[1])
    }

    d3.select("#circle-" + this.textValue)
        .transition().duration(200)
        .attr("cx", x)
        .attr("cy", y);

    d3.select("#text-" + this.textValue)
        .transition().duration(200)
        .attr("x", x - r / 1.8)
        .attr("y", y + r / 2.8);

    this.x = x;
    this.y = y;
}

var tooltips = [];

Node.prototype.draw = function (x, y, r, parent) {

    this.x = x;
    this.y = y;
    this.r = r;

    var val = parseInt(this.textValue);
    tooltips[val] = this.getToolTip(x, y, r);
    if (!this.alreadyDrawn) {

        if (parent != null) {
            var alpha = Math.atan2(y - parent.y, x - parent.x);
            var coords1 = this.getLineCoords(parent.x, parent.y, alpha, r, true);
            var coords2 = this.getLineCoords(x, y, alpha, r, false);

            this.lineObject = this.svg.append("line")
                .attr("id", "line-" + this.textValue)
                .attr("x1", coords1[0])
                .attr("y1", coords1[1])
                .attr("x2", coords1[0])
                .attr("y2", coords1[1])
                .transition()
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
            .delay(150)
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
            .delay(150)
            .attr("fill", this.textColor)
            .attr("font-size", r)
            .text(this.textValue);

        this.alreadyDrawn = true;
    }

};


Node.prototype.moveTo = function (x, y, parent, deleteLink, duration) {

    this.oldX = this.x;
    this.oldY = this.y;
    this.x += x;
    this.y += y;
    console.log("this.r=" + this.r + " this.x=" + this.x + " this.y=" + this.y + " oldX=" + this.oldX + " oldY=" + this.oldY + " drawlink=" + deleteLink + " x=" + x + " y=" + y + (parent != null ? (" parent=" + parent.textValue + " parent.x=" + parent.x + " parent.y=" + parent.y) : ""));

    if (parent != null) {

        if (deleteLink) {
            var alpha = Math.atan2(this.y - parent.y, this.x - parent.x);
            var coords1 = this.getLineCoords(this.x, this.y, alpha, this.r, false);
            var coords2 = this.getLineCoords(parent.x, parent.y, alpha, this.r, true);

            d3.select("#line-" + this.textValue)
//                .attr("stroke-width", 0)
                .transition().duration(duration)
                .attr("stroke-width", 1)
                .attr("x2", coords1[0])
                .attr("y2", coords1[1])
                .attr("x1", coords2[0])
                .attr("y1", coords2[1])
        }
        else {
            d3.select("#line-" + this.textValue)
                .attr("stroke-width", 1)
                .transition().duration(duration)
                .attr("stroke-width", 0)
        }
    }


    d3.select("#circle-" + this.textValue)
        .transition().duration(duration)
        .attr("cx", this.x)
        .attr("cy", this.y);

    d3.select("#text-" + this.textValue)
        .transition().duration(duration)
        .attr("x", this.x - this.r / 1.8)
        .attr("y", this.y + this.r / 2.8)
        .attr("font-size", this.r)
        .text(this.textValue);
}


Node.prototype.getToolTip = function (x, y, r) {

    var name = "circle-tooltip-" + this.textValue;
    if (d3.select(name) != null) {
        d3.select(name).remove();
    }

    var svgRect = document.getElementById(this.svg.attr("id")).getBoundingClientRect();

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
        .style("line-height", "1.2")
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

    return [Math.round(x), Math.round(y)];
}

Node.prototype.getInfo = function () {

    var info = "";
    if (this.level != undefined && this.level == 0) {
        info += "<div style=\"text-align: center\"><b>Root Node</b></div>";
    }
    else if (this.leftNode == null && this.rightNode == null) {
        info += "<div style=\"text-align: center\"><b>Leaf Node</b></div>";
    }
    info += "Key: <b>" + this.textValue + "</b>";

    if (this.leftNode != null || this.rightNode != null) {
        info += "<br>Left child: ";
        if (this.leftNode != null) info += "<b>" + this.leftNode.textValue + "</b>";
        else info += "<i>not present</i>";
        info += "<br>Right child: ";
        if (this.rightNode != null) info += "<b>" + this.rightNode.textValue + "</b>";
        else info += "<i>not present</i>";
    }
    else {

    }
    if (this.isRedBlack) {
        info += "<br>Color: <b>" + this.borderColor + "</b>";
    }

    return info;
}