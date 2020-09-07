/**3D球**/
var radius = 120;
var dtr = Math.PI / 180;
var d = 300;

var mcList = [];
var active = false;
var lasta = 1;
var lastb = 1;
var distr = true;
var tspeed = 2;
var size = 250;

var mouseX = 0;
var mouseY = 0;

var howElliptical = 1;

var aA = null;
var oDiv = null;
var timeRotate = null;
var medians = null;
var lists = null;

function TyPeOnclick(num) {
    initRotate(lists, medians, num)
}

function initRotate(list, median, number) {
    console.log(list, median, number)
    clearInterval(timeRotate)
    radius = 120;
    dtr = Math.PI / 180;
    d = 300;

    mcList = [];
    active = false;
    lasta = 1;
    lastb = 1;
    distr = true;
    tspeed = 2;
    size = 250;

    mouseX = 0;
    mouseY = 0;

    howElliptical = 1;

    aA = null;
    oDiv = null;
    medians = median;
    lists = list;
    let attackSourcesColor2 = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff', '#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#1089E7', '#F57474', '#F57474']
    let para;
    switch (number) {
        case 0:
            list.forEach((item, index) => {
                if (item.value > (median / 2) * 3) {
                    para += `<a  target="_blank" style="color:#f36c6c">${item.name}</a>`
                } else if (item.value > median) {
                    para += `<a  target="_blank"  style="color: #e6cf4e">${item.name}</a>`
                } else if (item.value > median / 2) {
                    para += `<a  target="_blank" style="color: #20d180">${item.name}</a>`
                } else {
                    para += `<a  target="_blank"  style="color: #0093ff">${item.name}</a>`
                }
            })
            break;
        case 1:
            list.forEach((item, index) => {
                if (item.value > (median / 2) * 3) {
                    para += `<a  target="_blank" style="color:#f36c6c">${item.name}</a>`
                }
            })
            break;
        case 2:
            list.forEach((item, index) => {
                if (item.value > (median / 2) * 3) {
                } else if (item.value > median) {
                    para += `<a  target="_blank"  style="color: #e6cf4e">${item.name}</a>`
                } else if (item.value > median / 2) {
                } else {
                }
            })
            break;
        case 3:
            list.forEach((item, index) => {
                if (item.value > (median / 2) * 3) {
                } else if (item.value > median) {
                } else if (item.value > median / 2) {
                    para += `<a  target="_blank" style="color: #20d180">${item.name}</a>`
                } else {
                }
            })
            break;
        case 4:
            list.forEach((item, index) => {
                if (item.value > (median / 2) * 3) {
                } else if (item.value > median) {
                } else if (item.value > median / 2) {
                } else {
                    para += `<a  target="_blank"  style="color: #0093ff">${item.name}</a>`
                }
            })
            break;
    }
    document.getElementById("rotate").innerHTML = para
    list = document.querySelectorAll("#rotate a")
    for (let j = 0; j < list.length; j++) {
        list[j].onclick = function () {
            findbcschotslnglatName(list[j].innerHTML)
        }
    }
    var i = 0;
    var oTag = null;

    oDiv = document.getElementById('rotate');

    aA = oDiv.getElementsByTagName('a');

    for (i = 0; i < aA.length; i++) {
        oTag = {};

        oTag.offsetWidth = aA[i].offsetWidth;
        oTag.offsetHeight = aA[i].offsetHeight;

        mcList.push(oTag);
    }

    sineCosine(0, 0, 0);

    positionAll();
    /**鼠标移出*/
    oDiv.onmouseover = function () {
        // active = true;
        var oEvent = window.event || ev;

        mouseX = oEvent.clientX - (oDiv.offsetLeft + oDiv.offsetWidth / 2);
        mouseY = oEvent.clientY - (oDiv.offsetTop + oDiv.offsetHeight / 2);

        mouseX /= 5;
        mouseY /= 5;
    };
    /**鼠标移入方法*/
    oDiv.onmouseout = function () {
        active = true;
    };

    oDiv.onmousemove = function (ev) {
        var oEvent = window.event || ev;

        mouseX = oEvent.clientX - (oDiv.offsetLeft + oDiv.offsetWidth / 2);
        mouseY = oEvent.clientY - (oDiv.offsetTop + oDiv.offsetHeight / 2);

        mouseX /= 5;
        mouseY /= 5;
    };

    timeRotate = setInterval(update, 200);
}

function update() {
    var a;
    var b;

    if (active) {
        a = (-Math.min(Math.max(-mouseY, -size), size) / radius) * tspeed;
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * tspeed;
    } else {
        a = lasta * 0.98;
        b = lastb * 0.98;
    }

    lasta = a;
    lastb = b;

    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
        return;
    }

    var c = 0;
    sineCosine(a, b, c);
    for (var j = 0; j < mcList.length; j++) {
        var rx1 = mcList[j].cx;
        var ry1 = mcList[j].cy * ca + mcList[j].cz * (-sa);
        var rz1 = mcList[j].cy * sa + mcList[j].cz * ca;

        var rx2 = rx1 * cb + rz1 * sb;
        var ry2 = ry1;
        var rz2 = rx1 * (-sb) + rz1 * cb;

        var rx3 = rx2 * cc + ry2 * (-sc);
        var ry3 = rx2 * sc + ry2 * cc;
        var rz3 = rz2;

        mcList[j].cx = rx3;
        mcList[j].cy = ry3;
        mcList[j].cz = rz3;

        per = d / (d + rz3);

        mcList[j].x = (howElliptical * rx3 * per) - (howElliptical * 2);
        mcList[j].y = ry3 * per;
        mcList[j].scale = per;
        mcList[j].alpha = per;

        mcList[j].alpha = (mcList[j].alpha - 0.6) * (10 / 6);
    }

    doPosition();
    depthSort();
}

function depthSort() {
    var i = 0;
    var aTmp = [];

    for (i = 0; i < aA.length; i++) {
        aTmp.push(aA[i]);
    }

    aTmp.sort
    (
        function (vItem1, vItem2) {
            if (vItem1.cz > vItem2.cz) {
                return -1;
            } else if (vItem1.cz < vItem2.cz) {
                return 1;
            } else {
                return 0;
            }
        }
    );

    for (i = 0; i < aTmp.length; i++) {
        aTmp[i].style.zIndex = i;
    }
}

function positionAll() {
    var phi = 0;
    var theta = 0;
    var max = mcList.length;
    var i = 0;

    var aTmp = [];
    var oFragment = document.createDocumentFragment();


    for (i = 0; i < aA.length; i++) {
        aTmp.push(aA[i]);
    }

    aTmp.sort
    (
        function () {
            return Math.random() < 0.5 ? 1 : -1;
        }
    );

    for (i = 0; i < aTmp.length; i++) {
        oFragment.appendChild(aTmp[i]);
    }

    oDiv.appendChild(oFragment);

    for (var i = 1; i < max + 1; i++) {
        if (distr) {
            phi = Math.acos(-1 + (2 * i - 1) / max);
            theta = Math.sqrt(max * Math.PI) * phi;
        } else {
            phi = Math.random() * (Math.PI);
            theta = Math.random() * (2 * Math.PI);
        }

        mcList[i - 1].cx = radius * Math.cos(theta) * Math.sin(phi);
        mcList[i - 1].cy = radius * Math.sin(theta) * Math.sin(phi);
        mcList[i - 1].cz = radius * Math.cos(phi);
        aA[i - 1].style.left = mcList[i - 1].cx + oDiv.offsetWidth / 2 - mcList[i - 1].offsetWidth / 2 + 'px';
        aA[i - 1].style.top = mcList[i - 1].cy + oDiv.offsetHeight / 2 - mcList[i - 1].offsetHeight / 2 + 'px';
    }
}

function doPosition() {
    var l = oDiv.offsetWidth / 2;
    var t = oDiv.offsetHeight / 2;
    for (var i = 0; i < mcList.length; i++) {
        aA[i].style.left = mcList[i].cx + l - mcList[i].offsetWidth / 2 + 'px';
        aA[i].style.top = mcList[i].cy + t - mcList[i].offsetHeight / 2 + 'px';
        aA[i].style.fontSize = Math.ceil(12 * mcList[i].scale / 2) + 8 + 'px';
        aA[i].style.filter = "alpha(opacity=" + 100 * mcList[i].alpha + ")";
        aA[i].style.opacity = mcList[i].alpha;
    }
}

function sineCosine(a, b, c) {
    sa = Math.sin(a * dtr);
    ca = Math.cos(a * dtr);
    sb = Math.sin(b * dtr);
    cb = Math.cos(b * dtr);
    sc = Math.sin(c * dtr);
    cc = Math.cos(c * dtr);
}