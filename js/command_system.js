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

function getDutyListReal(){
	var coreArr=[];var linkageArr=[];
	var dt = getNowFormatDate();
	$.ajax({
		url:ORACLE_URL+"/viewDuty/dutyList",
		dataType: "json",
		type:'get',
		async: true,
		success:function (data) {
			var centerDuty=data.centerDutyList
			var departmentDuty=data.departmentDutyList
			for(var i=0;i<centerDuty.length;i++){
				for(var key in centerDuty[i]){
					if(centerDuty[i][key]==null)
						centerDuty[i][key]="--"
				}
				var obj=new Object()
				if(centerDuty[i].area==="嘉定新城（马陆镇）"){
					centerDuty[i].area="嘉定新城(马陆镇)"
				}
				obj.address=centerDuty[i].area
				obj.leaderName=centerDuty[i].leader
				obj.dutyName=centerDuty[i].dutyOparetor
				obj.foremanName=centerDuty[i].leaderPhoneNum
				obj.dutyPhone=centerDuty[i].operatorPhoneNum
				coreArr[i]=obj
			}
			for(var i=0;i<departmentDuty.length;i++){
				for(var key in departmentDuty[i]){
					if(departmentDuty[i][key]==null)
						departmentDuty[i][key]="--"
				}
				var obj=new Object()
				obj.address=departmentDuty[i].area
				obj.leaderName=departmentDuty[i].leader
				obj.dutyName=departmentDuty[i].dutyOparetor
				obj.foremanName=departmentDuty[i].leaderPhoneNum
				obj.dutyPhone=departmentDuty[i].operatorPhoneNum
				linkageArr[i]=obj
			}

			addTableList1('.core-table',coreArr);
			//	addTableList1('.core-table2',coreArr);
			addTableList1('.linkage-table',linkageArr)
		}
	})
}


function getDutyList(){
	var coreArr=[];
	// var linkageArr=[];
	var linkageArr= [
		{address:'部门1',leaderName:'zs1',dutyName:'zs1'},
		{address:'部门1',leaderName:'zs2',dutyName:'zs2'},
		{address:'部门1',leaderName:'zs3',dutyName:'zs3'},
		{address:'部门1',leaderName:'zs4',dutyName:'zs4'},
		{address:'部门1',leaderName:'zs5',dutyName:'zs5'},
		{address:'部门1',leaderName:'zs6',dutyName:'zs6'},
		{address:'部门1',leaderName:'zs7',dutyName:'zs7'},
		{address:'部门1',leaderName:'zs8',dutyName:'zs8'},
		{address:'部门1',leaderName:'zs9',dutyName:'zs9'},
		{address:'部门1',leaderName:'zs', dutyName:'zs'},
		{address:'部门1',leaderName:'zs', dutyName:'zs'},
		{address:'部门1',leaderName:'zs', dutyName:'zs'},
		{address:'部门1',leaderName:'zs', dutyName:'zs'},
	]
	var linkageArrScroll= [
		{time:'2020-7-22',street:'嘉定镇街道',address:'嘉定区塔城路885号',content:'上海市嘉定区人民政府嘉定镇街道办事处'},
		{time:'2020-7-22',street:'真新街道',address:'嘉定区塔城路885号',content:'上海市嘉定区人民政府街道办事处'},
		{time:'2020-7-22',street:'新成路街道',address:'嘉定区塔城路885号',content:'上海市嘉定区人民政府街道办事处'},
		{time:'2020-7-22',street:'南翔镇',address:'嘉定区塔城路885号',content:'上海市嘉定区人民政府街道办事处'},
		{time:'2020-7-22',street:'马陆镇',address:'嘉定区塔城路885号',content:'上海市嘉定区人民政府街道办事处'},
		{time:'2020-7-22',street:'华亭镇',address:'嘉定区塔城路885号',content:'上海市嘉定区人民政府街道办事处'},

		// time street address content
	
	]
	var dt = getNowFormatDate();
	addTableList1('.core-table',coreArr);
		addTableList1('.linkage-table',linkageArr)
		addTableList2('.linkage-scroll-table',linkageArrScroll)
}

$(function(){
	//var STATIC_URL="http://localhost:8085";

	//alert(JSON.stringify(coreArr))
	//alert(JSON.stringify(linkageArr))
	getDutyList();
	//getDutyListReal();
	setInterval(getDutyListReal,6*60*60*1000)

})

var linkageTime='';
var linkageScrollTime='';
var linkageNum=0;
var linkageNumScroll=0;
var linkageMax='';
var linkScrollMax='';

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
	}
}
function addTableList2(name,arr)
{
	$(name).find('.list-box').html('');
	for(let i=0;i<arr.length;i++)
	{
		setTimeout(function(){
			$(name).find('.list-box').append('<div class="table-list"><p style="width: 8rem;">'+arr[i].time+'</p><p style="width: 12rem;">'+arr[i].street+'</p><p style="width: 18rem;">'+arr[i].address+'</p>' +
				'<p style="width: 21rem;">'+arr[i].content+'</p></div>')
		},200*i)
	 if(name=='.linkage-scroll-table'&&i==arr.length-1&&arr.length>3)
		{
			console.log(arr, 'arr');
			linkScrollMax=arr.length
			linkageNumScroll=0;
			setTimeout(function(){
				var html=$(name).find('.list-box').html();
				$(name).find('.list-box').append(html);
				linkageIntScroll();
				 $(name).mouseenter(function(){
				 	clearInterval(linkageScrollTime)
				 })
				 $(name).mouseleave(function(){
					 linkageIntScroll();
				 })
			},200*i+200)

		}
	}
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


			$('.linkage-table .list-box').animate({top:-(moveT+1)*linkageNum*5.82},1000,function(){
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
function linkageIntScroll(){
	var moveT=$('.linkage-scroll-table').find('.table-list').eq(0).height()-8;
	//alert(moveT)
	linkageScrollTime=setInterval(() => {
			if(linkageNumScroll>=linkScrollMax/3)
			{
				linkageNumScroll=-1;
				$('.linkage-scroll-table .list-box').css({top:-moveT*linkageNumScroll});
			}
			linkageNumScroll++;

			$('.linkage-scroll-table .list-box').animate({top:-(moveT+1)*linkageNumScroll*2.82},1000,function(){
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