window.onload = function () {
  init()
  initJZdata()
  initBMdata()
  initWGdata()
}
function init(){


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
let attackSourcesData2 = [80, 34, 60, 70, 34,80, 34, 60, 70, 34];
let attackSourcesData3 = [90, 84, 50, 70, 45,80, 34, 60, 70, 34,90, 84, 50, 70, 45];


// let attackSourcesName = ['菊园新区', '安亭镇','嘉定新城', '南翔镇', '江桥镇', '徐行镇', '外冈镇', '华亭镇', '新成路街道', '嘉定镇街道', '真新街道', '工业区'];
// let attackSourcesName2 = ['城发', '电信', '东方有线', '公安', '嘉定供电', '建管委', '交通委', '联通', '绿化市容', '水务'];
// let attackSourcesName3 = ['墨玉社区', '向阳村', '新源社区', '沁富社区', '沁乐社区','玉兰第二社区','紫荆社区','红梅社区','金桂社区','南安村','迎春社区', '六泉桥社区', '西元村', '新安社区', '龚闵村'];
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
  let xAxisData =  ['路灯', '上水井盖', '废弃车辆', '道路保洁', '暴露垃圾', '交通信号灯'];
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
// MyEcharts2.initChart(
// MyEcharts2.EchartsOption.Ranking("name", attackSourcesName2, attackSourcesData2),
// "SmallECharts44"
// );
// MyEcharts2.initChart(
// MyEcharts2.EchartsOption.Ranking("name", attackSourcesName3, attackSourcesData3),
// "SmallECharts444"
// );
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

  
};
let xAxisData =[]
let yAxisData =[]
let yAxisData2 =[]
function initJZdata(){
  let attackSourcesName = ['菊园新区', '安亭镇','嘉定新城', '南翔镇', '江桥镇', '徐行镇', '外冈镇', '华亭镇', '新成路街道', '嘉定镇街道', '真新街道', '工业区'];
  let attackSourcesData = [80, 34, 60, 70, 34,80, 34, 60, 70, 34,80, 34];
 
  let optionJZ = MyEcharts2.EchartsOption.Ranking("name", attackSourcesName, attackSourcesData)
  let JZPM = echarts.init(document.getElementById("SmallECharts4"));
  JZPM.setOption(optionJZ);
  JZPM.on("click", function (param) {
    console.log(param, 'paramparamparam');
    $.get("http://10.237.115.83:8089/city-operation/tcasemsg/findSmallClassNumByStreet",{"disposeStreet":param.name},function(res){
            xAxisData =[]
            yAxisData =[]
            yAxisData2 =[]
        for (let index = 0; index < res.length; index++) {
          
          console.log(res,"respostrespostrespost");
          xAxisData.push(res[index].case_smallclass)  
          yAxisData.push(res[index].processNum)  
          yAxisData2.push(res[index].totalNum)  
          console.log(xAxisData,yAxisData,yAxisData2, 'option1option1option1option1');
        }
     });
 
     MyEcharts2.initChart(
      MyEcharts2.EchartsOption.BarChart("name", xAxisData, yAxisData,yAxisData2),
      "ecBar111"
    );  
    //  xAxisData =  ['交通信号灯', '上水井盖', '废弃车辆', '道路保洁', '暴露垃圾', '路灯'];
    //  yAxisData = [100, 600, 300, 300, 250, 500];
    //  yAxisData2 = [500, 900, 300, 030, 550, 300]
    
    // let option1 = MyEcharts2.EchartsOption.BarChart("name", xAxisData, yAxisData,yAxisData2)
    // let FindbcNameTypeChart1 = echarts.init(document.getElementById("ecBar111"));
    // FindbcNameTypeChart1.setOption(option1);
  })
  

}

function initBMdata(){
    let attackSourcesName2 = ['城运中心', '电信', '东方有线', '公安', '城管', '建管委', '交通委', '联通', '绿化市容', '水务'];
    let attackSourcesData2 = [80, 34, 60, 70, 34,80, 34, 60, 70, 34];
    let optionBM = MyEcharts2.EchartsOption.Ranking("name", attackSourcesName2, attackSourcesData2)
    let BMPM = echarts.init(document.getElementById("SmallECharts44"));
    BMPM.setOption(optionBM);
    BMPM.on("click", function (param) {
      console.log(param, 'paramparamparam');
      $.get("http://10.237.115.83:8089/city-operation/tcasemsg/findSmallClassNumByDepartment",{"disposeDepartment":param.name},function(res){
              xAxisData =[]
              yAxisData =[]
              yAxisData2 =[]
          for (let index = 0; index < res.length; index++) {
            
            console.log(res,"respostrespostrespost");
            xAxisData.push(res[index].case_smallclass)  
            yAxisData.push(res[index].processNum)  
            yAxisData2.push(res[index].totalNum)  
            console.log(xAxisData,yAxisData,yAxisData2, 'option1option1option1option1');
          }
       });
   
       MyEcharts2.initChart(
        MyEcharts2.EchartsOption.BarChart("name", xAxisData, yAxisData,yAxisData2),
        "ecBar111"
      );  
    
    })
}

function initWGdata(){
  let attackSourcesName3 = ['墨玉社区', '向阳村', '新源社区', '沁富社区', '沁乐社区','玉兰第二社区','紫荆社区','红梅社区','金桂社区','南安村','迎春社区', '六泉桥社区', '西元村', '新安社区', '龚闵村'];
  let attackSourcesData3 = [80, 34, 60, 70, 34,80, 34, 60, 70, 34];
  let optionWG = MyEcharts2.EchartsOption.Ranking("name", attackSourcesName3, attackSourcesData3)
  let WGPM = echarts.init(document.getElementById("SmallECharts444"));
  WGPM.setOption(optionWG);
  WGPM.on("click", function (param) {
    console.log(param, 'paramparamparam');
    $.get("http://10.237.115.83:8089/city-operation/tcasemsg/findSmallClassNumByGridCode",{"gridCode":14625},function(res){
            xAxisData =[]
            yAxisData =[]
            yAxisData2 =[]
        for (let index = 0; index < res.length; index++) {
          
          console.log(res,"respostrespostrespost");
          xAxisData.push(res[index].case_smallclass)  
          yAxisData.push(res[index].processNum)  
          yAxisData2.push(res[index].totalNum)  
          console.log(xAxisData,yAxisData,yAxisData2, 'option1option1option1option1');
        }
     });
 
     MyEcharts2.initChart(
      MyEcharts2.EchartsOption.BarChart("name", xAxisData, yAxisData,yAxisData2),
      "ecBar111"
    );  
  
  })
}

