$(document).ready(function () {
    initMap2();
    init1()
})

var map;
var mapStyle = ["normal",       //0-标准
    "dark",         //1-幻影黑
    "light",        //2-月光银
    "whitesmoke",   //3-远山黛
    "fresh",        //4-草色青
    "grey",         //5-雅士灰
    "graffiti",     //6-涂鸦
    "macaron",      //7-马卡龙
    "blue",         //8-靛青蓝
    "darkblue",     //9-极夜蓝
    "wine",         //10-酱籽
];
var district;
var polygons = [];
var shanghai_district = [
{ adcode: "310151", name: "崇明区" },
{ adcode: "310115", name: "浦东新区" },
{ adcode: "310120", name: "奉贤区" },
{ adcode: "310116", name: "金山区" },
{ adcode: "310113", name: "宝山区" },
{ adcode: "310107", name: "普陀区" },
{ adcode: "310101", name: "黄浦区" },
{ adcode: "310114", name: "嘉定区" },
{ adcode: "310110", name: "杨浦区" },
{ adcode: "310117", name: "松江区" },
{ adcode: "310109", name: "虹口区" },
{ adcode: "310106", name: "静安区" },
{ adcode: "310105", name: "长宁区" },
{ adcode: "310104", name: "徐汇区" },
{ adcode: "310112", name: "闵行区" },
{ adcode: "310118", name: "青浦区" }];
var other_district = [{ adcode: "320583", name: "昆山" },
{ adcode: "320585", name: "太仓" }];

var jiading_district = [{ name: "安亭镇", lon: 121.2047, lat: 31.2987 },
{ name: "华亭镇", lon: 121.26710, lat: 31.47022 },
{ name: "嘉定工业区", lon: 121.2024, lat: 31.4245 },
{ name: "嘉定镇街道", lon: 121.2490, lat: 31.3839 },
{ name: "江桥镇", lon: 121.3075, lat: 31.2611 },
{ name: "菊园新区", lon: 121.2142, lat: 31.3755 },//lon:121.2223,lat:31.3819
{ name: "马陆镇", lon: 121.2787, lat: 31.3518 },//lon:121.2942,lat:31.3566
{ name: "南翔镇", lon: 121.3052, lat: 31.3057 },
{ name: "外冈镇", lon: 121.1568, lat: 31.3622 },
{ name: "新成路街道", lon: 121.2655, lat: 31.3906 }, //lon:121.2691,lat:31.3859
{ name: "徐行镇", lon: 121.28994, lat: 31.42887 },
{ name: "真新街道", lon: 121.35715, lat: 31.25199 }];


function initMap2() {
    map = new AMap.Map('mapContainer11', {
        center: [121.238825, 31.364284],
        zoom: 12,
        zooms: [11, 18],  //设置地图缩放级别
    });

    setMapStyle();      /*设置地图风格*/
    setMapFeatures();   /*设置地图显示要素*/
    drawJiadingBounds();   //加载行政区划插件
    addJiadingBoundary();  /*添加嘉定区和街道边界*/
    addJiadingZhenText();
    addTraffic();           /*添加实时路况情况*/
    addPoiMarker();         /*添加嘉定区主要监控点*/
    map.addControl(new AMap.Scale());
}

function init1 () {//区域遮盖
    let  city='嘉定区'
    var that =this
    if( that.polygon ) {
        that.map.remove(that.polygon)
    }
    AMap.plugin('AMap.DistrictSearch', function () {
        new AMap.DistrictSearch({
            extensions: 'all',
            subdistrict: 0
        }).search(city, function(status, result) {// 外多边形坐标数组和内多边形坐标数组
            var outer = [
                new AMap.LngLat(-360, 90, true),
                new AMap.LngLat(-360, -90, true),
                new AMap.LngLat(360, -90, true),
                new AMap.LngLat(360, 90, true)
            ]
            var holes = result.districtList[0].boundaries
            var pathArray = [outer]
            pathArray.push.apply(pathArray, holes)
            that.polygon = new AMap.Polygon({
                pathL: pathArray,
                // strokeColor: 'red',//城市边界颜色
                // strokeWeight: 1,
                // fillColor: '#220986', // 遮罩背景色黑色
                // fillOpacity: 0.1
                strokeColor: '#9CA09D',
                fillOpacity:0.5,
                fillColor: '#80d8ff',
            })
            that.polygon.setPath(pathArray)
            that.map.add(that.polygon)
        })
    })
}

/*设置地图风格*/
function setMapStyle() {
    var styleName = "amap://styles/" + mapStyle[9];
    var myStyle = "amap://styles/5078b8edf11b4b3f9ab4b0e45c45e8fe";
    map.setMapStyle(myStyle);
}

/*设置地图显示要素*/
var mapFeatures = ["bg",       //背景
    "road",     //道路，包含路名
    "building", //建筑物
    "point"     //兴趣点
];

function setMapFeatures() {
    var features = [mapFeatures[0], mapFeatures[1], mapFeatures[2]];
    map.setFeatures(features);
}

function drawJiadingBounds() {
    //加载行政区划插件
    if (!district1) {
        //实例化DistrictSearch
        var opts = {
            subdistrict: 1,   //获取边界不需要返回下级行政区
            extensions: 'all',  //返回行政区边界坐标组等具体信息
            level: 'district'  //查询行政级别为 市
        };
        district1 = new AMap.DistrictSearch(opts);
    }
    //行政区查询
    district1.setLevel("district1")

    var that = this;
    for (var i = 0; i < shanghai_district.length; i++) {
        district1.search(shanghai_district[i].adcode, function (status, result) {
            polygons = [];
            var bounds = result.districtList[0].boundaries;
            if (bounds) {
                if (result.districtList[0].adcode == "310114") {
                    for (var l = 0; l < bounds.length; l++) {
                        //生成行政区划polygon
                        var polygon = new AMap.Polygon({
                            path: bounds[l],
                            strokeWeight: 2,
                            strokeColor: '#9CA09D',
                            fillOpacity: 0.0,
                            fillColor: '#80d8ff',

                        });
                        polygons.push(polygon);
                    }
                } else {
                    for (var l = 0; l < bounds.length; l++) {
                        //生成行政区划polygon
                        var polygon = new AMap.Polygon({
                            path: bounds[l],
                            strokeWeight: 0,
                            strokeColor: '#0091ea',
                            strokeOpacity: 0,
                            fillOpacity: 0.2,
                            fillColor: '#80d8ff',

                        });
                        polygons.push(polygon);
                    }
                }

            }
            map.add(polygons)
        });
    }
    // map.add(polygons)

    for (var i = 0; i < other_district.length; i++) {
        district1.search(other_district[i].adcode, function (status, result) {
            polygons = [];
            var bounds = result.districtList[0].boundaries;
            if (bounds) {
                for (var l = 0; l < bounds.length; l++) {
                    //生成行政区划polygon
                    var polygon = new AMap.Polygon({
                        path: bounds[l],
                        strokeWeight: 0,
                        strokeColor: '#0091ea',
                        strokeOpacity: 0,
                        fillOpacity: 0.4,
                        fillColor: '#80d8ff',

                    });
                    polygons.push(polygon);
                    console.log(polygon, polygons ,'=====polygons');
                }

            }
            map.add(polygons)
        });
    }

    map.setFitView(polygons);//视口自适应

}

/*添加嘉定区和街道边界*/
function addJiadingBoundary() {
    // var url = "./map/jiading_json.json";
    // var configure_json = $.ajax({url: url,async: false}).responseText;
    // var geoJSON = $.parseJSON(configure_json);
    // var geojson = new AMap.GeoJSON({
    //     geoJSON: geoJSON,
    //     // 还可以自定义getMarker和getPolyline
    //     getPolygon: function(geojson, lnglats) {
    //         return new AMap.Polygon({
    //             path: lnglats,
    //             strokeStyle:"solid",//"dashed",
    //             strokeColor: "#9CA09D",//'#C0C0C0',
    //             strokeWeight:2,     //嘉定边界 线宽
    //             fillOpacity: 0,     //填充
    //             fillColor: '#033447'
    //         });
    //     }
    // });
    // geojson.setMap(map);

    var url0 = "./map/jiadingzhen_line.json";
    var configure_json0 = $.ajax({ url: url0, async: false }).responseText;
    var geoJSON0 = $.parseJSON(configure_json0);
    var geojson1 = new AMap.GeoJSON({
        geoJSON: geoJSON0,
        // 还可以自定义getMarker和getPolyline
        getPolyline: function (geojson, lnglats) {
            return new AMap.Polyline({
                path: lnglats,
                strokeColor: "#9CA09D",//"#C0C0C0", 
                strokeOpacity: 1,
                strokeWeight: 2,
                strokeStyle: "dashed",
            });
        }
    });
    geojson1.setMap(map);
}
function addJiadingZhenText() {
    var icon = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(0, 0),
        // 图标的取图地址
        image: './images/map/icon_car.png',
        // 图标所用图片大小
        imageSize: new AMap.Size(22, 32),
        // 图标取图偏移量
        // imageOffset: new AMap.Pixel(-9, -3)
    });
    for (var i = 0; i < jiading_district.length; i++) {
        var marker = new AMap.Marker({
            position: new AMap.LngLat(jiading_district[i].lon, jiading_district[i].lat),
            icon: icon,
            offset: new AMap.Pixel(0, 0)
        });
        // 设置label标签
        // label默认蓝框白底左上角显示，样式className为：amap-marker-label
        marker.setLabel({
            offset: new AMap.Pixel(0, 0),  //设置文本标注偏移量
            content: "<div class='info'>" + jiading_district[i].name + "</div>", //设置文本标注内容
            direction: 'center' //设置文本标注方位
        });
        // //菊园设置角度
        // if(i == 5){
        //     marker.setAngle(-35);
        // }

        marker.setMap(map);
    }
}
/*添加路况*/
function addTraffic() {
    var traffic = new AMap.TileLayer.Traffic({
        'opacity': 0.5,          //透明度
        'autoRefresh': true,     //是否自动刷新，默认为false
        'interval': 600,         //刷新间隔，默认180s
    });
    map.add(traffic); //通过add方法添加图层
}

/*添加嘉定区主要poi点*/
function addPoiMarker() {
    //嘉定区政府 121.2653,31.375602
    //南翔老街 121.308554,31.292458
    //安亭汽车城 121.16929,31.281836
    var p1 = { pointId: -1, name: "嘉定区政府", lng: 121.2653, lat: 31.375602, type: "gov" };
    var p2 = { pointId: -2, name: "南翔老街", lng: 121.308554, lat: 31.292458, type: "scene" };
    var p3 = { pointId: -3, name: "安亭汽车城", lng: 121.16929, lat: 31.281836, type: "car" };
    var p4 = { pointId: 1, name: "G15朱桥", lng: 121.188198, lat: 31.405467, type: "qiakou" };
    var p5 = { pointId: 2, name: "G2京沪", lng: 121.145693, lat: 31.284744, type: "qiakou" };
    var p6 = { pointId: 4, name: "安亭站", lng: 121.161985, lat: 31.28849, type: "qiakou" };
    var p7 = { pointId: 7, name: "华亭站", lng: 121.242686, lat: 31.468279, type: "qiakou" };
    var p8 = { pointId: 12, name: "外冈站（水路）", lng: 121.171181, lat: 31.360180, type: "qiakou" };
    var p9 = { pointId: 91, name: "南翔北站", lng: 121.30875, lat: 31.281473, type: "qiakou" };
    var p10 = { pointId: 6, name: "陆渡站", lng: 121.194994, lat: 31.467135, type: "qiakou" };
    var p11 = { pointId: 90, name: "安亭北站", lng: 121.158416, lat: 31.314374, type: "qiakou" };//lng: 121.164746, lat: 31.320193
    var mapMarker = [p1, p2, p3, p4, p6, p7, p8, p9, p10, p11, p5];

    for (var i = 0; i < mapMarker.length; i++) {
        console.log(JSON.stringify(mapMarker[i]));
        // 创建一个 Icon
        var icon = new AMap.Icon({
            // 图标尺寸
            size: new AMap.Size(22, 32),
            // 图标的取图地址
            image: './images/map/icon_' + mapMarker[i].type + '.png',
            // 图标所用图片大小
            imageSize: new AMap.Size(22, 32),
            // 图标取图偏移量
            // imageOffset: new AMap.Pixel(-9, -3)
        });

        // 将 icon 传入 marker
        var marker = new AMap.Marker({
            position: new AMap.LngLat(mapMarker[i].lng, mapMarker[i].lat),
            icon: icon,
            // offset: new AMap.Pixel(-13, -30)，
            title: mapMarker[i].name,
            markId: mapMarker[i].pointId
        });
        if (mapMarker[i].pointId > 0) {
            marker.on('click', playVideo)
        }
        map.add(marker);
    }
}

function playVideo(e) {
    //alert("播放视频"+e.target.Ce.markId);
    //console.log("播放视频"+e.target.Ce.markId)
    var stationId = e.target.Ce.markId;
    $.ajax({
        url: STATIC_URL + '/videoStream/getVideoSource/' + stationId,
        type: 'get',
        dataType: "json",
        success: function (data) {
            var resData = data.data;
            // alert("播放视频"+e.target.Ce.markId);
            //播放视频函数
            /* "monitorPoint": "630013108嘉定G2京沪一级出沪车检 东HG",
                 "url": "http://10.237.221.178:8050/cam/realmonitor/31011401001320205008?subtype=0&streamType=0&token=1592793106_0d12f011d9ba7ee06dd327f764a41f46dfabbf96&mediatype=HLS.m3u8"
 */
            console.log(1)

            console.log(resData)
            var urlList = []
            var urlName = []
            var index = 0;
            for (var i = 0; i < resData.length; i++) {
                if (resData[i].url != null && resData[i].url != '') {
                    urlList[index] = resData[i].url
                    urlName[index++] = resData[i].monitorPoint.substr(9)
                }
            }
            // alert(JSON.stringify(urlName))
            if (urlList.length > 0)
                openVideo(urlList, urlName)
            else
                alert('该点位无可用视频')
        },
        error: function (data) {
            console.log(data)
            alert('失败')
        }

    })


}

