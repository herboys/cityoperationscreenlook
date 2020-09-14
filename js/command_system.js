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

var streetUrl=new Object();
var streetSelfUrl=new Object();
streetSelfUrl["嘉定镇街道"]="http://211.95.105.68:8185/sh/user/socialBigScreen"
streetSelfUrl["嘉定新城(马陆镇)"]="http://12.118.166.24:8914/oldMalu/#/gaikuang"
function getDutyListReal() {
	var coreArr = [];
	var linkageArr = [];

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
				if(departmentDuty[i].area==="区建委"){
					departmentDuty[i].area="建管委"
				}
				var obj = new Object();
				obj.address = departmentDuty[i].area;
				obj.leaderName = departmentDuty[i].leader;
				obj.dutyName = departmentDuty[i].dutyOparetor;
				obj.foremanName = departmentDuty[i].leaderPhoneNum;
				obj.dutyPhone = departmentDuty[i].operatorPhoneNum;
				linkageArr[i] = obj;
			}

			$.ajax({
				url:STATIC_URL+"/jdcytownurl/findAll",
				type:"get",
				async: true,
				success:function (data) {

					for(var i=0;i<data.length;i++){
						if (data[i].streetName === "嘉定新城（马陆镇）") {
							data[i].streetName = "嘉定新城(马陆镇)";
						}
						streetUrl[data[i].streetName]=data[i].url
					}
					addTableList1(".core-table", coreArr);
				}
			})

			addTableList1(".linkage-table", linkageArr);
		},
		error: function () {
			alert("error");
		},
	});
}

function getDutyList() {

	var linkageArrScroll =[]

	//addTableList3(".linkage-table2", linkageArrScroll22);
	$.ajax({
		url:STATIC_URL+"/jdcyemergency/findTopByNumber/9",
		type:"get",
		async:true,
		success:function (data) {
			//"id":18,"date":"8月9日","time":"9时26分","streetName":"安亭镇","addr":"安亭老街618号","type":"安全生产","description":"四名男子在焊接作业中，气体钢瓶发生爆燃，2人死亡2人受伤"
			for(var i=0;i<data.length;i++){
				var obj=new Object()
				obj.date=data[i].date
				obj.time=data[i].time
				obj.street=data[i].streetName
				obj.address=data[i].addr
				obj.type=data[i].type
				obj.content=data[i].description
				linkageArrScroll[i]=obj
			}
			addTableList2(".linkage-scroll-table", linkageArrScroll);
			
		}
	})



}

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

function toFormatDate(str) {

	var strs=str.split(" ")

	str=strs[0]
 	var times=str.split("-")


	var seperator1 = "-";
	var year = times[0];
	var month = times[1];
	var strDate = times[2];

	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate;
}

function  getHourFromTime(str) {
	str=str.split(" ")[1];
	return str.split(":")[0];
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

	var index=0;
	for (var i = 0; i < arr.length; i++) {

		if(name===".core-table"){

			if(arr[i].address=="嘉定镇街道" || arr[i].address=="嘉定新城(马陆镇)"){
				addStreetSelf(name,arr[i],i)
			}else {
				addStreet(name,arr[i],i)
			}

		}else{
			setTimeout(function () {
				$(name)
					.find(".list-box")
					.append(
						'<div class="table-list"><p>' +
						arr[index].address +
						"</p><p>" +
						arr[index].leaderName +
						"</p><p>" +
						arr[index].foremanName +
						"</p>" +
						//$(name).find('.list-box').append('<div class="table-list"><p>'+arr[i].address+'</p><p>'+arr[i].leaderName+'</p><p>'+arr[i].commanderName+'</p><p>'+arr[i].foremanName+'</p>' +
						//'<p class="num">'
						"<p>" +
						arr[index].dutyName +
						"</p><p>" +
						arr[index].dutyPhone +
						"</p></div>"
					);
				index++;
			}, 200 * i);
		}



		if (name == ".linkage-table" && i == arr.length - 1 && arr.length > 6) {
			linkageMax = arr.length;
			linkageNum = 0;
			setTimeout(function () {
				var html = $(name).find(".list-box").html();
				$(name).find(".list-box").append(html);
				//linkageInt();
				$(name).mouseenter(function () {
					//clearInterval(linkageTime);
					dutyFlag=false
				});
				$(name).mouseleave(function () {
				//	linkageInt();
					dutyFlag=true;
				});
			}, 200 * i + 200);
		}
	}
	//alert(i)
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
				var html = $(name).find(".list-box").html();
				$(name).find(".list-box").append(html);
				//linkageIntScroll();
				$(name).mouseenter(function () {
					//clearInterval(linkageScrollTime);
					emergencyFlag=false;
				});
				$(name).mouseleave(function () {
					//linkageIntScroll();
					emergencyFlag=true;
				});
			}, 200 * i + 200);
		}
	}
}

function addStreetSelf(name,obj,i){
	setTimeout(function () {
		//alert(arr[index].address)
		$(name)
			.find(".list-box")
			.append(
				'<div class="table-list"><p onclick=openIframe("'+streetSelfUrl[obj.address]+'") style="cursor: pointer">' +
				'<img src="images/point11_1.png" style="display: inline-block!important;width: 1.1rem;height: 1.1rem;vertical-align: middle;margin-left: -0.5rem"> '+
				obj.address +
				'</p><p>' +
				obj.leaderName +
				"</p><p>" +
				obj.foremanName +
				"</p>" +

				"<p>" +
				obj.dutyName +
				"</p><p>" +
				obj.dutyPhone +
				"</p></div>"
			);
		index++;
	}, 200 * i);
}
function addStreet(name,obj,i){
	setTimeout(function () {
		//alert(arr[index].address)
		$(name)
			.find(".list-box")
			.append(
				'<div class="table-list"><p onclick=openIframe("'+streetUrl[obj.address]+'") style="cursor: pointer">' +
				'<img src="images/point1.png" style="display: inline-block!important;width: 1.2rem;height: 1.2rem;vertical-align: middle;margin-left: -0.5rem"> '+
				obj.address +
				'</p><p>' +
				obj.leaderName +
				"</p><p>" +
				obj.foremanName +
				"</p>" +

				"<p>" +
				obj.dutyName +
				"</p><p>" +
				obj.dutyPhone +
				"</p></div>"
			);
		index++;
	}, 200 * i);
}

// 部门table滚动
function linkageInt() {
	var moveT = $(".linkage-table").find(".table-list").eq(0).height() - 8;
	linkageTime = setInterval(() => {
		if (linkageNum >= linkageMax / 5) {
			linkageNum = -1;
			$(".linkage-table .list-box").css({
				top: -moveT * linkageNum
			});
		}
		linkageNum++;

		$(".linkage-table .list-box").stop(true, true).animate({
				top: -(moveT + 1) * linkageNum * 5.6,
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
	linkageScrollTime = setInterval(() => {
		if (linkageNumScroll >= linkScrollMax/2) {
		//	alert("aaa "+moveT)
			linkageNumScroll = -1;
			$(".linkage-scroll-table .list-box").css({
				top: -moveT * linkageNumScroll
			});
		}
		linkageNumScroll++;
		//alert(linkageNumScroll)
		//alert(moveT)
		$(".linkage-scroll-table .list-box").stop(true, true).animate({
				top: -(moveT + 1) * linkageNumScroll * 5.75,

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

var linkYLNum=0;
var linkYLMax=0;
var linkageYLTime;
//  养老工单table滚动
function addTableList3(name, arr) {
	$(name).find(".list-box").html("");
	for (let i = 0; i < arr.length; i++) {
		setTimeout(function () {
			$(name)
				.find(".list-box")
				.append(
					'<div class="table-list"><p style="width: 12%;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem">' +
					arr[i].date +
					'</p><p style="width: 10%;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem">' +
					arr[i].time +
					'</p><p style="width: 15%;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem">' +
					arr[i].street +
					'</p><p style="width: 16%; overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem;padding-left: 0.8rem;">' +
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
			linkYLMax = arr.length;
			linkYLNum = 0;
			setTimeout(function () {
				var html = $(name).find(".list-box").html();
				$(name).find(".list-box").append(html);
				linkageInt2();
				$(name).mouseenter(function () {
					clearInterval(linkageYLTime);
				});
				$(name).mouseleave(function () {
					linkageInt2();
				});
			}, 200 * i + 200);
		}
	}
}



// 养老工单table滚动
function linkageInt2() {
	var moveT = $(".linkage-table2").find(".table-list").eq(0).height() + 14;
	// alert(moveT+ 200)
	linkageYLTime = setInterval(() => {
		if (linkYLNum >= linkYLMax / 6) {
			linkYLNum = -1;
			$(".linkage-table2 .list-box").css({
				top: -moveT * linkYLNum
			});
		}
		linkYLNum++;

		$(".linkage-table2 .list-box").animate({
				top: -(moveT + 1) * linkYLNum * 5.82,
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