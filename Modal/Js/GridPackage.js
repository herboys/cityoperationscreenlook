window.onload = function () {
  
 

let indicator = [{
  name: '监督发现',
  max: 6500
},
{
  name: '指挥协调',
  max: 16000
},
{
  name: '综合监督',
  max: 30000
},
{
  name: '案件质量',
  max: 38000
},
{
  name: '机制及专项工作',
  max: 38000
},
];
let indicator2 = [{
  name: '指挥协调',
  max: 6500
},
{
  name: '案件质量',
  max: 30000
},
{
  name: '机制及专项工作',
  max: 38000
},
];
let indicator3 = [{
  name: '监督发现',
  max: 6500
},
{
  name: '指挥协调',
  max: 16000
},
{
  name: '综合监督',
  max: 30000
},
{
  name: '案件质量',
  max: 38000
},
{
  name: '机制及专项工作',
  max: 38000
},
];
value1 = [4300, 10000, 24000, 30000, 30000, 19000];
value2 = [4300, 10000, 24000, 30000, 30000, 19000];
value3 = [4300, 10000, 24000, 30000, 30000, 19000];
let attackSourcesData = [80, 34, 60, 70, 34,80, 34, 60, 70, 34,80, 34];
let attackSourcesData2 = [80, 34, 60, 70, 34];
let attackSourcesData3 = [90, 84, 50, 70, 45];

let attackSourcesName = ['菊园新区', '安亭镇','嘉定新城', '南翔镇', '江桥镇', '徐行镇', '外冈镇', '华亭镇', '新成路街道', '嘉定镇街道', '真新街道', '工业区'];
let attackSourcesName2 = ['公安', '城管', '司法', '民政', '水务'];
let attackSourcesName3 = ['网格一', '网格二', '网格三', '网格四', '网格五'];
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
];
let pieData = [{
  name: "本科",
  value: 754
},
{
  name: "硕士",
  value: 611
},
];
  let xAxisData =  ['区域一', '区域二', '区域三', '区域四', '区域五', '区域六'];
  let yAxisData = [1100, 1600, 1300, 1300, 1250, 1500];
  let yAxisData2 = [1500, 1600, 1300, 1030, 1250, 1000];

// MyEcharts2.initChart(
//   MyEcharts2.EchartsOption.BarChart("name", xAxisData, yAxisData,yAxisData2),
//   "ecBar111"
// );
// MyEcharts2.initChart(
//   MyEcharts2.EchartsOption.Ranking("name", attackSourcesName, attackSourcesData),
//   "SmallECharts4"
// );
MyEcharts2.initChart(
MyEcharts2.EchartsOption.Ranking("name", attackSourcesName2, attackSourcesData2),
"SmallECharts44"
);
MyEcharts2.initChart(
MyEcharts2.EchartsOption.Ranking("name", attackSourcesName3, attackSourcesData3),
"SmallECharts444"
);
MyEcharts2.initChart(
MyEcharts2.EchartsOption.radar("name", indicator, value1),
"ecRadar1"
);
MyEcharts2.initChart(
MyEcharts2.EchartsOption.radar("name", indicator2, value2),
"ecRadar2"
);
MyEcharts2.initChart(
MyEcharts2.EchartsOption.radar("name", indicator3, value3),
"ecRadar3"
);
MyEcharts2.initChart(
MyEcharts2.EchartsOption.progress("name", category),
"ecbar3"
);
MyEcharts2.initChart(
MyEcharts2.EchartsOption.progress("name", category),
"ecbar4"
);
MyEcharts2.initChart(
MyEcharts2.EchartsOption.progress("name", category),
"ecbar5"
);
MyEcharts2.initChart(
MyEcharts2.EchartsOption.PieChart("name", pieData),
"ecPie1"
);
MyEcharts2.initChart(
MyEcharts2.EchartsOption.PieChart("name", pieData),
"ecPie2"
);

MyEcharts2.initChart(
  MyEcharts2.EchartsOption.BarChart("name", xAxisData, yAxisData,yAxisData2),
  "ecBar111"
);      


  let option2 = MyEcharts2.EchartsOption.Ranking("name", attackSourcesName, attackSourcesData)
  let FindbcNameTypeChart2 = echarts.init(document.getElementById("SmallECharts4"));
  FindbcNameTypeChart2.setOption(option2);
  FindbcNameTypeChart2.on("click", function (param) {
    console.log(param, 'paramparamparam');

   xAxisData =  ['11', '22', '33', '44', '55', '66'];
   yAxisData = [100, 600, 300, 300, 250, 500];
   yAxisData2 = [500, 900, 300, 030, 550, 300]
   let option1 = MyEcharts2.EchartsOption.BarChart("name", xAxisData, yAxisData,yAxisData2)
  let FindbcNameTypeChart1 = echarts.init(document.getElementById("ecBar111"));
  FindbcNameTypeChart1.setOption(option1);
  })
  
};
