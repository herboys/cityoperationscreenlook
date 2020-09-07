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

	//openLargeVideo('G15嘉定朱桥一级检查站1','http://10.237.221.178:8050/cam/realmonitor/31011401001320221006?subtype=0&streamType=0&token=1598235258_411db1feac35a0fa51686c37e661360923c421e2&mediatype=HLS.m3u8')
	videoInterval=setInterval(removeVideoCache,15*60*1000) //每15分钟清空一次缓存
})


var videoFlagTwo=0;

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
				videoObj.name=G215Name[i].replace(" ","_")
				videoObj.src=G215List[i]
				jrwlzsjList[i]=videoObj;
			}


			var str=""
			$('#slider2').html('');
			for (var i = 0; i < 1; i++) {
				str=''
				var name=jrwlzsjList[i].name
				name=name.replace(" ","_");
				var url=jrwlzsjList[i].src
				//openLargeVideo(name,url)
				str += '<div class="slide1">'
					+'<div class="jrwlzsjTxt1"><span style="left:0.5rem;top:0px;font-size:1.1rem;position:absolute;color:#00fff6;z-index:999">'+jrwlzsjList[i].name+'</span>'
				//	+'<img class="fullscreenImg" onclick="openLargeVideo("'+jrwlzsjList[i].name+'","'+jrwlzsjList[i].src+'")" src="images/fullscreen.png"/>'
					+ "<img class='fullscreenImg' style='right:1rem' onclick=openLargeVideo('"+name+"','"+url+"') src='images/fullscreen1.png'/>"

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
			//alert('失败')
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
				videoObj.name=G215Name[i].replace(" ","_")
				videoObj.src= G215List[i]
				jrwlzsjListOne[i]=videoObj;
			}


			var str=""
			$('#slider1').html('');
			for (var i = 0; i < 1; i++) {
				var name=jrwlzsjListOne[i].name
				name=name.replace(" ","_");
				var url=jrwlzsjListOne[i].src
				str=''
				str += '<div class="slide1">'
					+ '<div class="jrwlzsjTxt1"><span style="left:0.5rem;top:0px;font-size:1.1rem;position:absolute;color:#00fff6;z-index:999">'+jrwlzsjListOne[i].name+'</span>'
					//+ '<img class="fullscreenImg" onclick="openLargeVideo("'+jrwlzsjListOne[i].name+'","'+jrwlzsjListOne[i].src+'")" src="images/fullscreen.png"/>'
					/*+ '<img class="fullscreenImg" onclick="openLargeVideo("'+name+'","'+url+'")" src="images/fullscreen.png"/>'*/
					+ "<img class='fullscreenImg' style='right:1rem' onclick=openLargeVideo('"+name+"','"+url+"') src='images/fullscreen1.png'/>"
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
		insertOneVideo(videoName[0],videoList[0])
		//alert($('#slider1').children().eq(0)[0].innerHTML)
		clearInterval(videoInterval) //原先清除缓存的定时器取消，重新计时
		videoInterval=setInterval(removeVideoCache,15*60*1000) //每15分钟清空一次缓存
	}else{//两个视频，显示在下边两个框中
		insertOneVideo(videoName[0],videoList[0])
		insertSecondVideo(videoName[1],videoList[1])
		clearInterval(videoInterval) //原先清除缓存的定时器取消，重新计时
		videoInterval=setInterval(removeVideoCache,15*60*1000) //每15分钟清空一次缓存
	}
}

function insertOneVideo(name,url){
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
	var name=videoName[0]
	var url=videoList[0]
	str += '<div class="slide1">'
		+'<div class="jrwlzsjTxt1"><span style="left:0.5rem;top:0px;font-size:1.1rem;position:absolute;color:#00fff6;z-index:999">'+name+'</span>'
		+ "<img class='fullscreenImg' onclick=openLargeVideo('"+name+"','"+url+"') src='images/fullscreen1.png'/>"
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
	hls.loadSource(url);
	hls.attachMedia(video);
	hls.on(Hls.Events.MANIFEST_PARSED, function () {
		video.play();
	})

	hlsListMap["slideOne"]=hls
	videoFlagOne=1;
}

function insertSecondVideo(name,url){

	var removeVideo= $("#slider2 video")[0]
	removeVideo.pause()
	hlsListMap["slideTwo"].destroy();
	hlsListMap["slideTwo"]=null
	delete hlsListMap["slideTwo"]

	$('#slider2').html('');
	var name=videoName[1]
	var url=videoList[1]
	var str=''
	str += '<div class="slide1">'
		+'<div class="jrwlzsjTxt1"><span style="left:0.5rem;top:0px;font-size:1.1rem;position:absolute;color:#00fff6;z-index:999">'+name+'</span>'
		+ "<img class='fullscreenImg' onclick=openLargeVideo('"+name+"','"+url+"') src='images/fullscreen1.png'/>"
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
	hls.loadSource(url);
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

	var name=videoName[second]
	var url=videoList[second]

		str=''
		str += '<div class="slide">'
				+'<div class="jrwlzsjTxt"> <span style="left:0px;top:-5px;font-size:0.95rem;position:absolute;color:#00fff6;z-index:999">'+videoName[second]+'</span>' +
			+ "<img class='fullscreenImg' onclick=openLargeVideo('"+name+"','"+url+"') src='images/fullscreen1.png'/>"
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

	if(GarBageVideo>0&&videoOne==true){//垃圾分类的视频在第一个视频里被关闭
		videoOne=false;
		GarBageVideo--;
	}
	removeVideoOne()
	createVideoSlideOne()

}




function closeVideoTwo() {

	if(GarBageVideo>0&&videoTwo==true){ //垃圾分类的视频在第二个视频里被关闭
		videoTwo=false;
		GarBageVideo--;
	}
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

	//先清空已有的
	if(hlsListMap["slideThree"]!=null){
		var removeVideo= $("#slider3 video")[0]
		removeVideo.pause()
		hlsListMap["slideThree"].destroy();
		hlsListMap["slideThree"]=null
		delete hlsListMap["slideThree"]
	}


	var str= '<span style="left:0px;top:0px;font-size:1.5rem;position:absolute;color:#00fff6;z-index:10000">'+name+'</span>'
	+ '<span style="right:0px;top:0px;font-size:1.5rem;position:absolute;color:#999;z-index:10000" onclick="removeLargeVideo()">关闭</span>'
	+ '<div class="largeVideoDiv">'
	+ '<video controls="" autoplay preload muted name="media" class="largeVideo"  muted="muted"></video>'
	+ '</div>'
	$("#slider3").html(str)

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
	var removeVideo= $("#slider3 video")[0]
	removeVideo.pause()
	hlsListMap["slideThree"].destroy();
	hlsListMap["slideThree"]=null
	delete hlsListMap["slideThree"]
	$("#slider3").hide()
}