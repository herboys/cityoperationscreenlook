function initMap(){}
// function initMap(date,bcname,scname){
//     console.log(date,bcname,scname,'+++++++++++++++++++++++++++=')
//     let urlList=''
//     let para={
//         url:ORACLE_URL+"/taskInfo/findbcschotslnglat",
//         async: true,
//         type: 'post',
//         data: JSON.stringify({
//             "date": date,
//             "scname": bcname,
//             "hots": scname,
//
//         }),
//         dataType: 'JSON',
//     }
//     ajaxPromise(para).then(res=>{
//         console.log(res,'获取经纬度')
//         urlList=res
//         let para={
//             url:"http://127.0.0.1:5500/Modal/Js/intercity-point.json",
//             async: true,
//             type: 'get',
//             dataType: 'JSON',
//         }
//         ajaxPromise(para).then(res=>{
//             console.log(res,'_+_+_+_+_')
//             res.features=urlList
//             var bridge1 = null;
//             $(function () {
//                 bridge1 = new CityGis.Bridge({
//                     id: "mapContainer99",
//                     url: "http://10.81.71.51/citygis/areamap/WidgetPages/WidgetGIS.html?code=14&themeid=Gis&devicetype=lg",
//                     onReady: function () {
//                         createMenu();
//                     }
//                 });
//             })
//             function createMenu(res) {
//                 bridge1.Invoke([
//                     //地图主题切换消息
//                     {
//                         "ActionName": "changeTheme",
//                         "Parameters": {
//                             "id": "Home"
//                         }
//                     },
//                     // 功能菜单
//                     {
//                         "ActionName": "userMenu",
//                         "Parameters": {
//                             "url": "http://10.81.71.51/citygis/areamap/MapUI/mapmeun/mapmeun.html?code=14",
//                             "visible": true
//                         }
//                     },
//                     // 撒点
//                     {
//                         "ActionName": "ShowData",
//                         "Parameters": {
//                             "name": "car_dian",
//                             "isMouseHoverInfo": true,
//                             "data": {
//                                 "url":res,
//                                 "parsedata": "function(d){return d.features}",
//                                 "parsegeometry": "function(item){return item.geometry}"
//                             },
//                             "popupTemplate": {
//                                 "content": [{
//                                     "type": "fields",
//                                     "fieldInfos": [{
//                                         "fieldName": "名称",
//                                         "label": "名称"
//                                     },
//                                         {
//                                             "fieldName": "地址"
//                                         }
//                                     ]
//                                 }]
//                             },
//                             "legendVisible": true,
//                             "popupEnabled": true,
//                             "isLocate": true,
//                             "renderer": {
//                                 "type": "simple",
//                                 "label": "",
//                                 "visualVariables": [],
//                                 "symbol": {
//                                     "type": "simple-marker",
//                                     "size": 10,
//                                     "color": "red",
//                                     "outline": {
//                                         "width": 0.5,
//                                         "color": "white"
//                                     }
//                                 }
//                             },
//                             "labels": [{
//                                 "fields": [
//                                     "#.名称",
//                                     "#.地址"
//                                 ],
//                                 "color": [
//                                     255,
//                                     255,
//                                     0,
//                                     0.5
//                                 ],
//                                 "size": 18
//                             }]
//                         }
//                     }
//                 ])
//             }
//
//
//         })
//     })
//
//
//
//
//
//
//
//
//     var bridge1 = null;
//     $(function () {
//         bridge1 = new CityGis.Bridge({
//             id: "mapContainer99",
//             url: "http://10.81.71.51/citygis/areamap/WidgetPages/WidgetGIS.html?code=14&themeid=Gis&devicetype=lg",
//             onReady: function () {
//                 createMenu();
//             }
//         });
//     })
//     function createMenu(res) {
//         bridge1.Invoke([
//             //地图主题切换消息
//             {
//                 "ActionName": "changeTheme",
//                 "Parameters": {
//                     "id": "Home"
//                 }
//             },
//             // 功能菜单
//             {
//                 "ActionName": "userMenu",
//                 "Parameters": {
//                     "url": "http://10.81.71.51/citygis/areamap/MapUI/mapmeun/mapmeun.html?code=14",
//                     "visible": true
//                 }
//             },
//             // 撒点
//             {
//                 "ActionName": "ShowData",
//                 "Parameters": {
//                     "name": "car_dian",
//                     "isMouseHoverInfo": true,
//                     "data": {
//                         "url": {
//                             "displayFieldName": "ID",
//                             "fieldAliases": {
//                                 "OBJECTID": "OBJECTID",
//                                 "名称": "名称",
//                                 "地址": "地址",
//                                 "属性": "属性",
//                                 "所属区县": "所属区县",
//                                 "区代码": "区代码"
//                             },
//                             "geometryType": "esriGeometryPoint",
//                             "spatialReference": {
//                                 "wkid": 102100,
//                                 "latestWkid": 3857
//                             },
//                             "fields": [
//                                 {
//                                     "name": "OBJECTID",
//                                     "type": "esriFieldTypeOID",
//                                     "alias": "OBJECTID"
//                                 },
//                                 {
//                                     "name": "名称",
//                                     "type": "esriFieldTypeString",
//                                     "alias": "名称",
//                                     "length": 80
//                                 },
//                                 {
//                                     "name": "地址",
//                                     "type": "esriFieldTypeString",
//                                     "alias": "地址",
//                                     "length": 50
//                                 },
//                                 {
//                                     "name": "属性",
//                                     "type": "esriFieldTypeString",
//                                     "alias": "属性",
//                                     "length": 50
//                                 },
//                                 {
//                                     "name": "所属区县",
//                                     "type": "esriFieldTypeString",
//                                     "alias": "所属区县",
//                                     "length": 20
//                                 },
//                                 {
//                                     "name": "区代码",
//                                     "type": "esriFieldTypeString",
//                                     "alias": "区代码",
//                                     "length": 100
//                                 }
//                             ],
//                             "features": [
//                                 {
//                                     "attributes": {
//                                         "OBJECTID": 25,
//                                         "名称": "上海市嘉定区中医医院启良路门诊部",
//                                         "地址": "启良路120号",
//                                         "属性": "未知",
//                                         "所属区县": "嘉定区",
//                                         "区代码": "14"
//                                     },
//                                     "geometry": {
//                                         "x": -20930.538719612465,
//                                         "y": 17086.261464678915
//                                     }
//                                 },
//                                 {
//                                     "attributes": {
//                                         "OBJECTID": 26,
//                                         "名称": "上海市嘉定区医疗急救中心",
//                                         "地址": "新建一路2151号",
//                                         "属性": "未知",
//                                         "所属区县": "嘉定区",
//                                         "区代码": "14"
//                                     },
//                                     "geometry": {
//                                         "x": -19050.232781863655,
//                                         "y": 20063.462534029037
//                                     }
//                                 },
//
//
//                                 {
//                                     "attributes": {
//                                         "OBJECTID": 74,
//                                         "名称": "上海市嘉定区中心医院",
//                                         "地址": "博乐南路111号",
//                                         "属性": "二级",
//                                         "所属区县": "嘉定区",
//                                         "区代码": "14"
//                                     },
//                                     "geometry": {
//                                         "x": -19816.322510924248,
//                                         "y": 15844.978715664009
//                                     }
//                                 },
//                                 {
//                                     "attributes": {
//                                         "OBJECTID": 75,
//                                         "名称": "上海市嘉定区牙病防治所",
//                                         "地址": "北大街79号",
//                                         "属性": "二级",
//                                         "所属区县": "嘉定区",
//                                         "区代码": "14"
//                                     },
//                                     "geometry": {
//                                         "x": -21099.926876519283,
//                                         "y": 16959.720899665845
//                                     }
//                                 },
//
//                                 {
//                                     "attributes": {
//                                         "OBJECTID": 102,
//                                         "名称": "第二军医大学第三附属医院",
//                                         "地址": "墨玉北路700号",
//                                         "属性": "三级",
//                                         "所属区县": "嘉定区",
//                                         "区代码": "14"
//                                     },
//                                     "geometry": {
//                                         "x": -29302.256399179518,
//                                         "y": 9871.8895137287909
//                                     }
//                                 }
//                             ]},
//                         "parsedata": "function(d){return d.features}",
//                         "parsegeometry": "function(item){return item.geometry}"
//                     },
//                     "popupTemplate": {
//                         "content": [{
//                             "type": "fields",
//                             "fieldInfos": [{
//                                 "fieldName": "名称",
//                                 "label": "名称"
//                             },
//                                 {
//                                     "fieldName": "地址"
//                                 }
//                             ]
//                         }]
//                     },
//                     "legendVisible": true,
//                     "popupEnabled": true,
//                     "isLocate": true,
//                     "renderer": {
//                         "type": "simple",
//                         "label": "",
//                         "visualVariables": [],
//                         "symbol": {
//                             "type": "simple-marker",
//                             "size": 10,
//                             "color": "red",
//                             "outline": {
//                                 "width": 0.5,
//                                 "color": "white"
//                             }
//                         }
//                     },
//                     "labels": [{
//                         "fields": [
//                             "#.名称",
//                             "#.地址"
//                         ],
//                         "color": [
//                             255,
//                             255,
//                             0,
//                             0.5
//                         ],
//                         "size": 18
//                     }]
//                 }
//             }
//         ])
//         console.log(bridge1,'987654321')
//     }
//
//
// }