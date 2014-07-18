function Tree() {
    this.svg = new Canvas().getCanvas();
    this.numNodes = 1;
    this.root = new Node(Math.round(Math.random() * 90) + 9, "black", this.svg);
    //this.draw();
}

Tree.prototype.clear = function () {
    this.svg.text("");
    this.clearNodes(this.root);
}

Tree.prototype.clearNodes = function (node) {
    if (node != null) {
        node.alreadyDrawn = false;
        this.clearNodes(node.leftNode);
        this.clearNodes(node.rightNode);
    }
}

Tree.prototype.draw = function () {

    var width = document.getElementById("svg-canvas").clientWidth;
    //var height = document.getElementById("svg-canvas").clientHeight;
    var r = width / 20;
    var x = width / 2 - r / 2;
    var y = r + r/3;

    console.log("root text=" + this.root.value);
    this.drawNode(this.root, x, y, r);
}

Tree.prototype.drawNode = function (node, x, y, r) {

    if (node != null) {
        node.draw(x, y, r);
        this.drawNode(node.leftNode, x - r * 3, y + r * 3, r);
        this.drawNode(node.rightNode, x + r * 3, y + r * 3, r);
    }
}

Tree.prototype.insertNode = function (value) {
    var lastNode;
    var node = this.root;
    while (node != null) {
        lastNode = node;
        if (Math.random() > 0.5) node = node.leftNode;
        else node = node.rightNode;
    }

    var color = Math.random() > 0.5 ? "black" : "red";
    if (lastNode.leftNode == null && lastNode.rightNode == null) {

        if (Math.random() > 0.5) lastNode.leftNode = new Node(value, color, this.svg);
        else lastNode.rightNode = new Node(value, color, this.svg);
    }
    else if (lastNode.leftNode == null) {
        lastNode.leftNode = new Node(value, color, this.svg);
    }
    else {
        lastNode.rightNode = new Node(value, color, this.svg);
    }

    this.numNodes++;
    this.draw();
}

window.onresize = function (event) {
    tree.clear();
    tree.draw();
};

//function transction() {
//    d3.selectAll("circle").transition()
//        .duration(750)
//        .delay(function (d, i) {
//            return i * 10;
//        })
//        .attr("r", function (d) {
//            return Math.sqrt(d * scale);
//        });
//
//}

//function transX() {
//    mySquare
//        .transition()
//        .attr("cx", 400);
//}
//
//function transWidth() {
//    mySquare
//        .transition()
//        .attr("r", 120); // will make it bigger
//}
//
//function transFill() {
//    mySquare
//        .style("fill", "white") // if the fill is originally left blank and comes
//        //  from a style sheet, it will start as black
//        .transition()
//        .style("fill", "blue");
//}
//
//function transOpacity() {
//    mySquare
//        .transition()
//        .style("opacity", 0);
//}