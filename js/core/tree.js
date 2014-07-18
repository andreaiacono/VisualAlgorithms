function Tree() {
    this.svg = new Canvas().getCanvas();
    this.numNodes = 1;
    this.root = new Node(Math.round(Math.random() * 90) + 10, "black", this.svg);
    this.draw();
}

Tree.prototype.draw = function () {

    this.svg.text("");

    width = document.getElementById("svg-canvas").clientWidth;
    height = document.getElementById("svg-canvas").clientHeight;
    r = width / 20;
    x = width / 2 - r / 2;
    y = r;

    this.drawNode(this.root, x, y, r);
}

Tree.prototype.drawNode = function (node, x, y, r) {

    if (node != null) {

        node.draw(x, y, r);
        this.drawNode(node.getLeftNode(), x - r*2, y + r*2, r);
        this.drawNode(node.getRightNode(), x + r*2, y + r*2, r);
    }
}

Tree.prototype.insertNode = function (value) {
    node = this.root;
    while (node != null) {
        lastNode = node;
        if (Math.random() > 0.5) node = node.getLeftNode();
        else node = node.getRightNode();
    }

    color = Math.random() > 0.5 ? "black" : "red";
    if (Math.random() > 0.5) lastNode.setLeftNode(new Node(value, color, this.svg));
    else lastNode.setRightNode(new Node(value, color, this.svg));

    this.numNodes++;
    this.draw();
}

window.onresize = function (event) {
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