function draw(id){
    var canvas = document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEE";
    context.fillRect(0,0,800,600);

    image = new Image();
    image.src = "img.jpg";
    image.onload = function(){
        var patn = context.createPattern(image,'repeat'); // 图像平铺方法
        context.fillStyle = patn;
        context.fillRect(0,0,800,600);

    }

}