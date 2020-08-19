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
                // backgroundColor: '#061326',
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
            // console.log(title,color,data,'000')
            //  function aaa(title){    return title.split("-").join("\n");}
            // console.log(aaa())
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
                title: [{
                    text: '{name|' + title +'}',

                    top: 'center',
                    left: 'center',
                    textStyle: {
                        rich: {
                            name: {
                                fontSize: 14,
                                fontWeight: 'normal',
                                color: '#fff',
                                padding: [5, 0]
                            },
                            val: {
                                fontSize: 32,
                                fontWeight: 'bold',
                                color: '#fff',
                            }
                        }
                    }

                }],
                formatter:function(val){    return val.split("-").join("\n");},//此语句是让legend 中的文字进行换行</span>
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
        Ranking:function(name){

            function contains(arr, dst) {
                var i = arr.length;
                while (i -= 1) {
                    if (arr[i] == dst) {
                        return i;
                    }
                }
                return false;
            }

            var attackSourcesData = [70, 34, 60, 70, 34, 70, 34, 34];
            var attackSourcesName = ['绕过攻击', '网络爬虫', '其他有害程序事件', '远程代码执行', '信息泄露', 'HTTP请求攻击', '其他注入攻击', '后门攻击'];
            var attackSourcesColor = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff', '#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#1089E7', '#F57474', '#F57474'];

            function attackSourcesDataFmt(sData) {
                var sss = [];
                sData.forEach(function(item, i) {
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
                        fontSize: 16
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
                    right:80
                },
                dataZoom: [{
                    type: 'slider',
                    yAxisIndex: [0,1],
                    zoomLock: true,
                    width: 10,
                    handleSize: 0,
                    showDetail: false,
                    start: 0,
                    right:25,
                    end: 50,
                    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                    handleSize: '100%',
                    handleStyle: {
                        color: "#d3dee5",
                    },
                    borderColor: "#90979c"
                }, {
                    type: 'inside',
                    id: 'insideY',
                    yAxisIndex: 0,
                    start: 0,
                    end: 50,
                    zoomOnMouseWheel: false,
                    moveOnMouseMove: true,
                    moveOnMouseWheel: true
                }],
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
                yAxis: [
                    {
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
                            margin: 140,
                            fontSize: 14,
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
                                    align: 'left',
                                    borderRadius: 5,
                                    padding: 5,
                                },
                                title2: {

                                    color: '#fff',
                                    width: 90,
                                    align: 'left',
                                    borderRadius: 5,
                                    padding: 5,
                                },
                                title3: {

                                    color: '#fff',
                                    width: 90,
                                    align: 'left',
                                    borderRadius: 5,
                                    padding: 5,
                                },
                                title: {

                                    color: '#fff',
                                    width: 90,
                                    align: 'left',
                                    borderRadius: 5,
                                    padding: 5,
                                }
                            },
                            formatter: function(value, index) {
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
                            formatter: function(value) {
                                console.log(value,'123')

                                    return (value).toLocaleString() + '%';

                            },
                        },
                        data:attackSourcesData
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
                            color: function(params) {
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

                } , {
                    name: '背景',
                    type: 'bar',
                    barWidth: 10,
                    barGap: '-100%',
                    z: 1,
                    animationDuration: 1500,
                    data:  [100, 100, 100, 100, 100, 100, 100, 100, 100, 1],
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
        /**
         *@param color : 颜色 数据
        * */
        goods:function (color) {
            // xdata
            let xData = ['松山湖','南城','东城','莞城','万江','大朗','大岭山','茶山','道滘', '厚街']
// ydata
            let yData = [2900, 2700, 2500, 2300, 2100, 1900, 1700, 1500, 1300, 1100]
// pictorialData
            let pictorialData = []
            yData.map(v => { pictorialData.push({ value: v, symbolPosition: 'end', }) })

           let option = {
               legend: {
                   data: ['满意度', '街镇事件处理总量'],
                  x:'center',
                   top:30,
                   right:0,
                   textStyle: {
                       fontSize: 12,
                       color: '#ffffff'
                   }
               },
               color:['#2db7f5','#FFF000'],

                // tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
               dataZoom: [{
                   type: 'slider',
                   xAxisIndex: 0,
                   zoomLock: true,
                   width: 400,
                   height:10,
                   handleSize: 0,
                   showDetail: false,
                   start: 0,
                   left:"center",
                   bottom:20,
                   end: 50,
                   handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                   handleSize: '100%',
                   handleStyle: {
                       color: "#d3dee5",
                   },
                   borderColor: "#90979c"
               }, {
                   type: 'inside',
                   id: 'dataZoomX',
                   xAxisIndex: 0,
                   start: 0,
                   end: 50,
                   orient:'vertical',
                   zoomOnMouseWheel: false,
                   moveOnMouseMove: true,
                   moveOnMouseWheel: true
               }],
                xAxis: [{
                    type: 'category',
                    data: xData,
                    // axisTick: { alignWithLabel: true },
                    axisLabel: {  textStyle: { fontSize: '90%', color: "#fff" } },
                    // axisLine: { show: false },
                    axisTick: false
                },{
                    "show" : false,
                    data: xData,
                }, ],
                yAxis:[{
                    type: 'value',
                    name:'单位',
                    nameTextStyle: { color: '#fff', fontSize: '90%', padding: [0, 0, 0, -45]},
                    splitLine: { lineStyle: { color: 'rgba(255,255,255, .1)'}},
                    axisLabel: { textStyle: { fontSize: '90%', color: "#fff" }},
                    axisLine: { show: false },
                    axisTick: false
                },{
                    type: 'value',
                    position: 'left',
                    nameTextStyle: {
                        color: '#00FFFF'
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(135,140,147,0.8)'
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: '#fff',
                        fontSize: 14
                    }
                },],
                series:[{
                    name: '满意度',
                    type: 'bar',
                    barWidth: 30,
                    data: yData,
                    itemStyle: {
                        color: color
                    },

                },{
                   name:'街镇事件处理总量',
                    itemStyle: {
                        normal: {
                            color: "#FFF000",
                            lineStyle: {
                                color: "#FFF000"
                            }
                        }
                    },
                    type: "line",
                    data: yData,
                },
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
        console.log(option, echartId,'123123')
        var container = eval("document.getElementById('" + echartId + "')");
        var myChart = echarts.init(container);
        myChart.setOption(option, true);	// 为echarts对象加载数据
        return myChart;
    }


};
