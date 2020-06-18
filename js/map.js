$(document).ready(function(){
    initMap();
})

var map;
function  initMap() {
    console.log("initmap");
    map = new AMap.Map('mapContainer', {
        center:[121.238825,31.364284],
        zoom:12,
        zooms:[11,18],  //设置地图缩放级别
    });
    // map.setMapStyle("amap://styles/1f0788ce26d145073e84bc6e896b8f51");
    setMapStyle();
    setMapFeatures();
    addJiadingBoundary();
    addTraffic();
}
/*设置地图风格*/
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
function setMapStyle() {
    var styleName = "amap://styles/"+mapStyle[9];
    var myStyle = "amap://styles/5078b8edf11b4b3f9ab4b0e45c45e8fe";
    map.setMapStyle(myStyle);
}
/*设置地图显示要素*/
var mapFeatures = [ "bg",       //背景
                    "road",     //道路，包含路名
                    "building", //建筑物
                    "point"     //兴趣点
        ];
function setMapFeatures() {
    var features = [mapFeatures[0],mapFeatures[1],mapFeatures[2]];
    map.setFeatures(features);
}
/*添加嘉定区和街道边界*/
function  addJiadingBoundary() {
    console.log("addJiadingBoundary");
    var url = "./map/jiading_json.json";
    var configure_json = $.ajax({url: url,async: false}).responseText;
    var geoJSON = $.parseJSON(configure_json);
    var geojson = new AMap.GeoJSON({
        geoJSON: geoJSON,
        // 还可以自定义getMarker和getPolyline
        getPolygon: function(geojson, lnglats) {
            return new AMap.Polygon({
                path: lnglats,
                strokeStyle:"solid",//"dashed",
                strokeColor: "#9CA09D",//'#C0C0C0',
                strokeWeight:2,     //嘉定边界 线宽
                fillOpacity: 0,     //填充
                fillColor: '#033447'
            });
        }
    });
    geojson.setMap(map);

    var url0 = "./map/jiadingshequ_line.json";
    var configure_json0 = $.ajax({url: url0,async: false}).responseText;
    var geoJSON0 = $.parseJSON(configure_json0);
    var geojson1 = new AMap.GeoJSON({
        geoJSON: geoJSON0,
        // 还可以自定义getMarker和getPolyline
        getPolyline: function(geojson, lnglats) {
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
/*添加路况*/
function addTraffic(){
    var traffic = new AMap.TileLayer.Traffic({
        'opacity':0.5,          //透明度
        'autoRefresh': true,     //是否自动刷新，默认为false
        'interval': 600,         //刷新间隔，默认180s
    });
    map.add(traffic); //通过add方法添加图层
}