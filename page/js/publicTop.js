$(function(){
    $(".navBox1").mouseenter(function(){
        $(".navButtom").css({"display":"block"});
        let lis = $(".uls")[0].children;
        let hide=$(".navButtomRight .hide");
        for(let i=0,len=lis.length;i<len;i++){
            lis[i].onmouseenter = function(){ 
                //给a标签加下划线
                let ulsA =  $(".uls a");
                for(let j=0,len=ulsA.length;j<len;j++){
                    ulsA[j].onmouseenter =function(){
                        this.style.textDecoration = "underline";
                    }
                    ulsA[j].onmouseleave =function(){
                        this.style.textDecoration = "none";
                    }
                }
                //左右菜单栏父盒子
                for(let n=0;n<lis.length;n++){
                    hide[n].style.display="none";
                    lis[i].className="";
                    $(".navButtomRight")[0].style.display="block";
                }
                //给li添加类名
                this.className="fix";
                hide[i].style.display = "block";
            }
            //循环去除上面给li添加的类名
            lis[i].onmouseleave = function(){
                for(let j=0,len=lis.length;j<len;j++){
                    lis[j].className="";
                }
            }
            $(".navButtomBox")[0].onmouseleave = function(){
                $(".navButtomRight")[0].style.display="none";
            }
        }
    }).mouseleave(function(){
        $(".navButtom").css({"display":"none"});
    })

    //nav滑过效果
    let navlis = $(".navlis")[0].children;
    let navhide = $(".navDown")[0].children;
    for(let i=1,len=navlis.length;i<len;i++){
        navlis[i].onmouseenter = function(){
            for(let j=0,len=navlis.length;j<len;j++){
                navhide[j].style.display = "none";
                navlis[j].className ="";
                $(".navDown")[0].style.display="block";
            }
            this.className = "navFix";
            navhide[i].style.display = "block";
        }
        $(".navBox2")[0].onmouseleave=function(){
            for(let j=0,len=navlis.length;j<len;j++){
                navlis[j].className ="";
            }
            $(".navDown")[0].style.display="none";
            navhide[i].style.display="none";
        }
    }


    //右边固定定位部分
    var height1 = document.documentElement.clientHeight || document.body.clientHeight;
    h = parseFloat(height1 - 60);
    $(".fixedLeft")[0].style.height = h + 'px';
    $(".fixedRight")[0].style.height = h + 'px';
    $(".hideFix")[0].style.height = h + 'px';
    let fixlis = $(".fixUls")[0].children;
    let fixedLeft = $(".left1");
    let hideFix = $(".hideFix");
    for(let i=0,len=fixlis.length-1;i<len;i++){
        fixlis[i].onmouseenter = function(){
            fixlis[i].style.backgroundColor = "#dd0000";
            fixedLeft[i].style.cssText = "display:block;";
            $(this).find(".left1").animate({
                right:"35px"
            },500);
        }
        fixlis[i].onmouseleave = function(){
            fixlis[i].style.backgroundColor = "#000000";
            fixedLeft[i].style.display = "none";
        }
        //点击事件
        fixlis[i].onclick = function(){
            let contant = hideFix[i].innerHTML;
            if(contant){
                for(let j=1;j<4;j++){
                    hideFix[j].style.cssText = "display:none;";
                    hideFix[j].style.zIndex = 1;
                    hideFix.parents(".fixedBox").animate({
                        right:0
                    },800);
                    //点击返回
                    $(".goback").click(function(){
                        hideFix.parents(".fixedBox").animate({
                            right:"-280px"
                        },800);
                    });
                }
            }else{
                hideFix.parents(".fixedBox").css({"right":"-280px"});
            }
            
            hideFix[i].style.cssText = "display:block;";
            hideFix[i].style.zIndex = 3;
            
            
        }
    }
    //滚动条效果
    window.onscroll = function(){
        let temp = document.body.scrollTop || document.documentElement.scrollTop;
        var width1 = document.documentElement.clientWidth || document.body.clientWidth;
        if(temp>60){
            $(".nav").css({
                width:"100%",
                background:"black",
                display : 'block',
                boxShadow : "0 3px 10px 10px rgba(0,0,0,.9)",
                position:"fixed",
                paddingLeft:(width1-1190)/2 + "px",
                whiteSpace:"nowrap",
                top:0,
                left:0,
                zIndex:10000
            })
            //点击返回顶部
            $("#gotop").css({display : 'block',cursor:"pointer"});
            //点击返回顶部 
            $("#gotop").click(function(){
                $("html,body").animate({scrollTop:0},0);
            });
            $(".fixedBox")[0].style.top="35px";
            $(".fixedLeft")[0].style.height = (h + 36) + 'px';
            $(".fixedRight")[0].style.height = (h + 36) + 'px';
            $(".hideFix")[0].style.height =  (h + 36) + 'px';
        }else{
            $(".nav").css({
                boxShadow : 'none',
                whiteSpace:"nowrap",
                top:60
            });
            $("#gotop").css({display : 'none'});
            $(".fixedBox")[0].style.top="60px";
            $(".fixedLeft")[0].style.height = h + 'px';
            $(".fixedRight")[0].style.height = h + 'px';
            $(".hideFix")[0].style.height =  h + 'px';
        }
    }
});