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
      //地图主题切换消息
      // {
      //   "ActionName": "changeTheme",
      //   "Parameters": {
      //     "id": "Home"
      //   }
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