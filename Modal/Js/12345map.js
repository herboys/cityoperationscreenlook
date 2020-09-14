var mapData = {
    "displayFieldName": "ID",
    "fieldAliases": {
        "OBJECTID": "OBJECTID",
        "名称": "名称",
        "地址": "地址",
        "属性": "属性",
        "所属区县": "所属区县",
        "区代码": "区代码"
    },
    "geometryType": "esriGeometryPoint",
    "spatialReference": {
        "wkid": 102100,
        "latestWkid": 3857
    },
    "fields": [
        {
            "name": "OBJECTID",
            "type": "esriFieldTypeOID",
            "alias": "OBJECTID"
        },
        {
            "name": "名称",
            "type": "esriFieldTypeString",
            "alias": "名称",
            "length": 80
        },
        {
            "name": "地址",
            "type": "esriFieldTypeString",
            "alias": "地址",
            "length": 50
        },
        {
            "name": "属性",
            "type": "esriFieldTypeString",
            "alias": "属性",
            "length": 50
        },
        {
            "name": "所属区县",
            "type": "esriFieldTypeString",
            "alias": "所属区县",
            "length": 20
        },
        {
            "name": "区代码",
            "type": "esriFieldTypeString",
            "alias": "区代码",
            "length": 100
        }
    ],
};


var bridge1;

function findbcsclnglatNameFun(res) {
    createMenucopy(res)

    function createMenucopy(res) {
        bridge1.Invoke([
            {
                "ActionName": "doShowHeat",
                "Parameters": {
                    "datasource":[],

                    "weightFied": "count",
                    "gradient": {
                        ".25": "#4ef1b2",
                        ".50": "#7cd346",
                        ".75": "#f3f12c",
                        ".95": "#fd2f02"
                    },
                    "radius": 35,
                    "geofield": {
                        "xfield": "x",
                        "yfield": "y"
                    }
                }
            },
            //地图主题切换消息
            // 撒点
            {
                "ActionName": "ShowData",
                "Parameters": {
                    "name": "car_dian",
                    "isMouseHoverInfo": true,
                    "data": {
                        "content": res,
                        "parsegeometry": "function(item){return item.geometry}"
                    },
                    "popupTemplate": {
                        "content": [{
                            "type": "fields",
                            "fieldInfos": [
                                {
                                    "fieldName": "TASKID",
                                    "label":"工单编号"
                                },
                                {
                                    //EXECUTEDEPTNAME
                                    "fieldName": "DISCOVERTIME",
                                    "label":"发生时间"
                                },
                                {
                                    //EXECUTEDEPTNAME
                                    "fieldName": "STREETNAME",
                                    "label":"所属街镇"
                                },
                                {
                                //EXECUTEDEPTNAME
                                    "fieldName": "EXECUTEDEPTNAME",
                                    "label":"主责部门"
                                },
                                {
                                    "fieldName": "ATNAME",
                                    "label":"管理要点"
                                },{
                                    "fieldName": "ADDRESS",
                                    "label": "发生地址"
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
                            "size": 7,
                            "color": "red",
                            "outline": {
                                "width": 0.5,
                                "color": "white"
                            }
                        }
                    },
                    "labels": [{
                        "fields": [
                           /* "#.名称",
                            "#.地址"*/
                        ],
                        "color": [
                            255,
                            255,
                            0,
                            0.5
                        ],
                        "size": 12
                    }]
                }
            }
        ])
    }
}
function ThermodynamicFun(res) {
        createMenucopyFun(res)
    function createMenucopyFun(res) {

        bridge1.Invoke([
            {
                "ActionName": "doShowHeat",
                "Parameters": {
                    "datasource":res,

                    "weightFied": "count",
                    "gradient": {
                        ".2": "#4ef1b2",
                        ".4": "#7cd346",
                        ".6": "#f3f12c",
                        ".8": "#fd2f02"
                    },
                    "radius": 50,
                    "geofield": {
                        "xfield": "x",
                        "yfield": "y"
                    }
                }
            },   {
                "ActionName": "ShowData",
                "Parameters": {
                    "name": "car_dian",
                    "isMouseHoverInfo": true,
                    "data": {
                        "content": [],
                        "parsegeometry": "function(item){return item.geometry}"
                    },
                    "popupTemplate": {
                        "content": [{
                            "type": "fields",
                            "fieldInfos": [
                                {
                                    "fieldName": "TASKID",
                                    "label":"工单编号"
                                },
                                {
                                    //EXECUTEDEPTNAME
                                    "fieldName": "DISCOVERTIME",
                                    "label":"发生时间"
                                },
                                {
                                    //EXECUTEDEPTNAME
                                    "fieldName": "STREETNAME",
                                    "label":"所属街镇"
                                },
                                {
                                    //EXECUTEDEPTNAME
                                    "fieldName": "EXECUTEDEPTNAME",
                                    "label":"主责部门"
                                },
                                {
                                    "fieldName": "ATNAME",
                                    "label":"管理要点"
                                },{
                                    "fieldName": "名称",
                                    "label": "发生地址"
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
                            "size": 7,
                            "color": "red",
                            "outline": {
                                "width": 0.5,
                                "color": "white"
                            }
                        }
                    },
                    "labels": [{
                        "fields": [
                            /* "#.名称",
                             "#.地址"*/
                        ],
                        "color": [
                            255,
                            255,
                            0,
                            0.5
                        ],
                        "size": 12
                    }]
                }
            }
         
        ])
    }
}

function initMap(date, bcname, scname) {
    date = "年",
        bcname = "",
        scname = ""
    let para = {
        url: ORACLE_URL + "/taskInfo/findbcschotslnglat",
        async: true,
        type: 'post',
        data: JSON.stringify({
            "date": date,
            "scname": bcname,
            "hots": scname,
        }),
        dataType: 'JSON',
    }
    ajaxPromise(para).then(res => {
        bridge1 = new CityGis.Bridge({
            id: "mapContainer99",
            url: "http://10.81.71.51/citygis/areamap/WidgetPages/WidgetGIS.html?code=14&themeid=Gis&devicetype=lg",
            onReady: function () {
                createMenu(res)
                findAtlnglats()
            }
        });
    })

    function createMenu(res) {
        bridge1.Invoke([
            //地图主题切换消息
            // {
            //     "ActionName": "changeTheme",
            //     "Parameters": {
            //         "id": "Home"
            //     }
            // },
            // 功能菜单
          
            {
                "ActionName": "userMenu",
                "Parameters": {
                  "url": "http://10.81.71.51/citygis/areamap/MapUI/mapmeun/mapmeun.html?code=14",
                  "visible": true
                }
              },
              {
                "ActionName": "LayerVisible",
                "Parameters": [
                  {
                    "name": "街道乡镇",
                    "visible": true,
                    "where": "区代码='14'"
                  }
                ]
              }
        ])
    }



}