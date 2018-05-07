function draw(id){
    var canvas = document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEE";
    context.fillRect(0,0,800,600);

    var image = new Image();
    image.src="img.jpg";
    image.onload = function(){
        drawImg(canvas,context,image);
    }
    function drawImg(canvas, context, image){
        //平铺比例，即横纵向平铺几个图像
        var scale = 5;
        // 图像缩小后的宽度\高度
        var scaleX = canvas.width/scale;
        var scaleY = canvas.height/scale;
        //平铺横纵向个数
        var numX = canvas.width/scaleX;
        var numY = canvas.height/scaleY;
        for(var i=0;i<numX;i++){
            for(var j=0;j<numY;j++){
                context.drawImage(image,i*scaleX,j*scaleY,scaleX,scaleY);
            }
        }

    }

}