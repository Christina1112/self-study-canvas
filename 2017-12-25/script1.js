function draw(id){
    var canvas = document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEE";
    context.fillRect(0,0,800,600);
    image = new Image();
    image.src = "./img.jpg";
    image.onload = function(){
        drawImg(context,image);
    }

    function drawImg(context,image){
        for(var i=0;i<7;i++){
            context.drawImage(image,0+i*100,0+i*50,200,200);
        }
    }
}