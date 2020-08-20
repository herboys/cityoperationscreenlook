Array.prototype.contains = function (obj) {
  var i = this.length;
  while (i--) {
      if (this[i] === obj) {
          return true;
      }
  }
  return false;
};
/**
* 数组中最大值 最小值
* @param array
* @returns
*/
Array.prototype.max = function () {
  return Math.max.apply({}, this);
};
Array.prototype.min = function () {
  return Math.min.apply({}, this);
};

/**
* 判断是否为整数
* @param obj
* @returns {Boolean}
*/
function isInteger(obj) {
  return obj % 1 === 0
}

var MyEcharts2 = {
  EchartsDataFormate: {


      /**
       * @param data : json数据<br>
       * @param type : 图表类型<br>
       */
      GroupFormate: function (data, type) {
          //用于存储类型名称
          var groups = new Array();
          //用于存储data.name数据
          var names = new Array();
          //存储返回series数据 （一个或者多个）
          var series = new Array();

          for (var i = 0; i < data.length; i++) {
              //判断data[i].group是否存在数租groups中
              if (!groups.contains(data[i].group)) {
                  //不存在则跳进 存放
                  groups.push(data[i].group);
              }

              //判断name数据是否存在 数组names中
              if (!names.contains(data[i].name)) {
                  //不存在则跳进 存放
                  names.push(data[i].name);
              }
          }

          //遍历分类
          for (var i = 0; i < groups.length; i++) {
              //定义一个series中间变量
              var temp_series = {};
              //定义data.value数据存储
              var temp_data = new Array();
              //遍历所有数据
              for (var j = 0; j < data.length; j++) {
                  //遍历data.name数据
                  for (var k = 0; k < names.length; k++) {
                      //判断所有分类中的所有数据含name数据分开
                      if (groups[i] == data[j].group && names[k] == data[j].name) {
                          temp_data.push(data[j].value);
                      }
                  }
              }
              temp_series = {name: groups[i], type: type, data: temp_data};
              series.push(temp_series);

          }
          return {groups: groups, category: names, series: series};
      },


  },
  //生成图形option
  EchartsOption: {
      /**
       * 柱形图
       * @param title ： 标题<br>
       * @param subtext ：副标题<br>
       * @param data : json 数据
       */
   
      radar:function(data){
          console.log(data, '===data');
          var data = MyEcharts2.EchartsDataFormate.GroupFormate(data, 'radar');
        let option = {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data: []
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                indicator: [
                    { name: '发现得分', max: 6500},
                    { name: '协调得分', max: 16000},
                    { name: '办结得分', max: 30000},
                    { name: '基础得分', max: 38000},
         
                ]
            },
            series: [{
                name: '',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [
                    {
                        value: [4300, 10000, 28000, 35000, 50000, 19000],
                        name: '预算分配（Allocated Budget）'
                    },
                    {
                        value: [5000, 14000, 28000, 31000, 42000, 21000],
                        name: '实际开销（Actual Spending）'
                    }
                ]
            }]
        };
      return option
      }
  },

  /**
   *添加Id
   * @param option : option
   * @param echartId : string 需要加引号
   */
  initChart: function (option, echartId) {
      console.log(option, echartId,'123123')
      var container = eval("document.getElementById('" + echartId + "')");
      var myChart = echarts.init(container);
      myChart.setOption(option, true);	// 为echarts对象加载数据
      return myChart;
  }


};


$(function () {
    loadBlock1();
    loadBlock2();
    loadBlock3();
   });
  
   function loadBlock1() {
    const block4 = echarts.init(document.getElementById("ecPie1"), "shine");
    const block4Opt = {
        legend: {
            show: true,
            top: "center",
            left: '70%',
            itemWidth: 30,
            itemHeight: 20,
            width: 50,
            padding: [0, 5],
            itemGap: 25,
            formatter: function (name) {
                return "{title|" + name + "}\n{value|" + (objData[name].value) + "}"
            },
            textStyle: {
                rich: {
                    title: {
                        fontSize: 10,
                        lineHeight: 10,
                        color: "rgba(255,255,255,.85)"
                    },
                    value: {
                        fontSize: 14,
                        lineHeight: 18,
                        color: "rgba(255,255,255,1)"
                    }
                }
            },
        },
        tooltip: {
            show: true,
            trigger: "item",
            formatter: "{a}<br>{b}:{c}"
        },
        color: ['#FF8700', '#ffc300', '#00e473', '#009DFF'],
        grid: {
            top: '20%',
            bottom: '48%',
            left: "30%",
            containLabel: false
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                inside: true,
                textStyle: {
                    color: "#fff",
                    fontSize: 12,
                },
                show: true
            }
        }],
        xAxis: [{
            show: false
        }]
    };
    $.ajax({
        url:  "http://127.0.0.1:5500/map/echarts.json",
        dataType: "json"
    }).done(function () {
        $("#block4").addClass("chart-done");
    }).done(function (data) {
        arrName = getArrayValue(data, "name");
        arrValue = getArrayValue(data, "value");
        sumValue = eval(arrValue.join('+'));
        objData = array2obj(data, "name");
        optionData = getData(data);
        block4.setOption(block4Opt);
        block4.setOption({
            yAxis: {
                data: optionData.yAxis
            },
            series: optionData.series,
            legend: {
                data: arrName
            }
        });
    }).fail(function (jqXHR) {
        console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
    });
  
    function getArrayValue(array, key) {
        var key = key || "value";
        var res = [];
        if (array) {
            array.forEach(function (t) {
                res.push(t[key]);
            });
        }
        return res;
    }
  
    function array2obj(array, key) {
        var resObj = {};
        for (var i = 0; i < array.length; i++) {
            resObj[array[i][key]] = array[i];
        }
        return resObj;
    }
  
    function getData(data) {
        var res = {
            series: [],
            yAxis: []
        };
        for (let i = 0; i < data.length; i++) {
            res.series.push({
                name: '房屋管理',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
                center: ["30%", "55%"],
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                },
                data: [{
                    value: data[i].value,
                    name: data[i].name
                }, {
                    value: sumValue - data[i].value,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });
            res.series.push({
                name: '',
                type: 'pie',
                silent: true,
                z: 1,
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
                center: ["30%", "55%"],
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                },
                data: [{
                    value: 7.5,
                    itemStyle: {
                        color: "#E3F0FF",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }, {
                    value: 2.5,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });
            res.yAxis.push(data[i].value);
        }
        return res;
    }
  }
  function loadBlock2() {
    const block4 = echarts.init(document.getElementById("ecPie2"), "shine");
    const block4Opt = {
        legend: {
            show: true,
            top: "center",
            left: '70%',
            itemWidth: 30,
            itemHeight: 20,
            width: 50,
            padding: [0, 5],
            itemGap: 25,
            formatter: function (name) {
                return "{title|" + name + "}\n{value|" + (objData[name].value) + "}"
            },
            textStyle: {
                rich: {
                    title: {
                        fontSize: 10,
                        lineHeight: 10,
                        color: "rgba(255,255,255,.85)"
                    },
                    value: {
                        fontSize: 14,
                        lineHeight: 18,
                        color: "rgba(255,255,255,1)"
                    }
                }
            },
        },
        tooltip: {
            show: true,
            trigger: "item",
            formatter: "{a}<br>{b}:{c}"
        },
        color: ['#FF8700', '#ffc300', '#00e473', '#009DFF'],
        grid: {
            top: '20%',
            bottom: '48%',
            left: "30%",
            containLabel: false
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                inside: true,
                textStyle: {
                    color: "#fff",
                    fontSize: 12,
                },
                show: true
            }
        }],
        xAxis: [{
            show: false
        }]
    };
    $.ajax({
        url:  "http://127.0.0.1:5500/map/echarts.json",
        dataType: "json"
    }).done(function () {
        $("#block4").addClass("chart-done");
    }).done(function (data) {
        arrName = getArrayValue(data, "name");
        arrValue = getArrayValue(data, "value");
        sumValue = eval(arrValue.join('+'));
        objData = array2obj(data, "name");
        optionData = getData(data);
        block4.setOption(block4Opt);
        block4.setOption({
            yAxis: {
                data: optionData.yAxis
            },
            series: optionData.series,
            legend: {
                data: arrName
            }
        });
    }).fail(function (jqXHR) {
        console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
    });
  
    function getArrayValue(array, key) {
        var key = key || "value";
        var res = [];
        if (array) {
            array.forEach(function (t) {
                res.push(t[key]);
            });
        }
        return res;
    }
  
    function array2obj(array, key) {
        var resObj = {};
        for (var i = 0; i < array.length; i++) {
            resObj[array[i][key]] = array[i];
        }
        return resObj;
    }
  
    function getData(data) {
        var res = {
            series: [],
            yAxis: []
        };
        for (let i = 0; i < data.length; i++) {
            res.series.push({
                name: '房屋管理',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
                center: ["30%", "55%"],
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                },
                data: [{
                    value: data[i].value,
                    name: data[i].name
                }, {
                    value: sumValue - data[i].value,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });
            res.series.push({
                name: '',
                type: 'pie',
                silent: true,
                z: 1,
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
                center: ["30%", "55%"],
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                },
                data: [{
                    value: 7.5,
                    itemStyle: {
                        color: "#E3F0FF",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }, {
                    value: 2.5,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });
            res.yAxis.push(data[i].value);
        }
        return res;
    }
  }
  function loadBlock3() {
    const block3 = echarts.init(document.getElementById("ecbar3"), "shine");
    let category = [{
        name: "管控",
        value: 2500
    },
    {
        name: "集中式",
        value: 8000
    },
    {
        name: "纳管",
        value: 3000
    }
]; //类别
let total = 10000; //数据总数
let datas = [];
category.forEach(value => {
    datas.push(value.value);
});
option = {
    xAxis: {
        max: total,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    grid: {
        left: 80,
        top: 20, //设置条形图的边距
        right: 80,
        bottom: 20
    },
    yAxis: [{
        type: "category",
        inverse: false,
        data: category,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    series: [{
            //内
            type: "bar",
            barWidth: 18,

            legendHoverLink: false,
            silent: true,
            itemStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: "#0097ff" // 0% 处的颜色
                        },
                        {
                            offset: 0.4,
                            color: "#6dffe1" // 100% 处的颜色
                        },
                        {
                            offset: 0.8,
                            color: "#9d6fff" // 100% 处的颜色
                        }
                    ]
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "left",
                    formatter: "{b}",
                    textStyle: {
                        color: "#fff",
                        fontSize: 14
                    }
                }
            },
            data: category,
            z: 1,
            animationEasing: "elasticOut"
        },
        {
            //分隔
            type: "pictorialBar",
            itemStyle: {
                color: "#000"
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [2, 21],
            symbolPosition: "start",
            symbolOffset: [0, 0],
            symbolBoundingData: this.total,
            data: category,
            z: 2,
            animationEasing: "elasticOut"
        },
        {
            //外边框
            type: "pictorialBar",
            symbol: "rect",
            symbolBoundingData: total,
            itemStyle: {
                normal: {
                    color: "none"
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "right",
                    offset: [0, 0], //设置右边数据位置
                    textStyle: {
                        color: "#0097ff",
                        fontSize: 14,
                        fontWeight: 600
                    }
                }
            },
            data: datas,
            z: 0,
            animationEasing: "elasticOut"
        },
        {
            name: "外框",
            type: "bar",
            barGap: "-120%", //设置外框粗细
            data: [total, total, total],
            barWidth: 25,
            itemStyle: {
                normal: {
                    color: "#0e3c5e", //填充色
                    barBorderColor: "#0e3c5e", //边框色
                    barBorderWidth: 1, //边框宽度
                    // barBorderRadius: 0, //圆角半径
                    label: {
                        //标签显示位置
                        show: false,
                        position: "top" //insideTop 或者横向的 insideLeft
                    }
                }
            },
            z: 0
        }
    ]
    };
    block3.setOption(option);
  }
