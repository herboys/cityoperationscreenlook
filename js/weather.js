$(function () {
    var weatherIndex = {
        晴: [0, 0],  多云: [1, 0], 阴: [2, 0], 阵雨: [3, 0], 雷雨: [4, 0], 雷阵雨伴有冰雹: [5, 0], 雨夹雪: [6, 0], 小雨: [7, 0], 中雨: [8, 0], 雾: [9, 0],
        大雨:[0,1], 暴雨:[1,1], 大暴雨:[2,1], 特大暴雨:[3,1], 阵雪:[4,1], 小雪:[5,1], 中雪:[6,1], 大雪:[7,1], 
    };

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
        $(".early-warning-icon").html("<img style='border-radius:3px; overflow:hidden' src='"+img+"'>");
        $(".early-warning-icon").css({"margin-top":'0.4rem'});
        $(".early-warning-text").html(time +" "+ name + color + "色预警");
    }
   function clearWarning(){
        $(".early-warning-icon").html('');
        $(".early-warning-text").html('');
    }
    /* function clearWarning(time){
        $(".early-warning-icon").html('');
        $(".early-warning-text").html(time +" ");
    }*/

  //  showWeather("小雨", '26');
   // showWarning("大风","橙","14时02分");


   /* function changeWeather(){
        let random = Math.floor(Math.random() * 20);
        var  w = "中雨", y = "台风", z = "蓝";

        if(random>15){
            w = "暴雨";y = "大风"; z= "蓝"
        }else if(random>10){
            w = "大雨";y = "雷电"; z= "黄"
        }else if(random>5){
            w = "阴";y = "大雾"; z= "橙"
        }else{
            w = "晴";y = "道路结冰"; z= "红"
        }
        showWeather(w, random);
        

        let now = new Date();
        let hour = now.getHours() +1;
        let min = now.getMinutes();
        showWarning(y,z,hour + "时"+min+"分")

        if(random % 4 == 0){
            clearWarning();
        }
    }*/

    changeWeather();
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
                async : false,
                success : function(data) {
                    w="-1"
                    for(var i = 0; i < data.length; i++) {
                        if(data[i].stationname=="嘉定国家气象观测站"){
                         tem=data[i].temper;
                         if(data[i].one_rain>0&&data[i].one_rain<10)w="小雨";
                         else if(data[i].one_rain>10&&data[i].one_rain<24.9)w="中雨";
                         else if(data[i].one_rain>25&&data[i].one_rain<49.9)w="大雨";
                         else  if(data[i].one_rain>50&&data[i].one_rain<99.9)w="暴雨";
                         else  if(data[i].one_rain>100&&data[i].one_rain<249)w="大暴雨";
                         else  if(data[i].one_rain>250)w="特大暴雨";

                         if(w!="-1"){
                             $('#weatherIcon').show()
                             $('.weather-text').removeClass('leftTxt')
                             showWeather(w, tem);
                         }
                         break;
                        }
                    }
                }
            })
        if(w==="-1"){
            $('#weatherIcon').hide()
            $('.weather-text').addClass('leftTxt')
            //$(".weather-icon > div").css({"background-position":“”});
            $(".weather-text").html("降水量：0ml");
            let unit = "<span style='font-size:1.6rem'>℃</span>"
            $(".temperature-text").html(tem + unit);
        }
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
   /*  $.ajax({
            url : 'http://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz&version=v9&cityid=0&city=%E5%98%89%E5%AE%9A&ip=0&callback=0',
            dataType :'jsonp', //'json',
            type : 'get',
            async : false,
            success : function(data) {
                //for(var i = 0; i < data.data.length; i++) {
                   // if(parseInt(now.getFullYear())==data.data[i].date.substring(0,4)&&(parseInt(now.getMonth())+1)==parseInt(data.data[i].date.substring(5,7))&&parseInt(now.getDate())==data.data[i].date.substring(8,10))
                  //  {
                        w=data.data[0].wea;
                        tem=data.data[0].tem;
                       // alert(tem)
                        console.log(tem)
                showWeather(w, tem);
                 //       break;
                 //   }
                //}
            },error:function (data) {
                alert("weather error")
            }
        })
*/

        $.ajax({
            url : 'http://61.152.122.122/JDData/JDDataForm.aspx?action=Warning',
            //dataType : 'json',
            dataType :'jsonp',
            type : 'get',
            async : false,
            success : function(data) {
               // for(var i = 0; i < data.length; i++) {
                     ty=y;tz=z;
                     y=data[0].disastername;
                     z=data[0].disastercolour;

                    clearWarning();
                    if(ty!=y||tz!=z)  showWarning(y,z,hour + "时"+min+"分")
               // }
            }
        })


        //showWeather(w, tem);
        //clearWarning();
        //if(ty!=y||tz!=z)  showWarning(y,z,hour + "时"+min+"分")
        //$(".early-warning-text").html(time +" ");
    }

    //setInterval(changeWeather,300000);
    setInterval(changeWeather,60000*15);
   // setInterval(changeWeather,10000);

})