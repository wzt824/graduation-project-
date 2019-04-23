
//固定部分
window.onscroll = function(){
    let temp = document.body.scrollTop || document.documentElement.scrollTop;
    if(temp >= 100){
        $(".btn_top")[0].style.cssText = "display:block;";
    }else{
        $(".btn_top")[0].style.cssText = "display:none";
    }
}
$(function(){
    //qq客服变色
    $(".qq_reg")[0].onmouseenter = function(){
        $(this).css({"background-color":"#488bc7"});
    }
    $(".qq_reg")[0].onmouseleave = function(){
        $(this).css({"background-color":"#6da9de"});
    }
    //电话客服变色
    $(".btn_phone")[0].onmouseenter = function(){
        $(this).css({"background-color":"#ff811b"});
        $("._phone").css({"display":"block"});
        $("._phone").animate({
            left:"-192px"
        },800);
    }
    $(".btn_phone")[0].onmouseleave = function(){
        $(this).css({"background-color":"#fbb01f"});
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





    var clearing = false;//收货人 开关
    //收货人是否为空
    $(".name").blur(function () {
        if($(".name").val() != null){
            clearing = true;
        }
    });
    //收货号码是否为空
    var clearing2 = false;//收货号码 开关
    $(".tel").blur(function () {
        if($(".tel").val() != null){
            clearing2 = true;
        }
    });
    //收货地址是否为空
    var clearing3 = false;//收货地址 开关
    $(".add_ress").blur(function () {
        if($(".add_ress").val() != null){
            clearing3 = true;
        }
    });
    //收货邮箱是否为空
    var clearing4 = false;//收货邮箱 开关
    $(".email").blur(function () {
        if($(".email").val() != null){
            clearing4 = true;
        }
    });

    //支付方式的选择
    let clearing5 = false;
    $("input[name='payment']").blur(function () {
        if($("input[name='payment']").val() != null){
            clearing5 = true;
        }
    })


    $(".gobuy").click(function () {
        if(clearing === true && clearing2 === true && clearing3 === true && clearing4 === true && clearing5 === true){
            // window.open("success.html");
        }else if(clearing !== true){
            alert("请，请填写收货人！")
        }else if(clearing2 !== true){
            alert("请，请填写收货人联系方式！")
        }else if(clearing3 !== true){
            alert("请，请填写收货人地址！")
        }else if(clearing4 !== true){
            alert("请，请填写收货人邮编！")
        }else if(clearing5 !== true){
            alert("请，请选择支付方式！")
        }

    })

});
