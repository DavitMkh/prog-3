var socket = io();

var side = 40;
function setup() {
    createCanvas(20* side, 20 * side);
}

socket.on("weather", function (data) {
    weath = data;
})


function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if(weath == "summer") {
                    fill("green");
                }else if (weath == "autumn") {
                    fill("#333300");
                }else if (weath == "winter") {
                    fill("white");
                }else if (weath == "spring") {
                    fill("#4dffa6");
                }
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




        socket.on('send matrix', nkarel)
 


function kill() {
    socket.emit("kill")
    }
function addGrass() {
socket.emit("add grass")
}
function addGrassEater() {
socket.emit("add grassEater")
}   
function addPredator() {
socket.emit("add predator")
}
function addHuman() {
socket.emit("add human")
}
function addGargona() {
socket.emit("add grassEater")
}
