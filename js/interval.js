
$(function () {
    //生命体征模块定时任务
    setInterval(get12345Grid119,1*60*1000)//12345，网格化，119数据。每分钟更新一次
    setInterval(getGongJiaoData,15*60*1000)//公交数据，15分钟更新一次

    //天气定时任务
    //每15分钟一次
    setInterval(changeWeather,60000*15);
    //每小时检查一次
    setInterval(clearAlarm,1*60*60*1000)

    //5s动态变换一次
    setInterval(syncInit,5*1000);
})
