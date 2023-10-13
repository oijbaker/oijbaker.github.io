function change() {
    document.body.style.background =  "#000";
}

function update_background() {

}

var balls = [];

function draw() {
    var canvas = document.getElementById("circle");
    if (canvas.getContext) {
        for (i=0; i<2; i++) {
            var ctx = canvas.getContext('2d'); 
            var X = Math.random()*canvas.width;
            var Y = Math.random()*canvas.height;
            var R = Math.floor(Math.random() * 3);
            ctx.beginPath();
            var ball = ctx.arc(X, Y, R, 0, 2*Math.PI);
            ctx.lineWidth = 0.2;
            ctx.strokeStyle = '#000000';
            ctx.stroke();
            balls.append(ball);
        }
    }
}
