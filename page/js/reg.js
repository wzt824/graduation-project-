$(function(){
    //手机号码验证
    $("#userphone")[0].onblur = function(){
        testF();
    }
    function testF(){
        let pattern = /^[1][3-9]\d{8}\d$/g;
        let str = pattern.test($("#userphone").val());
        if(!str){
            $(".waringInfo_userphone").html( "请输入正确的手机号码");
            $(".waringInfo_userphone").css({
                "right":"-154px",
                "color":"red"
            })
        }else{
            $(".waringInfo_userphone").html( "√");
            $(".waringInfo_userphone").css({
                "right":"-26px",
                "color":"red"
            })
        }
        return str;
    }

    //验证码
    $(".yzmBox")[0].onclick = function(){
        let getstr = '';
        for(let i=0;i<4;i++){
            getstr += "0123456789abcdefghijkmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVW"[parseInt(Math.random()*16)];
        }
        $(".yzmBox").html(getstr);
    }
    $("#usercode")[0].onblur = function(){
        codeF();
    }
    function codeF(){
        let op = $(".yzmBox").html();
        let str = $("#usercode").val();
        if(str != op){
            $(".waringInfo_yzm").html("请输入正确的验证码");
            $(".waringInfo_yzm").css({"right":"-379px"});
        }else{
            $(".waringInfo_yzm").html("√");
            $(".waringInfo_yzm").css({
                "right":"-272px",
                "color":"red"
            })
        }
        return str;
    }

    //密码正则表达式
    $("#password")[0].onblur = function(){
		passwordF();
    }
    function passwordF(){
        let pattern = /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/gi;
        let str = pattern.test($("#password").val());
        if(!str){
            $(".waringInfo_password").html("格式错误,6-16位字母和数字");
            $(".waringInfo_password").css({"right":"-187px","color":"red"});
        }else{
            $(".waringInfo_password").html("√");
            $(".waringInfo_password").css({"right":"-34px","color":"red"});
        }
        return str;
    }

    //确认输入密码
    $("#truepassword")[0].onblur = function(){
		passwordT();
    }
    function passwordT(){
        let tStr = $("#truepassword").val();
        console.log(tStr);
        let pStr = $("#password").val();
        console.log(pStr);
        if (tStr == pStr) {
			var str = tStr;
        }
        if(!str){
            $(".waringInfo_turePass").html("两次密码输入不一致");
            $(".waringInfo_turePass").css({"right":"-138px","color":"red"});
        }else{
            $(".waringInfo_turePass").html("√");
            $(".waringInfo_turePass").css({"right":"-34px","color":"red"});
        }
        return str;
    }

    //判断表单内容是否有值
    function register(){
        $("#btn").click(function(){
            let str = $("#userphone").val();
            let cstr = $(".usercode").val();
            let pstr = $("#password").val();
            let tstr = $("#truepassword").val();
            if(str==""){
                alert("亲！手机号不能为空");
            }else if(pstr==""){
                alert("亲！密码不能为空");
            }else if (tstr=="") {
                alert("亲！确认密码不能丢哦");
            }else if (tstr != pstr) {
                alert("亲！确认密码得和前面保持一致哟");
            }
        });
        // else if(cstr==null){
        //     alert("亲！验证码不能为空");
        // }
    }
    register();





    $("#list .reg_hint_phone").each(function(){
        $("#list .reg_hint_phone").mousedown(function(){
            $(this).find(".phone").css({"color":"black"});
            $(this).find(".phone").animate({
                left:"-100px"
            },800);
            $(this).find(".yzm").css({"color":"black"})
            $(this).find(".yzm").animate({
                left:"-62px"
            },800);
            $(this).find(".pwd").css({"color":"black"})
            $(this).find(".pwd").animate({
                left:"-47px"
            },800);
            $(this).find(".truepwd").css({"color":"black"})
            $(this).find(".truepwd").animate({
                left:"-78px"
            },800);
        });
    });

    //固定部分
    window.onscroll = function(){
        let temp = document.body.scrollTop || document.documentElement.scrollTop;
        if(temp >= 100){
            $(".btn_top")[0].style.cssText = "display:block;";
        }else{
            $(".btn_top")[0].style.cssText = "display:none";
        }
    }
    //qq客服变色
    $(".qq_reg")[0].onmouseenter = function(){
        $(this).css({"background-color":"#c73339"});
    }
    $(".qq_reg")[0].onmouseleave = function(){
        $(this).css({"background-color":"#fbb01f"});
    }
    //电话客服变色
    $(".btn_phone")[0].onmouseenter = function(){
        $(this).css({"background-color":"#c73339"});
        $("._phone").css({"display":"block"});
        $("._phone").animate({
            left:"-192px"
        },800);
    }
    $(".btn_phone")[0].onmouseleave = function(){
        $(this).css({"background-color":"#d71921"});
        $("._phone").css({"display":"none"});
        $("._phone").animate({
            left:"0px"
        },300);
    }
    //返回顶部变色
    $(".btn_top")[0].onmouseenter = function(){
        $(this).css({"background-color":"black"});
    }
    $(".btn_top")[0].onmouseleave = function(){
        $(this).css({"background-color":"#666666"});
    }
    //点击返回顶部
    $(".btn_top")[0].onclick = function(){
        $("html,body").animate({scrollTop:0},0);
    }

});
