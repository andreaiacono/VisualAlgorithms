function RedBlackTree(tagname, canvasWidth, canvasHeight, zoom) {
    this.tagname = tagname;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.zoom = zoom;
    Tree.call(this, true, tagname, canvasWidth, canvasHeight, zoom);
}

RedBlackTree.prototype = new Tree();


RedBlackTree.prototype.rotateAnimation = function () {

    this.root = this.createNode("P", "black");
    this.root.leftNode = this.createNode("A", "black");
    this.root.rightNode = this.createNode("Q", "black");
    this.root.rightNode.leftNode = this.createNode("B", "black");
    this.root.rightNode.rightNode = this.createNode("C", "black");

    this.treeHeight = this.getHeight(this.root, 0);
    this.draw(false);
    this.duration = 1500;
    this.rotateAnimationStep1();
}

RedBlackTree.prototype.rotateAnimationStep1 = function () {

    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("Rotate Left")
        .delay(this.duration / 2)
        .each("end", function () {
            treeRotate.rotateAnimationStep2();
        });
}

RedBlackTree.prototype.rotateAnimationStep2 = function () {

    var p = this.root;
    var a = p.leftNode;
    var q = p.rightNode;
    var b = q.leftNode;
    var c = q.rightNode;
    var r = d3.select("#circle-" + p.textValue).attr("r");

    p.moveTo(0, r * 1.5, null, false, this.duration);
    a.moveTo(0, r * 1.5, p, true, this.duration);
    q.moveTo(0, -r * 1.5, p, true, this.duration);
    c.moveTo(0, -r * 1.5, q, true, this.duration);
    b.moveTo(0, -r * 1.5, q, false, this.duration);

    d3.select("#circle-" + p.textValue)
        .transition()
        .delay(this.duration)
        .each("end", function () {
            treeRotate.rotateAnimationStep3();
        });
}

RedBlackTree.prototype.rotateAnimationStep3 = function () {

    var p = this.root;
    var a = p.leftNode;
    var q = p.rightNode;
    var b = q.leftNode;
    var c = q.rightNode;
    var r = d3.select("#circle-" + p.textValue).attr("r");

    this.root = q;
    q.rightNode = c;
    q.leftNode = p;
    p.leftNode = a;
    p.rightNode = b;

    p.moveTo(-r / 2, r * 1.5, q, true, this.duration);
    q.moveTo(0, -r * 1.5, p, true, this.duration);
    c.moveTo(r * 1.5, -r * 1.5, q, true, this.duration);
    b.moveTo(0, r * 1.5, p, true, this.duration);
    a.moveTo(0, r * 1.5, p, true, this.duration);

    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("")
        .delay(this.duration)
        .each("end", function () {
            treeRotate.rotateAnimationStep4();
        });
}

RedBlackTree.prototype.rotateAnimationStep4 = function () {

    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("Rotate Right")
        .delay(this.duration)
        .each("end", function () {
            treeRotate.rotateAnimationStep5();
        });
}

RedBlackTree.prototype.rotateAnimationStep5 = function () {

    var q = this.root;
    var p = q.leftNode;
    var a = p.leftNode;
    var b = p.rightNode;
    var c = q.rightNode;
    var r = d3.select("#circle-" + p.textValue).attr("r");

    this.root = p;
    p.rightNode = q;
    q.leftNode = b;

    p.moveTo(0, -r * 1.5, null, false, this.duration);
    a.moveTo(0, -r * 1.5, p, true, this.duration);
    q.moveTo(0, r * 1.5, p, true, this.duration);
    c.moveTo(0, r * 1.5, q, true, this.duration);
    b.moveTo(0, -r * 1.5, q, false, this.duration);

    d3.select("#circle-" + p.textValue)
        .transition()
        .delay(this.duration)
        .each("end", function () {
            treeRotate.rotateAnimationStep6();
        });
}

RedBlackTree.prototype.rotateAnimationStep6 = function () {

    var p = this.root;
    var a = p.leftNode;
    var q = p.rightNode;
    var b = q.leftNode;
    var c = q.rightNode;
    var r = d3.select("#circle-" + p.textValue).attr("r");

    p.moveTo(r / 2, -r * 1.5, q, true, this.duration);
    q.moveTo(0, r * 1.5, p, true, this.duration);
    c.moveTo(-r * 1.5, r * 1.5, q, true, this.duration);
    b.moveTo(0, r * 1.5, q, true, this.duration);
    a.moveTo(0, -r * 1.5, p, true, this.duration);

    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("")
        .delay(this.duration)
        .each("end", function () {
            treeRotate.rotateAnimationStep1();
        });
}

RedBlackTree.prototype.getColor = function () {
    return Math.random() > 0.5 ? "black" : "red";
}

