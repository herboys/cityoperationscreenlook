function TabsFun(num) {
    let para = document.getElementsByClassName("Satisfaction-warp-item-header-left")
    let data = ''
    let color = ''
    let xData = ''
    let yData = ''
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
                '<div class="banner2" onclick="TabsFun(4)">' + '趋势分析' + '</div>'
            break;
            break;
        case 4:
            para[2].innerHTML = '<div class="banner2" onclick="TabsFun(3)">' + '街镇' + '</div>' +
                '<div class="banner1" onclick="TabsFun(4)">' + '趋势分析' + '</div>'

            break;
        case 5:
            para[1].innerHTML = '<div class="banner1" onclick="TabsFun(5)">' + '热词' + '</div>'
            // + '<div class="banner2" onclick="TabsFun(6)">' + '趋势分析' + '</div>'
            attackSourcesData = ["340", "337", "330", "189", "154", "150", "103", "99", "90", "74", "73", "55"]
            attackSourcesName = ["江桥镇", "马陆镇", "安亭镇", "南翔镇", "嘉定工业区", "真新街道", "菊园新区", "徐行镇", "外冈镇", "嘉定镇街道", "华亭镇", "新成路街道"]
            attackSourcesColor = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff', '#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#1089E7', '#F57474', '#F57474']
            MyEcharts.initChart(MyEcharts.EchartsOption.Ranking('name', attackSourcesName, attackSourcesData, attackSourcesColor, '%'), "SmallECharts4")
            break;
            break;
        // case 6:
        //     para[1].innerHTML = '<div class="banner2" onclick="TabsFun(5)">' + '效能评估' + '</div>' +
        //         '<div class="banner1" onclick="TabsFun(6)">' + '趋势分析' + '</div>'
        //
        //     xData =  ["江桥镇", "马陆镇", "安亭镇", "南翔镇", "嘉定工业区", "真新街道", "菊园新区", "徐行镇", "外冈镇", "嘉定镇街道", "华亭镇", "新成路街道"]
        //     yData = ["340", "337", "330", "189", "154", "150", "103", "99", "90", "74", "73", "55"]
        //     MyEcharts.initChart(MyEcharts.EchartsOption.bar(xData,yData), "SmallECharts4")
        //     break;
        case 7:
            para[3].innerHTML = '<div class="banner1" onclick="TabsFun(7)">' + '委办局(公司)' + '</div>' +
                '<div class="banner2" onclick="TabsFun(8)">' + '趋势分析' + '</div>'
            break;
            break;
        case 8:
            para[3].innerHTML = '<div class="banner2" onclick="TabsFun(7)">' + '委办局(公司)' + '</div>' +
                '<div class="banner1" onclick="TabsFun(8)">' + '趋势分析' + '</div>'
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


function GongDan(num) {
    let para = {
        url: 'http://localhost:8090/taskInfo/findInfoUrgent',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "urgent": num,
            "date": "2020-08"
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        para = ''
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
    })
}


function findproblemFun() {
    let para = {
        url: 'http://localhost:8090/taskInfo/findproblem',
        type: 'get',
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        ajaxPromise({url:'http://localhost:8090/taskInfo/findInfozcSort',type:'post',dataType: 'JSON',data:JSON.stringify({}),}).then(tree=>{
            console.log(res,tree)
            res[res.length-1].children=tree
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

