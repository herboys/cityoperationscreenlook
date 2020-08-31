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
                    left: 120,
                    right: 65
              
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
                        margin: 90,
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
                                width: 30,
                                align: 'left',
                                borderRadius: 5,
                                padding: 5,
                            },
                            title2: {

                                color: '#fff',
                                width: 30,
                                align: 'left',
                                borderRadius: 5,
                                padding: 5,
                            },
                            title3: {

                                color: '#fff',
                                width: 30,
                                align: 'left',
                                borderRadius: 5,
                                padding: 5,
                            },
                            title: {

                                color: '#fff',
                                width: 30,
                                align: 'left',
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
                // backgroundColor: '#101736',
                // "title": {
                //     "text": "",
                //     x: "4%",
                //     width: 173,
                //     height: 163,
                //     fontSize: 22,
                //     textStyle: {
                //         color: '#fff',
                //         fontSize: '22'
                //     },
                //     subtextStyle: {
                //         color: '#90979c',
                //         fontSize: '16',
            
                //     },
                // },
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
                        padding: [2,2]
                    },
                },
                radar: {
                    // shape: 'circle',
                    name: {
                        formatter:function(value)  
                        {  
                         
                            var ret = "";//拼接加\n返回的类目项  
                            var maxLength = 2;//每项显示文字个数  
                            var valLength = value.length;//X轴类目项的文字个数  
                            var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
                            if (rowN > 1)//如果类目项的文字大于3,  
                            {  
                                for (var i = 0; i < rowN; i++) {  
                                    var temp = "";//每次截取的字符串  
                                    var start = i * maxLength;//开始截取的位置  
                                    var end = start + maxLength;//结束截取的位置  
                                    //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                                    temp = value.substring(start, end) + "\n";  
                                    ret += temp; //凭借最终的字符串  
                                }  
                                return ret;  
                            }  
                            else {  
                                return value;  
                            }  
                        } ,

                        textStyle: {
                            color: '#fff',
                            fontSize: 8,
                        },
                    },
                    nameGap: '4',
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
                    radius: 50
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
                    left: 40,
                    top: 20, //设置条形图的边距
                    right: 40,
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
                                    fontSize: 10    
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
            var placeHolderStyle = {
                normal: {
                    color: 'rgba(124,228,245,0.2)',
                },
            };
            option = {
                // backgroundColor:'rgba(2, 120, 200, 1)',
                title: {
                    text: '',
                    textStyle: {
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: '#0ab7ff'
                    },
                    left: '20%',
                    top: '25'
                },
                tooltip: {
                    show: true,
                    formatter: "{a}：{d}%"
                },
                legend: {
                    orient: '',
                    itemGap: 12,
                    left: '5%',
                    top: 'center',
                    textStyle: {
                        color: "#fff",
                    },
                    data: ['', '', '']
                },
            
                series: [{
                        name: '销量2',
                        type: 'pie',
                        clockWise: true,
                        hoverAnimation: false, //鼠标移入变大
                        radius: ['50%', '60%'],
                        center:['35%', '50%'],
                        itemStyle: {
                            normal: {
                                color: 'rgb(32, 209, 128)',
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
            
                        data: [{
                                value: 60,
                                name: 'invisible',
                                itemStyle: placeHolderStyle
                            },
                            {
                                value: 40,
                                name: '销量2'
                            }
                        ]
                    },
                    {
                        name: '销量1',
                        type: 'pie',
                        clockWise: true,
                        hoverAnimation: false, //鼠标移入变大
                        radius: ['35%', '45%'],
                        center:['35%', '50%'],
                        itemStyle: {
                            normal: {
                                color: 'rgb(0, 147, 255)',
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
            
                        data: [{
                                value: 70,
                                name: 'invisible',
                                itemStyle: placeHolderStyle
                            },
                            {
                                value: 10,
                                name: '销量1'
                            }
                        ]
                    }
            
                ]
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
        var container = eval("document.getElementById('" + echartId + "')");
        var myChart = echarts.init(container);
        myChart.setOption(option, true); // 为echarts对象加载数据
        return myChart;
    }


};

