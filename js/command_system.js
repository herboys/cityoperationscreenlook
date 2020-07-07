function addTableList(name,arr)
{
	$(name).find('.list-box').html('');
	for(let i=0;i<arr.length;i++)
	{
		setTimeout(function(){
			$(name).find('.list-box').append('<div class="table-list"><p>'+arr[i].address+'</p><p>'+arr[i].name+'</p><p>'+arr[i].name1+'</p><p class="num">'+arr[i].num+'</p><p>'+arr[i].phone+'</p></div>')
		},200*i)

	}
}

function getDutyList(){
	var coreArr=[];var linkageArr=[];
	var dt = getNowFormatDate();
	//alert(dt)
	$.ajax({
		url : STATIC_URL+'/dutyinfo/findByDate/' + dt,
		dataType : 'json',
		type : 'get',
		async :false ,
		success : function(data) {

			var tableLen =data.length;
			var j=0,k=0;
			for (var i = 0; i < tableLen; i++){
				if((data[i].qjName==""||data[i].qjName == null)&&data[i].fzxName!="" &&data[i].fzxName!=null) {
					data[i].address=data[i].fzxName;
					coreArr[j++]=(data[i]);
				}
				if((data[i].fzxName==""||data[i].fzxName == null)&&data[i].qjName!="" &&data[i].qjName!=null) {
					data[i].address=data[i].qjName;
					linkageArr[k++]=(data[i]);
				}
			}

			addTableList1('.core-table',coreArr);
		//	addTableList1('.core-table2',coreArr);
			addTableList1('.linkage-table',linkageArr)
			//addTableList1('.event-table',linkageArr)
		}
	})
}

$(function(){
	//var STATIC_URL="http://localhost:8085";

	//alert(JSON.stringify(coreArr))
	//alert(JSON.stringify(linkageArr))
	getDutyList();
	setInterval(getDutyList,6*60*60*1000)

})

var linkageTime='';
var linkageNum=0;
var linkageMax='';

var coreTime='';
var coreNum=0;
var coreMax='';

var coreTime2='';
var coreNum2=0;
var coreMax2='';

// 实例化点标记
//获取当前时间，格式YYYY-MM-DD
function getNowFormatDate() {
	var date = new Date();
	var seperator1 = "-";
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate;
}

function getNowFormatDate1() {
	var date = new Date();
	var seperator1 = "/";
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate;
}


function addTableList1(name,arr)
{
	$(name).find('.list-box').html('');
	for(let i=0;i<arr.length;i++)
	{
		setTimeout(function(){
			$(name).find('.list-box').append('<div class="table-list"><p>'+arr[i].address+'</p><p>'+arr[i].leaderName+'</p><p>'+arr[i].foremanName+'</p>' +
				//$(name).find('.list-box').append('<div class="table-list"><p>'+arr[i].address+'</p><p>'+arr[i].leaderName+'</p><p>'+arr[i].commanderName+'</p><p>'+arr[i].foremanName+'</p>' +
				//'<p class="num">'
				'<p>'
				+arr[i].dutyName+'</p><p>'+arr[i].dutyPhone+'</p></div>')
		},200*i)

		if(name=='.linkage-table'&&i==arr.length-1&&arr.length>6)
		{
			linkageMax=arr.length;
			linkageNum=0;
			setTimeout(function(){
				var html=$(name).find('.list-box').html();
				$(name).find('.list-box').append(html);
			 	linkageInt();
				 $(name).mouseenter(function(){
				 	clearInterval(linkageTime)
				 })
				 $(name).mouseleave(function(){
			 		linkageInt();
				 })
			},200*i+200)

		}
/*	else if(name=='.core-table'&&i==arr.length-1&&arr.length>6){
			coreMax=arr.length;
			coreNum=0;
			setTimeout(function(){
				var html=$(name).find('.list-box').html();
				$(name).find('.list-box').append(html);
				dutyTableInt();
				$(name).mouseenter(function(){
					clearInterval(coreTime)
				})
				$(name).mouseleave(function(){
					dutyTableInt();
				})
			},200*i+200)
		}else if(name=='.core-table2'&&i==arr.length-1&&arr.length>6){
			coreMax2=arr.length;
			coreNum2=0;
			setTimeout(function(){
				var html=$(name).find('.list-box').html();
				$(name).find('.list-box').append(html);
				dutyTableInt2();
				$(name).mouseenter(function(){
					clearInterval(coreTime2)
				})
				$(name).mouseleave(function(){
					dutyTableInt2();
				})
			},200*i+200)
		}*/
	}
}


//值班表1
function dutyTableInt(){
	var moveT=$('.core-table').find('.table-list').eq(0).height()-8;
	//alert(moveT)
	coreTime=setInterval(() => {
			if(coreNum>=coreMax/6)
			{
				coreNum=-1;
				$('.core-table .list-box').css({top:-moveT*coreNum});
			}
			coreNum++;


			$('.core-table .list-box').animate({top:-(moveT+1)*coreNum*5.57},1000,function(){
				//if(linkageNum>=linkageMax/6)
				//{
				//	linkageNum=0;
				//	$('.linkage-table .list-box').css({top:-moveT*linkageNum});
				//	$('.linkage-table .list-box').css({top:-0});
				//}
			})
		}
		, 5000);
}

//值班表2
function dutyTableInt2(){
	//alert(coreNum2+" "+coreMax2)

	var moveT=$('.core-table2').find('.table-list').eq(0).height()-8;
	//alert(moveT)
	coreTime2=setInterval(() => {
			if(coreNum2>=coreMax2/6)
			{
				//alert(111)
				coreNum2=-1;
				$('.core-table2 .list-box').css({top:-moveT*coreNum2});
			}
			coreNum2++;


			$('.core-table2 .list-box').animate({top:-(moveT+1)*coreNum2*5.57},1000,function(){

				//if(linkageNum>=linkageMax/6)
				//{
				//	linkageNum=0;
				//	$('.linkage-table .list-box').css({top:-moveT*linkageNum});
				//	$('.linkage-table .list-box').css({top:-0});
				//}
			})
		}
		, 5000);
}

//突发事件
function linkageInt(){
	var moveT=$('.linkage-table').find('.table-list').eq(0).height()-8;
	//alert(moveT)
	linkageTime=setInterval(() => {
			if(linkageNum>=linkageMax/5)
			{
				linkageNum=-1;
				$('.linkage-table .list-box').css({top:-moveT*linkageNum});
			}
			linkageNum++;


			$('.linkage-table .list-box').animate({top:-(moveT+1)*linkageNum*5.6},1000,function(){
				//if(linkageNum>=linkageMax/6)
				//{
				//	linkageNum=0;
				//	$('.linkage-table .list-box').css({top:-moveT*linkageNum});
				//	$('.linkage-table .list-box').css({top:-0});
				//}
			})
		}
		, 5000);
}
