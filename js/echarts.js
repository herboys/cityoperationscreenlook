$(document).ready(function () {
  initEcharts();
  initEcharts2();

});
function initEcharts() {
  var myChart1 = echarts.init(document.getElementById("ec1"));

  option = null;
  // 圆环图各环节的颜色
  var color = [
    "#3BA0FF",
    "#36CBCB",
    "#4DCB73",
    "#FAD337",
    "#F2637B",
    "#975FE4",
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
    backgroundColor: {
      // 背景颜色
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: "rgba(0,0,0,0.4)", // 0% 处的颜色
        },
        {
          offset: 0.5,
          color: "rgba(0,0,0,0.4)", // 50% 处的颜色
        },
        {
          offset: 1,
          color: "rgba(0,0,0,0.4)", // 100% 处的颜色
        },
      ],
      globalCoord: false, // 缺省为 false
    },

    // 图例
    legend: [
      {
        selectedMode: true, // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
        orient: "vertical",
        itemWidth: 8,
        itemHeight: 8,
        top: "20%",
        left: "65%",
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
        center: ["30%", "50%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
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
         itemStyle: {
              // 此配置
              normal: {
                borderWidth: 2,
                borderColor: '#ffffff'
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
    "#3BA0FF",
    "#36CBCB",
    "#4DCB73",
    "#FAD337",
    "#F2637B",
    "#975FE4",
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
    backgroundColor: {
      // 背景颜色
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: "rgba(0,0,0,0.4)", // 0% 处的颜色
        },
        {
          offset: 0.5,
          color: "rgba(0,0,0,0.4)", // 50% 处的颜色
        },
        {
          offset: 1,
          color: "rgba(0,0,0,0.4)", // 100% 处的颜色
        },
      ],
      globalCoord: false, // 缺省为 false
    },

    // 图例
    legend: [
      {
        selectedMode: true, // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
        orient: "vertical",
        itemWidth: 8,
        itemHeight: 8,
        top: "20%",
        left: "65%",
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
        center: ["30%", "50%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
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
         itemStyle: {
              // 此配置
              normal: {
                borderWidth: 2,
                borderColor: '#ffffff'
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
      },
    ],
  };
  if (option && typeof option === "object") {
    myChart2.setOption(option, true);
  }
}
