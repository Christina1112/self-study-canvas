// 绘制矩形
function draw(id) {
    var canvas = document.getElementById(id); //1)获取canvas元素
    if (canvas == null) {
        return false;
    }
    // 2)获取上下文，图形上下文中是一个封装了很多绘图功能的对象，需要使用canvas对象的getContext()方法来获得图形上下文，draw函数中的参数只能设置为'2d',不能设置为'3d'或者'4d'
    var context = canvas.getContext('2d');
    // 3)填充与绘制图形
    context.fillStyle = "#EEE";
    context.fillRect(0, 0, 400, 300);
    //var n=0;
    var dx = 150;
    var dy = 150;
    var s = 100;
    context.beginPath();
    context.globalCompositeOperation = "and";
    context.fillStyle = "rgb(100,255,100)";
    context.strokeStyle = "rgb(0,0,100)";
    var x = Math.sin(0);
    var y = Math.cos(0);
    var dig = Math.PI / 15 * 11;
    context.moveTo(dx,dy);
    for (var i = 0; i < 30; i++) {
        var x = Math.sin(i * dig);
        var y = Math.cos(i * dig);
        console.log(i, x, y);
        context.bezierCurveTo(dx + x * s, dy + y * s - 100, dx + x * s + 100, dy + y * s, dx + x * s, dy + y * s);
    }
    context.closePath();
    context.fill();
    context.stroke();




}