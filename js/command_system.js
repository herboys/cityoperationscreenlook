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
streetSelfUrl["嘉定镇街道"]=""
streetSelfUrl["嘉定新城（马陆镇）"]="http://211.95.105.68:8185/sh/user/socialBigScreen"
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

			//addTableList1(".core-table", coreArr);
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
			address: "工业区",
			leaderName: "zs1",
			dutyName: "zs1",
			foremanName:"aaa",
			dutyPhone:"11111"
		},
		{
			address: "江桥镇",
			leaderName: "zs2",
			dutyName: "zs2",
			foremanName:"aaa",
			dutyPhone:"11111"
		},
		{
			address: "外冈镇",
			leaderName: "zs3",
			dutyName: "zs3",
			foremanName:"aaa",
			dutyPhone:"11111"
		},
		{
			address: "华亭镇",
			leaderName: "zs4",
			dutyName: "zs4",
			foremanName:"aaa",
			dutyPhone:"11111"
		},
		{
			address: "徐行镇",
			leaderName: "zs5",
			dutyName: "zs5",
			foremanName:"aaa",
			dutyPhone:"11111"
		},
		{
			address: "嘉定新城(马陆镇)",
			leaderName: "zs6",
			dutyName: "zs6",
			foremanName:"aaa",
			dutyPhone:"11111"
		},
		{
			address: "安亭镇",
			leaderName: "zs7",
			dutyName: "zs7",
			foremanName:"aaa",
			dutyPhone:"11111"
		},
		{
			address: "南翔镇",
			leaderName: "zs8",
			dutyName: "zs8",
			foremanName:"aaa",
			dutyPhone:"11111"
		},
		{
			address: "嘉定镇街道",
			leaderName: "zs9",
			dutyName: "zs9",
			foremanName:"aaa",
			dutyPhone:"11111"
		},
		{
			address: "菊园新区",
			leaderName: "zs10",
			dutyName: "zs10",
			foremanName:"aaa",
			dutyPhone:"11111"
		},
		{
			address: "真新街道",
			leaderName: "zs11",
			dutyName: "zs11",
			foremanName:"aaa",
			dutyPhone:"11111"
		},
		{
			address: "新成路街道",
			leaderName: "zs12",
			dutyName: "zs12",
			foremanName:"aaa",
			dutyPhone:"11111"
		},

	];
	coreArr = linkageArr;
	var linkageArrScroll =[]
	var linkageArrScroll22 = [
		{
			date: "8月1日",
			time: "14时30分",
			street: "菊园新区",
			address: "翔方公路2368号",
			type: "养生讲座",
			content: "开展了一堂生动的养生讲座",
		},

		{
			date: "8月2日",
			time: "12时38分",
			street: "工业区",
			address: "叶城路沪宜公路口",
			type: "关怀慰问",
			content: "红十字会开展尊老爱老慰问活动",
		},
		{
			date: "8月2日",
			time: "19时",
			street: "南翔镇",
			address: "蕴北路1755弄",
			type: "关怀慰问",
			content: "领导走访慰问高龄老人",
		},
		{
			date: "8月3日",
			time: "11时16分",
			street: "江桥镇",
			address: "黄家花园路靖远路口",
			type: "访惠聚",
			content: "900多人齐聚一堂，向老年朋友们致以最诚挚的问候",
		},
		{
			date: "8月7日",
			time: "13时20分许",
			street: "南翔镇",
			address: "蕴北路1755弄",
			type: "关怀慰问",
			content: "组织辖区56位老人前往植物园参观精品花展",
		},
		{
			date: "8月7日",
			time: "13时20分许",
			street: "南翔镇",
			address: "蕴北路1755弄",
			type: "茶话会",
			content: "畅谈祖国61年的辉煌成就，畅谈社会的和谐进步",
		},
		{
			date: "8月10日",
			time: "19时07分许",
			street: "菊园新区",
			address: "翔方公路2368号",
			type: "关怀慰问",
			content: "开展“幸福步步高”登山活动",
		},
		{
			date: "8月10日",
			time: "13时20分许",
			street: "菊园新区",
			address: "翔方公路2368号",
			type: "关怀慰问",
			content: "为老人送上了牛奶和慰问金",
		},
		{
			date: "8月12日",
			time: "13时20分许",
			street: "南翔镇",
			address: "蕴北路1755弄",
			type: "关怀慰问",
			content: "为老人送去节日食品，开展联欢活动",
		},
		
		{
			date: "8月16日",
			time: "8时55分许",
			street: "徐行镇",
			address: "徐行镇宝钱公路、前曹公路路口",
			type: "关怀慰问",
			content: "开展一次心理辅导",
		},
		{
			date: "8月17日",
			time: "19时07分许",
			street: "工业区",
			address: "工业区朱戴路50弄136号",
			type: "上门关怀",
			content: "为老人打扫清洁",
		},
		{
			date: "8月22日",
			time: "13时20分许",
			street: "南翔镇",
			address: "蕴北路1755弄",
			type: "关怀慰问",
			content: "组织辖区56位老人前往植物园参观精品花展",
		},
		{
			date: "8月22日",
			time: "13时20分许",
			street: "菊园新区",
			address: "翔方公路2368号",
			type: "关怀慰问",
			content: "为老年人提供健康体检、保健咨询和常见病治疗",
		},
		{
			date: "8月23日",
			time: "13时20分许",
			street: "南翔镇",
			address: "蕴北路1755弄",
			type: "关怀慰问",
			content: "开展形式多样的节日民俗活动和文化娱乐活动，活跃老年人的节日生活",
		},	{
			date: "8月26日",
			time: "13时20分许",
			street: "菊园新区",
			address: "翔方公路2368号",
			type: "关怀慰问",
			content: "为空巢老人理发7次，清扫卫生19次，聊天、测量血压60余人",
		},
		{
			date: "8月30日",
			time: "8时55分许",
			street: "南翔镇",
			address: "蕴北路1755弄",
			type: "关怀慰问",
			content: "社区和养老中心为老人们准备了蛋糕和水果",
		},
		
	];
	addTableList3(".linkage-table2", linkageArrScroll22);
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
			if(arr[index].address=="嘉定镇街道"){

				setTimeout(function () {
					$(name)
						.find(".list-box")
						.append(
							'<div class="table-list"><p onclick=openIframe("'+streetSelfUrl[arr[index].address]+'") style="cursor: pointer">' +
							/*'<a href="'+streetUrl[arr[index].address]+'" target="_blank">'+*/
							'<img src="images/point11_1.png" style="display: inline-block!important;width: 1.2rem;height: 1.2rem;vertical-align: middle;margin-left: -0.5rem"> '+
							arr[index].address +
							''+
							'</p><p>' +
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

			}else if(arr[index].address=="嘉定新城（马陆镇）"){

				setTimeout(function () {
					$(name)
						.find(".list-box")
						.append(
							'<div class="table-list"><p onclick=openIframe("'+streeSelftUrl[arr[index].address]+'") style="cursor: pointer">' +
							/*'<a href="'+streetUrl[arr[index].address]+'" target="_blank">'+*/
							'<img src="images/point11_1.png" style="display: inline-block!important;width: 1.2rem;height: 1.2rem;vertical-align: middle;margin-left: -0.5rem"> '+
							arr[index].address +
							''+
							'</p><p>' +
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

			}else {
				setTimeout(function () {
					$(name)
						.find(".list-box")
						.append(
							'<div class="table-list"><p onclick=openIframe("'+streetUrl[arr[index].address]+'") style="cursor: pointer">' +
							/*'<a href="'+streetUrl[arr[index].address]+'" target="_blank">'+*/
							'<img src="images/point1.png" style="display: inline-block!important;width: 1.2rem;height: 1.2rem;vertical-align: middle;margin-left: -0.5rem"> '+
							arr[index].address +
							''+
							'</p><p>' +
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
			setTimeout(function () {
				$(name)
					.find(".list-box")
					.append(
						'<div class="table-list"><p onclick=openIframe("'+streetUrl[arr[index].address]+'") style="cursor: pointer">' +
						/*'<a href="'+streetUrl[arr[index].address]+'" target="_blank">'+*/
						'<img src="images/point1.png" style="display: inline-block!important;width: 1.2rem;height: 1.2rem;vertical-align: middle;margin-left: -0.5rem"> '+
						arr[index].address +
						'</a>'+
						'</p><p>' +
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