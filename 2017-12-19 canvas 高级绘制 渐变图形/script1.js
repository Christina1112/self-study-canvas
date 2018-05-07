function draw(id){
    var canvas = document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context = canvas.getContext("2d");
   //---------------------------- 1）创建一个LinearGradient对象------------------------------------
    var obj1 = context.createLinearGradient(0,0,0,300);
   //---------------------------- 2)填充渐变颜色-------------------------------
   // 开始颜色
    obj1.addColorStop(0,'rgb(255,255,0)');
   // 结束颜色
    obj1.addColorStop(1, 'rgb(0,255,255)');
    //---------------------------- 3)指定填充对象--------------------------
    context.fillStyle = obj1; 
    // 绘制图形
    context.fillRect(0,0,800,600);
   // var n=0;
    // -----------------------------创建第二个线形渐变对象-----------------------------
    var obj2 = context.createLinearGradient(0, 0, 300, 0);
    obj2.addColorStop(0,'rgba(0,0,255,0.5)');
    obj2.addColorStop(1, 'rgba(255,0,0,0.5)');

    for(var i=0;i<10;i++){
        context.beginPath();
        context.fillStyle = obj2;
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        context.closePath();
        context.fill();
    }
}