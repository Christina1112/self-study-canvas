function draw(id) {
    var canvas = document.getElementById(id);
    if (canvas == null) {
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle = "#000";
    context.fillRect(0, 0, 400, 300);
    context.moveTo(50, 50);
    context.bezierCurveTo(100, 200, 200, 50,300,200); //100为控制点的x坐标，300为控制点的纵坐标，200分别为终点的横纵坐标
    context.strokeStyle = "green";
    context.lineWidth = 5;
    context.stroke();



}