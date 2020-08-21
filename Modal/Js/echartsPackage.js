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
                temp_series = {
                    name: groups[i],
                    type: type,
                    data: temp_data
                };
                series.push(temp_series);

            }
            return {
                groups: groups,
                category: names,
                series: series
            };
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
        /**
         * 折线图
         * @param name : 标题 <br>
         * @param attackSourcesName : Y轴 <br>
         * @param attackSourcesData : json 数据
         * @param attackSourcesColor : color
         */
        Ranking: function (name, attackSourcesName, attackSourcesData, attackSourcesColor) {
            console.log(attackSourcesName, '===attackSourcesName');

            function contains(arr, dst) {
                var i = arr.length;
                while (i -= 1) {
                    if (arr[i] == dst) {
                        return i;
                    }
                }
                return false;
            }

            var attackSourcesData = attackSourcesData;
            var attackSourcesName = attackSourcesName
            var attackSourcesColor = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff', '#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#1089E7', '#F57474', '#F57474'];

            function attackSourcesDataFmt(sData) {
                var sss = [];
                sData.forEach(function (item, i) {
                    itemStyle = {
                        color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i]
                    }
                    sss.push({
                        value: item,
                        // itemStyle: itemStyle
                    });
                });
                console.log(sss)
                return sss;
            }

            var option = {
                tooltip: {
                    show: true,
                    // backgroundColor: 'rgba(3,169,244, 0.5)',//背景颜色（此时为默认色）
                    textStyle: {
                        fontSize: 12
                    },
                    // trigger: 'axis',
                    // axisPointer: {
                    //    type: 'shadow'
                    // }
                },
                legend: {
                    show: false
                },
                grid: {
                    left: 180,
                    right: 80
                },
                // dataZoom: [{
                //     type: 'slider',
                //     yAxisIndex: [0,1],
                //     zoomLock: true,
                //     width: 10,
                //     handleSize: 0,
                //     showDetail: false,
                //     start: 0,
                //     end: 50,
                //     handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                //     handleSize: '110%',
                //     handleStyle: {
                //         color: "#d3dee5",
                //     },
                //     borderColor: "#90979c"
                // }, {
                //     type: 'inside',
                //     id: 'insideY',
                //     yAxisIndex: 0,
                //     start: 0,
                //     end: 50,
                //     zoomOnMouseWheel: false,
                //     moveOnMouseMove: true,
                //     moveOnMouseWheel: true
                // }],
                xAxis: {
                    type: 'value',

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }

                },
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisPointer: {
                        label: {
                            show: true,
                            margin: 30
                        }
                    },
                    data: attackSourcesName,
                    axisLabel: {
                        margin: 160,
                        fontSize: 16,
                        align: 'left',
                        color: '#333',
                        rich: {
                            nt1: {
                                color: '#fff',
                                backgroundColor: attackSourcesColor[0],
                                width: 20,
                                height: 20,
                                align: 'center',
                                borderRadius: 100
                            },
                            nt2: {
                                color: '#fff',
                                backgroundColor: attackSourcesColor[1],
                                width: 20,
                                height: 20,
                                align: 'center',
                                borderRadius: 100
                            },
                            nt3: {
                                color: '#fff',
                                backgroundColor: attackSourcesColor[2],
                                width: 20,
                                height: 20,
                                align: 'center',
                                borderRadius: 100
                            },
                            nt: {
                                color: '#fff',
                                backgroundColor: attackSourcesColor[3],
                                width: 20,
                                height: 20,
                                align: 'center',
                                borderRadius: 100
                            },
                            title1: {

                                color: '#fff',
                                width: 90,
                                align: 'center',
                                borderRadius: 5,
                                padding: 5,
                            },
                            title2: {

                                color: '#fff',
                                width: 90,
                                align: 'center',
                                borderRadius: 5,
                                padding: 5,
                            },
                            title3: {

                                color: '#fff',
                                width: 90,
                                align: 'center',
                                borderRadius: 5,
                                padding: 5,
                            },
                            title: {

                                color: '#fff',
                                width: 90,
                                align: 'center',
                                borderRadius: 5,
                                padding: 5,
                            }
                        },

                        formatter: function (value, index) {
                            index = contains(attackSourcesName, value) + 1
                            if (index - 1 < 3) {
                                return [
                                    '{nt' + index + '|' + index + '}' + '  {title' + index + '|' + value + '}'
                                ].join('\n')
                            } else {
                                return [
                                    '{nt|' + index + '}' + '  {title|' + value + '}'
                                ].join('\n')
                            }
                        }
                    },

                }, {
                    type: 'category',
                    inverse: true,
                    axisTick: 'none',
                    axisLine: 'none',
                    show: true,
                    axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '12'
                        },
                        formatter: function (value) {


                            return (value).toLocaleString() + '分';

                        },
                    },
                    data: attackSourcesData
                }],
                series: [{
                        z: 3,
                        //name: 'value',
                        type: 'bar',
                        barWidth: '10',
                        animationDuration: 1500,
                        data: attackSourcesDataFmt(attackSourcesData),
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return attackSourcesColor[params.dataIndex > 3 ? 3 : params.dataIndex]
                                },
                                barBorderRadius: 5,
                            }
                        },
                        label: {
                            show: false,
                            position: 'right',
                            color: '#fff',
                            fontSize: 14,
                            offset: [10, 0]
                        },

                    }, {
                        name: '背景',
                        type: 'bar',
                        barWidth: 10,
                        barGap: '-100%',
                        z: 1,
                        animationDuration: 1500,
                        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 1],
                        itemStyle: {
                            normal: {
                                color: '#15345D',
                                barBorderRadius: 30,
                            }
                        },

                    },

                ]
            };
            return option;

        },

        radar: function (name, indicator) {
            var legendData = ['收入/万元','班次', '里程/万公里']; //图例

            var dataArr = [
                {
                    value: [4300, 10000, 24000, 30000, 50000, 19000],
                    // name: legendData[2],
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#00FFB4',
                                // shadowColor: '#4BFFFC',
                                // shadowBlur: 10,
                            },
                            shadowColor: '#00FFB4',
                            shadowBlur: 10,
                        },
                    },
                     areaStyle: {
                            normal: { // 单项区域填充样式
                                color: {
                                    type: 'linear',
                                    x: 0, //右
                                    y: 0, //下
                                    x2: 1, //左
                                    y2: 1, //上
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(18,108,132,0.6)'
                                    },
                                    //  {
                                    //     offset: 1,
                                    //     color: 'rgba(0,0,0,0)'
                                    // }, {
                                    //     offset: 1,
                                    //     color: '#00FFB4'
                                    // }
                                ],
                                    globalCoord: false
                                },
                                opacity: 1 // 区域透明度
                            }
                        }
                }
                
            ];
            var colorArr = ['#00D7FF','#C000FF', '#00FFB4']; //颜色
            option = {
                backgroundColor: '#101736',
                "title": {
                    "text": "",
                    x: "4%",
                    width: 173,
                    height: 163,
                    fontSize: 22,
                    textStyle: {
                        color: '#fff',
                        fontSize: '22'
                    },
                    subtextStyle: {
                        color: '#90979c',
                        fontSize: '16',
            
                    },
                },
                color: colorArr,
                legend: {
                    orient:'vertical',
                    icon: 'squareRatio', //图例形状
                    data: legendData,
                    bottom:'45%',
                    right:'5%',
                    itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
                    itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
                    itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
                    textStyle: {
                        fontSize: 14,
                        color: '#fff',
                    },
                },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 16
                        },
                    },
                    indicator: indicator,
                    splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                        show: true,
                        areaStyle: { // 分隔区域的样式设置。
                            color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                        }
                    },
                    axisLine: { //指向外圈文本的分隔线样式
                        lineStyle: {
                            color: '#153269'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgb(5,90,201)', // 分隔线颜色
                            width: 1, // 分隔线线宽
                        }
                    },
                },
                series: [{
                    type: 'radar',
                    symbolSize: 8,
                    // symbol: 'angle',
                    data: dataArr
                }]
            };
            return option
        },
        progress: function (name, category) {

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
            return option
        },
        PieChart: function (name, pieData) {
            var data = pieData
            arrName = getArrayValue(data, "name");
            arrValue = getArrayValue(data, "value");
            sumValue = 1000;
            objData = array2obj(data, "name");
            optionData = getData(data)

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
                    series: [{
                            name: "大环",
                            type: 'gauge',
                            splitNumber: 15,
                            radius: '82%',
                            center: ['50%', '55%'],
                            startAngle: 90,
                            endAngle: -269.9999,
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: [
                                        [1, '#1f59a7']
                                    ]
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: true,
                                length: 32,
                                lineStyle: {
                                    color: 'auto',
                                    width: 3.5
                                }
                            },
                            axisLabel: {
                                show: false
                            },
                            detail: {
                                show: false
                            }
                        },
                        {
                            name: '小环',
                            type: 'gauge',
                            splitNumber: 15,
                            radius: '78%',
                            center: ['50%', '55%'],
                            startAngle: 90,
                            endAngle: -269.9999,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: true,
                                lineStyle: {
                                    color: '#1f59a7',
                                    width: 3
                                },
                                length: 20,
                                splitNumber: 5
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            detail: {
                                show: false
                            }
                        },
                    ],
                    yAxis: []
                };
                for (let i = 0; i < data.length; i++) {
                    res.series.push({
                        name: '学历',
                        type: 'pie',
                        clockWise: true,
                        z: 2,
                        hoverAnimation: false,
                        radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
                        center: ["50%", "55%"],
                        label: {
                            show: true,
                            formatter: '{d}%',
                            color: 'RGB(246,175,101)',
                            fontSize: 25,
                            position: 'inside'
                        },
                        labelLine: {
                            show: false
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
                            label: {
                                show: false
                            },
                            hoverAnimation: false
                        }]
                    });
                    res.series.push({
                        name: '背景线',
                        type: 'pie',
                        silent: true,
                        z: 1,
                        clockWise: true,
                        hoverAnimation: false,
                        radius: [71 - i * 15 + '%', 69 - i * 15 + '%'],
                        center: ["50%", "55%"],
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
                            value: 100,
                            itemStyle: {
                                color: "RGB(12,64,128)",
                                borderWidth: 0
                            },
                            tooltip: {
                                show: false
                            },
                            hoverAnimation: false
                        }]
                    });
                    res.yAxis.push(data[i].name);
                }
                return res;
            }

            option = {
                backgroundColor: 'RGB(8,20,67)',
                color: [{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(10,31,95,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(1,232,254,1)'
                    }],
                    global: false
                }],
                grid: {
                    top: '16%',
                    bottom: '54%',
                    left: "50%",
                    containLabel: false
                },
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    z: 3,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        inside: false,
                        textStyle: {
                            color: "RGB(78,184,252)",
                            fontSize: 25,
                        },
                        show: true
                    },
                    data: optionData.yAxis
                }],
                xAxis: [{
                    show: false
                }],
                series: optionData.series
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
        console.log(option, echartId, '123123')
        var container = eval("document.getElementById('" + echartId + "')");
        var myChart = echarts.init(container);
        myChart.setOption(option, true); // 为echarts对象加载数据
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
        url: "http://127.0.0.1:5500/map/echarts.json",
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
        url: "http://127.0.0.1:5500/map/echarts.json",
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

// function loadBlock3() {
//     const block3 = echarts.init(document.getElementById("ecbar3"), "shine");
//     let category = [{
//             name: "管控",
//             value: 2500
//         },
//         {
//             name: "集中式",
//             value: 8000
//         },
//         {
//             name: "纳管",
//             value: 3000
//         }
//     ]; //类别
//     let total = 10000; //数据总数
//     let datas = [];
//     category.forEach(value => {
//         datas.push(value.value);
//     });
//     option = {
//         xAxis: {
//             max: total,
//             splitLine: {
//                 show: false
//             },
//             axisLine: {
//                 show: false
//             },
//             axisLabel: {
//                 show: false
//             },
//             axisTick: {
//                 show: false
//             }
//         },
//         grid: {
//             left: 80,
//             top: 20, //设置条形图的边距
//             right: 80,
//             bottom: 20
//         },
//         yAxis: [{
//             type: "category",
//             inverse: false,
//             data: category,
//             axisLine: {
//                 show: false
//             },
//             axisTick: {
//                 show: false
//             },
//             axisLabel: {
//                 show: false
//             }
//         }],
//         series: [{
//                 //内
//                 type: "bar",
//                 barWidth: 18,

//                 legendHoverLink: false,
//                 silent: true,
//                 itemStyle: {
//                     color: {
//                         type: "linear",
//                         x: 0,
//                         y: 0,
//                         x2: 1,
//                         y2: 0,
//                         colorStops: [{
//                                 offset: 0,
//                                 color: "#0097ff" // 0% 处的颜色
//                             },
//                             {
//                                 offset: 0.4,
//                                 color: "#6dffe1" // 100% 处的颜色
//                             },
//                             {
//                                 offset: 0.8,
//                                 color: "#9d6fff" // 100% 处的颜色
//                             }
//                         ]
//                     }
//                 },
//                 label: {
//                     normal: {
//                         show: true,
//                         position: "left",
//                         formatter: "{b}",
//                         textStyle: {
//                             color: "#fff",
//                             fontSize: 14
//                         }
//                     }
//                 },
//                 data: category,
//                 z: 1,
//                 animationEasing: "elasticOut"
//             },
//             {
//                 //分隔
//                 type: "pictorialBar",
//                 itemStyle: {
//                     color: "#000"
//                 },
//                 symbolRepeat: "fixed",
//                 symbolMargin: 2,
//                 symbol: "rect",
//                 symbolClip: true,
//                 symbolSize: [2, 21],
//                 symbolPosition: "start",
//                 symbolOffset: [0, 0],
//                 symbolBoundingData: this.total,
//                 data: category,
//                 z: 2,
//                 animationEasing: "elasticOut"
//             },
//             {
//                 //外边框
//                 type: "pictorialBar",
//                 symbol: "rect",
//                 symbolBoundingData: total,
//                 itemStyle: {
//                     normal: {
//                         color: "none"
//                     }
//                 },
//                 label: {
//                     normal: {
//                         show: true,
//                         position: "right",
//                         offset: [0, 0], //设置右边数据位置
//                         textStyle: {
//                             color: "#0097ff",
//                             fontSize: 14,
//                             fontWeight: 600
//                         }
//                     }
//                 },
//                 data: datas,
//                 z: 0,
//                 animationEasing: "elasticOut"
//             },
//             {
//                 name: "外框",
//                 type: "bar",
//                 barGap: "-120%", //设置外框粗细
//                 data: [total, total, total],
//                 barWidth: 25,
//                 itemStyle: {
//                     normal: {
//                         color: "#0e3c5e", //填充色
//                         barBorderColor: "#0e3c5e", //边框色
//                         barBorderWidth: 1, //边框宽度
//                         // barBorderRadius: 0, //圆角半径
//                         label: {
//                             //标签显示位置
//                             show: false,
//                             position: "top" //insideTop 或者横向的 insideLeft
//                         }
//                     }
//                 },
//                 z: 0
//             }
//         ]
//     };
//     block3.setOption(option);
// }
