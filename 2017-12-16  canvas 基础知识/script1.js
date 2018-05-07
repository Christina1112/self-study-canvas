
function draw(id){
    var canvas = document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context = canvas.getContext("2d");
    context.fillStyle = "#EEE";
    context.fillRect(0,0,800,600);
    var n=0;
    for(var i=0;i<10;i++){
        // 1）开始创建路径--------------------------------------------------
        context.beginPath(); 
       // 2）创建图形路径
        context.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true); 
       // 创建圆形路径时，使用context的arc方法：context.arc(x,y,radius,起始角度，结束角度，anticlockwise) ,anticlockwise为是否按顺时针方向绘制，其值为布尔值，true表示按照顺时针方向绘制，值为false按照逆时针方向绘制
       
       // 3）关闭路径,此时路径创建完毕，下一步开始绘制图形
       context.closePath();
       // 4）设定绘制样式，调用绘制方法，绘制路径
       context.fillStyle = "rgba(255,0,0,0.25)";
       // 使用fill或者stroke方法绘制图形填充图形或者边框，路径已经决定了大小无需使用参数指定图形大小
       context.fill(); 


    }

}
