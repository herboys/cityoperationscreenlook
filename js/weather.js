$(function () {
    //alert(window.localStorage.getItem("alarm"))
    var lastDate=window.localStorage.getItem("date")
    //alert(lastDate)
    var curDate=getNowFormatDate()
    if(curDate!=lastDate){
        window.localStorage.removeItem("alarm")
        window.localStorage.setItem("date",curDate)
    }
   // window.localStorage.clear()
  if( window.localStorage.getItem("alarm")==null){
        window.localStorage.setItem("alarm","")
        var date= getNowFormatDate();
        window.localStorage.setItem("date",date)
    }

    var w="阵雨"
    var tem=30
    //showWeather(w, tem);

    changeWeather();


    //setInterval(changeWeather,300000);
   /* //每15分钟一次
    setInterval(changeWeather,60000*15);
    //每小时检查一次
    setInterval(clearAlarm,1*60*60*1000)*/
   // setInterval(changeWeather,10000);

})

var weatherIndex = {
    晴: [0, 0],  多云: [1, 0], 阴: [2, 0], 阵雨: [3, 0], 雷雨: [4, 0], 雷阵雨伴有冰雹: [5, 0], 雨夹雪: [6, 0], 小雨: [7, 0], 中雨: [8, 0], 雾: [9, 0],
    大雨:[0,1], 暴雨:[1,1], 大暴雨:[2,1], 特大暴雨:[3,1], 阵雪:[4,1], 小雪:[5,1], 中雪:[6,1], 大雪:[7,1],
};

function changeWeather(){
    // alert("weather")
    var tem; var w,wth;var ty,tz;
    let now = new Date();
    let hour = now.getHours() +1;
    let min = now.getMinutes();
    /*    $.ajax({
            url : 'http://61.152.122.122/JDData/JDDataForm.aspx?action=7Day',
            dataType : 'json',
            type : 'get',
            async : false,
            success : function(data) {
                for(var i = 0; i < data.length; i++) {
                    if(parseInt(now.getFullYear())==data[i].forecastday.substring(0,4)&&(parseInt(now.getMonth())+1)==parseInt(data[i].forecastday.substring(5,7))&&parseInt(now.getDate())==data[i].forecastday.substring(8,10))
                    {
                        if(parseInt(hour)>=6&&parseInt(hour)<=20) w=data[i].nighticonid;
                        else  w=data[i].nighticonid;
                        break;
                    }
                }
            }
        })*/
    $.ajax({
        url : 'http://61.152.122.122/JDData/JDDataForm.aspx?action=zdz',
        dataType : 'json',
        type : 'get',
        async : true,
        success : function(data) {
            var wind_speed=0
            var curTime=""

            w="-1"

            for(var i = 0; i < data.length; i++) {
                if(data[i].stationname=="嘉定嘉定镇气象观测站"){
                    tem=data[i].temper;
                    wind_speed=data[i].max_flu_ws;
                    curTime=data[i].date.split(" ")[1]

                    if(data[i].one_rain>0&&data[i].one_rain<10)w="小雨";
                    else if(data[i].one_rain>10&&data[i].one_rain<24.9)w="中雨";
                    else if(data[i].one_rain>25&&data[i].one_rain<49.9){
                        w="大雨";
                    } else  if(data[i].one_rain>50&&data[i].one_rain<99.9){
                        w="暴雨";
                    } else  if(data[i].one_rain>100&&data[i].one_rain<249){
                        w="大暴雨";
                    } else  if(data[i].one_rain>250){
                        w="特大暴雨";
                    }

                    if(w!="-1"){
                        $('#weatherIcon').show()
                        $('.weather-text').removeClass('leftTxt')
                        showWeather(w, tem);
                    }
                    break;
                }
            }
            if(w==="-1"){
                $('#weatherIcon').hide()
                $('.weather-text').addClass('leftTxt')
                //$(".weather-icon > div").css({"background-position":“”});
                $(".weather-text").html("降水量：0mm");
                let unit = "<span style='font-size:1.6rem'>℃</span>"
                $(".temperature-text").html(tem + unit);
            }
            // clearWarning();
            //  showWarningMulti(tem_waring,rain_warning,wind_warning,curTime)
        }
    })

    /*   var curDate=getNowFormatDate1()

       var time = new Date();
       var curHour=time.getHours()
       if(curHour.length<2)
           curHour="0"+curHour
       $.ajax({
           url:'http://61.152.122.122/JDData/JDDataForm.aspx?action=GetGfeDatasByAnyCoordinateDL',
           dataType:'json',
           type:'get',
           async:true,
           success:function (data) {
               w="-1"
               for(var i=0;i<data.length;i++){
                   var data_time=data[i].datatime

                   if(data_time.substr(0,10)===curDate){

                       if(data_time.substr(11,2)==curHour){
                           tem=data[i].temperature
                           var rain=data[i].rain
                           if(rain>0&&rain<10)
                               w="小雨";
                           else if(rain>10&&rain<24.9)
                               w="中雨";
                           else if(rain>25&&rain<49.9)
                               w="大雨";
                           else  if(rain>50&&rain<99.9)
                               w="暴雨";
                           else  if(rain>100&&rain<249)
                               w="大暴雨";
                           else  if(rain>250)
                               w="特大暴雨";

                           if(w!="-1" && tem!=null){
                               $('#weatherIcon').show()
                               $('.weather-text').removeClass('leftTxt')
                               showWeather(w, tem);
                           }
                           break;
                       }
                   }
               }

               if(w==="-1" && tem!=null){
                   $('#weatherIcon').hide()
                   $('.weather-text').addClass('leftTxt')
                   //$(".weather-icon > div").css({"background-position":“”});
                   $(".weather-text").html("降水量：0mm");
                   let unit = "<span style='font-size:1.6rem'>℃</span>"
                   $(".temperature-text").html(tem + unit);
               }else{
                   $('#weatherIcon').hide()
               }
           }
       })*/
    /* $.ajax({
          url : 'http://61.152.122.122/JDData/JDDataForm.aspx?action=7Day',
          dataType : 'json',
          type : 'get',
          async : false,
          success : function(data) {
              for(var i = 0; i < data.length; i++) {
                  if(parseInt(now.getFullYear())==data[i].forecastday.substring(0,4)&&(parseInt(now.getMonth())+1)==parseInt(data[i].forecastday.substring(5,7))&&parseInt(now.getDate())==data[i].forecastday.substring(8,10))
                  {
                      if(parseInt(hour)>=6&&parseInt(hour)<=20) w=data[i].nighticonid;
                      else  w=data[i].nighticonid;
                      break;
                  }
              }
          }
      })*/


    $.ajax({
        url : 'http://61.152.122.122/JDData/JDDataForm.aspx?action=Warning',
        //dataType : 'json',
        dataType :'json',
        type : 'get',
        async : true,
        success : function(data) {
            clearWarning();

            var grayAlarm=[];
            var index=0;
            var alarm=window.localStorage.getItem("alarm")
            var alarmList=alarm.split(" ");
            for(var i=0;i<alarmList.length;i++){
                var tmpAlarm=alarmList[i];
                if(tmpAlarm==="")
                    continue;
                var findFlag=false;
                for(var j = 0; j < data.length; j++) {
                    var y=data[j].disastername;
                    if(y===tmpAlarm){
                        findFlag=true
                        break;
                    }
                }
                if(findFlag==false){
                    grayAlarm[index++]=tmpAlarm
                }
            }
            alarm=window.localStorage.getItem("alarm")
            for(var i = 0; i < data.length; i++) {
                var y=data[i].disastername;
                var z=data[i].disastercolour;

                showWarning(y,z,hour + "时"+min+"分")
                if(alarm.indexOf(y)==-1){
                    alarm=alarm+" "+y;
                    window.localStorage.setItem("alarm",alarm);
                }
            }

            for(var i=0;i<grayAlarm.length;i++){
                showWarning(grayAlarm[i],"灰","")
            }


            if(data==null || data.length==0){
                // $(".early-warning-text").html("无预警");
            }
        },
        error:function () {
            //alert("无预警信息")
        }
    })
}


// showWarningDefault();
function showWeather(weather, temperature){

    var xyIndex = weatherIndex[weather];

    if(xyIndex == null){
        xyIndex = [8,3];//默认为空
    }

    let x  = (xyIndex[0] * -3.9) + 'rem ';
    let y  = (xyIndex[1] * -3.9) + 'rem';


    $(".weather-icon > div").css({"background-position": x + y});

    $(".weather-text").html(weather);
    let unit = "<span style='font-size:1.6rem'>℃</span>"
    $(".temperature-text").html(temperature + unit);
}

function showWarning(name, color, time){
    let img = "images/warning/" + name + "_" + color + ".jpg";
    //$(".early-warning-icon").html("<img style='border-radius:3px; overflow:hidden;' src='"+img+"'>");
    $("#warningBox").append("<div class='early-warning-icon left' style='margin-left: 1rem'><img style='border-radius:3px; overflow:hidden;margin-left: 0.5rem;height:3.9rem;width:4.0rem' src='"+img+"'></div>");
    $("#warningBox").css({"margin-top":'0.4rem'});
    // $(".early-warning-text").html(time +" "+ name + color + "预警");
}

function clearWarning(){
    $("#warningBox").html("");
    $(".early-warning-text").html('');
}

function clearAlarm(){
    var lastDate=window.localStorage.getItem("date")
    var curDate=getNowFormatDate()
    if(lastDate!=curDate){
        window.localStorage.removeItem("alarm")
        window.localStorage.setItem("date",curDate)
    }
}