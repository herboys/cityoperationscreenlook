//视频左移

var jrwlzsjList=[];
var jrwlzsjListOne=[];
var videoTime='';
var videoTimeOne='';
var videoNum=2;
var videoNumOne=1;
var hlsListMap=new Object()
var videoInterval;
$(function(){
	createVideoSlide();
	createVideoSlideOne();
	openLargeVideo();
	videoInterval=setInterval(removeVideoCache,15*60*1000) //每15分钟清空一次缓存
})

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
/*function createVideoSlide(){

	var G215List=[]
	var G215Name=[]
	var index=0;
	$.ajax({
		url:STATIC_URL+'/videoStream/getVideoSource/2',
		type:'get',
		dataType: "json",
		async:false,
		success:function (data) {
			var resData=data.data;
			console.log(resData)

			for(var i=0;i<resData.length;i++){
				if(resData[i].url!=null && resData[i].url!=''){
					//alert(resData[i].url)
					G215List[index]=resData[i].url
					G215Name[index++]=resData[i].monitorPoint.substr(9)
				}
			}
		},
		error:function (data) {
			console.log(data)
			alert('失败')
		}

	})

	$.ajax({
		url:STATIC_URL+'/videoStream/getVideoSource/1',
		type:'get',
		dataType: "json",
		async:false,
		success:function (data) {
			var resData=data.data;

			for(var i=0;i<resData.length;i++){
				if(resData[i].url!=null && resData[i].url!=''){
					G215List[index]=resData[i].url
					G215Name[index++]=resData[i].monitorPoint.substr(9)
				}
			}
		},
		error:function (data) {
			console.log(data)
			alert('失败')
		}

	})


	console.log(123)
	console.log(G215List)

    for(var i=0;i<G215List.length;i++){
        var videoObj=new Object();
        videoObj.name=G215Name[i]
        videoObj.src=G215List[i]
        jrwlzsjList[i]=videoObj;
    }

    var str=""
	$('#slider2').html('');
    for (var i = 0; i < 3; i++) {
    	str=''
        str += '<div class="slide">'
                +'<div class="jrwlzsjTxt"><span style="left:0px;top:-5px;font-size:0.95rem;position:absolute;color:#00fff6;z-index:999">'+jrwlzsjList[i].name+'</span>'

        str +='<div class="jrwlzsjCont">'

		// str	+='<video controls="" autoplay preload muted name="media" class="video-list" src="'+jrwlzsjList[i].src+'">'
		str	+='<video controls="" autoplay preload muted name="media" class="video-list" muted="muted">'

        str	+= '  </video>'
            +'</div>'
            +'</div>'
            +'</div>'

		$('#slider2').append(str);

		var hls = new Hls();
		var video = $("#slider2 video")[i];
		hls.loadSource(jrwlzsjList[i].src);
		hls.attachMedia(video);
		hls.on(Hls.Events.MANIFEST_PARSED, function () {
			video.play();
		})

    }
    //$('#slider2').html(str);
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

}*/


function createVideoSlide(){

	var G215List=[]
	var G215Name=[]
	var index=0;
	$.ajax({
		url:STATIC_URL+'/videoStream/getVideoSource/2',
		type:'get',
		dataType: "json",
		async:true,
		success:function (data) {
			var resData=data.data;
			console.log(resData)

			for(var i=0;i<resData.length;i++){
				if(resData[i].url!=null && resData[i].url!=''){
					//alert(resData[i].url)
					G215List[index]=resData[i].url
					G215Name[index++]=resData[i].monitorPoint.substr(9)
				}
			}
			console.log(123)
			console.log(G215List)

			for(var i=0;i<G215List.length;i++){
				var videoObj=new Object();
				videoObj.name=G215Name[i]
				videoObj.src=G215List[i]
				jrwlzsjList[i]=videoObj;
			}

			var str=""
			$('#slider2').html('');
			for (var i = 0; i < 1; i++) {
				str=''
				str += '<div class="slide1">'
					+'<div class="jrwlzsjTxt1"><span style="left:0.5rem;top:0px;font-size:1.1rem;position:absolute;color:#00fff6;z-index:999">'+jrwlzsjList[i].name+'</span>'
					+'<img onclick="openLargeVideo(jrwlzsjList[i].name,jrwlzsjList[i].src)" src="images/fullscreen.png"/>'

				str +='<div class="jrwlzsjCont1">'

				str	+='<video controls="" autoplay preload muted name="media" style="width:29.2rem;height:16rem" muted="muted">'

				str	+= '  </video>'
					+'</div>'
					+'</div>'
					+'</div>'

				$('#slider2').append(str);

				var hls = new Hls();
				var video = $("#slider2 video")[i];
				hls.loadSource(jrwlzsjList[i].src);
				hls.attachMedia(video);
				hls.on(Hls.Events.MANIFEST_PARSED, function () {
					video.play();
				})

				hlsListMap["slideTwo"]=hls

			}
		},
		error:function (data) {
			console.log(data)
			alert('失败')
		}
	})


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
			str += '<div class="slide">'
				+'<div class="jrwlzsjTxt">' +
				'<span style="left:0.5px;top:-5px;font-size:0.95rem;position:absolute;color:#00fff6;z-index:999">'+jrwlzsjList[videoNum].name+'</span>'
			str +='<div class="jrwlzsjCont">'
			//str	+='<video controls="" autoplay preload muted name="media" class="video-list" src="'+jrwlzsjList[videoNum].src+'">'
			str	+='<video controls="" autoplay preload muted name="media" class="video-list" muted="muted">'
			str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'
			$('#slider2').append(str);

			var hls = new Hls();
			var video = $("#slider2 video")[2];
			hls.loadSource(jrwlzsjList[videoNum].src);
			hls.attachMedia(video);
			hls.on(Hls.Events.MANIFEST_PARSED, function () {
				video.play();
			})

		})
	},250000)
}

var videoFlagOne=0;

function createVideoSlideOne(){

	var G215List=[]
	var G215Name=[]
	var index=0;

	$.ajax({
		url:STATIC_URL+'/videoStream/getVideoSource/1',
		type:'get',
		dataType: "json",
		async:true,
		success:function (data) {
			var resData=data.data;

			for(var i=0;i<resData.length;i++){
				if(resData[i].url!=null && resData[i].url!=''){
					G215List[index]=resData[i].url
					G215Name[index++]=resData[i].monitorPoint.substr(9)
				}
			}

			for(var i=0;i<G215List.length;i++){
				var videoObj=new Object();
				videoObj.name=G215Name[i]
				videoObj.src= G215List[i]
				jrwlzsjListOne[i]=videoObj;
			}

			/*var str=""
			$('#slider1').html('');
			str += '<div class="slide1">'
				+'<div class="jrwlzsjTxt1"><span style="left:0.5rem;top:0px;font-size:1.1rem;position:absolute;color:#00fff6;z-index:999">'+jrwlzsjListOne[0].name+'</span>'

			str +='<div class="jrwlzsjCont1">'

			str	+='<video controls="" autoplay preload muted name="media" style="width:29.2rem;height:16rem" muted="muted">'

			str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'
			$('#slider1').html(str);
			var hls = new Hls();
			var video = $("#slider1 video")[0];
			//alert(jrwlzsjListOne[1].src)
			hls.loadSource(jrwlzsjListOne[0].src);
			hls.attachMedia(video);
			hls.on(Hls.Events.MANIFEST_PARSED, function () {
				video.play();
			})*/

			var str=""
			$('#slider1').html('');
			for (var i = 0; i < 1; i++) {
				str=''
				str += '<div class="slide1">'
					+ '<div class="jrwlzsjTxt1"><span style="left:0.5rem;top:0px;font-size:1.1rem;position:absolute;color:#00fff6;z-index:999">'+jrwlzsjListOne[i].name+'</span>'
					+ '<img onclick="openLargeVideo(jrwlzsjListOne[i].name,jrwlzsjListOne[i].src)" src="images/fullscreen.png"/>'
				str +='<div class="jrwlzsjCont1">'

				str	+='<video controls="" autoplay preload muted name="media" style="width:29.2rem;height:16rem" muted="muted">'

				str	+= '  </video>'
					+'</div>'
					+'</div>'
					+'</div>'

				$('#slider1').append(str);

				var hls = new Hls();
				var video = $("#slider1 video")[i];
				hls.loadSource(jrwlzsjListOne[i].src);
				hls.attachMedia(video);
				hls.on(Hls.Events.MANIFEST_PARSED, function () {
					video.play();
				})

				hlsListMap["slideOne"]=hls
			}

		},
		error:function (data) {
			console.log(data)
			//alert('失败')
		}

	})



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
				+'<span style="left:0px;top:15px;font-size:1.1rem;position:absolute;color:#00fff6;z-index:999">'+jrwlzsjListOne[videoNumOne].name+videoNumOne+'</span>'
			str +='<div class="jrwlzsjCont1">'
			str	+='<video autoplay preload muted controls="" name="media" class="video-list" muted="muted">'
			str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'

			$('#slider1').append(str);
			var hls = new Hls();
			var video = $("#slider1 video")[1];
			hls.loadSource(jrwlzsjListOne[videoNumOne].src);
			hls.attachMedia(video);
			hls.on(Hls.Events.MANIFEST_PARSED, function () {
				video.play();
			})

		})
	},1000000)
}

var videoList=[];
var videoName=[]
function openVideo(urlList,urlName){

	videoList=urlList
	videoName=urlName
	//alert(JSON.stringify(videoName))
	if(videoList.length==0){
		alert("该点位无视频数据")
		return
	}else if(videoList.length==1){//只有一个视频点位，在大框中显示
		insertOneVideo()
		//alert($('#slider1').children().eq(0)[0].innerHTML)
		clearInterval(videoInterval) //原先清除缓存的定时器取消，重新计时
		videoInterval=setInterval(removeVideoCache,15*60*1000) //每15分钟清空一次缓存
	}else{//两个视频，显示在下边两个框中
		insertOneVideo()
		insertSecondVideo()
		clearInterval(videoInterval) //原先清除缓存的定时器取消，重新计时
		videoInterval=setInterval(removeVideoCache,15*60*1000) //每15分钟清空一次缓存
	}
}

function insertOneVideo(){
	//clearInterval(videoTimeOne)


	var removeVideo= $("#slider1 video")[0]
	removeVideo.pause()
	hlsListMap["slideOne"].destroy();
	hlsListMap["slideOne"]=null
	delete hlsListMap["slideOne"]

		
	console.log(1)
	console.log($('#slider1').children().eq(0));
	var str=""
	$('#slider1').html('');
	str += '<div class="slide1">'
		+'<div class="jrwlzsjTxt1"><span style="left:0.5rem;top:0px;font-size:1.1rem;position:absolute;color:#00fff6;z-index:999">'+videoName[0]+'</span>'
		+'<img onclick="openLargeVideo(videoName[0],videoList[0])" src="images/fullscreen.png"/>'
		+'<span style="right:0px;top:0px;font-size:1.1rem;position:absolute;color:#999;z-index:999" onclick=closeVideoOne()>关闭</span>'

	str +='<div class="jrwlzsjCont1">'

	str	+='<video controls="" autoplay preload muted name="media" style="width:29.2rem;height:16rem" muted="muted">'

	str	+= '  </video>'
		+'</div>'
		+'</div>'
		+'</div>'




	$('#slider1').append(str)

	var hls = new Hls();
	var video = $("#slider1 video")[0];
	hls.loadSource(videoList[0]);
	hls.attachMedia(video);
	hls.on(Hls.Events.MANIFEST_PARSED, function () {
		video.play();
	})

	hlsListMap["slideOne"]=hls
	videoFlagOne=1;
}

function insertSecondVideo(){

	var removeVideo= $("#slider2 video")[0]
	removeVideo.pause()
	hlsListMap["slideTwo"].destroy();
	hlsListMap["slideTwo"]=null
	delete hlsListMap["slideTwo"]

	$('#slider2').html('');
	var str=''
	str += '<div class="slide1">'
		+'<div class="jrwlzsjTxt1"><span style="left:0.5rem;top:0px;font-size:1.1rem;position:absolute;color:#00fff6;z-index:999">'+videoName[1]+'</span>'
		+'<img onclick="openLargeVideo(videoName[1],videoList[1])" src="images/fullscreen.png"/>'
		+'<span style="right:0px;top:0px;font-size:1.1rem;position:absolute;color:#999;z-index:999" onclick=closeVideoTwo()>关闭</span>'
	str +='<div class="jrwlzsjCont1">'

	str	+='<video controls="" autoplay preload muted name="media" style="width:29.2rem;height:16rem" muted="muted">'

	str	+= '  </video>'
		+'</div>'
		+'</div>'
		+'</div>'

	$('#slider2').append(str)

	var hls = new Hls();
	var video = $("#slider2 video")[0];
	hls.loadSource(videoList[1]);
	hls.attachMedia(video);
	hls.on(Hls.Events.MANIFEST_PARSED, function () {
		video.play();
	})

	hlsListMap["slideTwo"]=hls
}

function insertTwoVideo(first,second){
	clearInterval(videoTime)
		videoFlagTwo=2;
		var str=''
		str += '<div class="slide">'
			+'<div class="jrwlzsjTxt"><span style="left:0px;top:-5px;font-size:0.95rem;position:absolute;color:#00fff6;z-index:999">'+videoName[first]+'</span>' +
			'<span style="right:0px;top:0px;font-size:0.98rem;position:absolute;color:#999;z-index:999" onclick=closeVideoTwo(0)>关闭</span>'
	
		str +='<div class="jrwlzsjCont">'
			//str	+='<video controls="" autoplay preload muted name="media" class="video-list" muted="muted" src="'+videoList[first]+'">'
	str	+='<video controls="" autoplay preload muted name="media" class="video-list" muted="muted" >'
		str	+= '  </video>'
			+'</div>'
			+'</div>'
			+'</div>'

		$('#slider2').children().eq(0)[0].innerHTML=str	
			//console.log($('#slider1').children().eq(0));
	//	$("#slider2 video")[0].play()

	var hls = new Hls();
	var video = $("#slider2 video")[0];
	hls.loadSource(videoList[first]);
	hls.attachMedia(video);
	hls.on(Hls.Events.MANIFEST_PARSED, function () {
		video.play();
	})

		str=''
		str += '<div class="slide">'
				+'<div class="jrwlzsjTxt"> <span style="left:0px;top:-5px;font-size:0.95rem;position:absolute;color:#00fff6;z-index:999">'+videoName[second]+'</span>' +
				+ '<img onclick="openLargeVideo(videoName[second],videoList[second])" src="images/fullscreen.png"/>'
				+ '<span style="right:0px;top:0px;font-size:0.98rem;position:absolute;color:#999;z-index:999" onclick=closeVideoTwo(1)>关闭</span>'
		
		str +='<div class="jrwlzsjCont">'
		//str	+='<video controls="" autoplay preload muted name="media" class="video-list" muted="muted" src="'+videoList[second]+'">'
		str	+='<video controls="" autoplay preload muted name="media" class="video-list" muted="muted" >'
		str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'
	
				console.log(123)
		$('#slider2').children().eq(1)[0].innerHTML=str	
		console.log($('#slider2').children().eq(1));
		//$("#slider2 video")[1].play()
	var hls = new Hls();
	var video = $("#slider2 video")[1];
	hls.loadSource(videoList[second]);
	hls.attachMedia(video);
	hls.on(Hls.Events.MANIFEST_PARSED, function () {
		video.play();
	})
}

function closeVideoOne(){
	removeVideoOne()
	createVideoSlideOne()
}


function closeVideoTwo() {
	removeVideoTwo()
	createVideoSlide()
}

function closeVideoTwo1(closeIndex){
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
			str += '<div class="slide">'
				+'<div class="jrwlzsjTxt">' +
				'<span style="left:0px;top:-5px;font-size:0.95rem;position:absolute;color:#00fff6;z-index:999">'+jrwlzsjList[videoNum].name+'</span>'

			str +='<div class="jrwlzsjCont">'
			str	+='<video controls="" autoplay preload muted name="media" class="video-list" muted="muted">'
			str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'
			$('#slider2').append(str);
		//	alert($("#slider2 video").length)
			var hls = new Hls();
			var video = $("#slider2 video")[2];
			hls.loadSource(jrwlzsjList[videoNum].src);
			hls.attachMedia(video);
			hls.on(Hls.Events.MANIFEST_PARSED, function () {
				video.play();
			})

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
			str += '<div class="slide">'
				+'<div class="jrwlzsjTxt">' +
				'<span style="left:0px;top:-5px;font-size:0.95rem;position:absolute;color:#00fff6;z-index:999">'+jrwlzsjList[videoNum].name+'</span>'


			str +='<div class="jrwlzsjCont">'
			str	+='<video controls="" autoplay preload muted name="media" class="video-list" muted="muted">'
			str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'
			$('#slider2').append(str);

			var hls = new Hls();
			var video = $("#slider2 video")[2];
			hls.loadSource(jrwlzsjList[videoNum].src);
			hls.attachMedia(video);
			hls.on(Hls.Events.MANIFEST_PARSED, function () {
				video.play();
			})

		})
	}else{
		videoNum++;
		if(videoNum==jrwlzsjList.length)
		{
			videoNum=0;
		}

		var str=''
		str += '<div class="slide">'
				+'<div class="jrwlzsjTxt"><span style="left:0px;top:-5px;font-size:0.95rem;position:absolute;color:#00fff6;z-index:999">'+jrwlzsjList[videoNum].name+'</span>\''
		
		str +='<div class="jrwlzsjCont">'
		str	+='<video controls="" autoplay preload muted name="media" class="video-list" muted="muted">'
		str	+= '  </video>'
				+'</div>'
				+'</div>'
				+'</div>'
	
		$('#slider2').children().eq(1)[0].innerHTML=str	
		//console.log($('#slider2').children().eq(1));
		//$("#slider2 video")[1].play()
		var hls = new Hls();
		var video = $("#slider2 video")[1];
		hls.loadSource(jrwlzsjList[videoNum].src);
		hls.attachMedia(video);
		hls.on(Hls.Events.MANIFEST_PARSED, function () {
			video.play();
		})

	}

	clearInterval(videoTime)
	videoFlagTwo--;
}

function removeVideoOne() {

	var removeVideo= $("#slider1 video")[0]
	removeVideo.pause()
	hlsListMap["slideOne"].destroy();
	hlsListMap["slideOne"]=null
	delete hlsListMap["slideOne"]
}

function removeVideoTwo() {

	var removeVideo= $("#slider2 video")[0]
	removeVideo.pause()
	hlsListMap["slideTwo"].destroy();
	hlsListMap["slideTwo"]=null
	delete hlsListMap["slideTwo"]
}


//清除视频缓存，重新加载视频
function removeVideoCache(){
	//alert("清楚缓存")
	removeVideoOne()
	removeVideoTwo()
	createVideoSlide();
	createVideoSlideOne();
}

var videoFlagThree=0;
function openLargeVideo(name,videoUrl){

	str= '<span style="left:0px;top:0px;font-size:1.5rem;position:absolute;color:#00fff6;z-index:10000">'+name+'</span>'
	+ '<span style="right:0px;top:0px;font-size:1.5rem;position:absolute;color:#999;z-index:10000" onclick="removeLargeVideo()">关闭</span>'
	+ '<div class="largeVideoDiv">'
	+ '<video controls="" autoplay preload muted name="media" class="largeVideo"  muted="muted"></video>'
	+ '</div>'
	var hls = new Hls();
	var video = $("#slider3 video")[0];
	hls.loadSource(videoUrl);
	hls.attachMedia(video);
	hls.on(Hls.Events.MANIFEST_PARSED, function () {
		video.play();
	})

	hlsListMap["slideThree"]=hls
	videoFlagThree=1;
	$('#slider3').show();
}

function removeLargeVideo(){
	alert(123)
	var removeVideo= $("#slider3 video")[0]
	removeVideo.pause()
//	hlsListMap["slideThree"].destroy();
	hlsListMap["slideThree"]=null
	delete hlsListMap["slideThree"]
	$("#slider3").hide()
}