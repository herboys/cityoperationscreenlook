$(function () {
   init()
  });

var  linkageArrScroll=[]
var  linkageArrScroll22=[]
function addTableList(name, arr) {
	// $(name).find(".list-box").html("");
	for (let i = 0; i < arr.length; i++) {
			$(name)
				.find(".list-box")
				.append(
					'<div class="table-list"><p style="width: 35%;padding-left: 5%;;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.8rem;line-height:1.8rem;">' +
					arr[i].dispatch_time +
					'</p><p style="width: 35%;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.8rem;line-height:1.8rem;">' +
					arr[i].car_num +
					'</p></div>'
				);
	
	}
}
function addTableList2(name, arr) {
	// $(name).find(".list-box").html("");
	for (let i = 0; i < arr.length; i++) {
			$(name)
				.find(".list-box")
				.append(
					'<div class="table-list"><p style="width: 35%;padding-left: 5%;;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.8rem;line-height:1.8rem;">' +
					arr[i].address +
					'</p><p style="width: 35%;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.8rem;line-height:1.8rem;">' +
                    arr[i].carNum +
                    '</p><p style="width: 20%;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.8rem;line-height:1.8rem;">' +
					arr[i].status +
					'</p></div>'
				);
	
	}
}
function init() {
    $.get("http://10.237.115.83:8092/t120msg/monthDriverMsg", function(res){
   
    linkageArrScroll= res
    console.log(linkageArrScroll,'monthDriverMsgmonthDriverMsg');
    addTableList(".linkage-scroll-table", linkageArrScroll);
    })
    $.get("http://10.237.115.83:8092/t120msg//monthDriverStatusMsg", function(res){
   
    linkageArrScroll22= res
    console.log(linkageArrScroll22,'monthDriverMsgmonthDriverMsg222');
    addTableList2(".linkage-scroll-table2", linkageArrScroll22);
    })
}
Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}




