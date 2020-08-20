function newonload() {
    initMap();
    init1()
    MyEcharts.initChart(MyEcharts.EchartsOption.Ranking('name'), "SmallECharts4")
    EndFacilities()
}

/**
 * @name:末端处置设施在线检测
 * */
function EndFacilities() {
    let para = {
        url:'/sh/garbageSort/getGarbageContentDisplay',
        async: true,
        type: 'get',
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        if (res.status === 'OK') {
            let para = ''
            console.log(res, '末端处置设施在线检测')
            for (let i = 0; i < res.data.length; i++) {
                para += ' <div class="GarBage-child-item GarBage-child-end">'
                    + '<img src="../Modal/images/icon_.png ">'
                    + '   <div>'
                    + '  <p>' + res.data[i].pointName + '</p>'
                    + '<span>' + res.data[i].shuntOneDayTotal + '</span>'
                    + '</div>'
                    + ' </div>'
            }
            document.getElementById("EndFacilitiesID").innerHTML = para
        } else {
            alert('末端处置设施在线检测接口发生错误')
        }
    })

}