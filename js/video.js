//视频左移

var jrwlzsjList=[];
var jrwlzsjListOne=[];
var videoTime='';
var videoTimeOne='';
var videoNum=2;
var videoNumOne=1;
function getjrwlzsj(){
	$.ajax({// 根据指标获取相应的数据 findDetailByCode
		url : '../../../sh/SocialAutonomySystem/todayUntrans',
		dataType : 'json',
		type : 'post',
		contentType : 'application/json',
		data : JSON.stringify({}),
		async : true,
		success : function(data) {
			if (data.result == 'OK') {
				for(var i=0;i<10;i++){
					jrwlzsjList[i]='http://vali-g1.cp31.ott.cibntv.net/youku/69752e30609387173282e501c/03000801005ED0E635F6204003E880EAF120E3-FC36-4F82-A448-5E34401D7A65.mp4?sid=159212567300010004125_00_B54712ec8006757e140762bf6c08f5dd7&amp;sign=beefe9d075ef0e2d21a32f31bedc26f6&amp;ctype=50&amp;si=183&amp;psid=713850910b6824a787ce59f500f54be24d045'
				}

				var str = "";
				var tableLen = data.resultInfo.length;
				jrwlzsjList=data.resultInfo
				for (var i = 0; i < 3; i++) {
                    str += '<div class="slide">'
							+'<div class="jrwlzsjTxt">'
				
					str +='<div class="jrwlzsjCont">'

					if(i==0||i==1||i==2)
					{
						str	+='<video controls="" autoplay preload muted name="media" class="video-list"  src="'+jrwlzsjList[i]+'">'
					}
					
					str	+= '  </video>'
						+'</div>'
						+'<div class="sjxqTitle sjtit2">'+"立交防汛点位"+i+'</div>'
						+'</div>'
						+'</div>'
				}
				$('#slider2').html(str);
				if(i >2 ){
					$(document).ready(function() {
						intVideo();
						$('.jrwlzsj_box').mouseenter(function(){
							clearInterval(videoTime)
						})
						$('.jrwlzsj_box').mouseleave(function(){
							intVideo();
						})	
					});
				}
			} else {
				$('#cont1').html('查询失败');
			}
		}
	})
}

var videoFlagTwo=0;
function createVideoSlide(){
    for(var i=0;i<10;i++){
        var videoObj=new Object();
        videoObj.name="摄像头"+i
        videoObj.src="http://vali-g1.cp31.ott.cibntv.net/youku/69752e30609387173282e501c/03000801005ED0E635F6204003E880EAF120E3-FC36-4F82-A448-5E34401D7A65.mp4?sid=159212567300010004125_00_B54712ec8006757e140762bf6c08f5dd7&amp;sign=beefe9d075ef0e2d21a32f31bedc26f6&amp;ctype=50&amp;si=183&amp;psid=713850910b6824a787ce59f500f54be24d045"
        jrwlzsjList[i]=videoObj;
    }

    var str=""
    for (var i = 0; i < 3; i++) {
        str += '<div class="slide">'
                +'<div class="jrwlzsjTxt">'
    
        str +='<div class="jrwlzsjCont">'

        if(i==0||i==1||i==2)
        {
            str	+='<video controls="" autoplay preload muted name="media" class="video-list" src="'+jrwlzsjList[i].src+'">'
        }
        
        str	+= '  </video>'
            +'</div>'
            +'</div>'
            +'</div>'
    }
    $('#slider2').html(str);
    if(i >2 ){
        $(document).ready(function() {
            intVideoTwo();
            $('.jrwlzsj_box').mouseenter(function(){
                clearInterval(videoTime)
            })
            $('.jrwlzsj_box').mouseleave(function(){
				if(videoFlagTwo==0)
                	intVideoTwo();
            })	
        });
    }

}

function intVideoTwo(){
	videoTime=setInterval(function(){
		videoNum++;
		if(videoNum==jrwlzsjList.length)
		{
			videoNum=0;
		}
		$('#slider2').animate({'left':-282},500,function(){
			$('#slider2').children().eq(0).remove();
			$('#slider2').css({'left':0})
			var str='';
			if(videoNum%2==0){
				str += '<div class="slide">'
					+'<div class="jrwlzsjTxt">'
			}else{
				str += '<div class="slide">'
					+'<div class="jrwlzsjTxt">'
			}
			str +='<div class="jrwlzsjCont">'
			str	+='<video controls="" autoplay preload muted name="media" class="video-list" src="'+jrwlzsjList[videoNum].src+'">'
			str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'
			$('#slider2').append(str);
		})
	},5000)
}

var videoFlagOne=0;

function createVideoSlideOne(){
    for(var i=0;i<10;i++){
        var videoObj=new Object();
        videoObj.name="摄像头"+i
        videoObj.src="http://vali-g1.cp31.ott.cibntv.net/youku/69752e30609387173282e501c/03000801005ED0E635F6204003E880EAF120E3-FC36-4F82-A448-5E34401D7A65.mp4?sid=159212567300010004125_00_B54712ec8006757e140762bf6c08f5dd7&amp;sign=beefe9d075ef0e2d21a32f31bedc26f6&amp;ctype=50&amp;si=183&amp;psid=713850910b6824a787ce59f500f54be24d045"
        jrwlzsjListOne[i]=videoObj;
    }

    var str=""
    for (var i = 0; i < 2; i++) {
        str += '<div class="slide1">'
                +'<div class="jrwlzsjTxt1">'
    
        str +='<div class="jrwlzsjCont1">'

        if(i==0||i==1)
        {
            str	+='<video controls="" autoplay preload muted name="media" class="video-list" src="http://vali-g1.cp31.ott.cibntv.net/youku/69752e30609387173282e501c/03000801005ED0E635F6204003E880EAF120E3-FC36-4F82-A448-5E34401D7A65.mp4?sid=159212567300010004125_00_B54712ec8006757e140762bf6c08f5dd7&amp;sign=beefe9d075ef0e2d21a32f31bedc26f6&amp;ctype=50&amp;si=183&amp;psid=713850910b6824a787ce59f500f54be24d045">'
        }
        
        str	+= '  </video>'
            +'</div>'
            +'</div>'
            +'</div>'
    }
    $('#slider1').html(str);
    if(i >1 ){
        $(document).ready(function() {
            intVideoOne();
            $('.jrwlzsj_box1').mouseenter(function(){
                clearInterval(videoTimeOne)
            })
            $('.jrwlzsj_box1').mouseleave(function(){
				if(videoFlagOne==0)
                	intVideoOne();
            })	
        });
    }

}


function intVideoOne(){
	videoTimeOne=setInterval(function(){
		videoNumOne++;
		if(videoNumOne==jrwlzsjListOne.length)
		{
			videoNumOne=0;
		}
		$('#slider1').animate({'left':-600},1000,function(){

			$('#slider1').children().eq(0).remove();
			$('#slider1').css({'left':0})
			var str='';
			str += '<div class="slide1">'
					+'<div class="jrwlzsjTxt1">'
			str +='<div class="jrwlzsjCont1">'
			str	+='<video autoplay preload muted controls="" name="media" class="video-list" src="http://vali-g1.cp31.ott.cibntv.net/youku/69752e30609387173282e501c/03000801005ED0E635F6204003E880EAF120E3-FC36-4F82-A448-5E34401D7A65.mp4?sid=159212567300010004125_00_B54712ec8006757e140762bf6c08f5dd7&amp;sign=beefe9d075ef0e2d21a32f31bedc26f6&amp;ctype=50&amp;si=183&amp;psid=713850910b6824a787ce59f500f54be24d045">'
			str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'
			$('#slider1').append(str);
		})
	},5000)
}

var videoList=[];
function openVideo(){
	
	for(var i=0;i<3;i++){
		videoList[i]='http://vali-g1.cp31.ott.cibntv.net/youku/69752e30609387173282e501c/03000801005ED0E635F6204003E880EAF120E3-FC36-4F82-A448-5E34401D7A65.mp4?sid=159212567300010004125_00_B54712ec8006757e140762bf6c08f5dd7&amp;sign=beefe9d075ef0e2d21a32f31bedc26f6&amp;ctype=50&amp;si=183&amp;psid=713850910b6824a787ce59f500f54be24d045'
	}

	if(videoList.length==0){
		alert("该点位无视频数据")
		return
	}else if(videoList.length==1){//只有一个视频点位，在大框中显示
		
		insertOneVideo()
		//alert($('#slider1').children().eq(0)[0].innerHTML)

	}else if(videoList.length==2){//两个视频，显示在下边两个框中
		insertTwoVideo(0,1)

	}else if(videoList.length>=3){//三个或多于三个视频，三个框都显示
		insertOneVideo()
		insertTwoVideo(1,2)
	}

}

function insertOneVideo(){
	clearInterval(videoTimeOne)
		
	console.log(1)
	console.log($('#slider1').children().eq(0));
	var str='';
		str += '<div class="slide1">'
				+'<div class="jrwlzsjTxt1"><span style="right:40px;top:0px;font-size:25px;position:absolute;color:#999;z-index:999" onclick=closeVideoOne()>关闭</span>'
		str +='<div class="jrwlzsjCont1">'
		str	+='<video autoplay preload muted controls="" name="media" class="video-list" src="'+videoList[0]+'">'
		str	+= '  </video>'
			+'</div>'
			+'</div>'
			+'</div>'
//	alert($('#slider1').children().eq(0)[0].innerHTML)

	$('#slider1').children().eq(0)[0].innerHTML=str	
	//console.log($('#slider1').children().eq(0));
	$("#slider1 video")[0].play()

	videoFlagOne=1;
}


function insertTwoVideo(first,second){
	clearInterval(videoTime)
		videoFlagTwo=2;
		var str=''
		str += '<div class="slide">'
			+'<div class="jrwlzsjTxt"><span style="right:0px;top:0px;font-size:18px;position:absolute;color:#999;z-index:999" onclick=closeVideoTwo(0)>关闭</span>'
	
		str +='<div class="jrwlzsjCont">'
		str	+='<video controls="" autoplay preload muted name="media" class="video-list" src="'+videoList[first]+'">'
		str	+= '  </video>'
			+'</div>'
			+'</div>'
			+'</div>'

		$('#slider2').children().eq(0)[0].innerHTML=str	
			//console.log($('#slider1').children().eq(0));
		$("#slider2 video")[0].play()

		str=''
		str += '<div class="slide">'
				+'<div class="jrwlzsjTxt"><span style="right:0px;top:0px;font-size:18px;position:absolute;color:#999;z-index:999" onclick=closeVideoTwo(1)>关闭</span>'
		
		str +='<div class="jrwlzsjCont">'
		str	+='<video controls="" autoplay preload muted name="media" class="video-list" src="'+videoList[second]+'">'
		str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'
	
				console.log(123)
		$('#slider2').children().eq(1)[0].innerHTML=str	
		console.log($('#slider2').children().eq(1));
		$("#slider2 video")[1].play()
}

function closeVideoOne(){
	videoNumOne++;
	if(videoNumOne==jrwlzsjListOne.length)
	{
		videoNumOne=0;
	}
	$('#slider1').animate({'left':-600},1000,function(){

		$('#slider1').children().eq(0).remove();
		$('#slider1').css({'left':0})
		var str='';
		str += '<div class="slide1">'
				+'<div class="jrwlzsjTxt1">'
		str +='<div class="jrwlzsjCont1">'
		str	+='<video autoplay preload muted controls="" name="media" class="video-list" src="'+jrwlzsjList[videoNumOne].src+'">'
		str	+= '  </video>'
			+'</div>'
			+'</div>'
			+'</div>'
		$('#slider1').append(str);
	})
	clearInterval(videoTimeOne)
	//intVideoOne();
	videoFlagOne=0;
}

function closeVideoTwo(closeIndex){
	if(closeIndex==0){
		videoNum++;
		if(videoNum==jrwlzsjList.length)
		{
			videoNum=0;
		}
		$('#slider2').animate({'left':-282},500,function(){
			$('#slider2').children().eq(0).remove();
			$('#slider2').css({'left':0})
			var str='';
			if(videoNum%2==0){
				str += '<div class="slide">'
					+'<div class="jrwlzsjTxt">'
			}else{
				str += '<div class="slide">'
					+'<div class="jrwlzsjTxt">'
			}
			str +='<div class="jrwlzsjCont">'
			str	+='<video controls="" autoplay preload muted name="media" class="video-list" src="'+jrwlzsjList[videoNum].src+'">'
			str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'
			$('#slider2').append(str);
		})

	}else if(closeIndex==1&&videoFlagTwo==1){
		videoNum++;
		if(videoNum==jrwlzsjList.length)
		{
			videoNum=0;
		}
		$('#slider2').animate({'left':-282},500,function(){
			$('#slider2').children().eq(0).remove();
			$('#slider2').css({'left':0})
			var str='';
			if(videoNum%2==0){
				str += '<div class="slide">'
					+'<div class="jrwlzsjTxt">'
			}else{
				str += '<div class="slide">'
					+'<div class="jrwlzsjTxt">'
			}
			str +='<div class="jrwlzsjCont">'
			str	+='<video controls="" autoplay preload muted name="media" class="video-list" src="'+jrwlzsjList[videoNum].src+'">'
			str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'
			$('#slider2').append(str);
		})
	}else{
		videoNum++;
		if(videoNum==jrwlzsjList.length)
		{
			videoNum=0;
		}

		var str=''
		str += '<div class="slide">'
				+'<div class="jrwlzsjTxt">'
		
		str +='<div class="jrwlzsjCont">'
		str	+='<video controls="" autoplay preload muted name="media" class="video-list" src="'+jrwlzsjList[videoNum].src+'">'
		str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'
	
		$('#slider2').children().eq(1)[0].innerHTML=str	
		console.log($('#slider2').children().eq(1));
		$("#slider2 video")[1].play()
	}

	clearInterval(videoTime)
	videoFlagTwo--;
}