
$(function(){
    $(".shaixuan-tj span.crumb-select-item").live('hover',function(event){
        if(event.type=='mouseenter'){ 
        $(this).addClass("crumb-select-itemon");
        }else{ 
        // $(this).removeClass("crumb-select-itemon");
        } 
    });
    $(".shaixuan-tj span.crumb-select-item").live('click', function(event){
        event.preventDefault();
        $(this).remove();
        var TTR = $(this).find("em").text();
        $(".show-con a").each(function(){
            var TT = $(this).text();
                THI = $(this);
                THIPP = $(this).parents("dl");
            if(TTR==TT){
                THI.removeClass("nzw12");
                THIPP.css("display","block");
            }
        })
    });
    $(".show-con a").click(function(event){
        event.preventDefault();
             THIP = $(this).parents("dl");
        if($(this).hasClass("nzw12")){
        }else{
            $(this).addClass("nzw12");
            var zhiclass = $(this).parents("dd").siblings("dt").find("a").text();
                zhicon = $(this).text();
                tianjaneir="<span class='crumb-select-item'><a href=''><b>"+zhiclass+"</b><em>"+zhicon+"</em><i class='icon-remove'></i></a></span>"
            $(".shaixuan-tj").children().last().after(tianjaneir);
            // 点击消失
            // THIP.css("display","none");
        }
    });
    $(".show-more").click(function(event){
        event.preventDefault();
        var ticon = $(this).find("i");
            tspan = $(this).find("span");
            if($(this).hasClass("zk")){
                $(this).siblings(".show-con").css("height","30px");
                ticon.removeClass("icon-angle-up");
                ticon.addClass("icon-angle-down");
                tspan.html("更多");
                $(this).removeClass("zk")
            }else{
                $(this).siblings(".show-con").css("height","auto");
                ticon.removeClass("icon-angle-down");
                ticon.addClass("icon-angle-up");
                tspan.html("收起");
                $(this).addClass("zk")
            }
    });
    $(".moreban").click(function(){
        $(".xianshi").css({"display":"block"});
        $(".moreban").css({"display":"none"});
        $(".jjban").css({"display":"block"});
    })
    $(".jjban").click(function(){
        $(".xianshi").css({"display":"none"});
        $(".moreban").css({"display":"block"});
        $(".jjban").css({"display":"none"});
    })

    //分页
    $("#pagination1").pagination({
        currentPage: 1,
        totalPage: 12,
        callback: function(current) {
            $("#current1").text(current)
        }
    });


    //商品列表筛选条件
    //1.点击变色
    let _sort = $(".sort")[0].children;
    for(let i=0,len=_sort.length;i<len;i++){
        _sort[i].onclick = function(){
            for(let j=0,len=_sort.length;j<len;j++){
                _sort[j].style.cssText = "background:#fff;color:#000;";
            }
            _sort[i].style.cssText = "background:#e4393c;color:#fff;";
        }
    }
    //2.点击改变数值
    let yeNum = $(".yeNum").html();
    let yeSum = $(".yeSum").html();
    $("#skip_left")[0].onclick = function(){
        if(yeNum-- == 1){
            yeNum = 1;
        }
        $(".yeNum").html(yeNum);
    }
    $("#skip_right")[0].onclick = function(){
        if(yeNum++ == yeSum){
            yeNum = yeSum;
        }
        $(".yeNum").html(yeNum);
    }

});