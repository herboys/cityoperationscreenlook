$(document).ready(function () {
  initEcharts();
  initEcharts2();
  initEcharts3();
  initEcharts4();
  initEcharts5();
  initEcharts6();
  initEcharts7();


});
function initEcharts() {
  var myChart1 = echarts.init(document.getElementById("ec1"));

  option = null;
  // 圆环图各环节的颜色
  var color = [
    "#FF0000",
    "#0000FF",
    "#FFFF00",
    "#FF0099",
    "#66FFFF",
    "#33FF66",
    "#FF9D4D",
    "#269A99",
    "#FF99C3",
    "#6DC8EC",
    "#5D7092",
  ];

  // 圆环图各环节的名称和值(系列中各数据项的名称和值)
  var data = [
    {
      name: "60-64岁",
      value: 65800,
    },
    {
      name: "65-69岁",
      value: 61700,
    },
    {
      name: "70-79岁",
      value: 64000,
    },
    {
      name: "80-89岁",
      value: 28300,
    },
    {
        name: "90-99岁",
        value: 4500,
      },
  ];

  option = {
    //背景色
    // backgroundColor: {
    //   // 背景颜色
    //   type: "linear",
    //   x: 0,
    //   y: 0,
    //   x2: 0,
    //   y2: 1,
    //   colorStops: [
    //     {
    //       offset: 0,
    //       color: "rgba(0,0,0,0.4)", // 0% 处的颜色
    //     },
    //     {
    //       offset: 0.5,
    //       color: "rgba(0,0,0,0.4)", // 50% 处的颜色
    //     },
    //     {
    //       offset: 1,
    //       color: "rgba(0,0,0,0.4)", // 100% 处的颜色
    //     },
    //   ],
    //   globalCoord: false, // 缺省为 false
    // },

    // 图例
    legend: [
      {
        selectedMode: true, // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
        orient: "vertical",
        itemWidth: 8,
        itemHeight: 8,
        top: "20%",
        left: "55%",
        icon: "circle",
        formatter: name => {
          let data = option.series[0].data
          let total = 0
          let value = 0
          for (let i = 0; i < data.length; i++) {
              total += data[i].value
              if(data[i].name == name){
                  value =data[i].value
              }
          }
          let p = ((value / total)*100).toFixed(2)
          return (
            '{a|' + name + '}{b|' + p + '%}{c|' + value + '}'
          )
        },
        textStyle: {
            rich: {
              a: {
                fontSize: 14,
                align: 'left',
                width: 70,
                color: "#fff",
              },
              b: {
                fontSize: 14,
                align: 'left',
                width: 70,
                color: "#fff",
              },
              c: {
                fontSize: 14,
                align: 'left',
                width: 50,
                color: "#fff",
              }
            }
          }
      },
    ],

    // 提示框
    tooltip: {
      show: true, // 是否显示提示框
      trigger: "item",
      backgroundColor: "rgba(0,0,0,0.75)",
      formatter: "{b} </br> {c}人  占比{d}%", // 提示框显示内容,此处{b}表示各数据项名称，此项配置为默认显示项，{c}表示数据项的值，默认不显示，({d}%)表示数据项项占比，默认不显示。
      extraCssText: "padding:0.5rem;",
    },

    // graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
    graphic: {
      type: "text", // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
      top: "48%", // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
      left: "26.5%", // 同上
      style: {
        text: "老龄结构", // 文本块文字。可以使用 \n 来换行。[ default: '' ]
        fill: "#fff", // 填充色。
        fontSize: 14, // 字体大小
        fontWeight: "bold", // 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
      },
    },

    // 系列列表
    series: [
      {
        name: "圆环图系列名称", // 系列名称
        type: "pie", // 系列类型
        center: ["30%", "55%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
        radius: ["50%", "70%"], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
        hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
        color: color, // 圆环图的颜色
        label: {
            normal: {
                show: true,             // 是否显示标签[ default: false ]
                position: 'outside',
                formatter: ' {a|占{d}%}  ',       //图形外文字上下显示
                // borderWidth: 20,
                // borderRadius: 4,
                // padding: [0, -60],          //文字和图的边距
                rich: {
                    a: {
                        color: '#fff',
                    },
                  
                }
            }
        },
        labelLine: {
          normal: {
            show: true,
            color: '#fff'
          },
        },
        data: data, // 系列中的数据内容数组。
      
      },
    ],
  };
  if (option && typeof option === "object") {
    myChart1.setOption(option, true);
  }
}
function initEcharts2() {
  var myChart2 = echarts.init(document.getElementById("ec2"));

  option = null;
  // 圆环图各环节的颜色
  var color = [
    "#FF0000",
    "#0000FF",
    "#FFFF00",
    "#FF0099",
    "#66FFFF",
    "#33FF66",
    "#FF9D4D",
    "#269A99",
    "#FF99C3",
    "#6DC8EC",
    "#5D7092",
  ];

  // 圆环图各环节的名称和值(系列中各数据项的名称和值)
  var data = [
    {
      name: "60-64岁",
      value: 65800,
    },
    {
      name: "65-69岁",
      value: 61700,
    },
    {
      name: "70-79岁",
      value: 64000,
    },
    {
      name: "80-89岁",
      value: 28300,
    },
    {
        name: "90-99岁",
        value: 4500,
      },
  ];

  option = {
    //背景色
    // backgroundColor: {
    //   // 背景颜色
    //   type: "linear",
    //   x: 0,
    //   y: 0,
    //   x2: 0,
    //   y2: 1,
    //   colorStops: [
    //     {
    //       offset: 0,
    //       color: "rgba(0,0,0,0.4)", // 0% 处的颜色
    //     },
    //     {
    //       offset: 0.5,
    //       color: "rgba(0,0,0,0.4)", // 50% 处的颜色
    //     },
    //     {
    //       offset: 1,
    //       color: "rgba(0,0,0,0.4)", // 100% 处的颜色
    //     },
    //   ],
    //   globalCoord: false, // 缺省为 false
    // },

    // 图例
    legend: [
      {
        selectedMode: true, // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
        orient: "vertical",
        itemWidth: 8,
        itemHeight: 8,
        top: "20%",
        left: "55%",
        icon: "circle",
        formatter: name => {
          let data = option.series[0].data
          let total = 0
          let value = 0
          for (let i = 0; i < data.length; i++) {
              total += data[i].value
              if(data[i].name == name){
                  value =data[i].value
              }
          }
          let p = ((value / total)*100).toFixed(2)
          return (
            '{a|' + name + '}{b|' + p + '%}{c|' + value + '}'
          )
        },
        textStyle: {
            rich: {
              a: {
                fontSize: 14,
                align: 'left',
                width: 70,
                color: "#fff",
              },
              b: {
                fontSize: 14,
                align: 'left',
                width: 70,
                color: "#fff",
              },
              c: {
                fontSize: 14,
                align: 'left',
                width: 50,
                color: "#fff",
              }
            }
          }
      },
    ],

    // 提示框
    tooltip: {
      show: true, // 是否显示提示框
      trigger: "item",
      backgroundColor: "rgba(0,0,0,0.75)",
      formatter: "{b} </br> {c}人  占比{d}%", // 提示框显示内容,此处{b}表示各数据项名称，此项配置为默认显示项，{c}表示数据项的值，默认不显示，({d}%)表示数据项项占比，默认不显示。
      extraCssText: "padding:0.5rem;",
    },

    // graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
    graphic: {
      type: "text", // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
      top: "48%", // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
      left: "26.5%", // 同上
      style: {
        text: "年龄结构", // 文本块文字。可以使用 \n 来换行。[ default: '' ]
        fill: "#fff", // 填充色。
        fontSize: 14, // 字体大小
        fontWeight: "bold", // 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
      },
    },

    // 系列列表
    series: [
      {
        name: "圆环图系列名称", // 系列名称
        type: "pie", // 系列类型
        center: ["30%", "55%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
        radius: ["50%", "70%"], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
        hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
        color: color, // 圆环图的颜色
        label: {
            normal: {
                show: true,             // 是否显示标签[ default: false ]
                position: 'outside',
                formatter: ' {a|占{d}%}  ',       //图形外文字上下显示
                // borderWidth: 20,
                // borderRadius: 4,
                // padding: [0, -60],          //文字和图的边距
                rich: {
                    a: {
                        color: '#fff',
                    },
                  
                }
            }
        },
        labelLine: {
          normal: {
            show: true,
            color: '#fff'
          },
        },
        data: data, // 系列中的数据内容数组。
      },
    ],
  };
  if (option && typeof option === "object") {
    myChart2.setOption(option, true);
  }
}
function initEcharts3(){
  var myChart3 = echarts.init(document.getElementById("ec3"));
  var colorTemplate1 = [[0.2, "rgba(0,255,255,0.8)"], [0.8, "rgba(0,255,255,0.8)"], [1, "rgba(0,255,255,0.8)"]];
    var data1 = [{
          name: "20200",
          value: 30.9,
      }];
      
    // 指定图表的配置项和数据
    var option = {
        
        // backgroundColor: "#fff",
        
        tooltip: {              // 本系列特定的 tooltip 设定。   
                show: true,
                formatter: "{b}：{c}%",
                backgroundColor: "rgba(50,50,50,0.7)",  // 提示框浮层的背景颜色。注意：series.tooltip 仅在 tooltip.trigger 为 'item' 时有效。
                borderColor: "#333",        // 提示框浮层的边框颜色。...
                borderWidth: 0,             // 提示框浮层的边框宽。...
                padding: 5,                 // 提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。...
                textStyle: {                // 提示框浮层的文本样式。...
                    // color ,fontStyle ,fontWeight ,fontFamily ,fontSize ,lineHeight ,.......
                },
        },
        
        series: [
            {
                name: "单仪表盘示例",     // 系列名称,用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                type: "gauge",          // 系列类型
                radius: "80%",          // 参数:number, string。 仪表盘半径,默认 75% ，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
                center: ["50%", "55%"], // 仪表盘位置(圆心坐标)
                startAngle: 225,        // 仪表盘起始角度,默认 225。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
                endAngle: -45,          // 仪表盘结束角度,默认 -45
                clockwise: true,        // 仪表盘刻度是否是顺时针增长,默认 true。
                min: 0,                 // 最小的数据值,默认 0 。映射到 minAngle。
                max: 100,               // 最大的数据值,默认 100 。映射到 maxAngle。
                splitNumber: 10,        // 仪表盘刻度的分割段数,默认 10。
                
                axisLine: {             // 仪表盘轴线(轮廓线)相关配置。
                    show: true,             // 是否显示仪表盘轴线(轮廓线),默认 true。
                    lineStyle: {            // 仪表盘轴线样式。
                        color: colorTemplate1,  //仪表盘的轴线可以被分成不同颜色的多段。每段的  结束位置(范围是[0,1]) 和  颜色  可以通过一个数组来表示。默认取值：[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 1,                  //轴线宽度,默认 30。
                        shadowBlur: 20,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    }
                },
                
                splitLine: {            // 分隔线样式。
                    show: true,             // 是否显示分隔线,默认 true。
                    length: 10,             // 分隔线线长。支持相对半径的百分比,默认 30。
                    lineStyle: {            // 分隔线样式。
                        color: "#00FFCC",              //线的颜色,默认 #eee。
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 2,                   //线度,默认 2。
                        type: "solid",              //线的类型,默认 solid。 此外还有 dashed,dotted
                        shadowBlur: 10,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    }
                },
                
                axisTick: {             // 刻度(线)样式。
                    show: true,             // 是否显示刻度(线),默认 true。
                    splitNumber: 3,         // 分隔线之间分割的刻度数,默认 5。
                    length: 6,              // 刻度线长。支持相对半径的百分比,默认 8。
                    lineStyle: {            // 刻度线样式。   
                        color: "#00FFCC",              //线的颜色,默认 #eee。
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 1,                   //线度,默认 1。
                        type: "solid",              //线的类型,默认 solid。 此外还有 dashed,dotted
                        shadowBlur: 10,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    },
                },
                        
                axisLabel: {            // 刻度标签。
                    show: false,             // 是否显示标签,默认 true。
                    distance: 5,            // 标签与刻度线的距离,默认 5。
                    color: "#fff",          // 文字的颜色,默认 #fff。
                    fontSize: 5,           // 文字的字体大小,默认 5。
                    formatter: "{value}",   // 刻度标签的内容格式器，支持字符串模板和回调函数两种形式。 示例:// 使用字符串模板，模板变量为刻度默认标签 {value},如:formatter: '{value} kg'; // 使用函数模板，函数参数分别为刻度数值,如formatter: function (value) {return value + 'km/h';}
                },
                
                pointer: {              // 仪表盘指针。
                    show: false,             // 是否显示指针,默认 true。
                    length: "70%",          // 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
                    width: 5,               // 指针宽度,默认 8。
                },
                
                itemStyle: {            // 仪表盘指针样式。
                    color: "auto",          // 指针颜色，默认(auto)取数值所在的区间的颜色
                    opacity: 1,             // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                    borderWidth: 0,         // 描边线宽,默认 0。为 0 时无描边。
                    borderType: "solid",    // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                    borderColor: "#000",    // 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
                    shadowBlur: 10,         // (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                    shadowColor: "#fff",    // 阴影颜色。支持的格式同color。
                },
                
                emphasis: {             // 高亮的 仪表盘指针样式
                    itemStyle: {
                        //高亮 和正常  两者具有同样的配置项,只是在不同状态下配置项的值不同。
                    }
                },
                
                title: {                // 仪表盘标题。
                    show: true,             // 是否显示标题,默认 true。
                    offsetCenter: [0,"-20%"],//相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                    color: "#FFFF00",          // 文字的颜色,默认 #333。
                    fontSize: 12,           // 文字的字体大小,默认 15。
                },
                
                detail: {               // 仪表盘详情，用于显示数据。
                    show: true,             // 是否显示详情,默认 true。
                    offsetCenter: [0,"30%"],// 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                    color: "auto",          // 文字的颜色,默认 auto。
                    fontSize: 10,           // 文字的字体大小,默认 15。
                    formatter: "{value}%",  // 格式化函数或者字符串
                },
                
                data: data1
            }
        ]
        
    };
    
    // 使用刚指定的配置项和数据显示图表
    myChart3.setOption(option)

}
function initEcharts4(){
  var myChart3 = echarts.init(document.getElementById("ec4"));
  var colorTemplate1 = [[0.2, "rgba(0,255,255,0.8)"], [0.8, "rgba(0,255,255,0.8)"], [1, "rgba(0,255,255,0.8)"]];
    var data1 = [{
          name: "856",
          value: 1.3,
      }];
      
    // 指定图表的配置项和数据
    var option = {
        
        // backgroundColor: "#fff",
        
        tooltip: {              // 本系列特定的 tooltip 设定。   
                show: true,
                formatter: "{b}：{c}%",
                backgroundColor: "rgba(50,50,50,0.7)",  // 提示框浮层的背景颜色。注意：series.tooltip 仅在 tooltip.trigger 为 'item' 时有效。
                borderColor: "#333",        // 提示框浮层的边框颜色。...
                borderWidth: 0,             // 提示框浮层的边框宽。...
                padding: 5,                 // 提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。...
                textStyle: {                // 提示框浮层的文本样式。...
                    // color ,fontStyle ,fontWeight ,fontFamily ,fontSize ,lineHeight ,.......
                },
        },
        
        series: [
            {
                name: "单仪表盘示例",     // 系列名称,用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                type: "gauge",          // 系列类型
                radius: "80%",          // 参数:number, string。 仪表盘半径,默认 75% ，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
                center: ["50%", "55%"], // 仪表盘位置(圆心坐标)
                startAngle: 225,        // 仪表盘起始角度,默认 225。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
                endAngle: -45,          // 仪表盘结束角度,默认 -45
                clockwise: true,        // 仪表盘刻度是否是顺时针增长,默认 true。
                min: 0,                 // 最小的数据值,默认 0 。映射到 minAngle。
                max: 100,               // 最大的数据值,默认 100 。映射到 maxAngle。
                splitNumber: 10,        // 仪表盘刻度的分割段数,默认 10。
                
                axisLine: {             // 仪表盘轴线(轮廓线)相关配置。
                    show: true,             // 是否显示仪表盘轴线(轮廓线),默认 true。
                    lineStyle: {            // 仪表盘轴线样式。
                        color: colorTemplate1,  //仪表盘的轴线可以被分成不同颜色的多段。每段的  结束位置(范围是[0,1]) 和  颜色  可以通过一个数组来表示。默认取值：[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 1,                  //轴线宽度,默认 30。
                        shadowBlur: 20,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    }
                },
                
                splitLine: {            // 分隔线样式。
                    show: true,             // 是否显示分隔线,默认 true。
                    length: 10,             // 分隔线线长。支持相对半径的百分比,默认 30。
                    lineStyle: {            // 分隔线样式。
                        color: "#00FFCC",              //线的颜色,默认 #eee。
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 2,                   //线度,默认 2。
                        type: "solid",              //线的类型,默认 solid。 此外还有 dashed,dotted
                        shadowBlur: 10,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    }
                },
                
                axisTick: {             // 刻度(线)样式。
                    show: true,             // 是否显示刻度(线),默认 true。
                    splitNumber: 3,         // 分隔线之间分割的刻度数,默认 5。
                    length: 6,              // 刻度线长。支持相对半径的百分比,默认 8。
                    lineStyle: {            // 刻度线样式。   
                        color: "#00FFCC",              //线的颜色,默认 #eee。
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 1,                   //线度,默认 1。
                        type: "solid",              //线的类型,默认 solid。 此外还有 dashed,dotted
                        shadowBlur: 10,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    },
                },
                        
                axisLabel: {            // 刻度标签。
                    show: false,             // 是否显示标签,默认 true。
                    distance: 5,            // 标签与刻度线的距离,默认 5。
                    color: "#fff",          // 文字的颜色,默认 #fff。
                    fontSize: 5,           // 文字的字体大小,默认 5。
                    formatter: "{value}",   // 刻度标签的内容格式器，支持字符串模板和回调函数两种形式。 示例:// 使用字符串模板，模板变量为刻度默认标签 {value},如:formatter: '{value} kg'; // 使用函数模板，函数参数分别为刻度数值,如formatter: function (value) {return value + 'km/h';}
                },
                
                pointer: {              // 仪表盘指针。
                    show: false,             // 是否显示指针,默认 true。
                    length: "70%",          // 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
                    width: 5,               // 指针宽度,默认 8。
                },
                
                itemStyle: {            // 仪表盘指针样式。
                    color: "auto",          // 指针颜色，默认(auto)取数值所在的区间的颜色
                    opacity: 1,             // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                    borderWidth: 0,         // 描边线宽,默认 0。为 0 时无描边。
                    borderType: "solid",    // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                    borderColor: "#000",    // 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
                    shadowBlur: 10,         // (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                    shadowColor: "#fff",    // 阴影颜色。支持的格式同color。
                },
                
                emphasis: {             // 高亮的 仪表盘指针样式
                    itemStyle: {
                        //高亮 和正常  两者具有同样的配置项,只是在不同状态下配置项的值不同。
                    }
                },
                
                title: {                // 仪表盘标题。
                    show: true,             // 是否显示标题,默认 true。
                    offsetCenter: [0,"-20%"],//相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                    color: "#FFFF00",          // 文字的颜色,默认 #333。
                    fontSize: 12,           // 文字的字体大小,默认 15。
                },
                
                detail: {               // 仪表盘详情，用于显示数据。
                    show: true,             // 是否显示详情,默认 true。
                    offsetCenter: [0,"30%"],// 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                    color: "auto",          // 文字的颜色,默认 auto。
                    fontSize: 10,           // 文字的字体大小,默认 15。
                    formatter: "{value}%",  // 格式化函数或者字符串
                },
                
                data: data1
            }
        ]
        
    };
    
    // 使用刚指定的配置项和数据显示图表
    myChart3.setOption(option)

}
function initEcharts5(){
  var myChart3 = echarts.init(document.getElementById("ec5"));
  var colorTemplate1 = [[0.2, "rgba(0,255,255,0.8)"], [0.8, "rgba(0,255,255,0.8)"], [1, "rgba(0,255,255,0.8)"]];
    var data1 = [{
          name: "20132",
          value: 26,
      }];
      
    // 指定图表的配置项和数据
    var option = {
        
        // backgroundColor: "#000",
        
        tooltip: {              // 本系列特定的 tooltip 设定。   
                show: true,
                formatter: "{b}：{c}%",
                backgroundColor: "rgba(50,50,50,0.7)",  // 提示框浮层的背景颜色。注意：series.tooltip 仅在 tooltip.trigger 为 'item' 时有效。
                borderColor: "#333",        // 提示框浮层的边框颜色。...
                borderWidth: 0,             // 提示框浮层的边框宽。...
                padding: 5,                 // 提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。...
                textStyle: {                // 提示框浮层的文本样式。...
                    // color ,fontStyle ,fontWeight ,fontFamily ,fontSize ,lineHeight ,.......
                },
        },
        
        series: [
            {
                name: "单仪表盘示例",     // 系列名称,用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                type: "gauge",          // 系列类型
                radius: "80%",          // 参数:number, string。 仪表盘半径,默认 75% ，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
                center: ["50%", "55%"], // 仪表盘位置(圆心坐标)
                startAngle: 225,        // 仪表盘起始角度,默认 225。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
                endAngle: -45,          // 仪表盘结束角度,默认 -45
                clockwise: true,        // 仪表盘刻度是否是顺时针增长,默认 true。
                min: 0,                 // 最小的数据值,默认 0 。映射到 minAngle。
                max: 100,               // 最大的数据值,默认 100 。映射到 maxAngle。
                splitNumber: 10,        // 仪表盘刻度的分割段数,默认 10。
                
                axisLine: {             // 仪表盘轴线(轮廓线)相关配置。
                    show: true,             // 是否显示仪表盘轴线(轮廓线),默认 true。
                    lineStyle: {            // 仪表盘轴线样式。
                        color: colorTemplate1,  //仪表盘的轴线可以被分成不同颜色的多段。每段的  结束位置(范围是[0,1]) 和  颜色  可以通过一个数组来表示。默认取值：[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 1,                  //轴线宽度,默认 30。
                        shadowBlur: 20,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    }
                },
                
                splitLine: {            // 分隔线样式。
                    show: true,             // 是否显示分隔线,默认 true。
                    length: 10,             // 分隔线线长。支持相对半径的百分比,默认 30。
                    lineStyle: {            // 分隔线样式。
                        color: "#00FFCC",              //线的颜色,默认 #eee。
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 2,                   //线度,默认 2。
                        type: "solid",              //线的类型,默认 solid。 此外还有 dashed,dotted
                        shadowBlur: 10,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    }
                },
                
                axisTick: {             // 刻度(线)样式。
                    show: true,             // 是否显示刻度(线),默认 true。
                    splitNumber: 3,         // 分隔线之间分割的刻度数,默认 5。
                    length: 6,              // 刻度线长。支持相对半径的百分比,默认 8。
                    lineStyle: {            // 刻度线样式。   
                        color: "#00FFCC",              //线的颜色,默认 #eee。
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 1,                   //线度,默认 1。
                        type: "solid",              //线的类型,默认 solid。 此外还有 dashed,dotted
                        shadowBlur: 10,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    },
                },
                        
                axisLabel: {            // 刻度标签。
                    show: false,             // 是否显示标签,默认 true。
                    distance: 5,            // 标签与刻度线的距离,默认 5。
                    color: "#fff",          // 文字的颜色,默认 #fff。
                    fontSize: 5,           // 文字的字体大小,默认 5。
                    formatter: "{value}",   // 刻度标签的内容格式器，支持字符串模板和回调函数两种形式。 示例:// 使用字符串模板，模板变量为刻度默认标签 {value},如:formatter: '{value} kg'; // 使用函数模板，函数参数分别为刻度数值,如formatter: function (value) {return value + 'km/h';}
                },
                
                pointer: {              // 仪表盘指针。
                    show: false,             // 是否显示指针,默认 true。
                    length: "70%",          // 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
                    width: 5,               // 指针宽度,默认 8。
                },
                
                itemStyle: {            // 仪表盘指针样式。
                    color: "auto",          // 指针颜色，默认(auto)取数值所在的区间的颜色
                    opacity: 1,             // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                    borderWidth: 0,         // 描边线宽,默认 0。为 0 时无描边。
                    borderType: "solid",    // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                    borderColor: "#000",    // 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
                    shadowBlur: 10,         // (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                    shadowColor: "#fff",    // 阴影颜色。支持的格式同color。
                },
                
                emphasis: {             // 高亮的 仪表盘指针样式
                    itemStyle: {
                        //高亮 和正常  两者具有同样的配置项,只是在不同状态下配置项的值不同。
                    }
                },
                
                title: {                // 仪表盘标题。
                    show: true,             // 是否显示标题,默认 true。
                    offsetCenter: [0,"-20%"],//相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                    color: "#FFFF00",          // 文字的颜色,默认 #333。
                    fontSize: 12,           // 文字的字体大小,默认 15。
                },
                
                detail: {               // 仪表盘详情，用于显示数据。
                    show: true,             // 是否显示详情,默认 true。
                    offsetCenter: [0,"30%"],// 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                    color: "auto",          // 文字的颜色,默认 auto。
                    fontSize: 10,           // 文字的字体大小,默认 15。
                    formatter: "{value}%",  // 格式化函数或者字符串
                },
                
                data: data1
            }
        ]
        
    };
    
    // 使用刚指定的配置项和数据显示图表
    myChart3.setOption(option)

}
function initEcharts6(){
  var myChart3 = echarts.init(document.getElementById("ec6"));
  var colorTemplate1 = [[0.2, "rgba(0,255,255,0.8)"], [0.8, "rgba(0,255,255,0.8)"], [1, "rgba(0,255,255,0.8)"]];
    var data1 = [{
          name: "5177",
          value: 7.9,
      }];
      
    // 指定图表的配置项和数据
    var option = {
        
        // backgroundColor: "#000",
        
        tooltip: {              // 本系列特定的 tooltip 设定。   
                show: true,
                formatter: "{b}：{c}%",
                backgroundColor: "rgba(50,50,50,0.7)",  // 提示框浮层的背景颜色。注意：series.tooltip 仅在 tooltip.trigger 为 'item' 时有效。
                borderColor: "#333",        // 提示框浮层的边框颜色。...
                borderWidth: 0,             // 提示框浮层的边框宽。...
                padding: 5,                 // 提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。...
                textStyle: {                // 提示框浮层的文本样式。...
                    // color ,fontStyle ,fontWeight ,fontFamily ,fontSize ,lineHeight ,.......
                },
        },
        
        series: [
            {
                name: "单仪表盘示例",     // 系列名称,用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                type: "gauge",          // 系列类型
                radius: "80%",          // 参数:number, string。 仪表盘半径,默认 75% ，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
                center: ["50%", "55%"], // 仪表盘位置(圆心坐标)
                startAngle: 225,        // 仪表盘起始角度,默认 225。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
                endAngle: -45,          // 仪表盘结束角度,默认 -45
                clockwise: true,        // 仪表盘刻度是否是顺时针增长,默认 true。
                min: 0,                 // 最小的数据值,默认 0 。映射到 minAngle。
                max: 100,               // 最大的数据值,默认 100 。映射到 maxAngle。
                splitNumber: 10,        // 仪表盘刻度的分割段数,默认 10。
                
                axisLine: {             // 仪表盘轴线(轮廓线)相关配置。
                    show: true,             // 是否显示仪表盘轴线(轮廓线),默认 true。
                    lineStyle: {            // 仪表盘轴线样式。
                        color: colorTemplate1,  //仪表盘的轴线可以被分成不同颜色的多段。每段的  结束位置(范围是[0,1]) 和  颜色  可以通过一个数组来表示。默认取值：[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 1,                  //轴线宽度,默认 30。
                        shadowBlur: 20,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    }
                },
                
                splitLine: {            // 分隔线样式。
                    show: true,             // 是否显示分隔线,默认 true。
                    length: 10,             // 分隔线线长。支持相对半径的百分比,默认 30。
                    lineStyle: {            // 分隔线样式。
                        color: "#00FFCC",              //线的颜色,默认 #eee。
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 2,                   //线度,默认 2。
                        type: "solid",              //线的类型,默认 solid。 此外还有 dashed,dotted
                        shadowBlur: 10,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    }
                },
                
                axisTick: {             // 刻度(线)样式。
                    show: true,             // 是否显示刻度(线),默认 true。
                    splitNumber: 3,         // 分隔线之间分割的刻度数,默认 5。
                    length: 6,              // 刻度线长。支持相对半径的百分比,默认 8。
                    lineStyle: {            // 刻度线样式。   
                        color: "#00FFCC",              //线的颜色,默认 #eee。
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 1,                   //线度,默认 1。
                        type: "solid",              //线的类型,默认 solid。 此外还有 dashed,dotted
                        shadowBlur: 10,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    },
                },
                        
                axisLabel: {            // 刻度标签。
                    show: false,             // 是否显示标签,默认 true。
                    distance: 5,            // 标签与刻度线的距离,默认 5。
                    color: "#fff",          // 文字的颜色,默认 #fff。
                    fontSize: 5,           // 文字的字体大小,默认 5。
                    formatter: "{value}",   // 刻度标签的内容格式器，支持字符串模板和回调函数两种形式。 示例:// 使用字符串模板，模板变量为刻度默认标签 {value},如:formatter: '{value} kg'; // 使用函数模板，函数参数分别为刻度数值,如formatter: function (value) {return value + 'km/h';}
                },
                
                pointer: {              // 仪表盘指针。
                    show: false,             // 是否显示指针,默认 true。
                    length: "70%",          // 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
                    width: 5,               // 指针宽度,默认 8。
                },
                
                itemStyle: {            // 仪表盘指针样式。
                    color: "auto",          // 指针颜色，默认(auto)取数值所在的区间的颜色
                    opacity: 1,             // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                    borderWidth: 0,         // 描边线宽,默认 0。为 0 时无描边。
                    borderType: "solid",    // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                    borderColor: "#000",    // 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
                    shadowBlur: 10,         // (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                    shadowColor: "#fff",    // 阴影颜色。支持的格式同color。
                },
                
                emphasis: {             // 高亮的 仪表盘指针样式
                    itemStyle: {
                        //高亮 和正常  两者具有同样的配置项,只是在不同状态下配置项的值不同。
                    }
                },
                
                title: {                // 仪表盘标题。
                    show: true,             // 是否显示标题,默认 true。
                    offsetCenter: [0,"-20%"],//相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                    color: "#FFFF00",          // 文字的颜色,默认 #333。
                    fontSize: 12,           // 文字的字体大小,默认 15。
                },
                
                detail: {               // 仪表盘详情，用于显示数据。
                    show: true,             // 是否显示详情,默认 true。
                    offsetCenter: [0,"30%"],// 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                    color: "auto",          // 文字的颜色,默认 auto。
                    fontSize: 10,           // 文字的字体大小,默认 15。
                    formatter: "{value}%",  // 格式化函数或者字符串
                },
                
                data: data1
            }
        ]
        
    };
    
    // 使用刚指定的配置项和数据显示图表
    myChart3.setOption(option)

}
function initEcharts7(){
  var myChart3 = echarts.init(document.getElementById("ec7"));
  var colorTemplate1 = [[0.2, "rgba(0,255,255,0.8)"], [0.8, "rgba(0,255,255,0.8)"], [1, "rgba(0,255,255,0.8)"]];
    var data1 = [{
          name: "6022",
          value: 8.5,
      }];
      
    // 指定图表的配置项和数据
    var option = {
        
        // backgroundColor: "#000",
        
        tooltip: {              // 本系列特定的 tooltip 设定。   
                show: true,
                formatter: "{b}：{c}%",
                backgroundColor: "rgba(50,50,50,0.7)",  // 提示框浮层的背景颜色。注意：series.tooltip 仅在 tooltip.trigger 为 'item' 时有效。
                borderColor: "#333",        // 提示框浮层的边框颜色。...
                borderWidth: 0,             // 提示框浮层的边框宽。...
                padding: 5,                 // 提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。...
                textStyle: {                // 提示框浮层的文本样式。...
                    // color ,fontStyle ,fontWeight ,fontFamily ,fontSize ,lineHeight ,.......
                },
        },
        
        series: [
            {
                name: "单仪表盘示例",     // 系列名称,用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                type: "gauge",          // 系列类型
                radius: "80%",          // 参数:number, string。 仪表盘半径,默认 75% ，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
                center: ["50%", "55%"], // 仪表盘位置(圆心坐标)
                startAngle: 225,        // 仪表盘起始角度,默认 225。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
                endAngle: -45,          // 仪表盘结束角度,默认 -45
                clockwise: true,        // 仪表盘刻度是否是顺时针增长,默认 true。
                min: 0,                 // 最小的数据值,默认 0 。映射到 minAngle。
                max: 100,               // 最大的数据值,默认 100 。映射到 maxAngle。
                splitNumber: 10,        // 仪表盘刻度的分割段数,默认 10。
                
                axisLine: {             // 仪表盘轴线(轮廓线)相关配置。
                    show: true,             // 是否显示仪表盘轴线(轮廓线),默认 true。
                    lineStyle: {            // 仪表盘轴线样式。
                        color: colorTemplate1,  //仪表盘的轴线可以被分成不同颜色的多段。每段的  结束位置(范围是[0,1]) 和  颜色  可以通过一个数组来表示。默认取值：[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 1,                  //轴线宽度,默认 30。
                        shadowBlur: 20,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    }
                },
                
                splitLine: {            // 分隔线样式。
                    show: true,             // 是否显示分隔线,默认 true。
                    length: 10,             // 分隔线线长。支持相对半径的百分比,默认 30。
                    lineStyle: {            // 分隔线样式。
                        color: "#00FFCC",              //线的颜色,默认 #eee。
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 2,                   //线度,默认 2。
                        type: "solid",              //线的类型,默认 solid。 此外还有 dashed,dotted
                        shadowBlur: 10,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    }
                },
                
                axisTick: {             // 刻度(线)样式。
                    show: true,             // 是否显示刻度(线),默认 true。
                    splitNumber: 3,         // 分隔线之间分割的刻度数,默认 5。
                    length: 6,              // 刻度线长。支持相对半径的百分比,默认 8。
                    lineStyle: {            // 刻度线样式。   
                        color: "#00FFCC",              //线的颜色,默认 #eee。
                        opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                        width: 1,                   //线度,默认 1。
                        type: "solid",              //线的类型,默认 solid。 此外还有 dashed,dotted
                        shadowBlur: 10,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                        shadowColor: "#fff",        //阴影颜色。支持的格式同color。
                    },
                },
                        
                axisLabel: {            // 刻度标签。
                    show: false,             // 是否显示标签,默认 true。
                    distance: 5,            // 标签与刻度线的距离,默认 5。
                    color: "#fff",          // 文字的颜色,默认 #fff。
                    fontSize: 5,           // 文字的字体大小,默认 5。
                    formatter: "{value}",   // 刻度标签的内容格式器，支持字符串模板和回调函数两种形式。 示例:// 使用字符串模板，模板变量为刻度默认标签 {value},如:formatter: '{value} kg'; // 使用函数模板，函数参数分别为刻度数值,如formatter: function (value) {return value + 'km/h';}
                },
                
                pointer: {              // 仪表盘指针。
                    show: false,             // 是否显示指针,默认 true。
                    length: "70%",          // 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
                    width: 5,               // 指针宽度,默认 8。
                },
                
                itemStyle: {            // 仪表盘指针样式。
                    color: "auto",          // 指针颜色，默认(auto)取数值所在的区间的颜色
                    opacity: 1,             // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                    borderWidth: 0,         // 描边线宽,默认 0。为 0 时无描边。
                    borderType: "solid",    // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                    borderColor: "#000",    // 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
                    shadowBlur: 10,         // (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                    shadowColor: "#fff",    // 阴影颜色。支持的格式同color。
                },
                
                emphasis: {             // 高亮的 仪表盘指针样式
                    itemStyle: {
                        //高亮 和正常  两者具有同样的配置项,只是在不同状态下配置项的值不同。
                    }
                },
                
                title: {                // 仪表盘标题。
                    show: true,             // 是否显示标题,默认 true。
                    offsetCenter: [0,"-20%"],//相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                    color: "#FFFF00",          // 文字的颜色,默认 #333。
                    fontSize: 12,           // 文字的字体大小,默认 15。
                },
                
                detail: {               // 仪表盘详情，用于显示数据。
                    show: true,             // 是否显示详情,默认 true。
                    offsetCenter: [0,"30%"],// 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                    color: "auto",          // 文字的颜色,默认 auto。
                    fontSize: 10,           // 文字的字体大小,默认 15。
                    formatter: "{value}%",  // 格式化函数或者字符串
                },
                
                data: data1
            }
        ]
        
    };
    
    // 使用刚指定的配置项和数据显示图表
    myChart3.setOption(option)

}

