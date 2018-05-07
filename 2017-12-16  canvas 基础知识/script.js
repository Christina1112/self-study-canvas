
// 绘制矩形
function draw(id){
    var canvas = document.getElementById(id); //1)获取canvas元素
    if(canvas == null){
        return false;
    }
    // 2)获取上下文，图形上下文中是一个封装了很多绘图功能的对象，需要使用canvas对象的getContext()方法来获得图形上下文，draw函数中的参数只能设置为'2d',不能设置为'3d'或者'4d'
    var context = canvas.getContext('2d');
    //  3) 填充与绘制边框
    
    context.fillStyle = "#EEE"; // 填满图形内部样式 为黑色
    context.fillRect(0, 0, 400, 300); // 绘制  以（0,0）这个位置为起点，宽400，高300的图形
    context.fillStyle = "yellow"; // 再次填充绘制过的图形为黄色
    context.strokeStyle = "red"; //  填入边框的颜色值为红色
    context.lineWidth = 1; // 边框宽度为1
    context.fillRect(50, 50, 100, 100); //绘制矩形  以（50,50）这个位置为起点，宽100，高100的图形
    context.strokeRect(50, 50, 100, 100); //绘制矩形边框 以（50,50）这个位置为起点，宽100，高100 的边框

}