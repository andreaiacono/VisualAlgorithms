function Tree(isRedBlack, tagname, canvasWidth) {
    this.isRedBlack = isRedBlack;
    this.tagname = tagname;
    this.svg = new Canvas(tagname, canvasWidth).getCanvas();
    this.numNodes = 1;
    this.root = new Node(this.getRandomNumber(), "black", 0, this.isRedBlack, this.svg);
    this.treeHeight = this.getHeight(this.root, 0);
}

Tree.prototype.reset = function () {
    d3.select(this.tagname).remove();
    this.svg = new Canvas().getCanvas();
    var color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    this.root = new Node(this.getRandomNumber(), color, 0, this.isRedBlack, this.svg);
    this.treeHeight = this.getHeight(this.root, 0);
    this.draw();
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
    var r = Math.round(width / 80);
    var x = Math.round(width / 2 - r / 2);
    var y = Math.round(r + r / 3);

    if (rescale) {
        this.rescaleNode(null, this.root, x, y, r, this.treeHeight - 1);
    }
    this.drawNode(null, this.root, x, y, r, this.treeHeight - 1);
}

Tree.prototype.rescaleNode = function (parent, node, x, y, r, h) {

    if (node != null) {
        node.rescale(x, y, r, parent);
        this.rescaleNode(node, node.leftNode, x - r * h * h, y + r * 3, r, h - 1);
        this.rescaleNode(node, node.rightNode, x + r * h * h, y + r * 3, r, h - 1);
    }
}

Tree.prototype.drawNode = function (parent, node, x, y, r, h) {

    if (node != null) {
        node.draw(x, y, r, parent);
        this.drawNode(node, node.leftNode, x - r * h * h, y + r * 3, r, h - 1);
        this.drawNode(node, node.rightNode, x + r * h * h, y + r * 3, r, h - 1);
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
