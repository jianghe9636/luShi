var btn2=$("#btn2");
btn2.click(function(){
    var u=$("#uname").val();
    var p=$("#upwd").val();
    var p2=$("#upwd2").val();
    if(u==""){
        alert("用户名不能为空");
        return;
    }
    if(p==""){
        alert("密码不能为空");
        return;
    }
    if(p2!=p){
        alert("密码要一致");
        return;
    }
    $.ajax({
        url:"/register",
        type:"POST",
        data:{uname:u,upwd:p},
        success:function(data){
           if(data.code==1){
               alert("注册成功，3s转到登录页面");
               setTimeout(function(){
                   location.href="login.html"
               },3000)
           }else{
               alert("注册失败");
           }
        }
    })
})