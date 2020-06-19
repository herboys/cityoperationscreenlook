$(document).ready(function(){
	getZxgl();
})

function setFont(){
	var size=$(window).width()*0.005;
	if(size<12)
	{
		size=12;
	}
	$('html').css({'font-size':size+'px'})
}

function getZxgl(){
	var resultInfo=[];
	var i=0;
	resultInfo[i++]='城运平台';resultInfo[i++]='网络化管理';resultInfo[i++]='智慧交通';resultInfo[i++]='智慧电梯';
	resultInfo[i++]='大客流检测';resultInfo[i++]='防台防汛';resultInfo[i++]='食药监管';resultInfo[i++]='餐厨废油';
	resultInfo[i++]='市容车辆';resultInfo[i++]='城管执法';resultInfo[i++]='物业管理';resultInfo[i++]='社区矫正';
	resultInfo[i++]='综治联勤';resultInfo[i++]='应急管理';resultInfo[i++]='城运通平台';resultInfo[i++]='疫情防控';
	resultInfo[i++]='垃圾分类';resultInfo[i++]='气象预警';resultInfo[i++]='水务一体化';

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
	/*var str1 = "";
	for (var i = 16; i < tableLen; i++) {
		str1 += '<div class="csyytz_txt text-centered">'
		+'<div class="arrowBar-box">'
		+'<div class="arrowBar"></div>'
		+'</div>'	
			+ resultInfo[i] + '</div>'
	}
	$('#zxgl_detail1').html(str1);*/

}