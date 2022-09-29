var socket = io()
var side = 50;

function setup() {
    frameRate(5);
    createCanvas(50 * side, 50 * side);
    background('#acacac');
    
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


function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            var obj = matrix[y][x];
            if (obj == 1){
                
        }else if (obj == 2) {
                fill("yellow");
            }else if (obj == 0){
                fill("grey")
            }
            rect(x * side, y * side, side, side);
        }
    }
}

        socket.on('send matrix', nkarel)
 
setInterval(

    
    function(){
        socket.on('send matrix', nkarel)
    },1000
)
