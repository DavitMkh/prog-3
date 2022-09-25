var socket = io()
var side = 50;

function setup() {
    frameRate(5);
    createCanvas(50 * side, 50 * side);
    background('#acacac');
    
}



function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill(222, 157, 35)
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill(230, 215, 179)
            }
            else if (matrix[y][x] == 5) {
                fill(111, 115, 112)
            }
            else if (matrix[y][x] == 6) {
                fill(83, 87, 84)
            }
            rect(x * side, y * side, side, side);

        }
    }


    
}
setInterval(

    function(){
        socket.on('send matrix', nkarel)
    },1000
)
