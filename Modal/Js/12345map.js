function initMap(date,bcname,scname){
    date="年",
        bcname="建设交通类",
        scname="住宅"
    // alert(date+" "+bcname+" "+scname)
    console.log(date,bcname,scname,'+++++++++++++++++++++++++++=')
    let urlList=''
    let para={
        url:ORACLE_URL+"/taskInfo/findbcschotslnglat",
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": date,
            "scname": bcname,
            "hots": scname,

        }),
        dataType: 'JSON',
    }



    ajaxPromise(para).then(res=>{
        console.log(res,'获取经纬度')
        urlList=res
        let para={
            url:"http://127.0.0.1:5500/Modal/Js/intercity-point.json",
            async: true,
            type: 'get',
            dataType: 'JSON',
        }
        ajaxPromise(para).then(res=>{
            console.log(res,'_+_+_+_+_')
            res.features=urlList
            var bridge1 = null;
            $(function () {
                bridge1 = new CityGis.Bridge({
                    id: "mapContainer99",
                    url: "http://10.81.71.51/citygis/areamap/WidgetPages/WidgetGIS.html?code=14&themeid=Gis&devicetype=lg",
                    onReady: function () {
                        createMenu();
                    }
                });
            })

        })
    })
}

var bridge1 = null;
$(function () {
    bridge1 = new CityGis.Bridge({
        id: "mapContainer99",
        url: "http://10.81.71.51/citygis/areamap/WidgetPages/WidgetGIS.html?code=14&themeid=Gis&devicetype=lg",
        onReady: function () {
            createMenu();
            // spreadPoint();
            /*
                            $.ajax({
                                url:"http://127.0.0.1:5500/Modal/Js/intercity-point.json",
                                type:"get",
                                success:function(res){
                                    $.ajax({
                                        url:"http://10.237.115.83:8091"+"/taskInfo/findbcschotslnglat",
                                        type: 'post',
                                        contentType:"application/json",
                                        data:JSON.stringify({
                                            "date": "年",
                                            "scname": "建设交通类",
                                            "hots": "住宅"

                                        }),
                                        success:function(data){
                                            alert(123)
                                            console.log(res)
                                            res["features"]=data;
                                            console.log(res)
                                           // createMenu()
                                            spreadPoint(res)
                                        },
                                        error:function(){
                                            alert("error")
                                        }

                                    })
                                },
                                error:function(){
                                    //alert("json error")
                                }
                            })
            */
        }
    });
})
function createMenu() {
    // console.log(res+"1111111111111111111111111");
    bridge1.Invoke([
        //地图主题切换消息
        {
            "ActionName": "changeTheme",
            "Parameters": {
                "id": "Home"
            }
        },
        // 功能菜单
        {
            "ActionName": "userMenu",
            "Parameters": {
                "url": "http://10.81.71.51/citygis/areamap/MapUI/mapmeun/mapmeun.html?code=14",
                "visible": true
            }
        }
        // 撒点

    ])
    console.log(bridge1,'987654321')
}



function spreadPoint(res) {
    console.log(res+"1111111111111111111111111");
    bridge1.Invoke([

        // 撒点
        {
            "ActionName": "ShowData",
            "Parameters": {
                "name": "car_dian",
                "isMouseHoverInfo": true,
                "data": {
                    "url": "http://127.0.0.1:5500/Modal/Js/intercity-point.json",
                    // "url":res,
                    "parsedata": "function(d){return d.features}",
                    "parsegeometry": "function(item){return item.geometry}"
                },
                "popupTemplate": {
                    "content": [{
                        "type": "fields",
                        "fieldInfos": [{
                            "fieldName": "名称",
                            "label": "名称"
                        },
                            {
                                "fieldName": "地址"
                            }
                        ]
                    }]
                },
                "legendVisible": true,
                "popupEnabled": true,
                "isLocate": true,
                "renderer": {
                    "type": "simple",
                    "label": "",
                    "visualVariables": [],
                    "symbol": {
                        "type": "simple-marker",
                        "size": 10,
                        "color": "red",
                        "outline": {
                            "width": 0.5,
                            "color": "white"
                        }
                    }
                },
                "labels": [{
                    "fields": [
                        "#.名称",
                        "#.地址"
                    ],
                    "color": [
                        255,
                        255,
                        0,
                        0.5
                    ],
                    "size": 18
                }]
            }
        }
    ])
    console.log(bridge1,'987654321')
}