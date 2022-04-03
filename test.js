// JavaScript program for solution of Hamiltonian
// Cycle problem using backtracking

class HamiltonianCycle {
    constructor() {
        this.V = 5;
        this.path = [];
    }

    /* A utility function to check
if the vertex v can be added at
index 'pos'in the Hamiltonian Cycle
constructed so far (stored in 'path[]') */
    isSafe(v, graph, path, pos) {
        /* Check if this vertex is
      an adjacent vertex of the
      previously added vertex. */
        if (graph[path[pos - 1]][v] == 0) return false;

        /* Check if the vertex has already
      been included. This step can be
      optimized by creating an array
      of size V */
        for (var i = 0; i < pos; i++) if (path[i] == v) return false;

        return true;
    }

    /* A recursive utility function
to solve hamiltonian cycle problem */
    hamCycleUtil(graph, path, pos) {
        /* base case: If all vertices
      are included in Hamiltonian Cycle */
        if (pos == this.V) {
            // And if there is an edge from the last included
            // vertex to the first vertex
            if (graph[path[pos - 1]][path[0]] == 1) return true;
            else return false;
        }

        // Try different vertices as a next candidate in
        // Hamiltonian Cycle. We don't try for 0 as we
        // included 0 as starting point in hamCycle()
        for (var v = 1; v < this.V; v++) {
            /* Check if this vertex can be
            added to Hamiltonian Cycle */
            if (this.isSafe(v, graph, path, pos)) {
                path[pos] = v;

                /* recur to construct rest of the path */
                if (this.hamCycleUtil(graph, path, pos + 1) == true) return true;

                /* If adding vertex v doesn't
                  lead to a solution, then remove it */
                path[pos] = -1;
            }
        }

        /* If no vertex can be added to Hamiltonian Cycle
      constructed so far, then return false */
        return false;
    }

    /* This function solves the Hamiltonian
Cycle problem using Backtracking. It
mainly uses hamCycleUtil() to solve the
problem. It returns false if there
is no Hamiltonian Cycle possible,
otherwise return true and prints the path.
Please note that there may be more than
one solutions, this function prints one
of the feasible solutions. */
    hamCycle(graph) {
        this.path = new Array(this.V).fill(0);
        for (var i = 0; i < this.V; i++) this.path[i] = -1;

        /* Let us put vertex 0 as the first
      vertex in the path. If there is a
      Hamiltonian Cycle, then the path can be
      started from any point of the cycle
      as the graph is undirected */
        this.path[0] = 0;
        if (this.hamCycleUtil(graph, this.path, 1) == false) {
            document.write("<br>Solution does not exist");
            return 0;
        }

        this.printSolution(this.path);
        return 1;
    }

    /* A utility function to print solution */
    printSolution(path) {
        document.write(
            "Solution Exists: Following" + " is one Hamiltonian Cycle <br>"
        );
        for (var i = 0; i < this.V; i++) document.write(" " + path[i] + " ");

        // Let us print the first vertex again
        // to show the complete cycle
        document.write(" " + path[0] + " <br>");
    }
}
// Driver code
var hamiltonian = new HamiltonianCycle();
/* Let us create the following graph
  (0)--(1)--(2)
      | / \ |
      | / \ |
      | /     \ |
  (3)-------(4) */
var graph1 = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [0, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 1, 1, 1, 0],
];

var graphArr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
// testgraph = [
//     [a, b, c,  , d],  
//     [e, f, g, h, j],
//     [j, k, l, m, n],
//     [o,  , p, q, r],
//     [s, t, u, v, w],
// ]

// a - b - c       d
// |   |   |       |
// e - f - g - h - j
// |   |   |   |   |
// j - k - l - m - n
// |       |   |   |
// o       p - q - r
// |       |   |   |
// s - t - u - v - w


// struct node of doubly linked
// list with four pointer
// next, prev, up, down
class Node {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY
        this.right = undefined;
        this.left = undefined;
        this.up = undefined;
        this.down = undefined;
    }
}
let nodeArr = [];
graphArr.forEach((col, colI) => {
    let tempArr = [];
    col.forEach((row, rowI) => {
        if (row == 0)
            tempArr.push(new Node(rowI, colI));
        else
            tempArr.push(null)
    })
    nodeArr.push(tempArr)
})

nodeArr.map((nodeRow) => {
    nodeRow.forEach((node) => {
        try {
            if (nodeArr[node.posX + 1] && nodeArr[node.posX + 1][node.posY])

                node.right = nodeArr[node.posX + 1][node.posY]

            if (nodeArr[node.posX - 1] && nodeArr[node.posX - 1][node.posY])

                node.left = nodeArr[node.posX - 1][node.posY]

            if (nodeArr[node.posX][node.posY - 1])

                node.up = nodeArr[node.posX][node.posY - 1]

            if (nodeArr[node.posX][node.posY + 1])

                node.down = nodeArr[node.posX][node.posY + 1]
        } catch (err) { }
    })
})

adjMatrix = [];

nodeArr.map((nodeRow) => {
    nodeRow.forEach((node) => {
        tempAdjMatrix = [];
        for (let index = 0; index < 100; index++) {
            tempAdjMatrix[index] = 0;
            node
            
        }
        adjMatrix.push(tempAdjMatrix)
    })
})

console.log(adjMatrix)
//     a b c d e f g h i
// a   0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
// b   1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
// c   0 1 0 1 0 0 0 0 0 0 0 0 0 0
// d   0 0 1 0 1 0 0 0 0 0 0 
// e   0 0 0 1 0 1 0 0 0 0 0 
// f   0 0 
// g   0 0
// h   0 0
//     0 0