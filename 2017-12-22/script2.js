function draw(id) {
    var canvas = document.getElementById(id);
    if(canvas==null){
        return false;
    }
   var context = canvas.getContext('2d');
  /*  context.fillStyle = "#EEE";
   context.fillRect(0,0,800,600); */
   var options = new Array(
       "source - over",
       "destination- over",
       "source - in",
       "destination - in",
       "source - out",
       "destination - out",
       "source - atop",
       "destination - atop",
       "lighter",
       "xor",
       "copy"
   );
   i = 8; // 可自行修改这个参数来显示想要查看组合的结果
   // 绘制原有蓝色长方形
   context.fillStyle = "blue";
   context.fillRect(20,20,200,200);

   /* --------------设置组合方式 ，从组合的参数中挑选组合方式，此处因为i=8,所以组合方式为下标为8的组合方式为lighter--------------*/
   context.globalCompositeOperation = options[i];
   // -------------设置新图形----------------
   context.beginPath();
   context.fillStyle = "red";
   context.arc(220,220,100,0,Math.PI*2,false); // 逆时针绘制圆形，绘制圆形起点横坐标为圆心所在横坐标，纵坐标同理
   // context.closePath();//只有一个圆形，是否关闭路径无关紧要
   context.fill();

   


}