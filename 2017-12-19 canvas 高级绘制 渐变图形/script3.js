function draw(id){
    var canvas = document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context = canvas.getContext("2d");
    context.fillStyle = "#000";
    context.fillRect(0,0,800,600);
    //绘制图形
    // --------------------------------------移动坐标原点位置---------------------------------------------
    context.translate(400,200);
    context.fillStyle = 'rgba(255,0,0,0.25)';
    for(var i=0;i<80;i++){
        context.translate(25,25);//改变原点位置
        context.scale(0.95,0.95); // 缩小长方形
        context.rotate(Math.PI/10); // 旋转长方形
        context.fillRect(0,0,200,100); // 绘制小长方形图形
    }
}