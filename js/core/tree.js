function Tree() {

    this.svg;
    var numNodes = 1;

}

Tree.prototype.init = function () {
    this.svg = d3.select("body").append("svg")
        .attr("id", "svg-canvas")
        .attr("width", "95%")
        .attr("height", 400)
        .style("border", "1px solid black")
        .style("margin", "0, auto");

    this.draw();
}

Tree.prototype.draw = function () {

    // clears the canvas
    this.svg.text("");

    width = document.getElementById("svg-canvas").clientWidth;
    height = document.getElementById("svg-canvas").clientHeight;
    r = width / 10;

    node = new Node("15", this.svg);
    node.draw(width / 2 - r / 2, height / 2 - r / 2, width / 10);

    console.log("Node drawn");
}

Tree.prototype.insertNode = function () {

    this.draw();
    numNodes++;
}


var tree = new Tree();
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