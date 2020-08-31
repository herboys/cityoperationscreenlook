function cardInt(arr,classStr) {

    var boxObj = $(classStr).find(".list-box");
    var ListObj = $(classStr).find(".card-box");
    var distanceH = 50;
   // var distanceW = boxObj.width() - ListObj.width();
    var distanceW = 100;
    var apartH = Math.floor(distanceH / (arr.length - 1));
    var apartW = Math.floor(distanceW / (arr.length - 1));
    var opacity =
        1 - (arr.length - 1) * 0.1 < 0.4 ? "0.4" : 1 - (arr.length - 1) * 0.1;
   // boxObj.html("");
        var aniList = $(classStr).find(".card-box");
        if (aniList.length == arr.length) {
            var tmpLen=aniList.length - 1

            for (let i = aniList.length - 1; i > -1; i--) {
                if (i == tmpLen) {
                    aniList
                        .eq(i)
                        .animate(
                            { top: distanceH - aniList.height() + "px", opacity: 0 },
                            1000,
                            function () {
                                aniList.eq(tmpLen).remove();
                            }
                        );
                } else {
                    aniList
                        .eq(i)
                        .animate(
                            {
                                left: apartW * (i + 1),
                                top: apartH * (i + 1),
                                opacity: opacity + (i + 1) * 0.1,
                            },
                            1000
                        );
                }
            }
            arr.unshift(arr.splice(arr.length - 1, 1)[0]);

            if (arr[0].title === "公交车辆") {
                boxObj.prepend(
                    '<div class="card-box" style="width:20rem" style="opacity:' +
                    opacity
                       +
                    ";left: 0px ;" +
                    "top:0" +
                    'px"><div class="card-title" style="font-size:1.1rem;alignment: center"><div class="text-centered" style="height:5.8rem">' +
                    arr[0].title +
                    "</div></div>" +
                    '<div class="card-text" style="height:6.5rem">' +
                    '<p style="float:left;padding-left: 0.5rem">线路总数<span class="num-font" style="width:3.5rem;margin-right: 0px">' +
                    arr[0].xlnum +
                    "</span>条 &nbsp;&nbsp;在线车辆" +
                    '<span class="num-font" style="width:2rem;margin-right: 0px">' +
                    arr[0].carnum +
                    "</span>辆" +
                    "</p>" +
                    '<p style="float:left;padding-left: 0.5rem">当日计划班次<span class="num-font" style="width:2rem;margin-right: 0px">' +
                    arr[0].jhnum +
                    '</span>个 &nbsp;&nbsp;当日完成班次<span class="num-font" style="width:2rem;margin-right: 0px">' +
                    arr[0].sjnum +
                    "</span>个 </p>" +
                    '<p style="float:left;padding-left: 0.5rem">昨日班次执行率<span class="num-font" style="width:3rem;margin-right: 0px">' +
                    arr[0].bczxl +
                    "</span>%" +
                    "</p>" +
                    '<p style="float:left;padding-left: 0.5rem">昨日首末班车准点率<span class="num-font" style="width:3rem;margin-right: 0px">' +
                    arr[0].smbczdl +
                    "</span>%" +
                    "</p></div></div>"
                );
            } else {
                boxObj.prepend(
                    '<div class="card-box" style="opacity:' +
                    opacity +
                    ';left:0px;top:0px"><div class="card-title"><div class="text-centered">' +
                    arr[0].title +
                    '</div></div><div class="card-text"><p>昨日<span class="num-font">' +
                    arr[0].today +
                    "</span>" +
                    arr[0].unit +
                    '</p><p>本周<span class="num-font">' +
                    arr[0].week +
                    "</span>" +
                    arr[0].unit +
                    '</p><p>当月<span class="num-font">' +
                    arr[0].month +
                    "</span>" +
                    arr[0].unit +
                    "</p></div></div>"
                );
            }
        } else {
            // window.location.reload()
        }
}

function bumenInit(){
    var moveT = $(".linkage-table").find(".table-list").eq(0).height() - 8;

        if (linkageNum >= linkageMax / 5) {
            linkageNum = -1;
            $(".linkage-table .list-box").css({
                top: -moveT * linkageNum
            });
        }
        linkageNum++;

        $(".linkage-table .list-box").stop(true, true).animate({
                top: -(moveT + 1) * linkageNum * 5.82,
            },
            1000,
        );

}

function tfsjInit(){
    var moveT = $(".linkage-scroll-table").find(".table-list").eq(0).height() -11;

        if (linkageNumScroll >= linkScrollMax/2) {
            //	alert("aaa "+moveT)
            linkageNumScroll = -1;
            $(".linkage-scroll-table .list-box").css({
                top: -moveT * linkageNumScroll
            });
        }
        linkageNumScroll++;

        $(".linkage-scroll-table .list-box").stop(true, true).animate({
                top: -(moveT + 1) * linkageNumScroll * 6.02,

            },
            1000,
        );

}

function shbz(arr){
    if (arr.length > 5) {
        var distance = $(".shbz-warp .text-list").height();
            //alert($('.shbz-warp .text-list').length)
            if ($(".shbz-warp .text-list").length == 5) {
                if (arr[startNum].title === "养老机构") {
                    $(".shbz-warp .text-box").append(
                        '<div style="cursor: pointer;left:40%;top:100%;opacity:0;" class="text-list" onclick="oldPeopleHomePage()"><p>' +
                        arr[startNum].title +
                        '</p><p><span class="num-font">' +
                        arr[startNum].num +
                        "</span>" +
                        arr[startNum].unit +
                        "</p></div>"
                    );
                } else {
                    $(".shbz-warp .text-box").append(
                        '<div style="left:40%;top:100%;opacity:0" class="text-list"><p>' +
                        arr[startNum].title +
                        '</p><p><span class="num-font">' +
                        arr[startNum].num +
                        "</span>" +
                        arr[startNum].unit +
                        "</p></div>"
                    );
                }

                for (let i = 0; i < $(".shbz-warp .text-list").length; i++) {
                    if (i == 0) {
                        $(".shbz-warp .text-list")
                            .eq(i)
                            .animate({ top: -distance, opacity: 0 }, 1000, function () {
                                $(".shbz-warp .text-list").eq(i).remove();
                            });
                    } else if (i == $(".shbz-warp .text-list").length - 1) {
                        $(".shbz-warp .text-list")
                            .eq(i)
                            .animate({ top: (i - 1) * 20 + "%", opacity: 1 }, 900);
                    } else {
                        $(".shbz-warp .text-list")
                            .eq(i)
                            .animate(
                                { left: (i - 1) * 10 + "%", top: (i - 1) * 20 + "%" },
                                900
                            );
                    }
                }
                startNum++;
                //alert(arr.length+" "+startNum)
                if (startNum >= arr.length) {
                    startNum = 0;
                }
            } else {
                // window.location.reload()
            }

    }
}

function sthj(arr){
    if (arr.length > 3) {
        var distance = $(".hjbz-warp .text-list").height();

            if ($(".hjbz-warp .text-list").length == 3) {

                $(".hjbz-warp .text-box").append(
                    '<div style="left:15%;top:0%;opacity:0" class="text-list">' +
                    ' <img style="cursor:pointer;margin-top: 0.5rem;width:6rem" onclick="openGarbageClassification()" src="images/shlj.png" />'+
                    '<p><span class="num-font">' +
                    arr[hjbzNum].num +
                    "</span>" +
                    arr[hjbzNum].unit +
                    "</p></div>"
                );
                $(".hjbz-warp .text-box").append(
                    '<div style="left:10%;top:50%;opacity:0" class="text-list"><p>' +
                    arr[hjbzNum + 1].title +
                    '</p><p><span class="num-font">' +
                    arr[hjbzNum + 1].num +
                    "</span>" +
                    arr[hjbzNum + 1].unit +
                    "</p></div>"
                );
                $(".hjbz-warp .text-box").append(
                    '<div style="left:5%;top:100%;opacity:0" class="text-list"><p>' +
                    arr[hjbzNum + 2].title +
                    '</p><p><span class="num-font">' +
                    arr[hjbzNum + 2].num +
                    "</span>" +
                    arr[hjbzNum + 2].unit +
                    "</p></div>"
                );
                for (let i = 0; i < $(".hjbz-warp .text-list").length; i++) {
                    if (i == 0) {
                        let num = i;
                        $(".hjbz-warp .text-list")
                            .eq(num)
                            .animate({ top: -distance, opacity: 0 }, 500, function () {
                                $(this).remove();
                            });
                        //alert(0)
                    }
                    if (i == 1) {
                        let num = i;
                        $(".hjbz-warp .text-list")
                            .eq(num)
                            .animate({ top: -distance * 2, opacity: 0 }, 500, function () {
                                $(this).remove();
                            });
                        //alert(1)
                    }

                    if (i == 2) {
                        let num = i;
                        $(".hjbz-warp .text-list")
                            .eq(num)
                            .animate(
                                {
                                    left: 10 - (num - 2) * 15 + "%",
                                    top: (num - 2) * 50 + "%",
                                    opacity: 1,
                                },
                                300,
                                function () {
                                    $(this).animate(
                                        { top: -distance * 2, opacity: 0 },
                                        500,
                                        function () {
                                            $(this).remove();
                                        }
                                    );
                                }
                            );
                    } else {
                        let num = i;
                        $(".hjbz-warp .text-list")
                            .eq(num)
                            .animate(
                                {
                                    left: 20 - (num - 1) * 5 + "%",
                                    top: (num - 2) * 50 + "%",
                                    opacity: 1,
                                },
                                500,
                                function () {
                                    $(this).animate(
                                        {
                                            left: 25 - (num - 1) * 6 + "%",
                                            top: (num - 3) * 50 + "%",
                                            opacity: 1,
                                        },
                                        500
                                    );
                                }
                            );
                    }
                }
                hjbzNum += 3;
                if (hjbzNum >= arr.length) {
                    hjbzNum = 0;
                }
            } else {
                // window.location.reload()
            }

    }
}

/*let dutyFlag=true;
let emergencyFlag=true;

let zygyFlag=true;
let shbzFlag=true;
let jtklFlag=true;
let sthjFlag=true;*/
function syncInit(){
   // alert("async")
    if(dutyFlag==true){
      //  alert(1)
        bumenInit()
    }
    if(emergencyFlag==true){
     //   alert(2)
        tfsjInit()
    }
    if(zygyFlag==true){
        cardInt(zygyArr, ".zygy-warp")
    }
    if(jtklFlag==true){
        cardInt(jtzkArr, ".jtqk-warp")
    }

    if(shbzFlag==true){
        shbz(shbzArr);
    }
    if(sthjFlag==true){
        sthj(hjbzArr);
    }

}