var  linkageArrScroll =[
    {
        time: "2020/7/2 19:21:41",
        info: "ADF12345678",
    },
    {
        time: "2020/7/2 19:21:41",
        info: "ADF12345678",
    },  {
        time: "2020/7/2 19:21:41",
        info: "ADF12345678",
    },  {
        time: "2020/7/2 19:21:41",
        info: "ADF12345678",
    },
]
function addTableList2(name, arr) {
	// $(name).find(".list-box").html("");
	for (let i = 0; i < arr.length; i++) {
			$(name)
				.find(".list-box")
				.append(
					'<div class="table-list"><p style="width: 35%;padding-left: 5%;;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem">' +
					arr[i].time +
					'</p><p style="width: 35%;  overflow: hidden; text-overflow: ellipsis;white-space: nowrap;height: 1.1rem">' +
					arr[i].info +
					'</p></div>'
				);
	
	}
}
addTableList2(".linkage-scroll-table", linkageArrScroll);