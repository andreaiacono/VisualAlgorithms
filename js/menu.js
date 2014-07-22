$(document).ready(function () {
    loadMenu();
});


function loadMenu() {

    var menu = '<ul>\
        <li class="test"><a href="#">Home</a></li>\
        <li class="test">\
            <a>Data Structures</a>\
            <ul>\
                <li><a href="#">Trees</a>\
                    <ul>\
                        <li><a href="tree.html">Binary Trees</a></li>\
                        <li><a href="#">2-3-4 Trees</a></li>\
                        <li><a href="#">Red-black Trees</a></li>\
                        <li><a href="#">Tries</a></li>\
                        <li><a href="#">Splay Trees</a></li>\
                        <li><a href="#">AVL Trees</a></li>\
                    </ul>\
                </li>\
                <li><a href="#">Hash table</a></li>\
                <li><a href="#">Stack</a></li>\
                <li><a href="#">Heap</a></li>\
                <li><a href="#">Queues</a></li>\
            </ul>\
        </li>\
        <li>\
            <a href="#">Algorithms</a>\
            <ul>\
                <li><a href="#">Traversal</a>\
                    <ul>\
                        <li><a href="#">Tree</a>\
                            <ul>\
                                <li><a href="#">Preorder</a></li>\
                                <li><a href="#">Inorder</a></li>\
                                <li><a href="#">Postorder</a></li>\
                                <li><a href="#">Level order</a></li>\
                            </ul>\
                        </li>\
                        <li><a href="#">Graph</a>\
                            <ul>\
                                <li><a href="#">Depth First Search</a></li>\
                                <li><a href="#">Breadth First Search</a></li>\
                            </ul>\
                        </li>\
                    </ul>\
                </li>\
                <li><a href="#">Searching</a>\
                    <ul>\
                        <li><a href="#">Binary search</a></li>\
                        <li><a href="#">Interpolation search</a></li>\
                    </ul>\
                </li>\
                <li><a href="#">Sorting</a>\
                    <ul>\
                        <li><a href="#">Bubble Sort</a></li>\
                        <li><a href="#">Selection Sort</a></li>\
                        <li><a href="#">Insertion Sort</a></li>\
                        <li><a href="#">Quicksort</a></li>\
                        <li><a href="#">Mergesort</a></li>\
                        <li><a href="#">Heapsort</a></li>\
                    </ul>\
                </li>\
            </ul>\
        </li>\
        <li class="last">\
            <a href="#">About</a>\
        </li>\
    </ul>';

    document.getElementById("menu").innerHtml = "Andrea";
    console.log("setting menu on div: " + document.getElementById("menu"));
}