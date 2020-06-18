$(function(){
    var arr = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");

    function padTwo(n){
        return n < 10 ? '0' + n: n;
    }
    function getDate(date){
        return [date.getFullYear() , padTwo(date.getMonth() + 1), padTwo(date.getDate())].join("-");
    }
    function getTime(date){
        return [padTwo(date.getHours()) , padTwo(date.getMinutes()), padTwo(date.getSeconds())].join(":");
    }
    function getWeekDay(date){
        return arr[date.getDay()];        
    }
   function showTime(){
        var now = new Date();
        var d = getDate(now);
        var t = getTime(now);
        var w = getWeekDay(now);
        $(".date-box p").eq(0).html(w);
        $(".date-box p").eq(1).html(d);
        $(".time-box").html(t);
   }

   setInterval(showTime,1000);   
})