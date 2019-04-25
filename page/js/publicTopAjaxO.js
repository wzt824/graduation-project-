
//发送ajax请求
$.ajax({
    type:"get",
    url:"php/getOrder.php",//php/getGoodsList.phpgetShoppingCart
    async:true,
    data:null,
    success:function(data){
        var productPart = '';
        for(var i=0;i<data.length;i++){
            if(data[i].userPhone == getCookie("userphone")){
                productPart += " <ul class='car_uls'>\
                <li class='lis1'>\
                    <input type='checkbox' class='selectBtn'>\
                </li>\
                <li class='lis2' id='proIdCart'>"+data[i].orderId+"</li>\
                <li class='lis3'>"+ data[i].addressName +"</li>\
                <li class='lis4'>"+data[i].address+"</li>\
                <li class='lis5'>\
                    <p><span class='danjia price'>"+data[i].addressCode+"</span></p>\
                </li>\
                <li class='lis6'>"+ data[i].sumMoney +"</li>\
            </ul>";
                $(".car_product_O").html(productPart);
                // shuju();
                big2();
            }
        }
    },
    error:function(err){
        console.log(err)
    },
    dataType:"json"
});

function big2(){
    //全选按钮
    function allCheck(){
        //头部
        $("#selectAll02")[0].onclick=function(){
            if($("#selectAll02")[0].checked == true){
                for(let i=0,len = $(".selectBtn").length;i<len;i++){
                    if($(".selectBtn")[i].type == "checkbox"){
                        $(".selectBtn")[i].checked = true;
                    }
                }
                oneCheck();
                // delAll();
            }else{
                for(let i=0,len = $(".selectBtn").length;i<len;i++){
                    $(".selectBtn")[i].checked = false;

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
                    $("#selectAll02")[0].checked = true;
                }else{
                    $("#selectAll02")[0].checked = false;
                }
            }
        }
    }
    oneCheck();
    //判断
    function fun1() {
        let length01 = $(".car_product").html();
        if(length01 != "<!-- 动态创建 -->"){
            $(".hideBox").css({
                display:'none'
            })
            $(".shopCar").css({
                display:'block'
            })
        }else {
            $(".hideBox").css({
                display:'block'
            })
            $(".shopCar").css({
                display:'none'
            })
        }

    }
    fun1();
}
