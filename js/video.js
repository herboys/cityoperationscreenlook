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
				var str = "";
				var tableLen = data.resultInfo.length;
				jrwlzsjList=data.resultInfo
				for (var i = 0; i < 3; i++) {
                    str += '<div class="slide">'
							+'<div class="jrwlzsjTxt">'
				
					str +='<div class="jrwlzsjCont">'

					if(i==0||i==1||i==2)
					{
						str	+='<video controls="" autoplay preload muted name="media" class="video-list" src="http://vali-g1.cp31.ott.cibntv.net/youku/69752e30609387173282e501c/03000801005ED0E635F6204003E880EAF120E3-FC36-4F82-A448-5E34401D7A65.mp4?sid=159212567300010004125_00_B54712ec8006757e140762bf6c08f5dd7&amp;sign=beefe9d075ef0e2d21a32f31bedc26f6&amp;ctype=50&amp;si=183&amp;psid=713850910b6824a787ce59f500f54be24d045">'
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
            str	+='<video controls="" autoplay preload muted name="media" class="video-list" src="http://vali-g1.cp31.ott.cibntv.net/youku/69752e30609387173282e501c/03000801005ED0E635F6204003E880EAF120E3-FC36-4F82-A448-5E34401D7A65.mp4?sid=159212567300010004125_00_B54712ec8006757e140762bf6c08f5dd7&amp;sign=beefe9d075ef0e2d21a32f31bedc26f6&amp;ctype=50&amp;si=183&amp;psid=713850910b6824a787ce59f500f54be24d045">'
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
		$('#slider2').animate({'left':-262},500,function(){
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
			str	+='<video controls="" autoplay preload muted name="media" class="video-list" src="http://vali-g1.cp31.ott.cibntv.net/youku/69752e30609387173282e501c/03000801005ED0E635F6204003E880EAF120E3-FC36-4F82-A448-5E34401D7A65.mp4?sid=159212567300010004125_00_B54712ec8006757e140762bf6c08f5dd7&amp;sign=beefe9d075ef0e2d21a32f31bedc26f6&amp;ctype=50&amp;si=183&amp;psid=713850910b6824a787ce59f500f54be24d045">'
			str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'
			$('#slider2').append(str);
		})
	},5000)
}


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
		$('#slider1').animate({'left':-520},1000,function(){
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
