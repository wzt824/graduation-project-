
//发送ajax请求
$.ajax({
    type:"get",
    url:"php/getShoppingCart.php",//php/getGoodsList.phpgetShoppingCart
    async:true,
    data:null,
    success:function(data){
        console.log(data)
        var productPart = '';
        for(var i=0;i<data.length;i++){
            if(data[i].userPhone == getCookie("userphone")){
                productPart += " <ul class='car_uls'>\
                    <li class='lis1'>\
                        <input type='checkbox' class='selectBtn'>\
                    </li>\
                    <li class='lis2' id='proIdCart'>"+data[i].proId+"</li>\
                    <li class='lis3'><img src='"+ data[i].proImg +"' alt=''></li>\
                    <li class='lis4'>\
                        <h3>"+data[i].proName+" - "+data[i].proId+"</h3>\
                        <p>颜色：<span class='color'>"+data[i].proColor+"</span>尺码：<span class='size'>"+data[i].proSize+"</span></p>\
                    </li>\
                    <li class='lis5'>\
                        <p class='underline'>￥<span class='danjia tag'>"+data[i].proPriceNum+"</span></p>\
                        <p>￥<span class='danjia price'>"+data[i].proPrice+"</span></p>\
                    </li>\
                    <li class='lis6'>\
                        <div class='span_info'>\
                            <span class='reduce'>-</span>\
                            <input type='text' class='numChange' value='"+ data[i].proCount +"'>\
                            <span class='add'>+</span>\
                        </div>\
                    </li>\
                    <li class='lis7'>￥<span class='xiaoji'></span></li>\
                    <li class='lis8'><b class='dell'>删除</b></li>\
                </ul>";
                $(".car_product").html(productPart);
                // shuju();
                big();
            }
        }
    },
    error:function(err){
        console.log(err)
    },
    dataType:"json"
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
});
function big(){

    //全选按钮
    function allCheck(){
        //头部
        $("#selectAll")[0].onclick=function(){
            if($("#selectAll")[0].checked == true){
                for(let i=0,len = $(".selectBtn").length;i<len;i++){
                    if($(".selectBtn")[i].type == "checkbox"){
                        $(".selectBtn")[i].checked = true;
                    }
                }
                oneCheck();
                changeCount();
                deleteAll();

            }else{
                for(let i=0,len = $(".selectBtn").length;i<len;i++){
                    $(".selectBtn")[i].checked = false;
                    changeCount();
                }
            }
        }
    }
    allCheck();

    //选项框
    function oneCheck(){
        let Check = $(".selectBtn");
        for(let i=0;i<Check.length;i++){
            Check[i].onclick=function(){
                let all = 0;//定义一个变量，用来控制全选按钮
                for(let j=0;j<Check.length;j++){//此循环，单纯为了计数，用来判断全选
                    if(Check[j].checked == true){
                        all++;
                    }
                }
                if(all == Check.length){
                    $("#selectAll")[0].checked = true;
                    changeCount();
                    deleteAll();
                }else{
                    $("#selectAll")[0].checked = false;
                    changeCount();
                }
            }
        }
    }
    oneCheck();

    //计算每一行的数据------数量和总计的变化
    function changeUl(){
        let add = $(".add");//加
        let reduce = $(".reduce");//减
        let price = $(".price");//单价
        let numChange = $(".numChange");//每行件数数量的变化
        let pricehe = $(".xiaoji"); //总计的变化
        for(let i=0,len=add.length;i<len;i++){
            pricehe[i].innerHTML = (numChange[i].value * price[i].innerHTML).toFixed(2);
            add[i].onclick = function(){
                numChange[i].value = parseInt(numChange[i].value) + 1;
                pricehe[i].innerHTML = (numChange[i].value * price[i].innerHTML).toFixed(2);
                changeCount();
            }
            reduce[i].onclick = function(){
                if(numChange[i].value <=1){
                    numChange[i].value =1 ;
                }else{
                    numChange[i].value = parseInt(numChange[i].value) - 1;
                    pricehe[i].innerHTML = (numChange[i].value * price[i].innerHTML).toFixed(2);
                    changeCount();
                }
            }
            numChange[i].onblur = function(){
                pricehe[i].innerHTML = (numChange[i].value * price[i].innerHTML).toFixed(2);
            }
        }

    }
    changeUl();
    //计算结算栏里的数据------金额（包邮费用和应付总额）
    function changeCount(){
        let price = $(".price");//单价
        let numChange = $(".numChange");//每行件数数量的变化
        let Check = $(".selectBtn");
        let pricehe = $(".xiaoji"); //每行总计的变化
        let _ptotal = 0;//商品总额
        for(var i=0,len=Check.length;i<len;i++){
            if(Check[i].checked == true){
                // console.log()
                pricehe[i].innerHTML = (parseInt(numChange[i].value) * parseFloat(price[i].innerHTML)).toFixed(2);
                _ptotal += parseFloat(pricehe[i].innerHTML);
                console.log(_ptotal)
                // _ptotal = _Money;//后期处理优惠、运费使用
            }
        }
        $(".t_num")[0].innerHTML = _ptotal.toFixed(2);
    }
    changeCount();


    //删除
    function deletePro(){
        let  del = $(".dell");
        for(let i=0,len=del.length;i<len;i++){
            del[i].onclick=function(){
                if(confirm("亲，您确定要删除所选商品吗？")){
                    let that = this;
                    let id = $("#proIdCart").html();
                    console.log(id)
                    let xhr = new XMLHttpRequest();
                    xhr.open("get","/anta/page/php/delShoppingCart.php?userPhone="+getCookie("userphone")+"&proId="+id,true);
                    xhr.onreadystatechange=function(){
                        if(xhr.readyState==4&&xhr.status==200){
                            let d = xhr.responseText;
                            if(d==1){
                                that.parentNode.parentNode.remove();
                                // window.open("cart.html");
                            }else if(d==0){
                                alert('添加失败!');
                            }
                        }
                    }
                    xhr.send();
                    changeUl();
                    changeCount();
                }
                var height = $(".car_product")[0].offsetHeight;
                console.log(height)
                if(height <= 81){
                    $(".car_product")[0].parentNode.remove();
                    $(".contant")[0].style.cssText = "display:block";
                }
            }
        }
    }
    deletePro();

    //删除选中状态
    function deleteAll(){
        let Check = $(".selectBtn");
        $(".t_del").click(function(){
            for(var i=0,len=Check.length;i<len;i++){
                if(Check[i].checked == true){
                    if(confirm("亲，您确定要删除所选商品吗？")){
                         $(".car_uls")[i].remove();
                    }
                    var height = $(".car_product")[0].offsetHeight;
                    if(height <= 81){
                        $(".car_product")[0].parentNode.remove();
                        $(".contant")[0].style.cssText = "display:block";
                    }
                }
            }
        })
    }
    deleteAll();

   //清空购物车
   $(".t_empty").click(function(){
        if(confirm("亲，您确定要清空购物车吗？")){
            let xhr = new XMLHttpRequest();
            xhr.open("get","/anta/page/php/delAllShoppingCart.php?userPhone="+getCookie("userphone"),true);
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4&&xhr.status==200){
                    let d = xhr.responseText;
                    if(d==1){
                        that.parentNode.parentNode.remove();
                        // window.open("cart.html");
                    }else if(d==0){
                        alert('添加失败!');
                    }
                }
            }
            xhr.send();
            $(".shoppingCar").css({"display":"none"});
            $(".contant").css({"display":"block"});
        }
    });


}
getCookie("proBuy");


