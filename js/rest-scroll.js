$(function(){

    //播放效果
    
    
    var timer=null;
    var index=0;
    //移动函数
    $(".n-box li").eq(index).css("fontSize","30px");
    function sMove(direction){
        
            
        if(parseInt(direction)>0){
            $(".u-box").stop(true,true).animate({marginLeft:"0px"},300);
            //添加小按钮样式
            if(index<=0){
                index=$(".n-box li").length-1;
            }else{
                index--;
            }
        }else{
            //添加小按钮样式
            if(index>=$(".u-box li").length-1){
                index=0;
            }else{
                index++;
            }
            $(".u-box").stop(true,true).animate({marginLeft:direction},300,function(){
                $(".u-box").css("marginLeft","0px");
                $(".u-box").append($(".u-box li").eq(0));
            });
        }
        $(".n-box li").eq(index).css("fontSize","30px").siblings().css("fontSize","14px");
    }
    
    //自动轮播
    function autoPlay(direction){
        timer=setInterval(function(){
            sMove(direction);
        },3000);
    };
    
    //开启自动轮播
    autoPlay("-157px");
    
    //按钮
    $(".z-prev").click(function(){
        $(".u-box").css("marginLeft","-157px");
        //alert("1"); 不是很明白
        $(".u-box li").eq($(".u-box li").length-1).insertBefore($(".u-box li").eq(0));
        //alert("1");
        sMove("157px");
    });
    
    $(".z-next").click(function(){
        sMove("-157px");
        
    });
    
    //鼠标移入
    $(".z-prev").mouseover(function(){
        //console.log("停止播放！");
        clearInterval(timer);
    });
    $(".z-prev").mouseout(function(){
        //console.log("开启自动播放！");
        autoPlay("-157px");
    });
    $(".z-next").mouseover(function(){
        //console.log("停止播放！");
        clearInterval(timer);
    });
    $(".z-next").mouseout(function(){
        //console.log("开启自动播放！");
        autoPlay("-157px");
    });
    
    //小按钮点击事件
    function smallButtonclick(){
        $(".n-box li").each(function(){            
            $(this).click(function(){    
                if(index>$(this).index()){
                    //console.log("$(this).index()="+$(this).index()+"/"+"index="+index);
                    var j=index-$(this).index();
                    for(var i=0;i<j;i++){                
                            $(".u-box").css("marginLeft","-157px");
                            $(".u-box li").eq($(".u-box li").length-1).insertBefore($(".u-box li").eq(0));
                            sMove("467px");
                    }
                }else{
                    var j=$(this).index()-index;
                    for(var i=0;i<j;i++){
                        sMove("-157px");
                    }
                }    
            });        
        });
    }
    
    //小按钮移入
    function onSmallButton(){
        $(".n-box").mouseover(function(){
            clearInterval(timer);
        });
        $(".n-box").mouseout(function(){
            autoPlay("-157px");
        });
    }
    onSmallButton();
    smallButtonclick();
    
    });