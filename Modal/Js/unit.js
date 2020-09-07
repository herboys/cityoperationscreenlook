var JWBsetInterval;
function ToOnload() {

    var gongdanlist = []
    var basicFunTimeName = ''
    var farstlist = ''
    GongDan(1)
    TabsFun(3)
    TabsFun(6)
    findbcNameType()
    findscName()
    rollInit()
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
    let myChart = ''
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
            findTypeStreetName()
            break;
            break;
        case 4:
            para[2].innerHTML = '<div class="banner2" onclick="TabsFun(3)">' + '街镇' + '</div>' +
                '<div class="banner1" onclick="TabsFun(4)">' + '委办局' + '</div>'
                + '<div class="banner2" onclick="TabsFun(5)">' + '公司' + '</div>'
            findTypedeptName()
            break;
        case 5:
            para[2].innerHTML = '<div class="banner2" onclick="TabsFun(3)">' + '街镇' + '</div>' +
                '<div class="banner2" onclick="TabsFun(4)">' + '委办局' + '</div>'
                + '<div class="banner1" onclick="TabsFun(5)">' + '公司' + '</div>'
            findTypeeDeptPart()
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
        url: ORACLE_URL + '/taskinfowork/findInfooverdue',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "urgent": num,
            "date": dropdownFunTime
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        para = `  <ul class="work-older-list-ul">
                                        <li>工单编号</li>
                                        <li>发生时间</li>
                                        <li>街镇名</li>
                                        <li>截至时间</li>
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
                + '<li>' + res[i].LASTSOLVINGTIME + '</li>'
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
        url: ORACLE_URL + '/taskinfowork/findInfourgent',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "urgent": num,
            "date": dropdownFunTime
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then((res) => {
        if (res[0].count !== undefined && res[0].count == "0") {
            para = `<div style="text-align: center;font-size: 24px;color: white;margin-top: 20px">当日暂无数据</div>`
            document.getElementById("GongDanID").innerHTML = para
            document.getElementById("GongDanIDCopy").innerHTML = ""

        } else {
            if (num==0) {
                para = `  <ul class="work-older-list-ul">
                                        <li>工单编号</li>
                                        <li>发生时间</li>
                                        <li>街镇名</li>
                                        <li>重复次数</li>
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
                        + '<li>' + res[i].COUNTSIMILARCASESN + '</li>'
                        + '<li>' + res[i].ATNAME + '</li>'
                        + '<li >' + res[i].DESCRIPTION + '</li>'
                        + '</ul>'
                }
                document.getElementById("GongDanID").innerHTML = para
                gongdanlist = res
                onclickModelBoxFun()
            }else {
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

        }
    })
}

/*点击工单模态框*/
function onclickModelBoxFun() {
    let lis = document.querySelectorAll("#GongDanID ul")
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            let childLI = document.querySelectorAll(".work-older-list-ul .ul-line")
            let para = `
              <p style="display: inline-block;font-size: 1rem;color: white;padding-left1.667rem:">地址信息:<p style="color: #d0c7c7;display: inline-block;margin-left: 1.667rem">${gongdanlist[i].ADDRESS}</p></p>      
              <p style="display: inline-block;font-size: 1rem;color: white;padding-left1.667rem:">来电信息:<p style="color: #d0c7c7;display: inline-block;margin-left: 1.667rem">${gongdanlist[i].CONTACTINFO}</p></p>      
              <p style="font-size: 1rem;color: white;padding-left1.667rem:">诉求内容:</p>      
              <div style="padding: 1.667rem 3.333rem;padding-top:0px;color: #d0c7c7;line-height:2rem;height: 16rem;overflow: scroll ">${gongdanlist[i].DESCRIPTION}</div>
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
        url: ORACLE_URL + '/taskinfowork/findInfoback',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "urgent": num,
            "date": dropdownFunTime
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        para = `  <ul class="work-older-list-ul">
      <li>工单编号</li>
                                        <li>发生时间</li>
                                        <li>街镇名</li>
                                        <li>反复退单</li>
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
                + '<li>' + res[i].BACKCOUNT + '</li>'
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

/*获取前八的管理要点*/
function findInfozcSortFun() {
    let para = {
        url: ORACLE_URL + '/taskInfo/findInfozcSort',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "urgent": num,
            "date": dropdownFunTime
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        console.log(para)
    })
}

/**轮播动画**/
function rollInit() {
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

/**统计分析-基本情况*/
function findbcNameType() {
    let para = {
        url: ORACLE_URL + '/taskInfo/findInfozcSort',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": basicFunTime,
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        let color = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff', '#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#1089E7', '#F57474', '#F57474']
        para = ''
        console.log(res)
        res.forEach((item, index) => {
            para += `
                 <ul class="BasicFunIditemul" style=" height: 2.5rem;width: 100%;display: flex;align-items: center">
             <li class="BasicFunIditemtitle" style="display: inline-block;min-width: 1.667rem;height: 1.667rem;background: #2cc78f;border-radius: 50%;color:white;text-align: center;line-height:1.667rem">${index + 1}</li>
             <li class="BasicFunIditemname"  style="display: inline-block;color: white;text-align:center;min-width: 6.667rem">${item.ATNAME}</li>
             <li  style="  cursor: pointer;display:inline-block;height: 1rem;border-radius: 1.667rem;width: 100%;background-color:#4e638b">
             <div class="BasicFunIditem" style="height: 1rem;border-radius: 1.667rem;width: 100%;"></div>
</li>
                     <li  style="display: inline-block;color: white;text-align:center;min-width: 6.667rem">${item.COUNTATNAME}件</li>
            </ul>
          
           `
        })
        document.getElementById("BasicFunId").innerHTML = para
        para= document.querySelectorAll("#BasicFunId .BasicFunIditem")
       let para1= document.querySelectorAll("#BasicFunId .BasicFunIditemtitle")
       let para2= document.querySelectorAll("#BasicFunId .BasicFunIditemname")
       let paraul= document.querySelectorAll("#BasicFunId .BasicFunIditemul")
        res.forEach((item,index)=>{
            para[index].style.width=((item.COUNTATNAME /res[0].COUNTATNAME).toFixed(2))*100+"%"
            para[index].style.backgroundColor=color[index]
            para1[index].style.backgroundColor=color[index]

        })
        for (let i = 0; i < paraul.length; i++) {
            paraul[i].onclick=function (){
                para[i].style.boxShadow=`0px 0px 10px 1px ${color[i]}`
                para1[i].style.boxShadow=`0px 0px 10px 1px ${color[i]}`
                para2[i].style.textBackgroundColor=`0px 0px 10px 1px ${color[i]}`
                para.forEach((item,index)=>{
                    if (i==index){
                    }else {
                        para[index].style.boxShadow=""
                        para1[index].style.boxShadow=""
                        para2[index].style.boxShadow=""
                    }
                })
                basicFunTimeName=para2[i].innerHTML
                findbcsclnglatName(basicFunTime,para2[i].innerHTML,"")
                findbcNamesc(para2[i].innerHTML)
            }
        }
    })
}

/*根据大类和小类获取所有经纬度*/
function findbcsclnglatName(basicFunTime, name, scname) {
    let para = {
        url: ORACLE_URL + '/taskInfo/findbcAtlnglatName',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": basicFunTime,
            "bcname": name,
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        console.log(res)
        findbcsclnglatNameFun(res)

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
        let attackSourcesData2 = []
        let attackSourcesName2 = []
        let attackSourcesColor2 = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff', '#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#1089E7', '#F57474', '#F57474']
        res.map(item => {
            attackSourcesName2.push(item.INFOSCNAME)
            attackSourcesData2.push(item.COUNTSCNAME)
        })
        let option2 = MyEcharts.EchartsOption.Ranking('name', attackSourcesName2, attackSourcesData2, attackSourcesColor2, '件')
        let FindbcNameTypeChart2 = echarts.init(document.getElementById("SmallECharts3copy"));
        FindbcNameTypeChart2.setOption(option2);
        FindbcNameTypeChart2.on("click", function (param) {
            //document.getElementById("headId").innerHTML = param.name
            // document.getElementById("DmMainId").innerHTML = ''
            // findbcNamesc(param.name)
            // JiBenXinXi(ModelTime, param.name, param.data.value)
            // JiBenXinXiReLiability(ModelTime, param.name)
            findbcsclnglatName(document.getElementById("headId").innerHTML, param.name)
        })
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
/*街镇*/
function findTypeStreetName() {

    let para = {
        url: ORACLE_URL + '/taskInfostatis/findTypeStreetName',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": ModelTime,
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        let xData = []
        let yData = []
        let zData = []
        let legend = []

        res.map(item => {
            xData.push(item.STREETNAME)
            zData.push(item.COUNTNAME)
            yData.push(item.PROPORTION)
        })
        legend = ["满意度", "案件数量"]
        document.getElementById("SmallEChartscopy").style.display='none'
        document.getElementById("SmallECharts").style.display='flex'
        MyEcharts.initChart(MyEcharts.EchartsOption.newbar(xData, yData, zData, "#F9392D", legend, "%"), "SmallECharts")
    })
}
/*委办局*/
let yData = []
function findTypedeptName() {
    let para = {
        url: ORACLE_URL + '/taskInfostatis/findTypedeptName',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": ModelTime,
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        document.getElementById("SmallECharts").style.display='none'
        document.getElementById("SmallEChartscopy").style.display='flex'
        let xData = []

        let zData = []
        let legend = []
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
        let container = document.getElementById("SmallEChartscopy")
        myChart = echarts.init(container);
        option = MyEcharts.EchartsOption.newbar2(xData, yData, zData, "#F9392D", legend, "%")

     JWBsetInterval=setInterval( aaaa,2000);
    })
}
function aaaa () {
    if (option.dataZoom[0].endValue == yData.length) {
        option.dataZoom[0].endValue = 6;
        option.dataZoom[0].startValue = 0;
    } else {
        option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
        option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
    }
     myChart.setOption(option, true);
}
function findTypeeDeptPart() {
    let para = {
        url: ORACLE_URL + '/taskInfostatis/findTypeeDeptPart',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": ModelTime,
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        document.getElementById("SmallEChartscopy").style.display='none'
        let xData = []
        let yData = []
        let zData = []
        let legend = []
        let attackSourcesData = ''
        let attackSourcesName = ''
        let attackSourcesColor = ''
        res.map(item => {
            xData.push(item.DEPTNAME)
            zData.push(item.COUNTNAME)
            yData.push(item.PROPORTION)
        })
        document.getElementById("BureauId").style.display = "none"
        document.getElementById("SmallECharts").style.display='flex'
        legend = ["满意度", "案件数量"]
        MyEcharts.initChart(MyEcharts.EchartsOption.newbar(xData, yData, zData, "#F9392D", legend, "%"), "SmallECharts")
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
                "date": basicFunTime,
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
                initRotate(list,res.median,0)
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
        url: ORACLE_URL + '/taskInfohots/findhotsAName',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": basicFunTime,
            "bcname": name,
            scname: scname
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        if (res.data.length > 0) {
            let list = []
            res.data.map(item => {
                list.push({name: item.hotwords, value: item.counthot})
            })
            document.getElementById("DmMainId").innerHTML = `
                                <div id="dm"></div>`
            initRotate(list, res.median,0)
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
        }, 800)
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
    if (dmDom.getElementsByTagName("span").length < 10) {
        dmDom.appendChild(span);
    }

    timer = setInterval(move, 10);

}

function move() {
    let arr = [];
    let oSpan = document.getElementsByTagName('span');
    for (let i = 0; i < oSpan.length; i++) {
        oSpan[i].onclick = function () {
            let hots = document.getElementsByTagName('span')[i].innerHTML.split("x")[0].trim()
            findbcschotslnglatName(hots)
        }
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
            if (dmDom.childNodes.length > 0) {
                dmDom.removeChild(dmDom.childNodes[0]);
            }

        }
    }
}

function findbcschotslnglatName(hots) {
    let para = {
        url: ORACLE_URL + '/taskInfo/findbcAtlnglatName',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": basicFunTime,
            "bcname": basicFunTimeName,
            scname: "",
            hots: hots
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        findbcsclnglatNameFun(res)
    })
}
