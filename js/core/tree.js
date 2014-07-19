function Tree() {
    this.svg = new Canvas().getCanvas();
    this.numNodes = 1;
    this.root = new Node(Math.round(Math.random() * 90) + 9, "black", 0, this.svg);
    this.treeHeight = this.getHeight(this.root, 0);
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

Tree.prototype.getHeight = function(node, level) {

    if (node == null) return level;

    var leftHeight = this.getHeight(node.leftNode, level+1);
    var rightHeight = this.getHeight(node.rightNode, level+1);

    return leftHeight > rightHeight ? leftHeight : rightHeight;
}

Tree.prototype.draw = function () {

    var width = document.getElementById("svg-canvas").clientWidth;
    //var height = document.getElementById("svg-canvas").clientHeight;
    var r = width / 40;
    var x = width / 2 - r / 2;
    var y = r + r/3;

    console.log("heght:" + this.treeHeight);
    this.drawNode(null, this.root, x, y, r, this.treeHeight);
}

Tree.prototype.drawNode = function (parent, node, x, y, r, h) {

    if (node != null) {
        node.draw(x, y, r, parent);
        this.drawNode(node, node.leftNode, x - r * h , y + r * 3, r, h-1);
        this.drawNode(node, node.rightNode, x + r * h, y + r * 3, r, h-1);
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
    var newNode = new Node(value, color, lastNode.level + 1, this.svg);

    if (lastNode.leftNode == null && lastNode.rightNode == null) {
        if (Math.random() > 0.5) lastNode.leftNode = newNode;
        else lastNode.rightNode = newNode;
    }
    else if (lastNode.leftNode == null) {
        lastNode.leftNode = newNode;
    }
    else {
        lastNode.rightNode = newNode;
    }

    this.numNodes++;

    var newHeight = this.getHeight(this.root, 0);
    if (this.treeHeight < newHeight ) {
        this.treeHeight = newHeight;
        this.clear()
    }
    this.draw();
}

Tree.prototype.insertNodes = function () {
    var j;
    for (j=0; j<1; j++) {
        this.insertNode(Math.round(Math.random()*90)+9);
    }
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
