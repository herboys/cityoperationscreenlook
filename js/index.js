
$(document).ready(function(){
	getZxgl();
	getName();
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
			var tableLen =data.length;
			var str = "";str1 = [];
			for (var i = 0; i < tableLen; i++){
				str += '<a  class="clear" href= '+data[i].managementUrl+' target="_blank">'
					+ '<div class="csyytz_txt text-centered">'
					+'<div class="arrowBar-box">'
					+'<div class="arrowBar"></div>'
					+'</div>'
					+ data[i].managementName+ '</div></a>';
				//str1[i]='<div style="width: 90%;height:50%;top: 0.1vw;left:5%">'+data[i].management_url+'</div>';
			}
			str += '<div class="csyytz_txt text-centered">'
					+'<div class="arrowBar-box">'
					+'<div class="arrowBar"></div>'
					+'</div>'
					+ '更多......</div>'
			//str1[i]+='<button class="qd-btn" onclick="wblk()">关闭</button>';

			$('#zxgl_detail').html(str);
			//$('.weblinks').html(str1[i]);
			/*var str1 = "";
            for (var i = 16; i < tableLen; i++) {
                str1 += '<div class="csyytz_txt text-centered">'
                +'<div class="arrowBar-box">'
                +'<div class="arrowBar"></div>'
                +'</div>'
                    + resultInfo[i] + '</div>'
            }
            $('#zxgl_detail1').html(str1);*/
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

function getName(){
	var time=new Date();
	$.ajax({
		url : STATIC_URL+'/zonecenter/findAll',
		dataType : 'json',
		type : 'get',
		success : function(data) {
          for(var i = 0; i < data.length; i++) {
             // alert("nian"+parseInt(time.getFullYear())+"月"+(parseInt(time.getMonth())+1)+"日"+parseInt(time.getDate()))
			 // alert("nia"+data[i].dutyDate.substring(0,4)+"月"+data[i].dutyDate.substring(5,7)+"日"+data[i].dutyDate.substring(8,10))
          	if(parseInt(time.getFullYear())==data[i].dutyDate.substring(0,4)&&(parseInt(time.getMonth())+1)==parseInt(data[i].dutyDate.substring(5,7))&&parseInt(time.getDate())==data[i].dutyDate.substring(8,10)){
			$('#name').html(data[i].leaderName);
			$('#name1').html(data[i].directorName);
			$('#name2').html(data[i].commanderName);
			$('#name3').html(data[i].foremanName);
			$('#name4').html(data[i].dutyName);
		}
		}
		}
	})
}

