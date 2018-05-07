function draw(id){
    var canvas = document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context = canvas.getContext('2d');
    //------------------------------创建径向渐变对象-----------------------------------------
    var obj1 = context.createRadialGradient(400,0,0,400,0,400);
    //------------------------------为径向渐变图形添加渐变色----------------------------------
    obj1.addColorStop(0.1,'rgb(255,255,0)');
    obj1.addColorStop(0.3,'rgb(255,0,255)');
    obj1.addColorStop(1, 'rgb(0,255,255)');
    // -----------------------------指定填充对象----------------------------
    context.fillStyle = obj1;
    //------------------------------绘制径向渐变图形---------------------------------
    context.fillRect(0,0,800,600);
    //-----------------------------为圆形图形添加渐变色，同上面的步骤相同----------------------------------
    var obj2 = context.createRadialGradient(250,250,0,250,250,300);
    obj2.addColorStop(0.1,'rgba(255,0,0,0.5)');
    obj2.addColorStop(0.7, 'rgba(255,255,0,0.5)');
    obj2.addColorStop(1, 'rgba(0,0,255,0.5)');
    for(var i=0;i<10;i++){
        context.beginPath();
        context.fillStyle = obj2;
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        context.closePath();
        context.fill();
    }
    





    
}