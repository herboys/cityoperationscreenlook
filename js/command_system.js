function addTableList(name, arr) {
	$(name).find(".list-box").html("");
	for (let i = 0; i < arr.length; i++) {
		setTimeout(function () {
			$(name)
				.find(".list-box")
				.append(
					'<div class="table-list"><p>' +
					arr[i].address +
					"</p><p>" +
					arr[i].name +
					"</p><p>" +
					arr[i].name1 +
					'</p><p class="num">' +
					arr[i].num +
					"</p><p>" +
					arr[i].phone +
					"</p></div>"
				);
		}, 200 * i);
	}
}

function getDutyListReal() {
	var coreArr = [];
	var linkageArr = [];

	//alert(321)
	$.ajax({
		url: ORACLE_URL + "/viewDuty/dutyList",
		dataType: "json",
		type: "get",
		async: true,
		success: function (data) {
			//alert(123)
			var centerDuty = data.centerDutyList;
			var departmentDuty = data.departmentDutyList;
			for (var i = 0; i < centerDuty.length; i++) {
				for (var key in centerDuty[i]) {
					if (centerDuty[i][key] == null) centerDuty[i][key] = "--";
				}
				var obj = new Object();
				if (centerDuty[i].area === "嘉定新城（马陆镇）") {
					centerDuty[i].area = "嘉定新城(马陆镇)";
				}
				obj.address = centerDuty[i].area;
				obj.leaderName = centerDuty[i].leader;
				obj.dutyName = centerDuty[i].dutyOparetor;
				obj.foremanName = centerDuty[i].leaderPhoneNum;
				obj.dutyPhone = centerDuty[i].operatorPhoneNum;
				coreArr[i] = obj;
			}
			for (var i = 0; i < departmentDuty.length; i++) {
				for (var key in departmentDuty[i]) {
					if (departmentDuty[i][key] == null) departmentDuty[i][key] = "--";
				}
				var obj = new Object();
				obj.address = departmentDuty[i].area;
				obj.leaderName = departmentDuty[i].leader;
				obj.dutyName = departmentDuty[i].dutyOparetor;
				obj.foremanName = departmentDuty[i].leaderPhoneNum;
				obj.dutyPhone = departmentDuty[i].operatorPhoneNum;
				linkageArr[i] = obj;
			}

			addTableList1(".core-table", coreArr);
				// addTableList1('.core-table2',coreArr);
			addTableList1(".linkage-table", linkageArr);
		},
		error: function () {
			alert("error");
		},
	});
}

function getDutyList() {
	var coreArr = [];
	// var linkageArr=[];
	var linkageArr = [{
			address: "部门1",
			leaderName: "zs1",
			dutyName: "zs1",
		},
		{
			address: "部门1",
			leaderName: "zs2",
			dutyName: "zs2",
		},
		{
			address: "部门1",
			leaderName: "zs3",
			dutyName: "zs3",
		},
		{
			address: "部门1",
			leaderName: "zs4",
			dutyName: "zs4",
		},
		{
			address: "部门1",
			leaderName: "zs5",
			dutyName: "zs5",
		},
		{
			address: "部门1",
			leaderName: "zs6",
			dutyName: "zs6",
		},
		{
			address: "部门1",
			leaderName: "zs7",
			dutyName: "zs7",
		},
		{
			address: "部门1",
			leaderName: "zs8",
			dutyName: "zs8",
		},
		{
			address: "部门1",
			leaderName: "zs9",
			dutyName: "zs9",
		},
		{
			address: "部门1",
			leaderName: "zs10",
			dutyName: "zs10",
		},
		{
			address: "部门1",
			leaderName: "zs11",
			dutyName: "zs11",
		},
		{
			address: "部门1",
			leaderName: "zs12",
			dutyName: "zs12",
		},

	];
	coreArr = linkageArr;
	var linkageArrScroll = [
		{
			date: "8月1日",
			time: "14时30分",
			street: "安亭镇",
			address: "翔方公路2368号",
			type: "道路交通",
			content: "一辆厢式货车与一辆摩托车发生碰撞，骑车人死亡（1人）",
		},

		{
			date: "8月2日",
			time: "12时38分",
			street: "工业区",
			address: "叶城路沪宜公路口",
			type: "道路交通",
			content: "一辆货车与一辆摩托车发生碰撞，骑车人死亡（1人）",
		},
		{
			date: "8月2日",
			time: "19时",
			street: "南翔镇",
			address: "蕴北路1755弄",
			type: "非正常死亡",
			content: "一名儿童在车间内被发现压在成捆衣服下，窒息死亡（1人）",
		},
		{
			date: "8月3日",
			time: "11时16分",
			street: "江桥镇",
			address: "黄家花园路靖远路口",
			type: "非正常死亡",
			content: "两名工人在检测污水管道时跌入窨井内死亡（2人）",
		},
		{
			date: "8月4日",
			time: "8时4分",
			street: "G15高速",
			address: "G15高速由南向北127.4K处",
			type: "道路交通",
			content: "一辆轻型箱式货车与一辆重型货车发生碰撞，轻型箱式货车副驾驶死亡（1人）",
		},
		{
			date: "6月27日",
			time: "19时07分许",
			street: "工业区",
			address: "工业区朱戴路50弄136号",
			type: "事件类型",
			content: "一名12岁男童自缢身亡。",
		},
		{
			date: "6月30日",
			time: "13时20分许",
			street: "工业区",
			address: "工业区城北路、汇旺路路口",
			type: "事件类型",
			content: "一辆中型货车与一辆电动自行车发生碰撞，致电动自行车骑车人死亡。",
		},
		{
			date: "7月3日",
			time: "8时55分许",
			street: "徐行镇",
			address: "徐行镇宝钱公路、前曹公路路口",
			type: "事件类型",
			content: "一辆大型厢式货车与一辆电动自行车发生碰撞，致电动自行车骑车人死亡。",
		},
		{
			date: "6月27日",
			time: "19时07分许",
			street: "工业区",
			address: "工业区朱戴路50弄136号",
			type: "事件类型",
			content: "一名12岁男童自缢身亡。",
		},
		{
			date: "6月30日",
			time: "13时20分许",
			street: "工业区",
			address: "工业区城北路、汇旺路路口",
			type: "事件类型",
			content: "一辆中型货车与一辆电动自行车发生碰撞，致电动自行车骑车人死亡。",
		},
		{
			date: "7月3日",
			time: "8时55分许",
			street: "徐行镇",
			address: "徐行镇宝钱公路、前曹公路路口",
			type: "事件类型",
			content: "一辆大型厢式货车与一辆电动自行车发生碰撞，致电动自行车骑车人死亡。",
		},
	
	
		// time street address content
	];
	//addTableList1('.core-table', coreArr);
	//addTableList1('.linkage-table', linkageArr)
	addTableList2(".linkage-scroll-table", linkageArrScroll);
	addTableList3(".linkage-table2", linkageArrScroll);
}

$(function () {
	//var STATIC_URL="http://localhost:8085";

	//alert(JSON.stringify(coreArr))
	//alert(JSON.stringify(linkageArr))
	getDutyList();
	 getDutyListReal();
	 setInterval(getDutyListReal, 6 * 60 * 60 * 1000)
});

var linkageTime = "";
var linkageScrollTime = "";
var linkageNum = 0;
var linkageNumScroll = 0;
var linkageMax = "";
var linkScrollMax = "";

var coreTime = "";
var coreNum = 0;
var coreMax = "";

var coreTime2 = "";
var coreNum2 = 0;
var coreMax2 = "";

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

function addTableList1(name, arr) {
	$(name).find(".list-box").html("");
	for (let i = 0; i < arr.length; i++) {
		setTimeout(function () {
			$(name)
				.find(".list-box")
				.append(
					'<div class="table-list"><p>' +
					arr[i].address +
					"</p><p>" +
					arr[i].leaderName +
					"</p><p>" +
					arr[i].foremanName +
					"</p>" +
					//$(name).find('.list-box').append('<div class="table-list"><p>'+arr[i].address+'</p><p>'+arr[i].leaderName+'</p><p>'+arr[i].commanderName+'</p><p>'+arr[i].foremanName+'</p>' +
					//'<p class="num">'
					"<p>" +
					arr[i].dutyName +
					"</p><p>" +
					arr[i].dutyPhone +
					"</p></div>"
				);
		}, 200 * i);

		if (name == ".linkage-table" && i == arr.length - 1 && arr.length > 6) {
			linkageMax = arr.length;
			linkageNum = 0;
			setTimeout(function () {
				var html = $(name).find(".list-box").html();
				$(name).find(".list-box").append(html);
				linkageInt();
				$(name).mouseenter(function () {
					clearInterval(linkageTime);
				});
				$(name).mouseleave(function () {
					linkageInt();
				});
			}, 200 * i + 200);
		}
	}
}
//  工单table滚动
function addTableList3(name, arr) {
	$(name).find(".list-box").html("");
	for (let i = 0; i < arr.length; i++) {
		setTimeout(function () {
			$(name)
				.find(".list-box")
				.append(
					'<div class="table-list"><p style="width: 8%;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem">' +
					arr[i].date +
					'</p><p style="width: 10%;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem">' +
					arr[i].time +
					'</p><p style="width: 15%;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem">' +
					arr[i].street +
					'</p><p style="width: 20%; overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem;padding-left: 0.8rem;">' +
					arr[i].address +
					'</p><p style="width: 15%; overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem;padding-left: 0rem;">' +
					arr[i].type +
					'</p><p style="width: 26%; overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem;padding-left: 0.8rem;"  title="' +
					arr[i].content +
					'">' +
					arr[i].content +
					"</p></div>"
				);
		}, 200 * i);

		if (name == ".linkage-table2" && i == arr.length - 1 && arr.length > 6) {
			linkageMax = arr.length;
			linkageNum = 0;
			setTimeout(function () {
				var html = $(name).find(".list-box").html();
				$(name).find(".list-box").append(html);
				linkageInt2();
				$(name).mouseenter(function () {
					clearInterval(linkageTime);
				});
				$(name).mouseleave(function () {
					linkageInt2();
				});
			}, 200 * i + 200);
		}
	}
}

function addTableList2(name, arr) {
	$(name).find(".list-box").html("");
	for (let i = 0; i < arr.length; i++) {
		setTimeout(function () {
			$(name)
				.find(".list-box")
				.append(
					'<div class="table-list"><p style="width: 8rem;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem">' +
					arr[i].date +
					'</p><p style="width: 8rem;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem">' +
					arr[i].time +
					'</p><p style="width: 10rem;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem">' +
					arr[i].street +
					'</p><p style="width: 15rem; overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem;padding-left: 0.8rem;">' +
					arr[i].address +
					'</p><p style="width: 8rem; overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem;padding-left: 0rem;">' +
					arr[i].type +
					'</p><p style="width: 10rem; overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem;padding-left: 0.8rem;"  title="' +
					arr[i].content +
					'">' +
					arr[i].content +
					"</p></div>"
				);
		}, 200 * i);
		if ( name == ".linkage-scroll-table" && i == arr.length - 1 && 	arr.length > 3) {
			linkScrollMax = arr.length;   //6
			linkageNumScroll = 0;
			setTimeout(function () {
			//	var html = $(name).find(".list-box").html();
			//	$(name).find(".list-box").append(html);
				linkageIntScroll();
				$(name).mouseenter(function () {
					clearInterval(linkageScrollTime);
				});
				$(name).mouseleave(function () {
					linkageIntScroll();
				});
			}, 200 * i + 200);
		}
	}
}

// 部门table滚动
function linkageInt() {
	var moveT = $(".linkage-table").find(".table-list").eq(0).height() - 8;
	//alert(moveT)
	// alert(moveT) //30
	linkageTime = setInterval(() => {
		if (linkageNum >= linkageMax / 5) {
			linkageNum = -1;
			$(".linkage-table .list-box").css({
				top: -moveT * linkageNum
			});
		}
		linkageNum++;

		$(".linkage-table .list-box").animate({
				top: -(moveT + 1) * linkageNum * 5.82,
			},
			1000,
			// function () {
			// 	if(linkageNum>=linkageMax/6)
			// 	{
			// 		linkageNum=0;
			// 		$('.linkage-table .list-box').css({top:-moveT*linkageNum});
			// 		$('.linkage-table .list-box').css({top:-0});
			// 	}
			// }
		);
	}, 5000);
}
// 工单table滚动
function linkageInt2() {
	var moveT = $(".linkage-table2").find(".table-list").eq(0).height() - 8;
	// alert(moveT) //30
	linkageTime = setInterval(() => {
		if (linkageNum >= linkageMax / 5) {
			linkageNum = -1;
			$(".linkage-table2 .list-box").css({
				top: -moveT * linkageNum
			});
		}
		linkageNum++;

		$(".linkage-table2 .list-box").animate({
				top: -(moveT + 1) * linkageNum * 5.82,
			},
			1000,
			// function () {
			// 	if(linkageNum>=linkageMax/6)
			// 	{
			// 		linkageNum=0;
			// 		$('.linkage-table .list-box').css({top:-moveT*linkageNum});
			// 		$('.linkage-table .list-box').css({top:-0});
			// 	}
			// }
		);
	}, 5000);
}
// 突发事件table滚动
function linkageIntScroll() {
	var moveT = $(".linkage-scroll-table").find(".table-list").eq(0).height() -11;

	//alert("linkScrollMax "+linkScrollMax)
	// alert(moveT)
	linkageScrollTime = setInterval(() => {
		if (linkageNumScroll >= linkScrollMax/3-1) {
		//	alert("aaa "+moveT)
			linkageNumScroll = -1;
			$(".linkage-scroll-table .list-box").css({
				top: -moveT * linkageNumScroll
			});
		}
		linkageNumScroll++;
		//alert(linkageNumScroll)
		//alert(moveT)
		$(".linkage-scroll-table .list-box").animate({
				top: -(moveT + 1) * linkageNumScroll * 6.05,
			},
			1000,
			// function () {
			// 	if(linkageNum>=linkageMax/6)
			// 	{
			// 		linkageNum=0;
			// 		$('.linkage-table .list-box').css({top:-moveT*linkageNum});
			// 		$('.linkage-table .list-box').css({top:-0});
			// 	}
			// }
		);
	}, 5000);
}
