
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
                    <li class='lis2' id='proIdCart'><span id='spanId'>"+data[i].orderId+"</span></li>\
                    <li class='lis3'>"+data[i].addressName+"</li>\
                    <li class='lis4'>"+data[i].addressPhone+"</li>\
                    <li class='lis5'>\
                        <p><span class='color'>"+data[i].address+"</span></p>\
                    </li>\
                    <li class='lis6'>"+data[i].addressCode+"</li>\
                    <li class='lis7'>"+data[i].addressMode+"</li>\
                    <li class='lis8'>"+data[i].sumMoney+"</li>\
                    <li class='lis9'><b class='dellF'>删除</b></li>\
                </ul>";
                $(".car_product_our_F").html(productPart);

                bigs();
            }
        }
    },
    error:function(err){
        console.log(err)
    },
    dataType:"json"
});



function bigs(){

    //全选按钮
    function allCheck(){
        //头部
        $("#selectAllF")[0].onclick=function(){
            if($("#selectAllF")[0].checked == true){
                for(let i=0,len = $(".selectBtn").length;i<len;i++){
                    if($(".selectBtn")[i].type == "checkbox"){
                        $(".selectBtn")[i].checked = true;
                    }
                }
                oneCheck();
                // changeCount();
                deleteAll();

            }else{
                for(let i=0,len = $(".selectBtn").length;i<len;i++){
                    $(".selectBtn")[i].checked = false;
                    // changeCount();
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
                    $("#selectAllF")[0].checked = true;
                    // changeCount();
                    deleteAll();
                }else{
                    $("#selectAllF")[0].checked = false;
                    // changeCount();
                }
            }
        }
    }
    oneCheck();



    //删除
    function deletePro(){
        let  del = $(".dellF");
        for(let i=0,len=del.length;i<len;i++){
            del[i].onclick=function(){
                if(confirm("亲，此操作不可逆，您确定要删除吗？")){
                    let that = this;
                    let id = $("#spanId").html();
                    let xhr = new XMLHttpRequest();
                    xhr.open("get","php/delOrder.php?userPhone="+getCookie("userphone")+"&orderId="+id,true);
                    xhr.onreadystatechange=function(){
                        if(xhr.readyState==4&&xhr.status==200){
                            let d = xhr.responseText;
                            if(d==1){
                                that.parentNode.parentNode.remove();
                            }else if(d==0){
                                alert('删除失败!');
                            }
                        }
                    }
                    xhr.send();
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
                    if(confirm("亲，此操作不可逆，您确定要删除吗？")){
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
        if(confirm("亲，此操作不可逆，您确定要删除吗？")){
            let xhr = new XMLHttpRequest();
            xhr.open("get","php/delAllOrder.php?userPhone="+getCookie("userphone"),true);
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4&&xhr.status==200){
                    let d = xhr.responseText;
                    if(d==1){
                        that.parentNode.parentNode.remove();
                        // window.open("cart.html");
                    }else if(d==0){
                        alert('删除失败!');
                    }
                }
            }
            xhr.send();
            $(".shoppingCar").css({"display":"none"});
            $(".contant").css({"display":"block"});
        }
    });


}


