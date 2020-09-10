window.onload = function () {
  init()
  initJZdata()
  initBMdata()
  initWGdata()
}
function init(){






let attackSourcesData = [80, 34, 60, 70, 34,80, 34, 60, 70, 34,80, 34];
let attackSourcesData2 = [80, 34, 60, 70, 34,80, 34, 60, 70, 34];
let attackSourcesData3 = [90, 84, 50, 70, 45,80, 34, 60, 70, 34,90, 84, 50, 70, 45];


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
// MyEcharts2.EchartsOption.radar("name", indicator1, value1),
// "ecRadar1"
// );
// MyEcharts2.initChart(
// MyEcharts2.EchartsOption.radar("name", indicator2, value2),
// "ecRadar2"
// );
// MyEcharts2.initChart(
// MyEcharts2.EchartsOption.radar("name", indicator3, value3),
// "ecRadar3"
// );
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
let percentage =[]
let attackSourcesName = []
let attackSourcesData = []
let attackSourcesName2 = []
let attackSourcesData2 = []
let attackSourcesName3 = []
let attackSourcesData3 = []
let value1 = []
let value2 = []
let value3 = []
let indicator1 = [{
  name: '监督发现',
  max: 100
},
{
  name: '指挥协调',
  max: 100
},
{
  name: '综合监督',
  max: 100
},
{
  name: '案件质量',
  max: 100
},
{
  name: '机制及专项工作',
  max: 100
},
];
let indicator2 = [{
  name: '指挥协调',
  max: 100
},
{
  name: '案件质量',
  max: 100
},
{
  name: '机制及专项工作',
  max: 100
},
];
let indicator3 = [{
  name: '监督发现',
  max: 100
},
{
  name: '指挥协调',
  max: 100
},
{
  name: '综合监督',
  max: 100
},
{
  name: '案件质量',
  max: 100
},
{
  name: '机制及专项工作',
  max: 100
},
];
var res =[]
var res2 =[]
var res3 =[]
function initJZdata(){ 

  $.get("http://10.237.115.83:8092/tcasemsg/findScore",{"type":1},function(res){
    for (let i = 0; i < res.length; i++) {
      attackSourcesName.push(res[i].street)
      attackSourcesData.push(res[i].score)
     
    }
    let optionJZ = MyEcharts2.EchartsOption.Ranking("name", attackSourcesName, attackSourcesData)
    let JZPM = echarts.init(document.getElementById("SmallECharts4"));
    JZPM.setOption(optionJZ);
    value1 = [];
      value1.push(res[0].survfile)
      value1.push(res[0].commcord)
      value1.push(res[0].comsuper)
      value1.push(res[0].casequality)
      value1.push(res[0].mechanism)
    MyEcharts2.initChart(
     MyEcharts2.EchartsOption.radar("name", indicator1, value1),
     "ecRadar1"
     );
 
  JZPM.on("click", function (param,index) {
    $.get("http://10.237.115.83:8089/city-operation/tcasemsg/findSmallClassNumByStreet",{"disposeStreet":param.name},function(res){
            xAxisData =[]
            yAxisData =[]
            yAxisData2 =[]
            percentage=[]
        for (let index = 0; index < res.length; index++) {
          
          xAxisData.push(res[index].case_smallclass)  
          yAxisData.push(res[index].processNum)  
          yAxisData2.push(res[index].totalNum)  
          percentage.push(Math.round(res[index].processNum/res[index].totalNum * 10000) / 100.00)
        }
     });
   
     MyEcharts2.initChart(
      MyEcharts2.EchartsOption.BarChart("name", xAxisData, yAxisData,yAxisData2,percentage),
      "ecBar111"
    );  
     value1 = [];
    res.forEach(item => {
      if (item.street===param.name) {
       value1.push(item.survfile)
      value1.push(item.commcord)
      value1.push(item.comsuper)
      value1.push(item.casequality)
      value1.push(item.mechanism)
      }
      
    });
   
    MyEcharts2.initChart(
     MyEcharts2.EchartsOption.radar("name", indicator1, value1),
     "ecRadar1"
     );
 
  })
  
})
}

function initBMdata(){
  $.get("http://10.237.115.83:8092/tcasemsg/findScore",{"type":2},function(res2){
    for (let i = 0; i < res2.length; i++) {
      attackSourcesName2.push(res2[i].department)
      attackSourcesData2.push(res2[i].score)
    }
   // let attackSourcesName2 = ['城运中心', '电信', '东方有线', '公安', '城管', '建管委', '交通委', '联通', '绿化市容', '水务'];
  //  let attackSourcesData2 = [80, 34, 60, 70, 34,80, 34, 60, 70, 34];
    let optionBM = MyEcharts2.EchartsOption.Ranking("name", attackSourcesName2, attackSourcesData2)
    let BMPM = echarts.init(document.getElementById("SmallECharts44"));
    BMPM.setOption(optionBM);
    value2 = [];
    value2.push(res2[0].commcord)
    value2.push(res2[0].casequality)
    value2.push(res2[0].mechanism)
  MyEcharts2.initChart(
   MyEcharts2.EchartsOption.radar("name", indicator2, value2),
   "ecRadar2"
   );
    BMPM.on("click", function (param) {
      console.log(param,param.name,'paramparam22');
      // $.get("http://10.237.115.83:8089/city-operation/tcasemsg/findSmallClassNumByDepartment",{"disposeDepartment":param.name},function(res){
      //   console.log(res, 'resresres22');
      //         xAxisData =[]
      //         yAxisData =[]
      //         yAxisData2 =[]
      //     for (let index = 0; index < res.length; index++) {
            
      //       xAxisData.push(res[index].case_smallclass)  
      //       yAxisData.push(res[index].processNum)  
      //       yAxisData2.push(res[index].totalNum)  
      //     }
      //  });
   
      //  MyEcharts2.initChart(
      //   MyEcharts2.EchartsOption.BarChart("name", xAxisData, yAxisData,yAxisData2),
      //   "ecBar111"
      // );  
    
      value2 = [];
      res2.forEach(item => {
        if (item.department===param.name) {
        value2.push(item.commcord)
        value2.push(item.casequality)
        value2.push(item.mechanism)
        }
        
      });
     
      MyEcharts2.initChart(
       MyEcharts2.EchartsOption.radar("name", indicator2, value2),
       "ecRadar2"
       );
    })
  })
}

function initWGdata(){
  $.get("http://10.237.115.83:8092/tcasemsg/findScore",{"type":3},function(res3){
    for (let i = 0; i < res3.length; i++) {
      attackSourcesName3.push(res3[i].gridname)
      attackSourcesData3.push(res3[i].score)
    }
 // let attackSourcesName3 = ['墨玉社区', '向阳村', '新源社区', '沁富社区', '沁乐社区','玉兰第二社区','紫荆社区','红梅社区','金桂社区','南安村','迎春社区', '六泉桥社区', '西元村', '新安社区', '龚闵村'];
 // let attackSourcesData3 = [80, 34, 60, 70, 34,80, 34, 60, 70, 34];
  let optionWG = MyEcharts2.EchartsOption.Ranking2("name", attackSourcesName3, attackSourcesData3)
  let WGPM = echarts.init(document.getElementById("SmallECharts444"));
  WGPM.setOption(optionWG);
  value3 = [];
  value3.push(res3[0].survfile)
  value3.push(res3[0].commcord)
  value3.push(res3[0].comsuper)
  value3.push(res3[0].casequality)
  value3.push(res3[0].mechanism)
MyEcharts2.initChart(
 MyEcharts2.EchartsOption.radar("name", indicator3, value3),
 "ecRadar3"
 );
  WGPM.on("click", function (param) {
    $.get("http://10.237.115.83:8089/city-operation/tcasemsg/findSmallClassNumByGridCode",{"gridCode":14625},function(res){
            xAxisData =[]
            yAxisData =[]
            yAxisData2 =[]
        for (let index = 0; index < res.length; index++) {
          
          xAxisData.push(res[index].case_smallclass)  
          yAxisData.push(res[index].processNum)  
          yAxisData2.push(res[index].totalNum)  
        }
     });
 
     MyEcharts2.initChart(
      MyEcharts2.EchartsOption.BarChart("name", xAxisData, yAxisData,yAxisData2,percentage),
      "ecBar111"
    );  

    value3 = [];
    res3.forEach(item => {
      if (item.gridname===param.name) {
      value3.push(item.survfile)
      value3.push(item.commcord)
      value3.push(item.comsuper)
      value3.push(item.casequality)
      value3.push(item.mechanism)
      }
      
    });
   
    MyEcharts2.initChart(
     MyEcharts2.EchartsOption.radar("name", indicator3, value3),
     "ecRadar3"
     );
  })
  
  })
}

