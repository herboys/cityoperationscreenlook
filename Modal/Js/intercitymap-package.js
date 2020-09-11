var bridge1 = null;
  $(function () {
    bridge1 = new CityGis.Bridge({
      id: "mapContainer2",
      url: "http://10.81.71.51/citygis/areamap/WidgetPages/WidgetGIS.html?code=14&themeid=Gis&devicetype=lg",
      onReady: function () {
        createMenu();
      }
    });
  })

  function createMenu() {
    bridge1.Invoke([
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
  function mapReset() {
    bridge1.Invoke([ 
      {
        "ActionName": "Clear"
        },
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
  function sprinkle(res) {
    console.log(res,'wgres111');
    bridge1.Invoke([
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
      },
      {
        "ActionName": "ShowData",
        "Parameters": {
          "name": "car_dian",
          "isMouseHoverInfo": true,
          "data": {
            "content": res,
            "parsedata": "function(d){return d.features}",
            "parsegeometry": "function(item){return item.geometry}"
          },
          "popupTemplate": {
            "content": [{
              "type": "fields",
              "fieldInfos": [
                {
                  "fieldName": "district",
                  "label": "所属街镇"
                },
                {
                  "fieldName": "name",
                  "label": "发生地址"
                },
                 {
                  "fieldName": "bigClass",
                  "label": "案件大类"
                },
                {
                  "fieldName": "smallClass",
                  "label": "案件小类"
                },
                {
                  "fieldName": "childClass",
                  "label": "案件子类"
                },
                 {
                  "fieldName": "registerTime",
                  "label": "发生时间"
                },
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
  // 热力图
  function heatMap(res) {
    bridge1.Invoke([
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
      },
      {
        "ActionName": "doShowHeat",
        "Parameters": {
          "datasource": res,
       
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
      }

    ])
  }
 