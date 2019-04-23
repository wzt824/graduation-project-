//发送ajax请求
$.ajax({
    type:"get",
    url:"php/getGoodsList.php",
    async:true,
    data:null,
    success:function(data){
        var productPart = '';
        for(var i=0;i<data.length;i++){
            if(data[i].goodsId == getCookie("proXq")){
                productPart += " <div class='section'>\
                <div class='details_up'>\
                    <a href='index.html'>首页</a> >\
                    <a href='javascript:;'>所有分类</a> >\
                    <a href='javascript:;'>"+data[i].goodsName+" - "+data[i].goodsId+"</a>\
                </div>\
                <div class='details_down'>\
                    <div class='details_left'>\
                        <div class='top_jian'></div>\
                        <div class='UlsBox'>\
                            <ul id='detUls'>\
                                <li><img src='"+data[i].beiyong5+"' alt=''></li>\
                                <li><img src='"+data[i].goodsImg+"' alt=''></li>\
                                <li><img src='"+data[i].beiyong6+"' alt=''></li>\
                                <li><img src='"+data[i].beiyong7+"' alt=''></li>\
                                <li><img src='"+data[i].beiyong8+"' alt=''></li>\
                                <li><img src='"+data[i].beiyong9+"' alt=''></li>\
                                <li><img src='"+data[i].beiyong10+"' alt=''></li>\
                            </ul>\
                        </div>\
                        <div class='bottom_jian'></div> \
                    </div>\
                    <div class='details_rBox'>\
                        <div class='details_center'>\
                            <img id='showImg' src='"+data[i].goodsImg+"' />\
                            <div class='details_rBox_bottom'>\
                                <p>\
                                    <span>分享<i class='enjoy'></i></span>\
                                    <span>收藏商品  +</span>\
                                </p>\
                            </div>  \
                        </div>\
                        <div class='details_right'>\
                            <h1><b id='proNames'>"+data[i].goodsName+" </b><span class='spanBox'>款号：<span id='goodsid'>"+data[i].goodsId+"</span></span></h1>\
                            <p><i></i>(4.9)</p>\
                            <div class='pro-sales-list'>\
                                <a href='javascript:;'><img src='img/onsale_m01.png' alt=''></a>\
                                <p class='price'>￥<span id='ShopPrice'></span></p>\
                                <p class='priceBox'>\
                                    吊牌价：<span id='tag'>"+data[i].beiyong1+"</span>\
                                    折扣：<span id='dis'>"+data[i].beiyong2+"</span>%（折让：￥<span id='rebate'></span>）\
                                </p>\
                                <i class='favor'></i>\
                                <div class='pro-coupons-box'>\
                                    <ul>\
                                        <li><span>10</span><b>满199减10</b></li>\
                                        <li><span>20</span><b>满299减20</b></li>\
                                        <li><span>30</span><b>满399减30</b></li>\
                                    </ul>\
                                    <p><span class='success'>完成<b class='x'>x</b></span></p>\
                                </div>\
                                <div class='pro-alert'>\
                                    <a href='javascript:;'> 全场鞋服包邮>> </a>\
                                    <img class='onsale' src='img/onsale_02.png' alt=''>\
                                </div>\
                            </div>\
                            <div class='colorORsizeBox' style='width:442px;border:1px solid transparent;'>\
                                <p id='color'>颜色：<span id='getColor'></span></p>\
                                <ul class='colorBox'>\
                                    <li><img class='showimgs' src='"+data[i].beiyong5+"' alt='' title='"+data[i].beiyong11+"'></li>\
                                    <li><img class='showimgs' src='"+data[i].goodsImg+"' alt='' title='"+data[i].beiyong12+"'></li>\
                                    <li><img class='showimgs' src='"+data[i].beiyong6+"' alt='' title='"+data[i].beiyong13+"'></li>\
                                    <li><img class='showimgs' src='"+data[i].beiyong7+"' alt='' title='"+data[i].beiyong14+"'></li>\
                                    <li><img class='showimgs' src='"+data[i].beiyong8+"' alt='' title='"+data[i].beiyong15+"'></li>\
                                    <li><img class='showimgs' src='"+data[i].beiyong9+"' alt='' title='"+data[i].beiyong16+"'></li>\
                                    <li><img class='showimgs' src='"+data[i].beiyong10+"' alt='' title='"+data[i].beiyong17+"'></li>\
                                </ul>\
                                <p id='sizebox1'>\
                                    <span class='minbox'>尺码：<span id='getSize'></span></span>\
                                    <span class='minbox'>库存：<span id='getku'>"+data[i].goodsCount+"</span></span>\
                                    <a class='biao' href='javascript:;'>查看尺码对照表 >></a>\
                                </p>\
                                <ul class='sizeBox'>\
                                    <li>"+data[i].beiyong27+"</li>\
                                    <li>"+data[i].beiyong28+"</li>\
                                    <li>"+data[i].beiyong29+"</li>\
                                    <li>"+data[i].beiyong30+"</li>\
                                    <li>"+data[i].beiyong31+"</li>\
                                    <li>"+data[i].beiyong32+"</li>\
                                    <li>"+data[i].beiyong33+"</li>\
                                    <li>"+data[i].beiyong34+"</li>\
                                    <li>"+data[i].beiyong35+"</li>\
                                    <li>"+data[i].beiyong36+"</li>\
                                </ul>\
                            </div>\
                            <div class='sumboX'>\
                                <div class='amount-boX'>\
                                    数量：<span class='num'>1</span>\
                                    <div class='addNum numbox'></div>\
                                    <div class='addReduce numbox'></div>\
                                </div>\
                                <div class='buttonboX'>\
                                    <div class='butt but_car'>\
                                    <span class='proId' style='display:none;'>"+data[i].goodsId+"</span>\
                                    加入购物车\
                                    </div>\
                                    <div class='butt but_buy'>\
                                    <span class='proId' style='display:none;'>"+data[i].goodsId+"</span>\
                                    立即购买\
                                    </div>\
                                </div>\
                            </div>\
                            <div class='pro_text'>\
                                <h3>商品说明：</h3>\
                                <p class='dlBox'>系列：<span class='text_xl'>"+data[i].goodsType+"系列</span></p>\
                                <p class='dlBox'>\
                                    <span class='sm'>底料：<span class='text_dl'>"+data[i].goodsDesc+"</span></span>\
                                    <span class='sm'>面料：<span class='text_ml'>"+data[i].beiyong4+"</span></span>\
                                </p>\
                            </div>\
                        </div> \
                    </div>\
                </div>\
                <div class='deta_bottom'>\
                    <div class='tab'>\
                        <div class='tabBtn tab_one'>产品细节<em class='one'></em></div>\
                        <div class='tabBtn tab_two'>商品评价<em class='two'></em></div>\
                    </div>\
                    <div class='tabdown tabOneBox'>\
                        <li><img src='"+data[i].beiyong5+"' alt=''></li>\
                        <li><img src='"+data[i].goodsImg+"' alt=''></li>\
                        <li><img src='"+data[i].beiyong6+"' alt=''></li>\
                        <li><img src='"+data[i].beiyong7+"' alt=''></li>\
                        <li><img src='"+data[i].beiyong8+"' alt=''></li>\
                        <li><img src='"+data[i].beiyong9+"' alt=''></li>\
                        <li><img src='"+data[i].beiyong10+"' alt=''></li>\
                    </div>\
                    <div class='tabdown tabTwoBox'>\
                    </div>\
                </div>\
            </div>";
            $("section").html(productPart);
            $("head title").html(data[i].goodsName);
            //循环去除
            $("#detUls li").each(function(){
                let imgValue = $(this).find("img").attr("src");
                if(imgValue == 0){
                    $(this).remove();
                }
            });
            let click1 = false;
            let click2 = false;
            //商品颜色
            $(".colorBox li").each(function(){
                let imgValue = $(this).find("img").attr("src");
                if(imgValue == 0){
                    $(this).remove();
                }
                $(this).click(function(){
                    click1 = true;
                });
            });
            //商品尺码
            $(".sizeBox li").each(function(){
                let imgValue = $(this).html();
                if(imgValue == 0){
                    $(this).remove();
                }
                $(this).click(function(){
                    click2 = true;
                });
            });
            //商品细节描述
            $(".tabOneBox li").each(function(){
                let imgValue = $(this).find("img").attr("src");
                if(imgValue == 0){
                    $(this).remove();
                }
            });

            detalis();

            //立即购买
            $(".but_buy").click(function(){
                if(click1 == true && click2 == true){
                    var proIds = $(this).find(".proId").html();
                    setCookie("proBuy",proIds,1);
                    //获取颜色
                    let getColor = $("#getColor").html();
                    setCookie("proBuycolor",getColor,1);
                    //获取尺寸
                    let getSizes = $("#getSize").html();
                    setCookie("proBuysize",getSizes,1);
                    //获取图片
                    let getImg = $("#showImg").attr("src");
                    setCookie("proBuyimg",getImg,1);
                    //吊牌价
                    let tagValue = $("#tag").html();
                    setCookie("proBuytagValue",tagValue,1);
                    //出售价
                    let ShopValue = $("#ShopPrice").html();
                    setCookie("proBuyShopValue",ShopValue,1);
                    //电话号码
                    let pronums = $(".num")[0].innerHTML;

                    let names = $("#proNames").html();

                    let xhr = new XMLHttpRequest();
                    xhr.open("get","/anta/page/php/addShoppingCart.php?userPhone="+getCookie("userphone")+"&proImg="+getImg+"&proColor="+getColor+"&proId="+proIds+"&proCount="+pronums+"&proSize="+getSizes+"&proPriceNum="+tagValue+"&proPrice="+ShopValue+"&proName="+names,true);
                    xhr.onreadystatechange=function(){
                        if(xhr.readyState==4&&xhr.status==200){
                            let d = xhr.responseText;
                            if(d==1){
                                window.open("cart.html");
                            }else if(d==0){
                                alert('添加失败!');
                            }
                        }
                    }
                    xhr.send();

                    $(".colorORsizeBox").css({"border":"1px solid transparent"})
                }else{
                    $(".colorORsizeBox").css({"border":"1px solid red"});
                }
            });

            //加入购物车
            $(".but_car").click(function(){
                if(click1 == true && click2 == true){
                    var proIds = $(this).find(".proId").html();
                    setCookie("proBuy",proIds,1);
                    //获取颜色
                    let getColor = $("#getColor").html();
                    setCookie("proBuycolor",getColor,1);
                    //获取尺寸
                    let getSizes = $("#getSize").html();
                    setCookie("proBuysize",getSizes,1);
                    //获取图片
                    let getImg = $("#showImg").attr("src");
                    setCookie("proBuyimg",getImg,1);
                    //吊牌价
                    let tagValue = $("#tag").html();
                    setCookie("proBuytagValue",tagValue,1);
                    //出售价
                    let ShopValue = $("#ShopPrice").html();
                    setCookie("proBuyShopValue",ShopValue,1);
                    //电话号码
                    let pronums = $(".num")[0].innerHTML;
                    let names = $("#proNames").html();

                    let xhr = new XMLHttpRequest();
                    xhr.open("get","/anta/page/php/addShoppingCart.php?userPhone="+getCookie("userphone")+"&proImg="+getImg+"&proColor="+getColor+"&proId="+proIds+"&proCount="+pronums+"&proSize="+getSizes+"&proPriceNum="+tagValue+"&proPrice="+ShopValue+"&proName="+names,true);
                    xhr.onreadystatechange=function(){
                        if(xhr.readyState==4&&xhr.status==200){
                            let d = xhr.responseText;
                            if(d==1){
                                alert('添加成功!');
                            }else if(d==0){
                                alert('添加失败!');
                            }
                        }
                    }
                    xhr.send();

                    $(".colorORsizeBox").css({"border":"1px solid transparent"})
                }else{
                    $(".colorORsizeBox").css({"border":"1px solid red"})
                }
            });


        }
    }

},
dataType:"json"
});


$(function(){

    $("#publicTopBox").load("publicTop.html");
    $("#publicBottomBox").load("publicBottom.html");

});
function detalis(){
    //each循环取得其设置css样式
    $("#detUls li").each(function(){
        $(this).click(function() {
            //siblings除过本身之外的其他同辈元素
            $(this).css({border:"1px solid #dd0000"}).siblings().css({border:"1px solid #f0f0f0"});
            //取值
            var urls = $(this).find("img").attr("src");
            console.log(urls);
            //赋值
            $(".details_center #showImg").attr("src",urls);

            // console.log($(".details_center #showImg").attr("src"));

            $(".details_center").mouseenter(function() {
                singlton.getInstance({
                    //要放大的图片对应的dom元素
                    bigBoxDom:this,
                    //大图的src 要放大的效果的dom元素的背景图片
                    bigImg:urls,
                    //要放大图片的宽和高
                    bigBoxWidth:600,
                    bigBoxHeight:600,
                    //放大镜的宽和高
                    width:150,
                    height:200,
                    //放大倍数
                    multiple:3
                });
              });
        })
    });
    //点击换图
    let tops = $(".top_jian")[0];
    let bottoms = $(".bottom_jian")[0];
    let detUls = $("#detUls")[0].children;
    let marginT = 0;
    for(let i=0,len = detUls.length;i<len;i++){
        tops.onclick = function(){
            marginT = marginT -105;
            if($("#detUls")[0].offsetTop<=0){
                $("#detUls")[0].style.cssText = "top:" +marginT +"px;";
                let syu = (len-5)*105;
                $("#detUls")[0].style.cssText = "top:-"+syu+"px;";
            }
        }
        bottoms.onclick = function(){
            marginT = marginT +105;
            $("#detUls")[0].style.cssText = "top:" +marginT +"px;";
            if($("#detUls")[0].offsetTop>=0){
                $("#detUls")[0].style.cssText = "top:0px;";
            }
        }
    }
    //满减优惠
    let favor = $(".favor")[0];
    let count = 0;//判断
    favor.onclick = function(){
        count++;
        if(count%2!=0){
            $(".pro-coupons-box").css({"display":"block"});
        }else{
            $(".pro-coupons-box").css({"display":"none"});
        }
    }
    $(".success")[0].onclick = function(){
        $(".pro-coupons-box").css({"display":"none"});
    }
    //颜色
    $(".colorBox li").each(function(){
        $(this).click(function() {
            //siblings除过本身之外的其他同辈元素
            $(this).css({border:"1px solid #dd0000"}).siblings().css({border:"1px solid #f0f0f0"});
            //取值
            var urls = $(this).find("img").attr("src");
            var texts = $(this).find("img").attr("title");
            //赋值
            $(".details_center #showImg").attr("src",urls);
            $("#getColor").html(texts);

            // console.log($(".details_center #showImg").attr("src"));

            $(".details_center").mouseenter(function() {
                singlton.getInstance({
                    //要放大的图片对应的dom元素
                    bigBoxDom:this,
                    //大图的src 要放大的效果的dom元素的背景图片
                    bigImg:urls,
                    //要放大图片的宽和高
                    bigBoxWidth:600,
                    bigBoxHeight:600,
                    //放大镜的宽和高
                    width:150,
                    height:200,
                    //放大倍数
                    multiple:3
                });
              });
        })
    });
    //尺码
    $(".sizeBox li").each(function(){
        $(this).click(function() {
            //siblings除过本身之外的其他同辈元素
            $(this).css({border:"1px solid #dd0000"}).siblings().css({border:"1px solid #f0f0f0"});
            //取值
            var texts = $(this).html();
            //赋值
            $("#getSize").html(texts);
        });
    });
    //累加  累减
    let getku = $("#getku")[0].innerHTML;

    $(".addNum").click(function(){
        var changeAdd = parseInt($(".num")[0].innerHTML);
        changeAdd = changeAdd +1;
        if(changeAdd > getku){
            return;
        }
        $(".num")[0].innerHTML = changeAdd;
    });

    $(".addReduce").click(function(){
        var changeReduce = parseInt($(".num")[0].innerHTML);
        changeReduce = changeReduce - 1;
        if(changeReduce == 0){
            return;
        }
        $(".num")[0].innerHTML = changeReduce;
    });

    // $(".tab .tabBtn").each(function(){
    //     $(this).click(function() {
    //         //siblings除过本身之外的其他同辈元素
    //         $(this).css({background:"#b5b5b5"}).siblings().css({background:"#000"});

    //     // $(this).find("em").css({"display":"none"});
    //     });
    // });

    let tab = $(".tab")[0].children;
    for(let i=0;i<tab.length;i++){
        tab[i].onclick =function(){
            for(let j=0;j<tab.length;j++){
                tab[j].style.background="#000";//换色
                $("em")[j].style.display = "none";//隐藏三角
                $(".tabdown")[j].style.display = "none";//隐藏内容
                tab[i].style.background="#b5b5b5";
                $("em")[i].style.display = "block";
                $(".tabdown")[i].style.display = "block";
            }
        }
    }

    //折扣的计算
    let tag = $("#tag").html();//吊牌价
    let dis = $("#dis").html();//折扣
    let priceValue =(tag * dis/100).toFixed(2);//购买价格
    let rebateValue = (tag - priceValue).toFixed(2);//折让价格

    $("#ShopPrice").html(priceValue);
    $("#rebate").html(rebateValue);
}

