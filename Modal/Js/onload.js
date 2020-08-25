function newonload() {
    getPopupFun1()
    var aa =getPopupFun1()
    console.log(aa,'987654321')
    aa.then(res=>{
        console.log(aa,'987654321')
    })

        GetCarNewInfoFun()
    initMap();
    init1()
    EndFacilities()
    TownLifeGarbage()

    intervalFunction()

}

function intervalFunction() {
    let time = 1000 * 60 * 2
    setInterval(EndFacilities, time)
    setInterval(TownLifeGarbage, time)
}

/**
 * @name:末端处置设施在线检测
 * */
function EndFacilities() {
    let para = {
        url: GarBage_URl+'/sh/garbageSort/getGarbageContentDisplay',
        async: true,
        type: 'get',
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        if (res.status === 'OK') {
            let para = ''
            for (let i = 0; i < res.data.length; i++) {
                para += ' <div class="GarBage-child-item GarBage-child-end">'
                    + '<img src="../Modal/images/icon_.png ">'
                    + '   <div>'
                    + '  <p style="font-size: 14px">' + res.data[i].pointName + '</p>'
                    + '<span style="font-size: 14px">' + res.data[i].shuntOneDayTotal + '</span>'
                    + '</div>'
                    + ' </div>'
            }
            document.getElementById("EndFacilitiesID").innerHTML = para
        } else {
            alert('末端处置设施在线检测接口发生错误')
        }
    })
}

/**
 * @name:街镇生活垃圾产生量TOP5
 * */
function TownLifeGarbage() {
    let para = {
        url: GarBage_URl+'sh/garbageSort/getGarbageStreetProduce',
        async: true,
        type: 'get',
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        if (res.status === 'OK') {
            console.log(res)
            let para = ''
            for (let i = 0; i < res.data.length; i++) {
                para += '<ul style="color: white">'
                    + ' <li>' + res.data[i].street + '</li>'
                    + ' <li>' + res.data[i].dryGarbage + '</li>'
                    + '<li>' + res.data[i].wetMonthGarbageDwe + '</li>'
                    + ' <li>' + res.data[i].wetMonthGarbageKit + '</li>'
                    + '<li>' + res.data[i].recoverable + '</li>'
                    + '<li>' + res.data[i].total + '</li>'
                    + '</ul>'
            }
            document.getElementById("ActualOutputID").innerHTML = para
            res.data.map(item => item.total = item.total.split(item.unit)[0].trim())
            res.data.sort(function (a, b) {
                return b.total - a.total;
            });
            let attackSourcesData = []
            let attackSourcesName = []
            let attackSourcesColor = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff', '#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#1089E7', '#F57474', '#F57474']
            res.data.map(item => {
                attackSourcesData.push(item.total)
                attackSourcesName.push(item.street)
            })
            console.log(attackSourcesData, attackSourcesName)
            MyEcharts.initChart(MyEcharts.EchartsOption.Ranking('name', attackSourcesName, attackSourcesData, attackSourcesColor,'吨'), "SmallECharts4")
        } else {
            alert('街镇生活垃圾产生量TOP5接口发生错误')
        }
    })

}




/**
 * @name :运输车载系统
 *
 * */

function GetCarNewInfoFun() {

    let aa=''
    let para={
        url: GarBage_URl+'/sh/garbageSort/getCarNewInfo',
        async: true,
        type: 'get',
        dataType: 'JSON',
    }
  ajaxPromise(para).then(res=>{
        console.log(res,'xxxx ')


    })

}
function getPopupFun1(){
    return new Promise((resolve, reject) => {
        let para={
            url: GarBage_URl+'/sh/garbageSort/getPopup/1',
            async: true,
            type: 'get',
            dataType: 'JSON',
        }
        ajaxPromise(para).then(res=>{
            console.log(res,'11111 ')
            resolve(res)

        })
    })

}
// function getPopupFun1(){
//     return new Promise((resolve, reject) => {
//         let para={
//             url: GarBage_URl+'/http://180.167.35.167:7085/sh/garbageSort/getCarNewInfo',
//             async: true,
//             type: 'get',
//             dataType: 'JSON',
//         }
//         ajaxPromise(para).then(res=>{
//             console.log(res,'11111 ')
//             resolve(res)
//
//         })
//     })
//
// }