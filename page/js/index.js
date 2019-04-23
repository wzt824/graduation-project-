
$(function(){
    //show区效果图
    let showlis = $(".showUls")[0].children;
    let showLayer = $(".showLayer");
    let showMin =$(".showMin");
    let showMinLayer =$(".showMinLayer");
    for(let i=0,len=showlis.length;i<len;i++){
        showlis[i].onmouseenter=function(){
            showLayer[i].style.opacity = 1;
            showMin[i].onmouseenter=function(){
                showMinLayer[i].style.cssText = "display:block;";
                $(this).find(".showMinLayer").animate({
                    left:'0px'
                },1500);
                $(this).find(".textChange").css({"color":"black","transition":"all 2.2s"});
            }
            showMin[i].onmouseleave=function(){
                showMinLayer[i].style.cssText = "display:none;";
                $(this).find(".showMinLayer").animate({
                    left:'-114px'
                },1500);
                $(this).find(".textChange").css({"color":"white","font-weight":"900","transition":"all 1.5s"});
            }
            
        }
        showlis[i].onmouseleave=function(){
            showLayer[i].style.opacity = 0;
            $(".showMinLayer")[i].style.left = "-114px";
        }
    }
    
});