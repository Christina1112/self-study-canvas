function draw(id){
    var canvas = document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context = canvas.getContext('2d');
   /*  context.fillStyle = "#EEE";
    context.fillRect(0,0,800,600); */
    var lin = context.createLinearGradient(0,600,800,0);
    lin.addColorStop(0,'rgb(255,255,0)');
    lin.addColorStop(1,'rgb(0,255,255)');
    context.fillStyle = lin;
    context.fillRect(0,0,800,600);
    image = new Image();
    image.src = "img.jpg";
    image.onload = function(){
        drawImg(context,image);
    }


}
function drawImg(context,image){
    draw5StarClip(context);
    context.drawImage(image,-100,-300,600,600)
}

function draw5StarClip(context){
    var n=0;
    // 创建一个圆心位置为（200,0），半径为300的外接圆
    var dx = 200;
    var dy = 0;
    var s = 300;
    // 创建路径
    context.beginPath();
    context.translate(200,300);
    var x = Math.sin(0);
    var y = Math.cos(0);
    var dig = Math.PI/5*4;
    // 绘制五角星
    for(var i=0;i<5;i++){
        var x = Math.sin(i*dig);
        var y = Math.cos(i*dig);
        context.lineTo(dx+x*s,dy+y*s);
    }
    // 图形上下文的裁切
    context.clip();

}