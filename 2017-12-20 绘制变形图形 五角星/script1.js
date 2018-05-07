function draw(id){
    var canvas = document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEE";
    context.fillRect(0,0,800,600);
    context.translate(400,100);
    for(var i=0;i<60;i++){
        context.translate(25,25);
        context.scale(0.95,0.95);
        context.rotate(Math.PI/15);
        create5star(context);
        context.fill();
    }

}

function create5star(context){
    var dx = 100; // -----------------表示坐标原点向右偏移量，向右为正，向左为负------------------
    var dy = 0; // -------------------向下偏移量，向下为正，向上为负-------------------
    var s = 50;
    // -----------------------创建路径-----------------------------
    context.beginPath();
    context.fillStyle = "rgba(255,0,0,0.5)"
    var x = Math.sin(0);// ------------------不明所以？？？？？？？？？？？？？？？---------------
    var y = Math.cos(0);// ------------------不明所以？？？？？？？？？？？？？？？？？---------------
    var dig = Math.PI / 5 * 4;// ------------------不明所以？？？？？？？？？？？？？？---------------
    for(var i=0;i<5;i++){
        var x = Math.sin(i * dig); // ------------------不明所以？？？？？？？？？？？？---------------
        var y = Math.cos(i * dig);// ------------------不明所以？？？？？？？？？？？？？？？？？---------------
        context.lineTo(dx + x * s, dy + y * s) // ------------------不明所以？？？？？？？？？？？？？---------------
    }
    context.closePath();


}