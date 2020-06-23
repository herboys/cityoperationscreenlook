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

    showWeather("中雨", '20');
    showWarning("大风","橙","14时02分");


    function changeWeather(){
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
    }

    setInterval(changeWeather,300000);   

})