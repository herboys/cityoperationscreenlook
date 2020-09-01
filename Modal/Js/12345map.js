function initMap(){
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

    function createMenu() {
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
            },
            // 撒点
            {
                "ActionName": "ShowData",
                "Parameters": {
                    "name": "car_dian",
                    "isMouseHoverInfo": true,
                    "data": {
                        "url": "http://127.0.0.1:5500/Modal/Js/intercity-point.json",
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
    }
}