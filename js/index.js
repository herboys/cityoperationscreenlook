$(document).ready(function(){
	getZxgl();
})

function setFont(){
	var size=$(window).width()*0.005;
	if(size<12)
	{
		size=12;
	}
	$('html').css({'font-size':size+'px'})
}

function getZxgl(){
	var resultInfo=[];
	for(var i=0;i<20;i++){
		resultInfo[i]='疫情防控'+i;
	}
	var tableLen =resultInfo.length;
	if(tableLen!=20) return;
	var str = "";
	for (var i = 0; i < 16; i++){
		str += '<div class="csyytz_txt text-centered">'
			+ resultInfo[i] + '</div>'
	}
	$('#zxgl_detail').html(str);
	var str1 = "";
	for (var i = 16; i < tableLen; i++) {
		str1 += '<div class="csyytz_txt text-centered">'
			+ resultInfo[i] + '</div>'
	}
	$('#zxgl_detail1').html(str1);

}