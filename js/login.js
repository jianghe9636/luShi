
var btn=$("#btn");
var btn2=$("#btn2");
btn2.click(function(){
    location.href="register.html";
});
btn.click(function(){
    var u=$("#uname").val();
    //console.log(u);
    var p=$("#upwd").val();
    var spanName=$("#spanName");
    var spanPwd=$("#spanPwd");
    var reguname=/^[a-z0-9]{3,6}$/i;
    var regupwd=/^[a-z0-9]{6,12}$/i;
    if(!reguname.test(u)){
        spanName.css("opacity",1);
        return;
    }else{
        spanName.css("opacity",0);
    }
    if(!regupwd.test(p)){
        spanPwd.css("opacity",1);
        return;
    }else{
        spanPwd.css("opacity",0);
    }
    $.ajax({
        type:"POST",
        url:"/login",
        data:{uname:u,upwd:p},
        success:function(data){
            if(data.code==1){
                alert("登录成功3s后转到首页");
                sessionStorage["loginName"]=u;
                sessionStorage["loginUid"]=data.id;
                //console.log(sessionStorage["loginUid"]);
                setTimeout(function(){
                    location.href="炉石.html";
                },3000)
            }else{
               alert("登录失败"+data.msg);
            }
        }
    })
});

