$(function () {
  getJbgkData(); //基本概况
  getCardData(); //资源供应，交通人流
  getShbzData(); //社会保障
  getHjbzData(); //环境保障
  getAsjjbData(); //案事件接报

  //setInterval(get12345Grid119,1*60*1000)
});
//基本概况数组
var jbqkArr = [
  {
    title: "常住人口",
    //num:'215.53',
    unit: "万",
  },
  {
    title: "户籍人口",
    //num:'68.28',
    unit: "万",
  },
  {
    title: "面积",
    //num:'464.2',
    unit: "平方公里",
  },
  {
    title: "人口密度",
    //num:'2801',
    unit: "人/平方公里",
  },
  {
    title: "GDP",
    //num:'2362.7',
    unit: "亿元/年",
  },
  {
    title: "人均",
    //num:'7350',
    unit: "元/年",
  },
];

//基本概况
function getJbgkData() {
  $.ajax({
    url: STATIC_URL + "/overview/findAll",
    dataType: "json",
    type: "get",
    async: true,
    success: function (data) {
      jbqkArr[0].num = data[0].popu;
      jbqkArr[1].num = data[0].popuSum;
      jbqkArr[2].num = data[0].area;
      jbqkArr[3].num = data[0].popuDesity;
      jbqkArr[4].num = data[0].gdp;
      jbqkArr[5].num = data[0].incomePer;
      addjbgk(jbqkArr);
    },
  });
}

//资源供应数组
var zygyArr = [
  {
    title: "用电总量",
    //today:20,
    //week:189,
    //month:1234,
    unit: "万千瓦时",
  },
  {
    title: "用水总量",
    //today:20,
    //week:189,
    //month:1234,
    unit: "万吨",
  },
  {
    title: "供气总量",
    //today:20,
    //week:189,
    //month:1234,
    unit: "万立方米",
  },
];
//交通人流数组
var jtzkArr = [
  {
    title: "公交车辆",
    //today:35,
    //week:253,
    //month:1534,
    unit: "万人次",
  },
  {
    title: "交通客运量",
    //today:42,
    //week:198,
    //month:1345,
    unit: "万人次",
  },
  {
    title: "交通流量",
    //today:20,
    //week:189,
    //month:1234,
    unit: "车次",
  },
  {
    title: "景点人流量",
    /*today:300,
        week:2600,
        month: 15000,*/
    unit: "人次",
  },
];

//资源供应，交通人流
function getCardData() {
  $.ajax({
    url: STATIC_URL + "/resource/findAll",
    dataType: "json",
    type: "get",
    async: true,
    success: function (data) {
      for (var i = 0; i < data.length; i++) {
        var sct = data[i].sourcetype;
        if (sct <= 3) {
          zygyArr[sct - 1].today = data[i].timeDay;
          zygyArr[sct - 1].week = data[i].timeWeek;
          zygyArr[sct - 1].month = data[i].timeMonth;
        }
        if (sct >= 5) {
          jtzkArr[sct - 4].today = data[i].timeDay;
          jtzkArr[sct - 4].week = data[i].timeWeek;
          jtzkArr[sct - 4].month = data[i].timeMonth;
        }
        /*if(sct==1){
					zygyArr[0].today=data[i].timeDay;
					zygyArr[0].week=data[i].timeWeek;
					zygyArr[0].month=data[i].timeMonth;

				}else if(sct==2){
					zygyArr[1].today=data[i].timeDay;
					zygyArr[1].week=data[i].timeWeek;
					zygyArr[1].month=data[i].timeMonth;
				}else if(sct==3){
					zygyArr[2].today=data[i].timeDay;
					zygyArr[2].week=data[i].timeWeek;
					zygyArr[2].month=data[i].timeMonth;
				}else if(sct==4){
					/!*jtzkArr[0].today=data[i].timeDay;
					jtzkArr[0].week=data[i].timeWeek;
					jtzkArr[0].month=data[i].timeMonth;*!/
				}else if(sct==5){
					jtzkArr[1].today=data[i].timeDay;
					jtzkArr[1].week=data[i].timeWeek;
					jtzkArr[1].month=data[i].timeMonth;
				}else if(sct==6){
					jtzkArr[2].today=data[i].timeDay;
					jtzkArr[2].week=data[i].timeWeek;
					jtzkArr[2].month=data[i].timeMonth;
				}else if(sct==7){
					jtzkArr[3].today=data[i].timeDay;
					jtzkArr[3].week=data[i].timeWeek;
					jtzkArr[3].month=data[i].timeMonth;
				}*/
      }
      addCard(zygyArr, ".zygy-warp"); //资源供应
      getGongJiaoData(); //获取公交数据
    },
    error: function () {
      addCard(jtzkArr, ".jtqk-warp"); //交通情况
    },
  });
}

//社会保障数组
var shbzArr = [
  {
    title: "城镇登记失业人数",
    //num:0.3,
    unit: "人",
  },
  {
    title: "养老机构",
    num: 25,
    unit: "个",
  },
  {
    title: "最低工资标准",
    //num:0.3,
    unit: "元/月",
  },
  {
    title: "每千人医疗床位",
    //num:0.3,
    unit: "个",
  },
  {
    title: "门诊就诊量",
    //num:0.3,
    unit: "万人次/年",
  },
  {
    title: "城镇登记失业人数",
    //num:0.3,
    unit: "人",
  },
  {
    title: "民政救助",
    //num:0.3,
    unit: "人次/月",
  },
  {
    title: "救护车",
    num:52,
    unit: "辆",
  },
];
//社会保障
function getShbzData() {
  $.ajax({
    url: STATIC_URL + "/insurance/findAll",
    dataType: "json",
    type: "get",
    async: true,
    success: function (data) {
      shbzArr[0].num = data[0].unemployRate;
      /*shbzArr[1].num=data[0].insurRate;*/
      shbzArr[2].num = data[0].wageMinimum;
      shbzArr[3].num = data[0].medicalBedThou;
      shbzArr[4].num = data[0].outpatientVisit;
      shbzArr[5].num = data[0].unemployRate;
      shbzArr[6].num = data[0].insurRate;
      addShbz(shbzArr);
    },
    error: function () {
      addShbz(shbzArr);
    },
  });
}
//环境保障数组
var hjbzArr = [
  {
    title: "生活垃圾处理",
    num: 2064,
    unit: "吨/日",
  },
  {
    title: "污水处理量",
    num: 49.73,
    unit: "万吨/日",
  },
  {
    title: "扬尘检测工地",
    num: 52,
    unit: "个",
  },
  {
    title: "生活垃圾处理",
    num: 8256,
    unit: "吨/周",
  },
  {
    title: "污水处理量",
    num: 348.14,
    unit: "万吨/周",
  },
  {
    title: "扬尘检测工地",
    num: 167,
    unit: "个",
  },
  {
    title: "生活垃圾处理",
    num: 51600,
    unit: "吨/月",
  },
  {
    title: "污水处理量",
    num: 1497,
    unit: "万吨/月",
  },
  {
    title: "扬尘检测工地",
    num: 529,
    unit: "个",
  },
];

//环境保障
function getHjbzData() {
  var hjbzFlag = false;
  $.ajax({
    url: STATIC_URL + "/allowance/findAll",
    dataType: "json",
    type: "get",
    async: true,
    success: function (data) {
      for (var i = 0; i < data.length; i++) {
        var index = data[i].id;
        if (index == 1) {
          hjbzArr[0].num = data[i].wasteDisSum;
          hjbzArr[1].num = data[i].sewageTreatSum;
        } else if (index == 2) {
          hjbzArr[3].num = data[i].wasteDisSum;
          hjbzArr[4].num = data[i].sewageTreatSum;
        } else if (index == 3) {
          hjbzArr[6].num = data[i].wasteDisSum;
          hjbzArr[7].num = data[i].sewageTreatSum;
        }
      }
      $.ajax({
        url: FIRE_URL + "/constructionproject/projectNum",
        dataType: "json",
        type: "get",
        async: false,
        success: function (data) {
          hjbzArr[2].num = data.todayNum;
          hjbzArr[5].num = data.weekNum;
          hjbzArr[8].num = data.monthNum;
          addHjbz(hjbzArr); //环境保障
          hjbzFlag = true;
        },
        error: function () {
          if (hjbzFlag == false) {
            addHjbz(hjbzArr); //环境保障
            hjbzFlag = true;
          }
        },
      });
    },
    error: function () {
      if (hjbzFlag == false) {
        addHjbz(hjbzArr); //环境保障
        hjbzFlag = true;
      }
    },
  });
  if (hjbzFlag == false) addHjbz(hjbzArr); //环境保障
}

//案事件接报数组
var asjczArr = [];
//案事件接报
function getAsjjbData() {
  for (var i = 0; i < 5; i++) {
    asjczArr[i] = new Object();
  }
  $.ajax({
    url: STATIC_URL + "/eventhandle/findAll",
    dataType: "json",
    type: "get",
    async: true,
    success: function (data) {
      for (var i = 0; i < data.length; i++) {
        var obj = new Object();
        var alm = data[i].alarmType;

        obj.today = data[i].timeDay;
        obj.week = data[i].timeWeek;
        obj.month = data[i].timeMonth;
        asjczArr[alm - 1] = obj;
      }
      get12345Grid119();
    },
  });
}

//获取12345,网格化，119的数据

var eventFlag=false
function get12345Grid119(){
	//alert(123)
	$.ajax({
		url:ORACLE_URL+"/taskInfoUrgent/findHotlineNum",
		dataType:'json',
		type:'get',
		async:true,
		success:function(data){
			//alert(JSON.stringify(data))
			var obj=new Object()
			obj.today=data.yeaterdayNum
			obj.week=data.weekNum
			obj.month=data.monthNum
			asjczArr[3]=obj

			$.ajax({
				url:ORACLE_URL+"/taskInfoUrgent/findGridNum",
				dataType:'json',
				type:'get',
				async:true,
				success:function(data){
					//	alert(JSON.stringify(data))
					var obj=new Object()
					obj.today=data.yeaterdayNum
					obj.week=data.weekNum
					obj.month=data.monthNum
					asjczArr[4]=obj
					$.ajax({
						url: FIRE_URL + "/fireInfo/findFireNum",
						dataType: 'json',
						type: 'get',
						async: true,
						success: function (data) {
							var obj=new Object()
							obj.today=data.todayNum
							obj.week=data.weekNum
							obj.month=data.monthNum
							//asjczArr[1]=obj
							addAsjcz(asjczArr);
							eventFlag=true
						},
						error:function () {
							addAsjcz(asjczArr);
						}
					})
				}
			})
		}
	})

}

function addjbgk(arr) {
  //基本概况
  $(".vital-signs .top-box ul").html("");
  for (let i = 0; i < arr.length; i++) {
    $(".vital-signs .top-box ul").append(
      '<li><div class="text-centered"><p>' +
        arr[i].title +
        '</p><div class="bottom-text" style="height:2rem"><span class="num-font" style="font-size:1.5rem;alignment: center">' +
        arr[i].num +
        "</span><p >" +
        arr[i].unit +
        '</p></div></div><div class="border-box border-right"></div><div class="border-box border-bottom"></div></li>'
    );
  }
}
function addAsjcz(arr) {
  for (let i = 0; i < arr.length; i++) {
    $(".vital-signs .main-list")
      .eq(i)
      .find(".num-font")
      .eq(0)
      .html(arr[i].today);
    $(".vital-signs .main-list")
      .eq(i)
      .find(".num-font")
      .eq(1)
      .html(arr[i].week);
    $(".vital-signs .main-list")
      .eq(i)
      .find(".num-font")
      .eq(2)
      .html(arr[i].month);
  }
}
function addCard(arr, classStr) {
  var boxObj = $(classStr).find(".list-box");
  var ListObj = $(classStr).find(".card-box");
  //var distanceH=boxObj.height()-ListObj.height();
  var distanceH = 50;
  var distanceW = boxObj.width() - ListObj.width();
  var apartH = Math.floor(distanceH / (arr.length - 1));
  var apartW = Math.floor(distanceW / (arr.length - 1));
  var opacity =
    1 - (arr.length - 1) * 0.1 < 0.4 ? "0.4" : 1 - (arr.length - 1) * 0.1;
  boxObj.html("");
  let i = 0;
  if (arr[0].title === "公交车辆") {
    for (; i < 1; i++) {
      console.log(arr[0]);
      boxObj.append(
        '<div class="card-box" style="width:20rem" style="opacity:' +
          (1 - (arr.length - 1 - i) * 0.1 < opacity
            ? opacity
            : 1 - (arr.length - 1 - i) * 0.1) +
          ";left:" +
          apartW * i +
          "px;" +
          "top:" +
          apartH * i +
          'px"><div class="card-title" style="font-size:1.1rem;alignment: center"><div class="text-centered" style="height:5.8rem">' +
          arr[i].title +
          "</div></div>" +
          '<div class="card-text" style="height:6.5rem">' +
          '<p style="float:left;padding-left: 0.5rem">线路总数<span class="num-font" style="width:3.5rem;margin-right: 0px">' +
          arr[i].xlnum +
          "</span>条 &nbsp;&nbsp;在线车辆" +
          '<span class="num-font" style="width:2rem;margin-right: 0px">' +
          arr[i].carnum +
          "</span>辆" +
          "</p>" +
          '<p style="float:left;padding-left: 0.5rem">当日计划班次<span class="num-font" style="width:2rem;margin-right: 0px">' +
          arr[i].jhnum +
          '</span>个 &nbsp;&nbsp;当日完成班次<span class="num-font" style="width:2rem;margin-right: 0px">' +
          arr[i].sjnum +
          "</span>个 </p>" +
          '<p style="float:left;padding-left: 0.5rem">昨日班次执行率<span class="num-font" style="width:3rem;margin-right: 0px">' +
          arr[i].bczxl +
          "</span>%" +
          "</p>" +
          '<p style="float:left;padding-left: 0.5rem">昨日首末班车准点率<span class="num-font" style="width:3rem;margin-right: 0px">' +
          arr[i].smbczdl +
          "</span>%" +
          "</p></div></div>"
      );
    }
  }

  for (; i < arr.length; i++) {
    boxObj.append(
      '<div class="card-box" style="opacity:' +
        (1 - (arr.length - 1 - i) * 0.1 < opacity
          ? opacity
          : 1 - (arr.length - 1 - i) * 0.1) +
        ";left:" +
        apartW * i +
        "px;top:" +
        apartH * i +
        'px"><div class="card-title" style="font-size:1.1rem;alignment: center"><div class="text-centered">' +
        arr[i].title +
        '</div></div><div class="card-text"><p>昨日<span class="num-font">' +
        arr[i].today +
        "</span>" +
        arr[i].unit +
        '</p><p>本周<span class="num-font">' +
        arr[i].week +
        "</span>" +
        arr[i].unit +
        '</p><p>当月<span class="num-font">' +
        arr[i].month +
        "</span>" +
        arr[i].unit +
        "</p></div></div>"
    );
  }
  var cardTime = "";
  var cardTime1 = "";
  timeInt();
  $(classStr).mouseenter(function () {
    clearInterval(cardTime1);
    clearInterval(cardTime);
  });
  $(classStr).mouseleave(function () {
    $(classStr).find(".card-box").removeClass("card-box-ac");
    cardTime1 = setTimeout(function () {
      timeInt();
    }, 1000);
  });
  $(classStr).on("click", ".card-box", function () {
    opacityNum = $(classStr).find(".card-box").index($(this));
    $(classStr).find(".card-box").removeClass("card-box-ac");
    $(this).addClass("card-box-ac");
  });
  function timeInt() {
    clearInterval(cardTime);
    cardTime = setInterval(function () {
      var aniList = $(classStr).find(".card-box");
      if (aniList.length == arr.length) {
        for (let i = aniList.length - 1; i > -1; i--) {
          if (i == aniList.length - 1) {
            aniList
              .eq(i)
              .animate(
                { top: distanceH - aniList.height() + "px", opacity: 0 },
                1000,
                function () {
                  aniList.eq(aniList.length - 1).remove();
                }
              );
          } else {
            aniList
              .eq(i)
              .animate(
                {
                  left: apartW * (i + 1),
                  top: apartH * (i + 1),
                  opacity: opacity + (i + 1) * 0.1,
                },
                1000
              );
          }
        }
        arr.unshift(arr.splice(arr.length - 1, 1)[0]);
        if (arr[0].title === "公交车辆") {
          /*boxObj.prepend('<div class="card-box" style="opacity:'+opacity+';left: 0px;' +
						'top:0px"><div class="card-title" style="font-size:1.1rem;alignment: center"><div class="text-centered">'+arr[0].title+'</div></div>' +
						'<div class="card-text"><p style="float:left;width: 8rem;">线路总数<span class="num-font">'+arr[0].xlnum+'</span>条'+'</p><p style="float:left;width:8rem">在线车辆<span class="num-font">'+arr[0].carnum+'</span>辆'+
						'</p><p>当日计划班次<span class="num-font">'+arr[0].jhnum+'</span>辆'+'</p></div></div>')*/
          boxObj.prepend(
            '<div class="card-box" style="width:20rem" style="opacity:' +
              (1 - (arr.length - 1 - i) * 0.1 < opacity
                ? opacity
                : 1 - (arr.length - 1 - i) * 0.1) +
              ";left:" +
              apartW * i +
              "px;" +
              "top:" +
              apartH * i +
              'px"><div class="card-title" style="font-size:1.1rem;alignment: center"><div class="text-centered" style="height:5.8rem">' +
              arr[0].title +
              "</div></div>" +
              '<div class="card-text" style="height:6.5rem">' +
              '<p style="float:left;padding-left: 0.5rem">线路总数<span class="num-font" style="width:3.5rem;margin-right: 0px">' +
              arr[0].xlnum +
              "</span>条 &nbsp;&nbsp;在线车辆" +
              '<span class="num-font" style="width:2rem;margin-right: 0px">' +
              arr[0].carnum +
              "</span>辆" +
              "</p>" +
              '<p style="float:left;padding-left: 0.5rem">当日计划班次<span class="num-font" style="width:2rem;margin-right: 0px">' +
              arr[0].jhnum +
              '</span>个 &nbsp;&nbsp;当日完成班次<span class="num-font" style="width:2rem;margin-right: 0px">' +
              arr[0].sjnum +
              "</span>个 </p>" +
              '<p style="float:left;padding-left: 0.5rem">昨日班次执行率<span class="num-font" style="width:3rem;margin-right: 0px">' +
              arr[0].bczxl +
              "</span>%" +
              "</p>" +
              '<p style="float:left;padding-left: 0.5rem">昨日首末班车准点率<span class="num-font" style="width:3rem;margin-right: 0px">' +
              arr[0].smbczdl +
              "</span>%" +
              "</p></div></div>"
          );
        } else {
          boxObj.prepend(
            '<div class="card-box" style="opacity:' +
              opacity +
              ';left:0px;top:0px"><div class="card-title"><div class="text-centered">' +
              arr[0].title +
              '</div></div><div class="card-text"><p>昨日<span class="num-font">' +
              arr[0].today +
              "</span>" +
              arr[0].unit +
              '</p><p>本周<span class="num-font">' +
              arr[0].week +
              "</span>" +
              arr[0].unit +
              '</p><p>当月<span class="num-font">' +
              arr[0].month +
              "</span>" +
              arr[0].unit +
              "</p></div></div>"
          );
        }
      } else {
        // window.location.reload()
      }
    }, 5000);
  }
}
var time = "";
function addShbz(arr) {
  $(".shbz-warp .text-box").html("");
  var maxNum = arr.length > 5 ? 5 : arr.length;
  for (var i = 0; i < maxNum; i++) {
    if (arr[i].title === "养老机构") {
      $(".shbz-warp .text-box").append(
        '<div style=" cursor: pointer;left:' +
          i * 10 +
          "%;top:" +
          i * 20 +
          '%" class="text-list" onclick="oldPeopleHomePage()"><p>' +
          arr[i].title +
          '</p><p><span class="num-font">' +
          arr[i].num +
          "</span>" +
          arr[i].unit +
          "</p></div>"
      );
    } else {
      $(".shbz-warp .text-box").append(
        '<div style="left:' +
          i * 10 +
          "%;top:" +
          i * 20 +
          '%" class="text-list"><p>' +
          arr[i].title +
          '</p><p><span class="num-font">' +
          arr[i].num +
          "</span>" +
          arr[i].unit +
          "</p></div>"
      );
    }
  }

  $(".shbz-warp .text-box").mouseenter(function () {
    //alert(1)
    clearInterval(time);
  });
  $(".shbz-warp .text-box").mouseleave(function () {
    //alert(4)
    time = setTimeout(function () {
      shbzInit(arr);
    }, 5000);
  });
  //动态效果
  shbzInit(arr);
}
var startNum = 5;
function shbzInit(arr) {
  //alert("arr,length "+arr.length+" "+startNum)
  if (arr.length > 5) {
    var distance = $(".shbz-warp .text-list").height();
    clearInterval(time);
    time = setInterval(function () {
      //alert($('.shbz-warp .text-list').length)
      if ($(".shbz-warp .text-list").length == 5) {
        if (arr[startNum].title === "养老机构") {
          $(".shbz-warp .text-box").append(
            '<div style="cursor: pointer;left:40%;top:100%;opacity:0;" class="text-list" onclick="oldPeopleHomePage()"><p>' +
              arr[startNum].title +
              '</p><p><span class="num-font">' +
              arr[startNum].num +
              "</span>" +
              arr[startNum].unit +
              "</p></div>"
          );
        } else {
          $(".shbz-warp .text-box").append(
            '<div style="left:40%;top:100%;opacity:0" class="text-list"><p>' +
              arr[startNum].title +
              '</p><p><span class="num-font">' +
              arr[startNum].num +
              "</span>" +
              arr[startNum].unit +
              "</p></div>"
          );
        }

        for (let i = 0; i < $(".shbz-warp .text-list").length; i++) {
          if (i == 0) {
            $(".shbz-warp .text-list")
              .eq(i)
              .animate({ top: -distance, opacity: 0 }, 1000, function () {
                $(".shbz-warp .text-list").eq(i).remove();
              });
          } else if (i == $(".shbz-warp .text-list").length - 1) {
            $(".shbz-warp .text-list")
              .eq(i)
              .animate({ top: (i - 1) * 20 + "%", opacity: 1 }, 900);
          } else {
            $(".shbz-warp .text-list")
              .eq(i)
              .animate(
                { left: (i - 1) * 10 + "%", top: (i - 1) * 20 + "%" },
                900
              );
          }
        }
        startNum++;
        //alert(arr.length+" "+startNum)
        if (startNum >= arr.length) {
          startNum = 0;
        }
      } else {
        // window.location.reload()
      }
    }, 5000);
  }
}
var hjbzTime;
function addHjbz(arr) {
  $(".hjbz-warp .text-box").html("");
  var maxNum = arr.length > 3 ? 3 : arr.length;
  for (var i = 0; i < maxNum; i++) {
    $(".hjbz-warp .text-box").append(
      '<div style="left:' +
        (10 - i * 5) +
        "%;top:" +
        i * 50 +
        '%" class="text-list"><p>' +
        arr[i].title +
        '</p><p><span class="num-font">' +
        arr[i].num +
        "</span>" +
        arr[i].unit +
        "</p></div>"
    );
  }

  $(".hjbz-warp .text-box").mouseenter(function () {
    clearInterval(hjbzTime);
  });
  $(".hjbz-warp .text-box").mouseleave(function () {
    hjbzTime = setTimeout(function () {
      hjbzInit(arr);
    }, 5000);
  });

  //设置动态效果
  hjbzInit(arr);
}

function getGongJiaoData() {
  $.ajax({
    url: FIRE_URL + "/restnumberbus/countRestNum",
    dataType: "json",
    type: "get",
    async: false,
    success: function (data) {
      jtzkArr[0].xlnum = data.xlnum;
      jtzkArr[0].carnum = data.carnum;
      jtzkArr[0].jhnum = data.jhnum;
      jtzkArr[0].sjnum = data.sjnum;
      jtzkArr[0].bczxl = data.bczxl;
      jtzkArr[0].smbczdl = data.smbczdlz;
      addCard(jtzkArr, ".jtqk-warp"); //交通情况
    },
    error: function () {
      addCard(jtzkArr, ".jtqk-warp"); //交通情况
    },
  });
}

var hjbzNum = 3;
function hjbzInit(arr) {
  if (arr.length > 3) {
    var distance = $(".hjbz-warp .text-list").height();
    clearInterval(hjbzTime);
    hjbzTime = setInterval(function () {
      if ($(".hjbz-warp .text-list").length == 3) {
        $(".hjbz-warp .text-box").append(
          '<div style="left:15%;top:0%;opacity:0" class="text-list"><p>' +
            arr[hjbzNum].title +
            '</p><p><span class="num-font">' +
            arr[hjbzNum].num +
            "</span>" +
            arr[hjbzNum].unit +
            "</p></div>"
        );
        $(".hjbz-warp .text-box").append(
          '<div style="left:10%;top:50%;opacity:0" class="text-list"><p>' +
            arr[hjbzNum + 1].title +
            '</p><p><span class="num-font">' +
            arr[hjbzNum + 1].num +
            "</span>" +
            arr[hjbzNum + 1].unit +
            "</p></div>"
        );
        $(".hjbz-warp .text-box").append(
          '<div style="left:5%;top:100%;opacity:0" class="text-list"><p>' +
            arr[hjbzNum + 2].title +
            '</p><p><span class="num-font">' +
            arr[hjbzNum + 2].num +
            "</span>" +
            arr[hjbzNum + 2].unit +
            "</p></div>"
        );
        for (let i = 0; i < $(".hjbz-warp .text-list").length; i++) {
          if (i == 0) {
            let num = i;
            $(".hjbz-warp .text-list")
              .eq(num)
              .animate({ top: -distance, opacity: 0 }, 500, function () {
                $(this).remove();
              });
            //alert(0)
          }
          if (i == 1) {
            let num = i;
            $(".hjbz-warp .text-list")
              .eq(num)
              .animate({ top: -distance * 2, opacity: 0 }, 500, function () {
                $(this).remove();
              });
            //alert(1)
          }

          if (i == 2) {
            let num = i;
            $(".hjbz-warp .text-list")
              .eq(num)
              .animate(
                {
                  left: 10 - (num - 2) * 15 + "%",
                  top: (num - 2) * 50 + "%",
                  opacity: 1,
                },
                300,
                function () {
                  $(this).animate(
                    { top: -distance * 2, opacity: 0 },
                    500,
                    function () {
                      $(this).remove();
                    }
                  );
                }
              );
          } /*else if(i==1){
						let num=i;
						$('.hjbz-warp .text-list').eq(num).animate({left:(10-(num-1)*10)+'%',top:100+'%',opacity:1},500,function(){
							$(this).animate({left:(10-(num-2)*5)+'%',top:(num-1)*0+'%',opacity:1},500)
						})
					}*/ else {
            let num = i;
            $(".hjbz-warp .text-list")
              .eq(num)
              .animate(
                {
                  left: 20 - (num - 1) * 5 + "%",
                  top: (num - 2) * 50 + "%",
                  opacity: 1,
                },
                500,
                function () {
                  $(this).animate(
                    {
                      left: 25 - (num - 1) * 6 + "%",
                      top: (num - 3) * 50 + "%",
                      opacity: 1,
                    },
                    500
                  );
                }
              );
          }
        }
        hjbzNum += 3;
        if (hjbzNum >= arr.length) {
          hjbzNum = 0;
        }
      } else {
        // window.location.reload()
      }
    }, 5000);
  }
}

function oldPeopleHomePage() {
  $("#restShow").show();
}

function closeOldPeopleHome() {
  $("#restShow").hide();
}
