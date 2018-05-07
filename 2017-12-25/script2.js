function draw(id){
    var canvas = document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEE";
    context.fillRect(0,0,800,600);
    // 绘制图像
    image = new Image();
    image.src = "img.jpg";

    image.onload = function(){
        drawImg(context,image);
    }

    function drawImg(context,image){
        // 绘制原始图形
        context.drawImage(image,0,0,400,300);
        // 绘制局部区域放大后的图片
        context.drawImage(image,0,0,1000,666,400,0,400,300);
    }


}