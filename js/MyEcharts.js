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
        bar: function (xData,yData) {
            // console.log(data)
           // var data = MyEcharts.EchartsDataFormate.GroupFormate(data, 'bar');

            // var xData = ["电话", "网站", "手机App", '微信'];
            // var yData = [2342, 1230, 425, 900, 600];
            var option = {
                backgroundColor: '#011c3a',
                xAxis: {
                    data: xData,
                    axisLine: {
                        lineStyle: {
                            color: '#3d5269'
                        }
                    },
                    axisLabel: {
                        color: '#fff',
                        fontSize: 14
                    }
                },
                dataZoom: [{
                    type: 'slider',
                    xAxisIndex: 0,
                    zoomLock: true,
                    width: 400,
                    height: 10,
                    handleSize: 0,
                    showDetail: false,
                    start: 0,
                    left: "center",
                    bottom: 20,
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
                    orient: 'vertical',
                    zoomOnMouseWheel: false,
                    moveOnMouseMove: true,
                    moveOnMouseWheel: true
                }],
                yAxis: {
                    name: "单位:次",
                    nameTextStyle: {
                        color: '#fff',
                        fontSize: 14
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#3d5269'
                        }
                    },
                    axisLabel: {
                        color: '#fff',
                        fontSize: 14
                    },
                    splitLine: {
                        show:true,
                        lineStyle: {
                            color: '#2d3d53'
                        }
                    },
                    interval:500,

                },
                series: [{
                    type: 'bar',
                    barWidth: 30,
                    itemStyle:{
                        normal:{
                            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#5ef3ff'
                            }, {
                                offset: 1,
                                color: '#06a4f4'
                            }], false)
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#ffffff',
                            position: 'top',
                        }
                    },
                    data:yData
                }]
            };
            return option;
        },
        pie: function (title, color, data) {
            let setLabel = (data) => {
                let opts = [];
                for (let i = 0; i < data.length; i++) {
                    let item = {};
                    item.name = data[i].name;
                    item.value = data[i].value;
                    item.label = {
                        normal: {
                            //控制引导线上文字颜色和位置,此处a是显示文字区域，b做一个小圆圈在引导线尾部显示
                            show: true,
                            //a和b来识别不同的文字区域
                            formatter: [
                                '{a|{d}%  {b}}',//引导线上面文字
                                '{b|}' //引导线下面文字
                            ].join('\n'), //用\n来换行
                            rich: {
                                a: {
                                    left: 20,
                                    padding: [0, -80, -15, -80]
                                },
                                b: {
                                    height: 5,
                                    width: 5,
                                    lineHeight: 5,
                                    marginBottom: 10,
                                    padding: [0, -5],
                                    borderRadius: 5,
                                    backgroundColor: color[i], // 圆点颜色和饼图块状颜色一致
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
                graphic:{
                    type:"text",// [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
                    top:"48%",// 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
                    left:"35%",// 同上
                    style:{
                        text:title,// 文本块文字。可以使用 \n 来换行。[ default: '' ]
                        fill:"#fff",// 填充色。
                        fontSize:14,// 字体大小
                        fontWeight:"bold",// 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
                    },
                },
                legend: {
                    type: "scroll",
                    orient: 'vertical',
                    right: '5%',
                    align: 'left',
                    top: 'middle',
                    textStyle: {
                        color: '#fff'
                    },
                    height: 150
                },
                title: [{
                    // text: '{name|' + title + '}',

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
                formatter: function (val) {
                    return val.split("-").join("\n");
                },//此语句是让legend 中的文字进行换行</span>
                animation: true,
                series: [
                    {
                        color: color,
                        name: '饼图圆点',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        center: ['40%', '50%'],
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
                        data: setLabel(data)
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
        /**
         * 折线图
         * @param name : 标题 <br>
         * @param attackSourcesName : Y轴 <br>
         * @param attackSourcesData : json 数据
         * @param attackSourcesColor : color
         */
        Ranking: function (name, attackSourcesName, attackSourcesData,attackSourcesColor,total) {

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
                    left: 180,
                    right: 80
                },
                dataZoom: [{
                    type: 'slider',
                    yAxisIndex: [0,1],
                    zoomLock: true,
                    width: 10,
                    handleSize: 20,
                    showDetail: false,
                    start: 0,
                    end: 50,
                    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                    handleSize: '110%',
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
                            margin: 120,
                            fontSize: 16,
                            align: 'left',
                            color: '#333',
                            barMaxWidth:20,
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


                                return (value).toLocaleString() + total;

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
                    data: [100, 100,100, 100, 100, 100, 100, 100, 100, 100, 100, 1],
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
         * @name 词云库
         *
         * **/
        hotspot: function () {
            // mock数据
            let data = [{ name: '微信', value: 3328 }, { name: '南方+', value: 1045 }, { name: '东莞时间网',
                value: 834 }, { name: 'i东莞', value: 804 }, { name: '新浪微博', value: 532 }, { name: '今日头条', value: 493 }, {
                name: '腾讯新闻', value: 479 }, { name: '东莞阳光网', value: 387 }, { name: '东莞日报', value: 289 }, { name: '一点资讯',
                value: 287 }, { name: '东方头条网', value: 233 }, { name: '南方都市报', value: 228 }, { name: '新粤网', value: 207 },
                { name: '南方plus', value: 206 }, { name: '网易新闻', value: 201 }, { name: '东方头条', value: 180 }, { name:
                        '趣头条', value: 178 }, { name: '羊城派', value: 151 }, { name: '东莞时报', value: 143 }, { name: '莞讯网', value:
                        139 }, { name: '广州日报', value: 137 }, { name: '东莞阳光台', value: 132 }, { name: '搜狐新闻', value: 129 }, {
                    name: '今日头条.APP', value: 116 }, { name: '东莞阳光平台', value: 108 }, { name: '腾讯新闻.APP', value: 107 }, {
                    name: '南方网', value: 103 }, { name: 'UC头条', value: 98 }, { name: '凤凰新闻', value: 93 }, { name: '报告诉',
                    value: 77 }, { name: '网易新闻.APP', value: 74 }, { name: '中国小康网', value: 64 }, { name: '东莞万江', value: 63 },
                { name: '信息时报', value: 59 }, { name: '中国文明网', value: 58 }, { name: '东莞网', value: 57 }, { name:
                        '搜狐新闻（自媒体）', value: 54 }, { name: '南方日报', value: 54 }, { name: '搜狐焦点', value: 53 }, { name: '阳光社区',
                    value: 52 }, { name: '南方plus.APP', value: 47 }, { name: '阳光望牛墩', value: 46 }, { name: '中国报道', value: 43
                }, { name: '新浪新闻', value: 43 }, { name: '房掌柜', value: 39 }, { name: '广州日报网', value: 38 }, { name:
                        'ZAKER', value: 38 }, { name: '一点资讯.APP', value: 35 }, { name: '聚焦东莞', value: 35 }, { name: '广州新闻网',
                    value: 35 }, { name: '新浪', value: 31 }, { name: '东莞服务热线12345', value: 31 }, { name: '人民网', value: 29 },
                { name: '阳光热线问政平台', value: 26 }, { name: '党报头条', value: 26 }, { name: '羊城晚报地方版', value: 24 }, { name:
                        '网易房产', value: 23 }, { name: '中国网', value: 22 }, { name: '金羊网', value: 21 }, { name: '东莞长安', value: 21
                }, { name: '百家号', value: 21 }, { name: '澎湃新闻', value: 20 }, { name: '读特', value: 19 }, { name:
                        '东方头条.APP', value: 17 }, { name: '阳光石排', value: 16 }, { name: '新浪乐居', value: 16 }, { name: '微信邦', value:
                        16 }, { name: '搜狐新闻.APP', value: 16 }, { name: '人民日报', value: 16 }, { name: '百度新闻', value: 16 }, { name:
                        '南方都市报.APP', value: 15 }, { name: '荔枝网', value: 15 }, { name: '华人头条', value: 15 }, { name: '广东建设报',
                    value: 15 }, { name: '中国', value: 14 }, { name: '阳光黄江', value: 14 }, { name: '东方网', value: 14 }, { name:
                        '网易', value: 12 }, { name: '搜狐网', value: 12 }, { name: '和讯', value: 12 }, { name: '文化莞城', value: 11 }, {
                    name: '聊聊网', value: 11 }, { name: '58同镇', value: 11 }, { name: '凤凰网', value: 10 }, { name: '新浪网', value:
                        9 }, { name: '趣头条.APP', value: 9 }, { name: '凤岗网', value: 9 }, { name: '新快网_新快报', value: 8 }, { name:
                        '上游新闻', value: 8 }, { name: '东莞市城市综合管理局', value: 8 }, { name: '大众网', value: 8 }, { name: '中国新闻网', value:
                        7 }, { name: '第一推', value: 7 }, { name: '大洋网', value: 7 }, { name: '新浪网', value: 6 }, { name: '新浪看点',
                    value: 6 }, { name: '手机和讯网', value: 6 },].slice()

            // 随机颜色
            let randcolor = () => {
                let r = 100 + ~~(Math.random() * 100);
                let g = 135 + ~~(Math.random() * 100);
                let b = 100 + ~~(Math.random() * 100);
                return `rgb(${r}, ${g}, ${b})`
            }

            let   option = {
                backgroundColor:'rgba(0,0,0,.5)',
                tooltip: {
                    trigger: 'item',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 20
                    },
                    formatter: params => {
                        const { name, value } = params

                        return `平台：${name} <br/> 数量：${value}
 `
                    }
                },
                series: [{
                    type: 'wordCloud',
                    gridSize: 20,
                    sizeRange: [12, 50],
                    rotationRange: [0, 0],
                    shape: 'circle',
                    textStyle: {
                        normal: {
                            color: params => {
                                return randcolor()
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: data
                }]
            };

            return option;

        },
        /**
         *wordCloud
         *@param color : 颜色 数据
         * */
        goods: function (xData,yData,zData,color) {
            // xdata

// ydata

// pictorialData
            let pictorialData = []
            yData.map(v => {
                pictorialData.push({value: v, symbolPosition: 'end',})
            })

            let option = {
                legend: {
                    data: ['满意度', '总量'],
                    x: 'center',
                    top: 30,
                    right: 0,
                    textStyle: {
                        fontSize: 12,
                        color: '#ffffff'
                    }
                },
                color: ['#2db7f5', '#FFF000'],

                // tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
                dataZoom: [{
                    type: 'slider',
                    xAxisIndex: 0,
                    zoomLock: true,
                    width: 300,
                    height: 10,
                    handleSize: 0,
                    showDetail: false,
                    start: 0,
                    left: "center",
                    bottom: 20,
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
                    orient: 'vertical',
                    zoomOnMouseWheel: false,
                    moveOnMouseMove: true,
                    moveOnMouseWheel: true
                }],
                xAxis: [{
                    type: 'category',
                    data: xData,
                    // axisTick: { alignWithLabel: true },
                    axisLabel: {textStyle: {fontSize: '90%', color: "#fff"}},
                    // axisLine: { show: false },
                    axisTick: false
                }, {
                    "show": false,
                    data: xData,
                },],
                yAxis: [{
                    type: 'value',
                    name: '单位',
                    nameTextStyle: {color: '#fff', fontSize: '90%', padding: [0, 0, 0, -45]},
                    splitLine: {lineStyle: {color: 'rgba(255,255,255, .1)'}},
                    axisLabel: {textStyle: {fontSize: '90%', color: "#fff"}},
                    axisLine: {show: false},
                    axisTick: false
                }, {
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
                series: [{
                    name: '总量',
                    type: 'bar',
                    barWidth: 30,
                    data: yData,
                    itemStyle: {
                        color: color
                    },

                }, {
                    name: '满意度',
                    itemStyle: {
                        normal: {
                            color: "#FFF000",
                            lineStyle: {
                                color: "#FFF000"
                            }
                        }
                    },
                    type: "line",
                    data: zData,
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
        var container = eval("document.getElementById('" + echartId + "')");
        var myChart = echarts.init(container);
        myChart.setOption(option, true);	// 为echarts对象加载数据
        return myChart;
    }


};
