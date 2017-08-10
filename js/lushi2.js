//下拉菜单
var li=document.querySelectorAll("#dropdownLi-one,#dropdownLi-two,#dropdownLi-three,#dropdownLi-four,#dropdownLi-five,#dropdownLi-six,#dropdownLi-seven");
var nav=document.querySelector("#navbarLi");
for(i=0;i<li.length;i++){
    li[i].onmouseover=function(){
        this.children[1].style.height="105px";
        this.children[0].className="active";
        nav.children[1].className="";
    }
    li[i].onmouseout=function(){
        this.children[1].style.height="";
        this.children[0].className="";
        nav.children[1].className="active";
    }
}


//点击切换图片
var pic=document.querySelector("#picture-one");
var pic2=document.querySelector("#picture-three");
pic.children[0].onclick=function(){
    this.firstElementChild.style.backgroundPositionY="-180px";
    pic.children[1].firstElementChild.style.backgroundPosition="-78px 0";
    pic.children[2].firstElementChild.style.backgroundPosition="-155px 0";
    pic2.firstElementChild.style.backgroundPositionY="0px";
}
pic.children[1].onclick=function(){
    this.firstElementChild.style.backgroundPositionY="-180px";
    pic.children[0].firstElementChild.style.backgroundPosition="3px 0";
    pic.children[2].firstElementChild.style.backgroundPosition="-155px 0";
    pic2.firstElementChild.style.backgroundPositionY="-107px";
}
pic.children[2].onclick=function(){
    this.firstElementChild.style.backgroundPositionY="-180px";
    pic.children[0].firstElementChild.style.backgroundPosition="3px 0";
    pic.children[1].firstElementChild.style.backgroundPosition="-78px 0";
    pic2.firstElementChild.style.backgroundPositionY=-222+"px";
}

//背景切换
var bjImage=document.querySelectorAll(".pic-right-center>.three,.pic-right-center>.five");
//console.log(bjImage);
for(var i=0;i<bjImage.length;i++){
    bjImage[i].onmouseover = function () {
        this.style.backgroundImage = "url(../images/3-v2015-home-moudel-hover-top-bg.jpg)";
        this.style.backgroundPositionY ="5px";
    }
    bjImage[i].onmouseout = function () {
        this.style.backgroundImage = "url(../images/3-v2015-home-moudel-top-bg.jpg)";
        this.style.backgroundPositionY ="0px";
    }
}

//背景图片切换
var bjPic1=document.querySelector(".pic-right-center>.four>li:first-child");
var bjPic2=document.querySelector(".pic-right-center>.four>li:nth-child(2)");
var bjPic3=document.querySelector(".pic-right-center>.four>li:nth-child(3)");
var bjPic4=document.querySelector(".pic-right-center>.four>li:nth-child(4)");
var bjPic5=document.querySelector(".pic-right-center>.four>li:nth-child(5)");
var bjPic6=document.querySelector(".pic-right-center>.four>li:nth-child(6)");
var bjPic7=document.querySelector(".pic-right-center>.four>li:last-child");
//console.log(bjpic7);
bjPic1.onmouseover=function(){
    this.lastElementChild.style.backgroundPositionY="-1725px";
}
bjPic1.onmouseout=function(){
    this.lastElementChild.style.backgroundPositionY="-1635px";
}
bjPic2.onmouseover=function(){
    this.lastElementChild.style.backgroundPositionY="-366px";
}
bjPic2.onmouseout=function(){
    this.lastElementChild.style.backgroundPositionY="-265px";
}
bjPic3.onmouseover=function(){
    this.lastElementChild.style.backgroundPositionY="-1235px";
}
bjPic3.onmouseout=function(){
    this.lastElementChild.style.backgroundPositionY="-1120px";
}
bjPic4.onmouseover=function(){
    this.lastElementChild.style.backgroundPositionY="-611px";
}
bjPic4.onmouseout=function(){
    this.lastElementChild.style.backgroundPositionY="-513px";
}
bjPic5.onmouseover=function(){
    this.lastElementChild.style.backgroundPositionY="-897px";
}
bjPic5.onmouseout=function(){
    this.lastElementChild.style.backgroundPositionY="-775px";
}
bjPic6.onmouseover=function(){
    this.lastElementChild.style.backgroundPositionY="-1521px";
}
bjPic6.onmouseout=function(){
    this.lastElementChild.style.backgroundPositionY="-1016px";
}
bjPic7.onmouseover=function(){
    this.lastElementChild.style.backgroundPositionY="-1428px";
}
bjPic7.onmouseout=function(){
    this.lastElementChild.style.backgroundPositionY="-1345px";
}


//图片滑动
var picMove=document.querySelectorAll("#picMove a");
//console.log(picMove);

for(var i=0;i<picMove.length;i++){
    //var t=picMove[i].parentNode;
    //console.log(t);
    picMove[i].onmouseover=function(){
        this.firstElementChild.style.backgroundPositionY="-60px";
    }
    picMove[i].onmouseout=function(){
        this.firstElementChild.style.backgroundPositionY="0px";
    }
}


//导航条固定在顶部

window.onscroll=function(){
    var navF=document.querySelector("#top>div.navbar-box");
//console.log(navF);
    var topScroll=document.body.scrollTop;
//console.log(topScroll);
    if(topScroll>231){
        navF.style.position="fixed";
        navF.style.top="-11px";
        navF.style.zIndex=40;
    }else{
        navF.style.position="relative";
        navF.style.top="";
        navF.style.zIndex=10;
    }
}


//登录跳转
var user=document.getElementById("userLogin");
var userOut=document.getElementById("outUser");
//console.log(user);
user.onclick=function(){
    location.href="login.html";
}
if(sessionStorage["loginName"]!=undefined){
    user.innerHTML="欢迎回来"+sessionStorage["loginName"];
    userOut.style.display="block";
}
userOut.onclick=function(){
    this.style.display="none";
    user.innerHTML="登录";
}

//弹窗

var open=document.getElementById("openClickPic");
var open2=document.getElementById("openClickPic2");
var cl=document.getElementById("clickPic");
var cl2=document.getElementById("clickPic2");
open.onclick=function(){
    if(cl.style.display=="none"){
        cl.style.display="block";
        cl2.style.display="none";
        //console.log(1);
    }
    else{
        cl.style.display="none";
        //console.log(2);
    }
}
open2.onclick=function(){
    if(cl2.style.display=="none"){
        cl2.style.display="block";
        cl.style.display="none";
    }else{
        cl2.style.display="none";
    }
}
