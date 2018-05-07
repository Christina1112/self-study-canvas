function draw(id){
    var canvas = document.getElementById(id);
    if(canvas == null){
        return false;
    }
    var context = canvas.getContext("2d");
    context.fillStyle = "#EEE";
    context.fillRect(0,0,400,300);
    context.moveTo(20,20);
    context.lineTo(255,255);
    context.lineWidth = 5;
    context.strokeStyle = "red";
    context.stroke();
}