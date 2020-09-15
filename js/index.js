
$(document).ready(function(){
	getZxgl_old();
	getZxgl();
	getLeaderZone();
	getName();
	setInterval(getName,12*60*60*1000)
	let para=''
	let imgs=''
	let EmergencyList=['突发事件','台风','交通拥堵','下立交','紧急工单','智能烟感','空气质量','水质监测','景点人流','公交准点率']
	let EmergencyListcopy=[
		// {name:'突发事件',imgs:'突发事件yellow'},
		{name:'台风',imgs:'台风'},
		{name:'交通拥堵',imgs:'交通拥堵'},
		{name:'下立交',imgs:'下立交'},
		{name:'紧急工单',imgs:'紧急工单'},
		{name:'空气质量',imgs:'空气质量'},
		{name:'水质监测',imgs:'水质监测'},
		{name:'智能烟感',imgs:'智能烟感'},
		{name:'景点人流',imgs:'景点人流'},
		// {name:'电弧',imgs:'公交准点率'},
		// {name:'公交准点率',imgs:'公交准点率'},
	]
	for (let i = 0; i < EmergencyListcopy.length; i++) {
		para +=	`<div class="Emergencyitem">
			<img  class="Emergencyicon" src=\images/Emergency/${EmergencyListcopy[i].imgs}.png\ >
				<p>${EmergencyListcopy[i].name}</p>
		</div>`
	}
	document.getElementById("EmergencyId").innerHTML=para
})


function setFont(){
	var size=$(window).width()*0.005;
	if(size<12)
	{
		size=12;
	}
	$('html').css({'font-size':size+'px'})
}
/*
function getZxgl(){
	var resultInfo=[];var data=[];
	var i=0;
	resultInfo[i++]='城运平台';resultInfo[i++]='网络化管理';resultInfo[i++]='智慧交通';resultInfo[i++]='智慧电梯';
	resultInfo[i++]='大客流检测';resultInfo[i++]='防台防汛';resultInfo[i++]='食药监管';resultInfo[i++]='餐厨废油';
	resultInfo[i++]='市容车辆';resultInfo[i++]='城管执法';resultInfo[i++]='物业管理';resultInfo[i++]='社区矫正';
	resultInfo[i++]='综治联勤';resultInfo[i++]='应急管理';resultInfo[i++]='城运通平台';resultInfo[i++]='疫情防控';
	resultInfo[i++]='垃圾分类';resultInfo[i++]='气象预警';resultInfo[i++]='水务一体化';resultInfo[i++]='更多......';
	var tableLen =resultInfo.length;
	for(var i = 0; i < tableLen; i++)  {
		data[i]="http://localhost:8085//specialmanagement/findAll";
	}

	var str = "";//str1 = [];
	for (var i = 0; i < tableLen; i++){
		//str += '<a class="csyytz_txt text-centered" href= '+data[i]+'>'
		str += '<button class="csyytz_txt text-centered" onclick="wblk()">'
		+'<div class="arrowBar-box">'
		+'<div class="arrowBar"></div>'
		+'</div>'		
		+ resultInfo[i] + '</button>';
		str+= '<div class=".weblink"><div style="width: 90%;height:50%;top: 0.1vw;left:5%">'+data[i]+'</div><button class="qd-btn" onclick="wblkgb()">关闭</button></div>';
	}
	$('#zxgl_detail').html(str);
	//$('#weblinks').html(str1[i]);
}
function wblk(){
	$('.weblink').addClass({transform: scale(1)})//.addClass('weblink');
}
function wblkgb(){
	$('.weblink').addClass({transform: scale(0)})//.addClass('weblink');
}
*/

var zhihuiList=[]
var anquanList=[]
var gaoxiaoList=[]

function getZxgl(){
	//var STATIC_URL="http://localhost:8085";
	$.ajax({
		url : STATIC_URL+'/specialmanagement/findAll',
		dataType : 'json',
		//contentType: 'application/json',
		type : 'get',
		//dataType:'JSONP',
		//async : true,
		success : function(data) {
			//alert(123)
			//var data=res.data
			//alert(JSON.stringify(data))
			for(var i=0;i<6;i++){
				var obj1=new Object()
				var obj2=new Object()
				var obj3=new Object()

				zhihuiList[i]=obj1
				anquanList[i]=obj2
				gaoxiaoList[i]=obj3
			}

			var tableLen =data.length;
			var str = "";str1 = [];
			for (var i = 0; i < tableLen; i++){

				var tmpIndex=data[i].indexOf-1;
				if(tmpIndex>=6)
					continue
				if(data[i].category==="智慧"){
					zhihuiList[tmpIndex].url=data[i].managementUrl
					zhihuiList[tmpIndex].name=data[i].managementName
				}else if(data[i].category==="高效"){
					gaoxiaoList[tmpIndex].url=data[i].managementUrl
					gaoxiaoList[tmpIndex].name=data[i].managementName
				}else if(data[i].category==="安全"){
					anquanList[tmpIndex].url=data[i].managementUrl
					anquanList[tmpIndex].name=data[i].managementName
				}

				/*str += '<a  class="csyytz_txt text-centered" href= '+data[i].managementUrl+' target="_blank">'
					+'<div class="arrowBar-box">'
					+'<div class="arrowBar"></div>'
					+'</div>'
					+ data[i].managementName+ '</a>';*/
				//str1[i]='<div style="width: 90%;height:50%;top: 0.1vw;left:5%">'+data[i].management_url+'</div>';
			}



			/*var zhihuiStr=createThree(zhihuiList)
			var anquanStr=createThree(anquanList)
			var gaoxiaoStr=createThree(gaoxiaoList)*/

			var zhihuiStr=createMore(zhihuiList)
			var anquanStr=createMore(anquanList)
			var gaoxiaoStr=createMore(gaoxiaoList)

			$("#zhihuiBox").html(zhihuiStr)
			$("#anquanBox").html(anquanStr)
			$("#gaoxiaoBox").html(gaoxiaoStr)

			/*str += '<div class="csyytz_txt text-centered">'
					+'<div class="arrowBar-box">'
					+'<div class="arrowBar"></div>'
					+'</div>'
					+ '更多......</div>'*/
			//str1[i]+='<button class="qd-btn" onclick="wblk()">关闭</button>';

			//$('#zxgl_detail').html(str);

		},
		error:function (data) {
			var resultInfo=[];
			var i=0;
			resultInfo[i++]='城运平台';resultInfo[i++]='网格化管理';resultInfo[i++]='智慧交通';resultInfo[i++]='智慧电梯';
			resultInfo[i++]='大客流监测';resultInfo[i++]='防台防汛';resultInfo[i++]='食药监管';resultInfo[i++]='餐厨废油';
			resultInfo[i++]='市容车辆';resultInfo[i++]='城管执法';resultInfo[i++]='物业管理';resultInfo[i++]='社区矫正';
			resultInfo[i++]='综治联勤';resultInfo[i++]='应急管理';resultInfo[i++]='城运通平台';resultInfo[i++]='疫情防控';
			resultInfo[i++]='垃圾分类';resultInfo[i++]='气象预警';resultInfo[i++]='水务一体化';resultInfo[i++]='更多......';

			var tableLen =resultInfo.length;
			var str = "";
			for (var i = 0; i < tableLen; i++){
				str += '<div class="csyytz_txt text-centered">'
					+'<div class="arrowBar-box">'
					+'<div class="arrowBar"></div>'
					+'</div>'
					+ resultInfo[i] + '</div>'
			}
			$('#zxgl_detail').html(str);
		}
	})
}


function getZxgl_old(){
	//var STATIC_URL="http://localhost:8085";
	$.ajax({
		url : STATIC_URL+'/specialmanagement/findAll',
		dataType : 'json',
		type : 'get',
		success : function(data) {
			//alert(123)
			//var data=res.data
			//alert(JSON.stringify(data))

			var tableLen =data.length;
			var str = "";str1 = [];
			for (var i = 0; i < tableLen; i++){

				str += '<a  class="csyytz_txt text-centered" href= '+data[i].managementUrl+' target="_blank">'
					+'<div class="arrowBar-box">'
					+'<div class="arrowBar"></div>'
					+'</div>'
					+ data[i].managementName+ '</a>';
				//str1[i]='<div style="width: 90%;height:50%;top: 0.1vw;left:5%">'+data[i].management_url+'</div>';
			}


			/*str += '<div class="csyytz_txt text-centered">'
					+'<div class="arrowBar-box">'
					+'<div class="arrowBar"></div>'
					+'</div>'
					+ '更多......</div>'*/
			//str1[i]+='<button class="qd-btn" onclick="wblk()">关闭</button>';

			$('#zxgl_detail').html(str);

		},
		error:function (data) {
			var resultInfo=[];
			var i=0;
			resultInfo[i++]='城运平台';resultInfo[i++]='网格化管理';resultInfo[i++]='智慧交通';resultInfo[i++]='智慧电梯';
			resultInfo[i++]='大客流监测';resultInfo[i++]='防台防汛';resultInfo[i++]='食药监管';resultInfo[i++]='餐厨废油';
			resultInfo[i++]='市容车辆';resultInfo[i++]='城管执法';resultInfo[i++]='物业管理';resultInfo[i++]='社区矫正';
			resultInfo[i++]='综治联勤';resultInfo[i++]='应急管理';resultInfo[i++]='城运通平台';resultInfo[i++]='疫情防控';
			resultInfo[i++]='垃圾分类';resultInfo[i++]='气象预警';resultInfo[i++]='水务一体化';resultInfo[i++]='更多......';

			var tableLen =resultInfo.length;
			var str = "";
			for (var i = 0; i < tableLen; i++){
				str += '<div class="csyytz_txt text-centered">'
					+'<div class="arrowBar-box">'
					+'<div class="arrowBar"></div>'
					+'</div>'
					+ resultInfo[i] + '</div>'
			}
			$('#zxgl_detail').html(str);
		}
	})
}

function getLeaderZone() {
	$.ajax({
		url:ORACLE_URL+"/viewDuty/leaderZone",
		dataType:'json',
		type:'get',
		success:function (data) {
			$('#name1').html(data.directorName);
			$('#name2').html(data.commanderName);
			$('#name3').html(data.foremanName);
			$('#name4').html(data.dutyName);
		}
	})
}


function getName(){
	var dt = getNowFormatDate();
	$.ajax({
		url : STATIC_URL+'/zonecenter/findLeaderByDate/' + dt,
		dataType : 'json',
		type : 'get',
		success : function(data) {
			$('#name').html(data[0].leaderName);
			/*$('#name1').html(data[0].directorName);
			$('#name2').html(data[0].commanderName);
			$('#name3').html(data[0].foremanName);
			$('#name4').html(data[0].dutyName);*/
		}
	})
}

function moreZhihui(){
	var str=$("#zhihuiAdd")[0].innerText
	console.log(str)
	//alert(str)
	if(str==="+"){
		zhihuiAdd()
	}else{
		zhihuiClose()
	}
}

function moreAnquan(){
	var str=$("#anquanAdd")[0].innerText
	console.log(str)
	//alert(str)
	if(str==="+"){
		anquanAdd()
	}else{
		anquanClose()
	}
}

function moreGaoxiao(){
	var str=$("#gaoxiaoAdd")[0].innerText
	console.log(str)
	//alert(str)
	if(str==="+"){
		gaoxiaoAdd()
	}else{
		gaoxiaoClose()
	}
}


function zhihuiAdd(){
	var zhihuiStr=createMore(zhihuiList)
	$("#zhihuiBox").html(zhihuiStr)
	$("#zhihuiAdd").html("^")

}

function zhihuiClose(){
	var zhihuiStr=createThree(zhihuiList)
	$("#zhihuiBox").html(zhihuiStr)
	$("#zhihuiAdd").html("+")
}

function anquanAdd(){
	var anquanStr=createMore(anquanList)
	$("#anquanBox").html(anquanStr)
	$("#anquanAdd").html("^")
}

function anquanClose(){
	var anquanStr=createThree(anquanList)
	$("#anquanBox").html(anquanStr)
	$("#anquanAdd").html("+")
}

function gaoxiaoAdd(){
	var gaoxiaoStr=createMore(gaoxiaoList)
	$("#gaoxiaoBox").html(gaoxiaoStr)
	$("#gaoxiaoAdd").html("^")

}

function gaoxiaoClose(){
	var gaoxiaoStr=createThree(gaoxiaoList)
	$("#gaoxiaoBox").html(gaoxiaoStr)
	$("#gaoxiaoAdd").html("+")
}


/*function createThree(data) {
	var str=""
	for(var i=0;i<3;i++){
		str += /!*'<div  class="csyytz_txt text-centered"  onclick=openIframe("'+data[i].url+'")>'*!/
			+'<a  class="csyytz_txt text-centered"  target="_blank" href='+data[i].url+'>'
			+'<div class="arrowBar-box">'
			+'<div class="arrowBar"></div>'
			+'</div>'
			+ data[i].name+ '</a>';
	}
	return str;
}

function createMore(data){
	var str=""
	for(var i=0;i<6;i++){
		str +=/!* '<div  class="csyytz_txt text-centered"  onclick=openIframe("'+data[i].url+'") style="cursor: pointer">'*!/
			'<a  class="csyytz_txt text-centered"  target="_blank" href='+data[i].url+'>'
			+'<div class="arrowBar-box">'
			+'<div class="arrowBar"></div>'
			+'</div>'
			+ data[i].name+ '</a>';
	}
	return str;
}*/


function createThree(data){
	var str=""
	for(var i=0;i<3;i++){
		str += '<a  class="csyytz_txt text-centered" href= '+data[i].url+' target="_blank">'
			+'<div class="arrowBar-box">'
			+'<div class="arrowBar"></div>'
			+'</div>'
			+ data[i].name+ '</ a>';
	}
	return str;
}

function createMore(data){
	var str=""
	for(var i=0;i<6;i++){
		str += '<a  class="csyytz_txt text-centered" href= '+data[i].url+' target="_blank">'
			+'<div class="arrowBar-box">'
			+'<div class="arrowBar"></div>'
			+'</div>'
			+ data[i].name+ '</ a>';
	}
	return str;
}