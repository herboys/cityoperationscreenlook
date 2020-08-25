function newonload() {
    getPopupFun1()
    GetCarNewInfoFun()
    initMap();
    init1()
    EndFacilities()
    TownLifeGarbage()
    getGarbageCarLoading()
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
        url: GarBage_URl + '/sh/garbageSort/getGarbageContentDisplay',
        async: true,
        type: 'get',
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        if (res.status === 'OK') {
            res.data.map(item => item.wetOneDayTotal = item.wetOneDayTotal.split("吨")[0].trim())
            res.data.map(item => item.dryOneDayTotal = item.dryOneDayTotal.split("吨")[0].trim())
            res.data.map(item => item.connts =`${ parseInt(item.dryOneDayTotal)+ parseInt(item.wetOneDayTotal)+'吨'}` )
            let para = ''
            for (let i = 0; i < res.data.length; i++) {
                para += ' <div class="GarBage-child-item GarBage-child-end">'
                    + '<img src="../Modal/images/icon_.png ">'
                    + '   <div>'
                    + '  <p style="font-size: 14px">' + res.data[i].pointName + '</p>'
                    + '<span style="font-size: 14px">' + res.data[i].connts + '</span>'
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
        url: GarBage_URl + '/sh/garbageSort/getGarbageStreetProduce',
        async: true,
        type: 'get',
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        if (res.status === 'OK') {
            console.log(res)
            /**干垃圾*/
                let dryGarbage = 0
            // dryGarbage
            // res.data.map(item=>{
            //
            // })
                // res.data.reduce((dryGarbage, item) => dryGarbage + item.dryGarbage.split(item.unit)[0].trim(), 0)
                //
                // alert(dryGarbage)
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
            MyEcharts.initChart(MyEcharts.EchartsOption.Ranking('name', attackSourcesName, attackSourcesData, attackSourcesColor, '吨'), "SmallECharts4")
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

    let aa = ''
    let para = {
        url: GarBage_URl + '/sh/garbageSort/getCarNewInfo',
        async: true,
        type: 'get',
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        console.log(res, 'xxxx ')


    })
    getGarbageRectify()
}

function getPopupFun1() {
    let para = {
        url: GarBage_URl + '/sh/garbageSort/getPopup/1',
        async: true,
        type: 'get',
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        console.log(res, '11111 ')
        let e=''
        e=res.data[res.data.length-1]
        if (res.status == "OK") {
            para = `
                    <div class="topicItem">
                                            <p>驳运车辆数（干垃圾）</p>
                                            <span>${e.dry_car}</span>
                                        </div>
                                        <div class="topicItem">
                                            <p>驳运车辆数（有害垃圾）</p>
                                            <span>${e.recyclable_car}</span>
                                        </div>
                                        <div class="topicItem">
                                            <p>驳运车辆数（湿垃圾）</p>
                                            <span>${e.wet_car}</span>
                                        </div>
                                        <div class="topicItem">
                                            <p>驳运机具规范数</p>
                                            <span>${e.total}</span>
                                        </div>
                                        <div class="topicItem">
                                            <p>驳运车辆数（可回收物）</p>
                                            <span>${e.kitchen_car}</span>
                                        </div>
                `
            document.getElementById("getPopup1ID").innerHTML=para
        }
    })
}

function getGarbageRectify() {
    return new Promise((resolve, reject) => {
        let para = {
            url: GarBage_URl + '/sh/garbageSort/getGarbageRectify',
            async: true,
            type: 'get',
            dataType: 'JSON',
        }
        ajaxPromise(para).then(res => {
            console.log(res, '11111 ')
            resolve(res)

        })
    })

}

/**
 * 当日投入运营车辆数
 * */
function getGarbageCarLoading() {
    new Promise((resolve, reject) => {
        let para = {
            url: GarBage_URl + '/sh/garbageSort/getGarbageCarLoading',
            async: true,
            type: 'get',
            dataType: 'JSON',
        }
        ajaxPromise(para).then(res => {
            console.log(res, '11111 ')

            if (res.status == 'OK') {
                para = ''
                for (let i = 0; i < res.data[0].garbageTranVels.length; i++) {

                    para += ' <div class="topicItem">'
                        + '<p>' + res.data[0].garbageTranVels[i].popIndex.slice(2,res.data[0].garbageTranVels[i].popIndex.length) + '</p>'
                        + ' <span>' + res.data[0].garbageTranVels[i].sum + res.data[0].garbageTranVels[i].unit + '</span>'
                        + ' </div>'
                }
                console.log(para, '0999999999')
                document.getElementById("getGarbageCarLoadingID").innerHTML = para
            }

        })
    })

}
