//
//var ulList=document.getElementById("ulList");
//var ulIndex=document.getElementById("ulIndex");

//function move(){
//    var moved=640;
//    var i=0;
//var t=setInterval(function(){
//    ulList.style.left=-i*moved+"px";
//    i++;
//    if(i>3){
//        i=0;
//    }
//    //ulIndex.child.addClass("disabled");
//    li[i].addClass("disabled").siblings().removeClass("disabled");
//},1000)
//}
//move();
//ÂÖ²¥
var $ulList=$("#ulList");
//console.log($ulList);
var $ulIndex=$("#ulIndex");
//console.log($ulIndex);
var speed=1000;
var wait=3000;
var LIWIDTH=640;
var timer=null;
var i=0;
function move(){
    timer=setTimeout(()=>{
        i++;
        $ulList.animate({left:-i*LIWIDTH},speed,()=>{
            if(i==3){
                i=0;
                $ulList.css("left","");
            }
        $ulIndex.children(":eq("+i+")").addClass("disabled").siblings().removeClass("disabled");
        //console.log($ulIndex.children(":eq("+i+")"));
            if(canMove){
                move();
            }
        });
    },wait);
}
move();
var canMove=true;
$("#slider").hover(
    ()=>{
    clearTimeout(timer);
    canMove=false;
    },
    ()=>{canMove=true;move()}
)

$ulIndex.on("mouseover","li:not(.disabled)",e=>{
     i=$ulIndex.children().index(e.target);
$ulList.stop(true).animate({left:-i*LIWIDTH},speed,()=>{
    $ulIndex.children(":eq("+i+")").addClass("disabled").siblings().removeClass("disabled");
});
});

