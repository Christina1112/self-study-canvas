function draw(id){
    var canvas = document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context = canvas.getContext('2d');
   /*  context.fillStyle = "#EEE";
    context.fillRect(0,0,800,600); */
    //定义颜色
    var colors=["red","orange","yellow","green","navy","blue","purple"];
    // 定义线宽
    context.lineWidth = 20;
    // 坐标原点向右移动100像素
    context.transform(1,0,0,1,100,0);
    // 绘制圆弧
    for(var i=0;i<colors.length;i++){
        // 定义每次向下平移10个像素的变换矩阵
        context.transform(1,0,0,1,0,20);
        // 给圆弧线条设定颜色
        context.strokeStyle = colors[i];
        // 绘制路径
        context.beginPath();
        context.arc(50,100,100,0,Math.PI,true);
        context.stroke();
    } 

}