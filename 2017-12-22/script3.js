function draw(id) {
    var canvas = document.getElementById(id);
    if (canvas == null) {
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEE";
    context.fillRect(0, 0, 400, 300);
    // 绘制阴影
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowColor = 'rgba(100,100,100,0.5)';
    context.shadowBlur = 7.5;
    // 绘制图形
    context.translate(0, 50);
    for (var i = 0; i < 3; i++) {
        context.translate(50, 50);
        create5Star(context);
        context.fill();
    }
}

function create5Star(context) { 
    // 做的五角形与一个圆心为（100,0）半径为50的圆内切。但应该不是一个正五边形，如果是一个正五边形的话var dig = Math.PI / 54;应该换为var dig = Math.PI / 52;，这样子才把一个圆的角度2PI五等分。这是正余弦方面的数学知识。
    //dx,dy: N角星的位置，也是N角星中心点的坐标
    var dx = 100;
    var dy = 0;

    var s = 50; // s是顶点到五角星外接圆半径
    // 创建路径
    context.beginPath();
    context.fillStyle = 'rgba(255,0,0,0.5)';
    var x = Math.sin(0); // 绘制图形的起始横坐标
    var y = Math.cos(0); // 绘制图形的起始纵坐标
    var dig = Math.PI / 5 * 4; //dig: 每一段两点顶点与中心点形成的夹角度 2π/5平分5个点，因为五角星需要隔一个点连下一个点，所以再乘以2。就得到了你说的 (2π/5)*2 = π/5*4
    for (var i = 0; i < 5; i++) {
        var x = Math.sin(i * dig);
        var y = Math.cos(i * dig);
        context.lineTo(dx + x * s, dy + y * s);
    }
    context.closePath();
}