function Tree(isRedBlack, tagname, canvasWidth, zoom) {
    this.isRedBlack = isRedBlack;
    this.tagname = tagname;
    this.canvasWidth = canvasWidth;
    this.zoom = zoom;
    this.svg = new Canvas(this.tagname, this.canvasWidth).getCanvas();
    this.numNodes = 1;
    this.root = this.createRandomNode("black");
    this.treeHeight = this.getHeight(this.root, 0);
}

Tree.prototype.reset = function () {
    d3.select("#" + this.tagname + "-canvas").remove();
    this.svg = new Canvas(this.tagname, this.canvasWidth).getCanvas();
    this.root = this.createRandomNode("black");
    this.fillTree();
    this.treeHeight = this.getHeight(this.root, 0);
    this.draw(false);
}

Tree.prototype.createRandomNode = function () {
    var color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    return this.createRandomNode(color);
}

Tree.prototype.createRandomNode = function (color) {
    return new Node(this.getRandomNumber(), color, 0, this.isRedBlack, this.svg);
}

Tree.prototype.fillTree = function () {

    var color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode = new Node(this.getRandomNumber(), color, 1, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode = new Node(this.getRandomNumber(), color, 1, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.leftNode = new Node(this.getRandomNumber(), color, 2, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.rightNode = new Node(this.getRandomNumber(), color, 2, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.leftNode = new Node(this.getRandomNumber(), color, 2, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.rightNode = new Node(this.getRandomNumber(), color, 2, this.isRedBlack, this.svg);

    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.leftNode.leftNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.leftNode.rightNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.rightNode.leftNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.rightNode.rightNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);

    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.leftNode.leftNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.leftNode.rightNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.rightNode.leftNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.rightNode.rightNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);

    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.leftNode.leftNode.leftNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.leftNode.leftNode.rightNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);

    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.leftNode.rightNode.leftNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.leftNode.rightNode.rightNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);

    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.rightNode.leftNode.leftNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.rightNode.leftNode.rightNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);


    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.rightNode.rightNode.leftNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.leftNode.rightNode.rightNode.rightNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);

    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.leftNode.leftNode.leftNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.leftNode.leftNode.rightNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);

    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.leftNode.rightNode.leftNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.leftNode.rightNode.rightNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);

    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.rightNode.leftNode.leftNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.rightNode.leftNode.rightNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);

    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.rightNode.rightNode.leftNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);
    color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root.rightNode.rightNode.rightNode.rightNode = new Node(this.getRandomNumber(), color, 3, this.isRedBlack, this.svg);

}

Tree.prototype.clearCanvas = function () {
    this.svg.text("");
}

Tree.prototype.clear = function () {
    this.clearNodes(this.root);
}

Tree.prototype.clearNodes = function (node) {
    if (node != null) {
        node.alreadyDrawn = false;
        this.clearNodes(node.leftNode);
        this.clearNodes(node.rightNode);
    }
}

Tree.prototype.getHeight = function (node, level) {

    if (node == null) return level;

    var leftHeight = this.getHeight(node.leftNode, level + 1);
    var rightHeight = this.getHeight(node.rightNode, level + 1);

    return leftHeight > rightHeight ? leftHeight : rightHeight;
}

Tree.prototype.draw = function (rescale) {

    var width = document.getElementById(this.tagname + "-canvas").clientWidth;
    var radius = Math.round(this.zoom * width / 80);
    r = radius;
    var x = Math.round(width / 2 - r / 2);
    var y = Math.round(r + r / 3);

    this.drawNode(rescale, null, this.root, x, y, r, this.treeHeight - 1);
}

Tree.prototype.drawNode = function (rescale, parent, node, x, y, r, h) {

    if (node != null) {

        if (rescale) {
            node.rescale(x, y, r, parent);
        }
        else {
            node.draw(x, y, r, parent);
        }
        this.drawNode(rescale, node, node.leftNode, x - (r - 1) * h * h, y + r * 3, r, h - 1);
        this.drawNode(rescale, node, node.rightNode, x + (r - 1) * h * h, y + r * 3, r, h - 1);

    }
}

Tree.prototype.insertRandomNode = function () {
    this.insertNode(this.getRandomNumber());
}

Tree.prototype.insertNode = function (value) {
    var lastNode;
    var node = this.root;
    while (node != null) {
        lastNode = node;
        if (Math.random() > 0.5) node = node.leftNode;
        else node = node.rightNode;
    }

    var color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    var newNode = new Node(value, color, lastNode.level + 1, this.isRedBlack, this.svg);

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
    if (this.treeHeight < newHeight) {
        this.treeHeight = newHeight;
        this.draw(true)
    }
    this.draw(false);
}

Tree.prototype.getRandomNumber = function () {

    var rnd;
    do {
        rnd = Math.round(Math.random() * 99);
    }
    while (this.isPresent(rnd, this.root));
    return rnd;
}

Tree.prototype.isPresent = function (value, node) {
    if (node == null) return false;
    if (node.textValue == value) return true;
    return this.isPresent(value, node.leftNode) || this.isPresent(value, node.rightNode);
}

Tree.prototype.insertNodes = function () {
    var j;
    for (j = 0; j < 1; j++) {
        this.insertNode();
    }
}

Tree.prototype.rotateLeftAnimationStep1 = function () {

    this.clearCanvas();
    this.clear();

    this.root.leftNode = null;

    var x = this.createRandomNode("black");
    this.root.rightNode = x;

    var a = this.createRandomNode("black");
    x.leftNode = a;

    var y = this.createRandomNode("black");
    x.rightNode = y;

    var b = this.createRandomNode("black");
    y.leftNode = b;

    var c = this.createRandomNode("black");
    y.rightNode = c;

    this.treeHeight = this.getHeight(this.root, 0);
    this.draw(false);
    this.rotateLeftAnimationStep2();
}

Tree.prototype.rotateLeftAnimationStep2 = function () {

    var x = this.root.rightNode;
    var a = x.leftNode;
    var y = x.rightNode;
    var b = y.leftNode;
    var c = y.rightNode;


    var cx = d3.select("#circle-" + c.textValue).attr("cx");
    var cy = d3.select("#circle-" + c.textValue).attr("cy");
    var r = d3.select("#circle-" + c.textValue).attr("r");
    console.log("transtion c=" + c + " x=" + cx + " y=" + cy + " r=" + r);

    d3.select("#circle-" + c.textValue)
        .attr("r", r)
        .attr("cx", cx)
        .attr("cy", cy)
        .transition().duration(2000)
        .delay(500)
        .attr("cx", cx - 50)
        .attr("cy", 200);

    d3.select("#text-" + c.textValue)
        .attr("x", cx - r / 1.8)
        .attr("y", cy + r / 2.8)
        .attr("text-anchor", "right")
        .attr("font-size", r)
        .transition().duration(2000)
        .delay(500)
        .attr("x", cx - 50 - r / 1.8)
        .attr("y", 200 + r / 2.8);

    d3.select("#line-" + c.textValue)
        .transition().duration(2000)
        .delay(500)
        .attr("x2", cx - 50 - r / 1.8)
        .attr("y2", 200 + r / 2.8)
        .each("end", function() {
            // I don't know how to call a method of Tree class from here
            tree.rotateLeftAnimationStep2(x,y,a,b,c);
        });

}
