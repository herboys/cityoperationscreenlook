function newonload() {
    getGarbageCarLoadingName()
    GetCarNewInfoFun()
    initMap();
    init1()
    EndFacilities()
    TownLifeGarbage()
    intervalFunction()
    OperaTionBtn(4)
    rollInit()
    rollInit1()
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

let para = ''

function OperaTionBtn(t) {
    switch (t) {
        case 1:
            para = ''
            para = `      <div class="banner-span" style="color: white" onclick="OperaTionBtn(1)">
                                            当日投入运营车辆数
                                        </div>
                                        <div class="banner-span" onclick="OperaTionBtn(2)">
                                            分类运输车辆在线监测
                                        </div>
                                        <div class="banner-span " onclick="OperaTionBtn(3)">
                                            异常装载车辆在线监测${BCName}
                                        </div>`
            document.getElementById("CarId").innerHTML = para
            document.getElementById("getPopup1IDcopy").innerHTML = ''

            getPopupFun1()

            break;
        case 2:
            para = ''
            para = `      <div class="banner-span"  onclick="OperaTionBtn(1)">
                                            当日投入运营车辆数
                                        </div>
                                        <div class="banner-span"style="color: white" onclick="OperaTionBtn(2)">
                                            分类运输车辆在线监测
                                        </div>
                                        <div class="banner-span " onclick="OperaTionBtn(3)">
                                            异常装载车辆在线监测${BCName}
                                        </div>`
            document.getElementById("CarId").innerHTML = para
            document.getElementById("getPopup1IDcopy").innerHTML = ''
            getGarbageCarLoading()
            break;
        case 3:
            para = ''
            para = `      <div class="banner-span"  onclick="OperaTionBtn(1)">
                                            当日投入运营车辆数
                                        </div>
                                        <div class="banner-span" onclick="OperaTionBtn(2)">
                                            分类运输车辆在线监测
                                        </div>
                                        <div class="banner-span "  style="color: white"onclick="OperaTionBtn(3)">
                                            异常装载车辆在线监测${BCName}
                                        </div>`
            document.getElementById("CarId").innerHTML = para
            getGarbageCarLoadingtwo()
            break;
        case 4:
            para = ''
            para=`   <div class="banner-span" style="margin-right: 2rem;color: white" onclick="OperaTionBtn(4)">
                                            主动发现
                                        </div>
                                        <div class="banner-span" onclick="OperaTionBtn(5)">
                                            被动发现
                                        </div>`
            document.getElementById('FindId').innerHTML=para
            break;
        case 5:
            para = ''
            para=`   <div class="banner-span" style="margin-right: 2rem;" onclick="OperaTionBtn(4)">
                                            主动发现
                                        </div>
                                        <div class="banner-span"style="color: white" onclick="OperaTionBtn(5)">
                                            被动发现
                                        </div>`
            document.getElementById('FindId').innerHTML=para
            FindAfter()
            break;
        case 6:
            break;
        case 7:
            break;
    }
}

/*@name:被动发现*/
function FindAfter(){
    let para = {
        url: ORACLE_URL + '/taskInfo/findrefuse',
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": "年"
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res=>{
     console.log(res)
        para = `  <ul class="work-older-list-ul" >
                                        <li>工单编号</li>
                                        <li>发生时间</li>
                                        <li>主责部门</li>
                                        <li>截至时间</li>
                                        <li>管理要点</li>
                                        <li>诉求内容</li>
                                    </ul>`
        document.getElementById("GongDanTitleID").innerHTML = para
        para=''
        for (let i = 0; i < res.length; i++) {
            para += '<ul class="work-older-list-ul ul-line ">'
                + '<li>' + res[i].attributes.TASKID + '</li>'
                + '<li>' + res[i].attributes.DISCOVERTIME + '</li>'
                + '<li>' + res[i].attributes.EXECUTEDEPTNAME + '</li>'
                + '<li>' + res[i].attributes.LASTSOLVINGTIME + '</li>'
                + '<li>' + res[i].attributes.ATNAME + '</li>'
                + '<li>' + res[i].attributes.DESCRIPTION + '</li>'
                + '</ul>'
        }
        document.getElementById("GongDanID").innerHTML = para
    })


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
            res.data.map(item => item.connts = `${parseInt(item.dryOneDayTotal) + parseInt(item.wetOneDayTotal) + '吨'}`)
            let para = ''
            for (let i = 0; i < res.data.length; i++) {
                para += ' <div class="GarBage-child-item GarBage-child-end">'
                    + '<img src="../Modal/images/icon_.png ">'
                    + '   <div>'
                    + '  <p style="font-size: 1.167rem">' + res.data[i].pointName + '</p>'
                    + '<span style="font-size: 1.167rem">' + res.data[i].connts + '</span>'
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
            let para = ''
            console.log(res, '123123')
            /**干垃圾*/
            let dryGarbage = []
            let recoverable = []
            res.data.map(item => {
                dryGarbage.push(item.dryGarbage.split(item.unit)[0].trim())
                recoverable.push(parseInt(item.wetGarbageDwe.split(item.unit)[0].trim()) + parseInt(item.wetGarbageKit.split(item.unit)[0].trim()))
            })
            let Ganlaji = eval(dryGarbage.join("+"))
            let recoverable1 = eval(recoverable.join("+"))
            Ganlaji = Ganlaji.toFixed(2)
            recoverable1 = recoverable1.toFixed(2)
            console.log(Ganlaji, '干垃圾数量总数')
            console.log(recoverable1, '干垃圾数量总数')
            para = `<p>干垃圾生产量</p><p >${Ganlaji}吨/日</p>`
            document.getElementById("dryGarbageID").innerHTML = para
            para = `<p>湿垃圾产生量</p><p >${recoverable1}吨/日</p>`
            document.getElementById("recoverableID").innerHTML = para
            res.data.map(item => {
                if (item.recoverable.length == 0) {
                    item.recoverable = "0吨/日"
                }
            })

            para = ''
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
/*@name:当日投入车辆数*/
function getPopupFun1() {
    let para = {
        url: GarBage_URl + '/sh/garbageSort/getPopup/1',
        async: true,
        type: 'get',
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        let e = ''
        e = res.data[res.data.length - 1]
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
                                            <p>驳运车辆数（可回收物）</p>
                                            <span>${e.kitchen_car}</span>
                                        </div>
                `
            document.getElementById("getPopup1ID").innerHTML = para
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
let BCName=''
/*@name:车辆*/
function getGarbageCarLoadingName() {
     BCName=''
        let para = {
            url: GarBage_URl + '/sh/garbageSort/getGarbageCarLoading',
            async: true,
            type: 'get',
            dataType: 'JSON',
        }
        ajaxPromise(para).then(res => {
            para = ''
            para = `<span style="color:#e7cb35">${res.data[0].garbageTranVels[res.data[0].garbageTranVels.length - 1].sum}${res.data[0].garbageTranVels[res.data[0].garbageTranVels.length - 1].unit}</span>`
            BCName=para
            document.getElementById("BCName").innerHTML = para
            OperaTionBtn(1)
        })
}
/*@name:分类运输车辆在线监测*/
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
            if (res.status == 'OK') {
                para = ''
                for (let i = 0; i < res.data[0].garbageTranVels.length - 1; i++) {
                    para += ' <div class="topicItem">'
                        + '<p>' + res.data[0].garbageTranVels[i].popIndex.slice(2, res.data[0].garbageTranVels[i].popIndex.length)+'</p>'
                        + ' <span>' + res.data[0].garbageTranVels[i].sum + res.data[0].garbageTranVels[i].unit + '</span>'
                        + ' </div>'
                }
                document.getElementById("getPopup1ID").innerHTML = para
                para = `<p>${res.data[0].garbageTranVels[res.data[0].garbageTranVels.length - 1].popIndex}</p>
                        <span>${res.data[0].garbageTranVels[res.data[0].garbageTranVels.length - 1].sum}${res.data[0].garbageTranVels[res.data[0].garbageTranVels.length - 1].unit}</span>`
                document.getElementById("lasttopicItemID").innerHTML = para
                para = ''
                res.data[0].garbageCarLoading.forEach(e => {
                    para += `<div class="topicItem topicItemBtn" >
                                       <span class="font-10">${e.carNumber}</span>
                                          <span class="font-10">${e.loadingRate}</span>
                                      </div>`
                })
                document.getElementById("OnDutyToday").innerHTML = para
                let ul1 = document.getElementById("OnDutyToday");
                let ul2 = document.getElementById("OnDutyTodayCopy");
                let rollbox = document.getElementById("OnDutyToday_box");
                rolls(50, ul1, ul2, rollbox)
                para = ''
                res.data[0].garbageCarLoading.forEach(e => {
                    para += `<ul style="color: white">
                                                    <li style="flex: 3">${e.weighTime}</li>
                                                    <li style="flex: 2">${e.carNumber}</li>
                                                    <li style="flex: 2">${e.carType}</li>
                                                    <li style="flex: 2">${e.standardWeigh}<span class="font-10">(kg)</span></li>
                                                    <li style="flex: 2">${e.trueWeigh}</li>
                                                    <li style="flex: 1">${e.loadingRate}</li>
                                                </ul>`
                })
                document.getElementById("OnDutyToday1").innerHTML = para
                ul1 = document.getElementById("OnDutyToday1");
                ul2 = document.getElementById("OnDutyTodayCopy1");
                rollbox = document.getElementById("OnDutyToday_box1");
                rolls1(50, ul1, ul2, rollbox)


            }

        })
    })

}
/*@name:异常装载车辆在线监测*/
function getGarbageCarLoadingtwo(){
    let para = {
        url: GarBage_URl + '/sh/garbageSort/getGarbageCarLoading',
        async: true,
        type: 'get',
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        para=''
        res.data[0].garbageCarLoading.forEach(e => {
            para += `<div class="topicItem topicItemBtn" >
                                       <span class="font-10">${e.carNumber}</span>
                                          <span class="font-10">${e.loadingRate}</span>
                                      </div>`
        })
        document.getElementById("getPopup1ID").innerHTML = para

    })
}
/**轮播动画**/
function rollInit1() {
    let ul1 = document.getElementById("getPopup1ID");
    let ul2 = document.getElementById("getPopup1IDcopy");
    let rollbox = document.getElementById("getPopup1ID-box");
    timer=null
    roll1(50, ul1, ul2, rollbox)
}

function roll1(t, ul1, ul2, rollbox) {

    ul2.innerHTML = ul1.innerHTML;
    rollbox.scrollTop = 0;
    let timer = setInterval(rollStart1, t);
    rollbox.onmouseover = function () {
        clearInterval(timer);
    }
    rollbox.onmouseout = function () {
        timer = setInterval(rollStart1, t);
    }
}

function rollStart1() {
    let ul1 = document.getElementById("getPopup1ID");
    let rollbox = document.getElementById("getPopup1ID-box");
    if (rollbox.scrollTop >= ul1.scrollHeight) {
        rollbox.scrollTop = 0;
    } else {
        rollbox.scrollTop++;
    }
}



function rolls(t, ul1, ul2, rollbox) {
    ul2.innerHTML = ul1.innerHTML;
    rollbox.scrollTop = 0;
    let timer = setInterval(rollStarts, t);
    rollbox.onmouseover = function () {
        clearInterval(timer);
    }
    rollbox.onmouseout = function () {
        timer = setInterval(rollStarts, t);
    }
}

function rolls1(t, ul1, ul2, rollbox) {
    ul2.innerHTML = ul1.innerHTML;
    rollbox.scrollTop = 0;
    let timer = setInterval(rollStarts1, t);
    rollbox.onmouseover = function () {
        clearInterval(timer);
    }
    rollbox.onmouseout = function () {
        timer = setInterval(rollStarts1, t);
    }
}

function rollStarts() {
    let ul1 = document.getElementById("OnDutyToday");
    let rollbox = document.getElementById("OnDutyToday_box");
    if (rollbox.scrollTop >= ul1.scrollHeight) {
        rollbox.scrollTop = 0;
    } else {
        rollbox.scrollTop++;
    }
}

function rollStarts1() {
    let ul1 = document.getElementById("OnDutyToday1");
    let rollbox = document.getElementById("OnDutyToday_box1");
    if (rollbox.scrollTop >= ul1.scrollHeight) {
        rollbox.scrollTop = 0;
    } else {
        rollbox.scrollTop++;
    }
}
