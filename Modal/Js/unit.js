function ToOnload() {
    document.getElementById("DmMainId").innerHTML = ''
    var gongdanlist = []
    var farstlist = ''
    GongDan(1)
    TabsFun(3)
    TabsFun(6)
    findbcNameType()
    findscName()
    rollInit()
    //initMap(date, bcname, scname)
}

/*前六后六*/
function TopSixFun(num) {
    switch (num) {
        case 1:

            break;
        case 2:
            break
    }
}

function TabsFun(num) {
    let para = document.getElementsByClassName("Satisfaction-warp-item-header-left")
    let data = ''
    let color = ''
    let xData = []
    let yData = []
    let zData = []
    let legend = []
    let attackSourcesData = ''
    let attackSourcesName = ''
    let attackSourcesColor = ''
    switch (num) {
        case 1:
            para[0].innerHTML = ' <div class="banner1" onclick="TabsFun(1)">' + '基本情况' + '</div>' +
                '<div class="banner2" onclick="TabsFun(2)">' + '趋势分析' + '</div>'
            data = [{
                "name": "电话",
                "value": 10
            }, {
                "name": "网站",
                "value": 15
            }, {
                "name": "手机App",
                "value": 15
            },
                {
                    "name": "微信",
                    "value": 25
                },

            ];

            color = ["#fec101", "#b5b8cd", "#ff6226", "#2cc78f"]
            MyEcharts.initChart(MyEcharts.EchartsOption.pie('工单问题', color, data), "SmallECharts3")
            break;
        case 2:
            para[0].innerHTML = ' <div class="banner2" onclick="TabsFun(1)">' + '基本情况' + '</div>' +
                '<div class="banner1" onclick="TabsFun(2)">' + '趋势分析' + '</div>'

            xData = ["电话", "网站", "手机App", '微信'];
            yData = [2342, 1230, 425, 900, 600];
            MyEcharts.initChart(MyEcharts.EchartsOption.bar(xData, yData), "SmallECharts3")
            break;
        case 3:
            para[2].innerHTML = '<div class="banner1" onclick="TabsFun(3)">' + '街镇' + '</div>' +
                '<div class="banner2" onclick="TabsFun(4)">' + '委办局' + '</div>'
                + '<div class="banner2" onclick="TabsFun(5)">' + '公司' + '</div>'
            findTypeMsg('年', "街镇").then(res => {
                res.map(item => {
                    xData.push(item.STREETNAME)
                    zData.push(item.COUNTNAME)
                    yData.push(item.PROPORTION)
                })
                legend = ["满意度", "案件数量"]
                MyEcharts.initChart(MyEcharts.EchartsOption.newbar(xData, yData, zData, "#F9392D", legend, "%"), "SmallECharts")
            })
            document.getElementById("BureauId").style.display = "none"
            break;
            break;
        case 4:
            para[2].innerHTML = '<div class="banner2" onclick="TabsFun(3)">' + '街镇' + '</div>' +
                '<div class="banner1" onclick="TabsFun(4)">' + '委办局' + '</div>'
                + '<div class="banner2" onclick="TabsFun(5)">' + '公司' + '</div>'
            findTypeMsg('年', "区委办").then(res => {
                console.log(res, '区委办')
                res.map(item => {
                    xData.push(item.DEPTNAME)
                    zData.push(item.COUNTNAME)
                    yData.push(item.PROPORTION)
                })
                xData = xData.slice(0, 6).concat(xData.slice(xData.length - 6, xData.length))
                zData = zData.slice(0, 6).concat(zData.slice(zData.length - 6, zData.length))
                yData = yData.slice(0, 6).concat(yData.slice(yData.length - 6, yData.length))
                legend = ["满意度", "案件数量"]
                document.getElementById("BureauId").style.display = "flex"
                MyEcharts.initChart(MyEcharts.EchartsOption.newbar(xData, yData, zData, "#F9392D", legend, "%"), "SmallECharts")
            })
            break;
        case 5:
            para[2].innerHTML = '<div class="banner2" onclick="TabsFun(3)">' + '街镇' + '</div>' +
                '<div class="banner2" onclick="TabsFun(4)">' + '委办局' + '</div>'
                + '<div class="banner1" onclick="TabsFun(5)">' + '公司' + '</div>'
            findTypeMsg('年', "公司").then(res => {
                res.map(item => {
                    xData.push(item.DEPTNAME)
                    zData.push(item.COUNTNAME)
                    yData.push(item.PROPORTION)
                })
                document.getElementById("BureauId").style.display = "none"
                legend = ["满意度", "案件数量"]
                MyEcharts.initChart(MyEcharts.EchartsOption.newbar(xData, yData, zData, "#F9392D", legend, "%"), "SmallECharts")
            })
            break;
            break;
        case 6:
            para[3].innerHTML = `     <div class="banner1" onclick="TabsFun(6)">紧急工单</div>
                                <div class="banner2" onclick="TabsFun(7)">重复工单</div>
                                <div class="banner2" onclick="TabsFun(8)">反复退单</div>
                                <div class="banner2" onclick="TabsFun(11)">超期工单</div>`
            GongDan(1)
            break;
        case 7:
            para[3].innerHTML = `     <div class="banner2" onclick="TabsFun(6)">紧急工单</div>
                                <div class="banner1" onclick="TabsFun(7)">重复工单</div>
                                <div class="banner2" onclick="TabsFun(8)">反复退单</div>
                                    <div class="banner2" onclick="TabsFun(11)">超期工单</div>`
            GongDan(0)
            break;
            break;
        case 8:
            para[3].innerHTML = `     <div class="banner2" onclick="TabsFun(6)">紧急工单</div>
                                <div class="banner2" onclick="TabsFun(7)">重复工单</div>
                                <div class="banner1" onclick="TabsFun(8)">反复退单</div>
                <div class="banner2" onclick="TabsFun(11)">超期工单</div>`
            GongDanfanhu()
            break;
        case 11:
            para[3].innerHTML = `<div class="banner2" onclick="TabsFun(6)">紧急工单</div>
                                <div class="banner2" onclick="TabsFun(7)">重复工单</div>
                                <div class="banner2" onclick="TabsFun(8)">反复退单</div>
                <div class="banner1" onclick="TabsFun(11)">超期工单</div>`
            OverDueFun()
            break;
        case 9:
            document.getElementsByClassName("work-older-header")[0].innerHTML = ' <button onclick="TabsFun(9)">' + '紧急工单' + '</button>'
                + '<span onclick="TabsFun(10)">' + '次紧急工单' + '</span>'
            GongDan(1)
            break;
            break;
        case 10:
            document.getElementsByClassName("work-older-header")[0].innerHTML = ' <span onclick="TabsFun(9)">' + '紧急工单' + '</span>'
                + '<button onclick="TabsFun(10)">' + '次紧急工单' + '</button>'
            GongDan(0)
            break;
    }

}

/*超期事件*/
function OverDueFun(num) {
    let para = {
        url: ORACLE_URL + '/taskInfo/findInfooverdue',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "urgent": num,
            "date": ModelTime
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        para = `  <ul class="work-older-list-ul">
                                        <li>工单编号</li>
                                        <li>发生时间</li>
                                        <li>街镇名</li>
                                        <li>主责部门</li>
                                        <li>管理要点</li>
                                        <li>诉求内容</li>
                                    </ul>`
        document.getElementById("GongDanTitleID").innerHTML = para
        para = ''
        for (let i = 0; i < res.length; i++) {
            para += '<ul class="work-older-list-ul ul-line ">'
                + '<li>' + res[i].TASKID + '</li>'
                + '<li>' + res[i].DISCOVERTIME + '</li>'
                + '<li>' + res[i].STREETNAME + '</li>'
                + '<li>' + res[i].EXECUTEDEPTNAME + '</li>'
                + '<li>' + res[i].ATNAME + '</li>'
                + '<li>' + res[i].DESCRIPTION + '</li>'
                + '</ul>'
        }
        document.getElementById("GongDanID").innerHTML = para
        gongdanlist = res
        onclickModelBoxFun()
    })
}

/**获取工单列表*/
function GongDan(num) {
    document.getElementById("GongDanID").innerHTML = ''
    document.getElementById("GongDanIDCopy").innerHTML = ''
    let para = {
        url: ORACLE_URL + '/taskInfo/findInfoUrgent',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "urgent": num,
            "date": ModelTime
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then((res) => {
        if (res[0].count !== undefined && res[0].count == "0") {
            para = `<div style="text-align: center;font-size: 24px;color: white;margin-top: 20px">当日暂无数据</div>`
            document.getElementById("GongDanID").innerHTML = para
            document.getElementById("GongDanIDCopy").innerHTML = ""

        } else {
            para = `  <ul class="work-older-list-ul">
                                        <li>工单编号</li>
                                        <li>发生时间</li>
                                        <li>街镇名</li>
                                        <li>主责部门</li>
                                        <li>管理要点</li>
                                        <li>诉求内容</li>
                                    </ul>`
            document.getElementById("GongDanTitleID").innerHTML = para
            para = ''
            for (let i = 0; i < res.length; i++) {
                para += '<ul class="work-older-list-ul ul-line ">'
                    + '<li>' + res[i].TASKID + '</li>'
                    + '<li>' + res[i].DISCOVERTIME + '</li>'
                    + '<li>' + res[i].STREETNAME + '</li>'
                    + '<li>' + res[i].EXECUTEDEPTNAME + '</li>'
                    + '<li>' + res[i].ATNAME + '</li>'
                    + '<li >' + res[i].DESCRIPTION + '</li>'
                    + '</ul>'
            }
            document.getElementById("GongDanID").innerHTML = para
            gongdanlist = res
            onclickModelBoxFun()


        }
    })
}

/*点击工单模态框*/
function onclickModelBoxFun(){
    let lis = document.querySelectorAll("#GongDanID ul")
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            let childLI = document.querySelectorAll(".work-older-list-ul .ul-line")
            let para = `
              <p style="font-size: 1.5rem;color: white;padding-left1.667rem:">诉求内容</p>
                                            <div style="padding: 1.667rem 3.333rem;color: #d0c7c7;line-height:2rem;height: 19.333rem ">${gongdanlist[i].DESCRIPTION}</div>
            `
            document.getElementById("ModalsmallID").style.display = "block"
            document.getElementById("ModalsmallRoomID").innerHTML = para
        }
    }
    let liscopy = document.querySelectorAll("#GongDanIDCopy ul")
    for (let i = 0; i < liscopy.length; i++) {
        liscopy[i].onclick = function () {
            let para = `
       <p style="font-size: 1.5rem;color: white;padding-left1.667rem:">诉求内容</p>
                          <div style="padding: 1.667rem 3.333rem;
                          color: #d0c7c7;line-height:2rem;height: 19.333rem ">${gongdanlist[i].DESCRIPTION}</div>
            `
            document.getElementById("ModalsmallID").style.display = "block"
            document.getElementById("ModalsmallRoomID").innerHTML = para
        }
    }
}

/*反复工单*/
function GongDanfanhu(num) {
    let para = {
        url: ORACLE_URL + '/taskInfo/findInfoback',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "urgent": num,
            "date": ModelTime
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        para = `  <ul class="work-older-list-ul">
      <li>工单编号</li>
                                        <li>发生时间</li>
                                        <li>街镇名</li>
                                        <li>主责部门</li>
                                        <li>管理要点</li>
                                        <li>诉求内容</li>
            </ul>`
        document.getElementById("GongDanTitleID").innerHTML = para
        para = ''
        for (let i = 0; i < res.length; i++) {
            para += '<ul class="work-older-list-ul ul-line ">'
                + '<li>' + res[i].TASKID + '</li>'
                + '<li>' + res[i].DISCOVERTIME + '</li>'
                + '<li>' + res[i].STREETNAME + '</li>'
                + '<li>' + res[i].EXECUTEDEPTNAME + '</li>'
                + '<li>' + res[i].ATNAME + '</li>'
                + '<li>' + res[i].DESCRIPTION + '</li>'
                + '</ul>'
        }
        document.getElementById("GongDanID").innerHTML = para
        gongdanlist = res
        onclickModelBoxFun()
    })
}
function claerFuns() {
    document.getElementById("ModalsmallID").style.display = "none"
}
function findproblemFun() {
    let para = {
        // url: 'http://10.237.115.83:8089/oracleConnection/taskInfo/findproblem',
        url: ORACLE_URL + '/taskInfo/findproblem',
        type: 'get',
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        ajaxPromise({
            url: ORACLE_URL + '/taskInfo/findInfozcSort',
            type: 'post',
            dataType: 'JSON',
            data: JSON.stringify({}),
        }).then(tree => {
            res[res.length - 1].children = tree
            para = ''
            res.forEach(e => {
                para += ` <div class="level">
                    <div class="levelTitle">${e.typename}</div>
                    <div class="level_">
                        <div class="level_title">${e.typename}</div>
                        ${e.children.map(item => {
                    return ` <a>${item}</a>`
                }).join("")}
                    </div>
                </div>
            `
            })
            document.getElementById("pmVerticalRightOut").innerHTML = para
        })

    })
}


/**轮播动画**/
function rollInit(){
    let ul1 = document.getElementById("GongDanID");
    let ul2 = document.getElementById("GongDanIDCopy");
    let rollbox = document.getElementById("GongDanIDBox");
    roll(50, ul1, ul2, rollbox)
}
function roll(t, ul1, ul2, rollbox) {
    ul2.innerHTML = ul1.innerHTML;
    rollbox.scrollTop = 0;
    let lis = document.querySelectorAll("#GongDanID ul")
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            let childLI = document.querySelectorAll(".work-older-list-ul .ul-line")
            let para = `
              <p style="font-size: 1.5rem;color: white;padding-left1.667rem:">诉求内容</p>
                                            <div style="padding: 1.667rem 3.333rem;color: #d0c7c7;line-height:2rem;height: 19.333rem ">${gongdanlist[i].DESCRIPTION}</div>
            `
            document.getElementById("ModalsmallID").style.display = "block"
            document.getElementById("ModalsmallRoomID").innerHTML = para
        }
    }
    let liscopy = document.querySelectorAll("#GongDanIDCopy ul")
    for (let i = 0; i < liscopy.length; i++) {
        liscopy[i].onclick = function () {
            let para = `
       <p style="font-size: 1.5rem;color: white;padding-left1.667rem:">诉求内容</p>
                          <div style="padding: 1.667rem 3.333rem;
                          color: #d0c7c7;line-height:2rem;height: 19.333rem ">${gongdanlist[i].DESCRIPTION}</div>
            `
            document.getElementById("ModalsmallID").style.display = "block"
            document.getElementById("ModalsmallRoomID").innerHTML = para
        }
    }
    let timer = setInterval(rollStart, t);
    rollbox.onmouseover = function () {
        clearInterval(timer);
    }
    rollbox.onmouseout = function () {
        timer = setInterval(rollStart, t);
    }
}
function rollStart() {
    let ul1 = document.getElementById("GongDanID");
    let rollbox = document.getElementById("GongDanIDBox");
    if (rollbox.scrollTop >= ul1.scrollHeight) {
        rollbox.scrollTop = 0;
    } else {
        rollbox.scrollTop++;
    }
}



function findbcName() {
    let para = {
        // url: 'http://localhost:8090/taskInfo/findInfoUrgent',
        url: ORACLE_URL + '/taskInfo/findbcName',
        async: true,
        type: 'get',
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
    })
}

/**热词下钻数据*/
function HostSteetFun(ModelTime, name) {
    let para = {
        url: ORACLE_URL + '/taskInfo/findscNameStreet',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": ModelTime,
            "scname": name,

        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        res.map(item => {
            LastHeatmMapData.map(child => {
                if (child.name == item.STREETNAME) {
                    child.count = item.COUNTSCNAME
                }
            })
        })
        heatmapData = ''
        heatmapData = LastHeatmMapData
        initMap(date, bcname, scname)


    })
}

/**统计分析-基本情况*/
function findbcNameType() {
    let para = {
        url: ORACLE_URL + '/taskInfo/findbcNameType',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": ModelTime,
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        let color = ["#F9392D", "#4489D3", "#FFCE14", "#2cc78f",]
        let newres = ''
        newres = res.sort(function (a, b) {
            return b.COUNTINFOBCNAME - a.COUNTINFOBCNAME;
        });
        let attackSourcesData = []
        let attackSourcesName = []
        let attackSourcesColor = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff', '#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#1089E7', '#F57474', '#F57474']
        newres.map(item => {
            attackSourcesName.push(item.INFOBCNAME)
            attackSourcesData.push(item.COUNTINFOBCNAME)
        })
        let option = MyEcharts.EchartsOption.Ranking('name', attackSourcesName, attackSourcesData, attackSourcesColor, '次')
        var FindbcNameTypeChart = echarts.init(document.getElementById("SmallECharts3"));
        FindbcNameTypeChart.setOption(option);
        FindbcNameTypeChart.on("click", function (param) {
            console.log(param.name, param.data.value)
            document.getElementById("headId").innerHTML = param.name
            document.getElementById("DmMainId").innerHTML = ''
            findbcNamesc(param.name)
            JiBenXinXi(ModelTime, param.name, param.data.value)
            JiBenXinXiReLiability(ModelTime, param.name)

        })
    })
}

/**返回上一级**/
function backBtn() {
    document.getElementById("DmMainId").innerHTML = ''
    document.getElementById("backBtnclass").style.display = "none"
    document.getElementById("SmallECharts3").style.display = "block"
    document.getElementById("SmallECharts3copy").style.display = "none"
    findscName()
}

/**获取基本信息下钻数据*/
function JiBenXinXi(ModelTime, name, value) {
    para = {
        url: ORACLE_URL + '/taskInfo/findscNameType',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": ModelTime,
            "bcname": name,
            "countbcname": value
        }),
        dataType: 'JSON',
    }

    ajaxPromise(para).then(res => {
        document.getElementById("SmallECharts3copy").style.display = "block"
        document.getElementById("backBtnclass").style.display = "flex"
        document.getElementById("SmallECharts3").style.display = "none"
        console.log(res, '下钻数据', document.getElementById("SmallECharts3copy"))
        let attackSourcesData2 = []
        let attackSourcesName2 = []
        let attackSourcesColor2 = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff', '#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#1089E7', '#F57474', '#F57474']
        res.map(item => {
            attackSourcesName2.push(item.INFOSCNAME)
            attackSourcesData2.push(item.COUNTSCNAME)
        })
        let option2 = MyEcharts.EchartsOption.Ranking('name', attackSourcesName2, attackSourcesData2, attackSourcesColor2, '次')
        let FindbcNameTypeChart2 = echarts.init(document.getElementById("SmallECharts3copy"));
        FindbcNameTypeChart2.setOption(option2);
    })
}

/**获取基本信息下钻数据热力图*/
function JiBenXinXiReLiability(ModelTime, name) {
    para = {
        url: ORACLE_URL + '/taskInfo/findcNameStreet',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": ModelTime,
            "bcname": name,

        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        res.map(item => {
            LastHeatmMapData.map(child => {
                if (child.name == item.STREETNAME) {
                    child.count = item.COUNTSCNAME
                }
            })
        })
        heatmapData = ''
        heatmapData = LastHeatmMapData
        console.log(ModelTime, name, '查看')

        initMap(ModelTime, name, "物业")


    })
}

/**获取街镇委办局公司的数据*/
function findTypeMsg(time, name) {

    return new Promise((resolve, reject) => {
        let para = {
            url: ORACLE_URL + '/taskInfo/findTypeMsg',
            async: true,
            type: 'post',
            data: JSON.stringify({
                "date": ModelTime,
                "typeName": name
            }),
            dataType: 'JSON',
        }
        ajaxPromise(para).then(res => {
            resolve(res)

        })
    })
}

/**获取热词*/
function findscName() {
    new Promise((resolve, reject) => {
        let para = {
            url: ORACLE_URL + '/taskInfohots/findhotsName',
            async: true,
            type: 'post',
            data: JSON.stringify({
                "date": ModelTime,
            }),
            dataType: 'JSON',
        }
        ajaxPromise(para).then(res => {
            document.getElementById("DmMainId").innerHTML = ''
            if (res.data.length > 0) {
                let list = []
                res.data.map(item => {
                    list.push({name: item.hotwords, value: item.counthot})
                })
                document.getElementById("DmMainId").innerHTML = `<div id="dm"></div>`
                BulletChat(list, res.median)

            }
        })
    })
}

/***
 * 根据大类获取热词的数量
 */
function findbcNamesc(name, scname) {
    let para = {
        url: ORACLE_URL + '/taskInfohots/findbcscHotsName',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": ModelTime,
            "bcname": name,
            scname: scname
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        console.log('123123')
        if (res.data.length > 0) {
            let list = []
            res.data.map(item => {
                list.push({name: item.hotwords, value: item.counthot})
            })
            document.getElementById("DmMainId").innerHTML = `
                                <div id="dm"></div>`
            BulletChat(list, res.median)
        }
    })
}
/**弹幕**/
function BulletChat(list, median) {
    let newList = list
    count(newList.length, newList, median)
}

var count = (function () {
    let timers;
    let i = 0;

    function change(tar, newList, median) {
        if (i == tar) {
            i = 0
        }
        init(newList[i].name, newList[i].value, median)
        i++;
        timers = setTimeout(function () {
            change(newList.length, newList, median)
        }, 2000)
    }

    return change;
})()

function init(newText, value, median) {
    clearInterval(timer);
    let text = newText;
    addBarrage(text, value, median)
}

var timer;
var colors = ["#fec101", "#b5b8cd", "#ff6226", "#2cc78f"]

function addBarrage(text, value, median) {
    // let index = parseInt(Math.random() * colors.length); //随机弹幕颜色
    let screenW = 500;
    let screenH = dm.offsetHeight;
    let max = Math.floor(screenH / 40);
    let height = 10 + 40 * (parseInt(Math.random() * (max + 1)) - 1);
    let span = document.createElement('span');
    span.style.left = screenW + 'px';
    span.style.top = height + 'px';
    if (value > (median / 2) * 3) {
        span.style.color = colors[2];
    } else if (value > median) {
        span.style.color = colors[0];
    } else if (value > median / 2) {
        span.style.color = colors[3];
    } else {
        span.style.color = colors[1];
    }
    span.innerHTML = text + ' x' + value;
    span.style.fontSize = 16 + 'px'
    span.SetType = true;
    let dmDom = document.getElementById('dm');
    console.log(dmDom.getElementsByTagName("span").length)
    if (dmDom.getElementsByTagName("span").length < 10) {
        dmDom.appendChild(span);
    }

    timer = setInterval(move, 10);

}

function move() {
    let arr = [];
    let oSpan = document.getElementsByTagName('span');
    for (let i = 0; i < oSpan.length; i++) {
        oSpan[i].onmouseover = function () {
            oSpan[i].style.zIndex = '9999'
            oSpan[i].SetType = false
        }
        oSpan[i].onmouseout = function () {
            oSpan[i].SetType = true
            oSpan[i].style.zIndex = '1'
        }
    }
    for (var i = 0; i < oSpan.length; i++) {
        arr.push(oSpan[i].offsetLeft);
        if (oSpan[i].SetType == true) {
            arr[i] -= 1;
        } else {
            arr[i] = arr[i]
        }
        oSpan[i].style.left = arr[i] + 'px';
        let dmDom = document.getElementById('dm');
        if (arr[i] < 0) {
            if (dmDom.childNodes.length>0){
                dmDom.removeChild(dmDom.childNodes[0]);
            }

        }
    }
}

/**3D球**/
var radius = 100;
var dtr = Math.PI / 200;
var d = 300;

var mcList = [];
var active = false;
var lasta = 1;
var lastb = 1;
var distr = true;
var tspeed = 2;
var size = 250;

var mouseX = 0;
var mouseY = 0;

var howElliptical = 1;

var aA = null;
var oDiv = null;

function rotateFun() {
    radius = 100;
    dtr = Math.PI / 200;
    d = 300;

    mcList = [];
    active = false;
    lasta = 1;
    lastb = 1;
    distr = true;
    tspeed = 2;
    size = 250;

    mouseX = 0;
    mouseY = 0;

    howElliptical = 1;

    aA = null;
    oDiv = null;
    active = false;
    var i = 0;
    var oTag = null;

    oDiv = document.getElementById('rotate');

    aA = oDiv.getElementsByTagName('a');

    for (i = 0; i < aA.length; i++) {
        oTag = {};

        oTag.offsetWidth = aA[i].offsetWidth;
        oTag.offsetHeight = aA[i].offsetHeight;

        mcList.push(oTag);

    }

    sineCosine(0, 0, 0);

    positionAll();
    oDiv.onmouseover = function () {
        active = false;
    };
    oDiv.onmouseout = function () {
        active = true;
    };

    oDiv.onmousemove = function (ev) {
        var oEvent = window.event || ev;

        mouseX = oEvent.clientX - (oDiv.offsetLeft + oDiv.offsetWidth / 2);
        mouseY = oEvent.clientY - (oDiv.offsetTop + oDiv.offsetHeight / 2);

        mouseX /= 5;
        mouseY /= 5;
    };

    setInterval(update, 30);
};

function update() {
    var a;
    var b;

    if (active) {
        a = (-Math.min(Math.max(-mouseY, -size), size) / radius) * tspeed;
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * tspeed;
    } else {
        a = lasta * 0.98;
        b = lastb * 0.98;
    }

    lasta = a;
    lastb = b;

    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
        return;
    }

    var c = 0;
    sineCosine(a, b, c);
    for (var j = 0; j < mcList.length; j++) {
        var rx1 = mcList[j].cx;
        var ry1 = mcList[j].cy * ca + mcList[j].cz * (-sa);
        var rz1 = mcList[j].cy * sa + mcList[j].cz * ca;

        var rx2 = rx1 * cb + rz1 * sb;
        var ry2 = ry1;
        var rz2 = rx1 * (-sb) + rz1 * cb;

        var rx3 = rx2 * cc + ry2 * (-sc);
        var ry3 = rx2 * sc + ry2 * cc;
        var rz3 = rz2;

        mcList[j].cx = rx3;
        mcList[j].cy = ry3;
        mcList[j].cz = rz3;

        per = d / (d + rz3);

        mcList[j].x = (howElliptical * rx3 * per) - (howElliptical * 2);
        mcList[j].y = ry3 * per;
        mcList[j].scale = per;
        mcList[j].alpha = per;

        mcList[j].alpha = (mcList[j].alpha - 0.6) * (10 / 6);
    }

    doPosition();
    depthSort();
}

function depthSort() {
    var i = 0;
    var aTmp = [];

    for (i = 0; i < aA.length; i++) {
        aTmp.push(aA[i]);
    }

    aTmp.sort
    (
        function (vItem1, vItem2) {
            if (vItem1.cz > vItem2.cz) {
                return -1;
            } else if (vItem1.cz < vItem2.cz) {
                return 1;
            } else {
                return 0;
            }
        }
    );

    for (i = 0; i < aTmp.length; i++) {
        aTmp[i].style.zIndex = i;
    }
}

function positionAll() {
    var phi = 0;
    var theta = 0;
    var max = mcList.length;
    var i = 0;

    var aTmp = [];
    var oFragment = document.createDocumentFragment();


    for (i = 0; i < aA.length; i++) {
        aTmp.push(aA[i]);
    }

    aTmp.sort
    (
        function () {
            return Math.random() < 0.5 ? 1 : -1;
        }
    );

    for (i = 0; i < aTmp.length; i++) {
        oFragment.appendChild(aTmp[i]);
    }

    oDiv.appendChild(oFragment);

    for (var i = 1; i < max + 1; i++) {
        if (distr) {
            phi = Math.acos(-1 + (2 * i - 1) / max);
            theta = Math.sqrt(max * Math.PI) * phi;
        } else {
            phi = Math.random() * (Math.PI);
            theta = Math.random() * (2 * Math.PI);
        }

        mcList[i - 1].cx = radius * Math.cos(theta) * Math.sin(phi);
        mcList[i - 1].cy = radius * Math.sin(theta) * Math.sin(phi);
        mcList[i - 1].cz = radius * Math.cos(phi);

        aA[i - 1].style.left = mcList[i - 1].cx + oDiv.offsetWidth / 2 - mcList[i - 1].offsetWidth / 2 + 'px';
        aA[i - 1].style.top = mcList[i - 1].cy + oDiv.offsetHeight / 2 - mcList[i - 1].offsetHeight / 2 + 'px';
    }
}

function doPosition() {
    var l = oDiv.offsetWidth / 2;
    var t = oDiv.offsetHeight / 2;
    for (var i = 0; i < mcList.length; i++) {
        aA[i].style.left = mcList[i].cx + l - mcList[i].offsetWidth / 2 + 'px';
        aA[i].style.top = mcList[i].cy + t - mcList[i].offsetHeight / 2 + 'px';

        aA[i].style.fontSize = Math.ceil(8 * mcList[i].scale / 2) + 8 + 'px';

        aA[i].style.filter = "alpha(opacity=" + 100 * mcList[i].alpha + ")";
        aA[i].style.opacity = mcList[i].alpha;
    }
}

function sineCosine(a, b, c) {
    sa = Math.sin(a * dtr);
    ca = Math.cos(a * dtr);
    sb = Math.sin(b * dtr);
    cb = Math.cos(b * dtr);
    sc = Math.sin(c * dtr);
    cc = Math.cos(c * dtr);
}