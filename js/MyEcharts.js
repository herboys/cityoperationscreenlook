/**
 * 封装echarts 工具
 */
/**
 * 数组是否存在
 */

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

var MyEcharts = {
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
        bar: function (title, subtext, data) {
            console.log(data)
             var data = MyEcharts.EchartsDataFormate.GroupFormate(data, 'bar');

       var     xData = ["本年话务总量", "本年人工话务量", "每万客户呼入量",'每万客户呼入量'];
        var    yData = [2342, 1230, 425,900];
         var   option = {
                backgroundColor: '#061326',
                "grid": {
                    "top": "25%",
                    "left": "-5%",
                    "bottom": "5%",
                    "right": "5%",
                    "containLabel": true
                },
                tooltip:{
                    show:true
                },
                animation: false,
                "xAxis": [{
                    "type": "category",
                    "data": xData,
                    "axisTick": {
                        "alignWithLabel": true
                    },
                    "nameTextStyle": {
                        "color": "#82b0ec"
                    },
                    "axisLine": {
                        show: false,
                        "lineStyle": {
                            "color": "#82b0ec"
                        }
                    },
                    "axisLabel": {
                        "textStyle": {
                            "color": "#fff"
                        },
                        margin: 30
                    }
                }],
                "yAxis": [{
                    show: false,
                    "type": "value",
                    "axisLabel": {
                        "textStyle": {
                            "color": "#fff"
                        },
                    },
                    "splitLine": {
                        "lineStyle": {
                            "color": "#0c2c5a"
                        }
                    },
                    "axisLine": {
                        "show": false
                    }
                }],
                "series": [{
                    "name": "",
                    type: 'pictorialBar',
                    symbolSize: [40, 10],
                    symbolOffset: [0, -6],
                    symbolPosition: 'end',
                    z: 12,
                    // "barWidth": "0",
                    "label": {
                        "normal": {
                            "show": true,
                            "position": "top",
                            // "formatter": "{c}%"
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: '#34DCFF'
                        }
                    },
                    color: "#2DB1EF",
                    data: yData
                },
                    {
                        name: '',
                        type: 'pictorialBar',
                        symbolSize: [40, 10],
                        symbolOffset: [0, 7],
                        // "barWidth": "20",
                        z: 12,
                        "color": "#2DB1EF",
                        "data": yData
                    },
                    {
                        name: '',
                        type: 'pictorialBar',
                        symbolSize: [50, 15],
                        symbolOffset: [0, 12],
                        z: 10,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderColor: '#2EA9E5',
                                borderType: 'solid',
                                borderWidth: 1
                            }
                        },
                        data: yData
                    },        {
                        name: '',
                        type: 'pictorialBar',
                        symbolSize: [50, 15],
                        symbolOffset: [0, 12],
                        z: 10,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderColor: '#2EA9E5',
                                borderType: 'solid',
                                borderWidth: 1
                            }
                        },
                        data: yData
                    },

                    {
                        name: '',
                        type: 'pictorialBar',
                        symbolSize: [70, 20],
                        symbolOffset: [0, 18],
                        z: 10,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderColor: '#19465D',
                                borderType: 'solid',
                                borderWidth: 2
                            }
                        },
                        data: yData
                    },
                    {
                        type: 'bar',
                        //silent: true,
                        "barWidth": "40",
                        barGap: '10%', // Make series be overlap
                        barCateGoryGap: '10%',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [{
                                    offset: 0,
                                    color: "#38B2E6"
                                },
                                    {
                                        offset: 1,
                                        color: "#0B3147"
                                    }
                                ]),
                                opacity: .8
                            },
                        },
                        data: yData
                    },{
                        name: '日用气量分析',
                        type: 'line',
                        // smooth: true, //是否平滑
                        showAllSymbol: true,
                        // symbol: 'image://./static/images/guang-circle.png',
                        symbol: 'circle',
                        symbolSize: 25,
                        lineStyle: {
                            normal: {
                                color: "#6c50f3",
                                shadowColor: 'rgba(0, 0, 0, .3)',
                                shadowBlur: 0,
                                shadowOffsetY: 5,
                                shadowOffsetX: 5,
                            },
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#6c50f3',
                            }
                        },
                        itemStyle: {
                            color: "#6c50f3",
                            borderColor: "#fff",
                            borderWidth: 3,
                            shadowColor: 'rgba(0, 0, 0, .3)',
                            shadowBlur: 0,
                            shadowOffsetY: 2,
                            shadowOffsetX: 2,
                        },
                        tooltip: {
                            show: true
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(108,80,243,0.3)'
                                },
                                    {
                                        offset: 1,
                                        color: 'rgba(108,80,243,0)'
                                    }
                                ], false),
                                shadowColor: 'rgba(108,80,243, 0.9)',
                                shadowBlur: 20
                            }
                        },
                        data: [2330, 205.97,2340,900 ]
                    },
                ]
            };
            return option;
        },
        pie:function(title,color,data) {
            let setLabel = (data)=>{
                let opts = [];
                for(let i=0;i<data.length;i++){
                    let item = {};
                    item.name = data[i].name;
                    item.value = data[i].value;
                    item.label = {
                        normal:{
                            //控制引导线上文字颜色和位置,此处a是显示文字区域，b做一个小圆圈在引导线尾部显示
                            show:true,
                            //a和b来识别不同的文字区域
                            formatter:[
                                '{a|{d}%  {b}}',//引导线上面文字
                                '{b|}' //引导线下面文字
                            ].join('\n'), //用\n来换行
                            rich:{
                                a:{
                                    left:20,
                                    padding:[0,-80,-15,-80]
                                },
                                b:{
                                    height:5,
                                    width:5,
                                    lineHeight: 5,
                                    marginBottom: 10,
                                    padding:[0,-5],
                                    borderRadius:5,
                                    backgroundColor:color[i], // 圆点颜色和饼图块状颜色一致
                                }
                            },

                        }
                    }

                    opts.push(item)
                }
                return opts;
            }
            console.log(title,color,data,'000')
            var option = {

                legend: {
                    type:"scroll",
                    orient: 'vertical',
                    right:'5%',
                    align:'left',
                    top:'middle',
                    textStyle: {
                        color:'#8C8C8C'
                    },
                    height:150
                },
                animation: true,
                series: [
                    {
                        color:color,
                        name: '饼图圆点',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        labelLine: {
                            normal: {
                                show: true,
                                length: 15, // 第一段线 长度
                                length2: 100, // 第二段线 长度
                                align: 'right'
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data:setLabel(data)
                    }
                ]
            }
          return option
        },
        /**
         * 折线图
         * @param title ： 标题<br>
         * @param subtext ：副标题<br>
         * @param data : json 数据
         */
        Line: function (title, subtext, data) {
            var datas = MyEcharts.EchartsDataFormate.GroupFormate(data, 'line');
            var option = {
                //标题
                title: {
                    text: title || "",	//标题
                    subtext: subtext || "", //副标题
                    x: 'center',	//位置默认居中
                    textStyle: {"color": "red"}
                },
                //提示
                tooltip: {
                    show: true,
                    trigger: 'axis',
                },
                //组建
                legend: {
                    orient: 'vertical', //垂直：vertical； 水平 horizontal
                    left: 'right',	//位置默认右
                    data: datas.groups
                },
                grid: {
                    left: '10%',
                    top: '25%',
                    right: '10%',
                    bottom: '25%',
                },
                //水平坐标
                xAxis: [
                    {
                        type: 'category',
                        data: datas.category,
                        boundaryGap: false,
                        splitLine: {
                            show: true,
                        },
                    }
                ],
                //垂直坐标
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                //series数据
                series: datas.series
            };
            return option;
        },
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
