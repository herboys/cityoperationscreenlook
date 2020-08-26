function ToOnload() {

    // countWork('日')
    GongDan(1)
    // findbcName()
    // findproblemFun()
    initMap()
    init1()
    TabsFun(3)
    TabsFun(6)
    findbcNameType()
    findscName('年').then(res => {

        let List = res.slice(0, 10).sort(function (a, b) {
            return b.COUNTATNAME - a.COUNTATNAME;
        });

        let attackSourcesData = []
        let attackSourcesName = []
        let attackSourcesColor = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff', '#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#1089E7', '#F57474', '#F57474']
        List.map(item => {
            attackSourcesName.push(item.ATNAME)
            attackSourcesData.push(item.COUNTATNAME)
        })
        MyEcharts.initChart(MyEcharts.EchartsOption.Ranking('name', attackSourcesName, attackSourcesData, attackSourcesColor, '次'), "SmallECharts4")


    })

}


function TabsFun(num) {
    let para = document.getElementsByClassName("Satisfaction-warp-item-header-left")
    let data = ''
    let color = ''
    let xData = []
    let yData = []
    let zData = []
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
            color = ["#fec101", "#b5b8cd ", "#ff6226", "#f60000", "#2cc78f", "#2ca7f9"]
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
                    yData.push(item.COUNTNAME)
                    zData.push(item.COUNTNULL)
                })
                MyEcharts.initChart(MyEcharts.EchartsOption.goods(xData, yData, zData, "#F9392D"), "SmallECharts")
            })

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
                    yData.push(item.COUNTNAME)
                    zData.push(item.COUNTNULL)
                })
                MyEcharts.initChart(MyEcharts.EchartsOption.goods(xData, yData, zData, "#4489D3"), "SmallECharts")
            })
            break;
        case 5:
            para[2].innerHTML = '<div class="banner2" onclick="TabsFun(3)">' + '街镇' + '</div>' +
                '<div class="banner2" onclick="TabsFun(4)">' + '委办局' + '</div>'
                + '<div class="banner1" onclick="TabsFun(5)">' + '公司' + '</div>'
            findTypeMsg('年', "公司").then(res => {
                res.map(item => {
                    xData.push(item.DEPTNAME)
                    yData.push(item.COUNTNAME)
                    zData.push(item.COUNTNULL)
                })
                MyEcharts.initChart(MyEcharts.EchartsOption.goods(xData, yData, zData, "#04FDF5"), "SmallECharts")
            })
            break;
            break;
        case 6:
            para[3].innerHTML = `     <div class="banner1" onclick="TabsFun(6)">紧急工单</div>
                                <div class="banner2" onclick="TabsFun(7)">非紧急工单</div>
                                <div class="banner2" onclick="TabsFun(8)">反复退单</div>`
            GongDan(1)
            break;
        case 7:
            para[3].innerHTML = `     <div class="banner2" onclick="TabsFun(6)">紧急工单</div>
                                <div class="banner1" onclick="TabsFun(7)">非紧急工单</div>
                                <div class="banner2" onclick="TabsFun(8)">反复退单</div>`
            GongDan(0)
            break;
            break;
        case 8:
            para[3].innerHTML = `     <div class="banner2" onclick="TabsFun(6)">紧急工单</div>
                                <div class="banner2" onclick="TabsFun(7)">非紧急工单</div>
                                <div class="banner1" onclick="TabsFun(8)">反复退单</div>`
            GongDanfanhu()
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

/**获取工单列表*/
function GongDan(num) {
    let para = {
        // url: 'http://localhost:8090/taskInfo/findInfoUrgent',
        url: ORACLE_URL + '/taskInfo/findInfoUrgent',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "urgent": num,
            "date": ModelTime
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        if (res[0].count !== undefined && res[0].count == "0") {
            para = `<div style="text-align: center;font-size: 24px;color: white;margin-top: 20px">当日暂无数据</div>`
            document.getElementById("GongDanID").innerHTML = para
        } else {


            para = `  <ul class="work-older-list-ul">
                                        <li>工单编号</li>
                                        <li>发生时间</li>
                                        <li>案例来源</li>
                                        <li>截至日期</li>
                                        <li>最后期限</li>
                                        <li>工单状态</li>
                                    </ul>`
            for (let i = 0; i < res.length; i++) {
                if (i < 2) {
                    para += '<ul class="work-older-list-ul ul-line ">'
                        + '<li>' + res[i].TASKID + '</li>'
                        + '<li>' + res[i].DISCOVERTIME + '</li>'
                        + '<li>' + res[i].STREETNAME + '</li>'
                        + '<li>' + res[i].LASTSOLVINGTIME + '</li>'
                        + '<li>' + res[i].ALLENDTIME + '</li>'
                        + '<li>' + res[i].STATUSNAME + '</li>'
                        + '</ul>'
                }
            }

            document.getElementById("GongDanID").innerHTML = para
        }
    })
}

function GongDanfanhu(num) {
    let para = {
        // url: 'http://localhost:8090/taskInfo/findInfoUrgent',
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
        if (res[0].count !== undefined && res[0].count == "0") {
            para = `<div style="text-align: center;font-size: 24px;color: white;margin-top: 20px">当日暂无数据</div>`
            document.getElementById("GongDanID").innerHTML = para
        } else {


            para = `  <ul class="work-older-list-ul">
                                        <li>工单编号</li>
                                        <li>发生时间</li>
                                        <li>案例来源</li>
                                        <li>退单次数</li>
                                        <li>最后期限</li>
                                        <li>工单状态</li>
                                    </ul>`
            for (let i = 0; i < res.length; i++) {
                if (i < 2) {
                    para += '<ul class="work-older-list-ul ul-line ">'
                        + '<li>' + res[i].TASKID + '</li>'
                        + '<li>' + res[i].DISCOVERTIME + '</li>'
                        + '<li>' + res[i].STREETNAME + '</li>'
                        + '<li>' + res[i].BACKCOUNT + '</li>'
                        + '<li>' + res[i].ALLENDTIME + '</li>'
                        + '<li>' + res[i].STATUSNAME + '</li>'
                        + '</ul>'
                }
            }

            document.getElementById("GongDanID").innerHTML = para
        }
    })
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
        let soption = MyEcharts.EchartsOption.Ranking('name', attackSourcesName, attackSourcesData, attackSourcesColor, '次')
        // console.log(soption)
        // MyEcharts.on("click", eConsole);
        MyEcharts.initChart(soption, "SmallECharts3")
    })
}

/**获取紧急工单非紧急工单的数量*/
function countWork(type) {
    let para = {
        // url: 'http://localhost:8090/taskInfo/countWork',
        url: ORACLE_URL + '/taskInfo/countWork',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": ModelTime,
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {

        para = `      <li><p>紧急工单</p>
                                <div>${res.counturgentMsg}次</div>
                                </li><li><p>非紧急工单</p>
                                <div>${res.countNullurgentMsg}次</div>
                                </li><li><p>反复退单</p>
                                <div>${res.countInfoBack}次</div>
                                </li>`
        document.getElementById("WorkorderID").innerHTML = para
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
function findscName(time) {
    return new Promise((resolve, reject) => {
        let para = {
            url: ORACLE_URL + '/taskInfo/findscName',
            async: true,
            type: 'post',
            data: JSON.stringify({
                "date": ModelTime,
            }),
            dataType: 'JSON',
        }
        ajaxPromise(para).then(res => {
            resolve(res)

        })
    })
}


