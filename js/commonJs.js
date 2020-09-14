//let STATIC_URL="http://192.168.10.32:9090/citysituation";
//let STATIC_URL="http://180.167.35.167:9090/citysituation";
//let STATIC_URL="http://10.237.200.190:8085";
//let STATIC_URL="http://192.168.30.192:8085"

//let STATIC_URL="http://10.237.200.190:8080/citysituation";
//let STATIC_URL = "http://10.237.206.140:8089/citysituation";
//let ORACLE_URL = "http://10.237.206.140:8089/oracleConnection";

let STATIC_URL = "http://10.237.115.83:8089/citysituation";
let ORACLE_URL = "http://10.237.115.83:8089/oracleConnection";
//let ORACLE_URL = "http://localhost:8091";
//let ORACLE_URL = "http://10.237.115.83:8091";
 //let Bus_URL = "http://10.237.115.83:8092";
//let STATIC_URL="http://10.237.200.190:8085";
//let STATIC_URL = "http://localhost:8085";
let FIRE_URL = "http://10.237.115.83:8089/city-operation";
//let FIRE_URL = "http://10.237.115.83:8091";
//let GarBage_URl= "http://192.168.10.12:8085";
let GarBage_URl= "http://180.167.35.167:7085";
//let FIRE_URL="http://10.237.206.140:8091";
//let FIRE_URL="http://localhost:8091";
let Grid_URL= "http://10.237.115.83:8092";


let dutyFlag=true;  //部门表格翻屏标志
let emergencyFlag=true //突发事件翻屏标志

let zygyFlag=true //资源供应滚动标志
let shbzFlag=true //社会保障滚动标志
let jtklFlag=true; //交通客流滚动标志
let sthjFlag=true; //生态环境滚动标志

let videoOne=false; //垃圾分类第一个视频位置是否占用
let videoTwo=false;//垃圾分类第二个视频位置是否占用

let GarBageVideo=0; //垃圾分类一共开启了几个视频

var linkageTime = "";
var linkageScrollTime = "";
var linkageNum = 0;
var linkageNumScroll = 0;
var linkageMax = "";
var linkScrollMax = "";
