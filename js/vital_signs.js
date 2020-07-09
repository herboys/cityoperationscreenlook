$(function(){
	var jbqkArr=[
		{
			title:'常住人口',
			//num:'215.53',
			unit:'万'
		},
		{
			title:'户籍人口',
			//num:'68.28',
			unit:'万'
		},
		{
			title:'面积',
			//num:'464.2',
			unit:'平方公里'
		},
		{
			title:'人口密度',
			//num:'2801',
			unit:'人/平方公里'
		},
		{
			title:'GDP',
			//num:'2362.7',
			unit:'亿元/年'
		},
		{
			title:'人均',
			//num:'7350',
			unit:'元/年'
		},

	];
	$.ajax({
		url : STATIC_URL+'/overview/findAll',
		dataType : 'json',
		type : 'get',
		async : false,
		success : function(data) {
			jbqkArr[0].num=data[0].popu;
			jbqkArr[1].num=data[0].popuSum;
			jbqkArr[2].num=data[0].area;
			jbqkArr[3].num=data[0].popuDesity;
			jbqkArr[4].num=data[0].gdp;
			jbqkArr[5].num=data[0].incomePer;
		}
	})
	addjbgk(jbqkArr);
/*	var asjczArr=[
		{
			today:20,
			week:189,
			month:1234,
		},
		{
			today:20,
			week:189,
			month:1234,
		},
		{
			today:20,
			week:189,
			month:1234,
		},
		{
			today:20,
			week:189,
			month:1234,
		},
		{
			today:20,
			week:189,
			month:1234,
		},
	]*/
	var asjczArr=[];
	for(var i=0;i<5;i++){
		asjczArr[i]=new Object()
	}
	$.ajax({
		url : STATIC_URL+'/eventhandle/findAll',
		dataType : 'json',
		type : 'get',
		async : false,
		success : function(data) {

			for(var i=0;i<data.length;i++){
				var obj=new Object()
				var alm=data[i].alarmType;

				obj.today=data[i].timeDay;
				obj.week=data[i].timeWeek;
				obj.month=data[i].timeMonth;
				asjczArr[alm-1]=obj
		}
			get12345Grid()

		}
	})

	function get12345Grid(){
		//alert(123)
		$.ajax({
			url:ORACLE_URL+"/taskInfoUrgent/findHotlineNum",
			dataType:'json',
			type:'get',
			async:false,
			success:function(data){
				//alert(JSON.stringify(data))
				var obj=new Object()
				obj.today=data.yeaterdayNum
				obj.week=data.weekNum
				obj.month=data.monthNum
				asjczArr[3]=obj

				$.ajax({
					url:ORACLE_URL+"/taskInfoUrgent/findGridNum",
					dataType:'json',
					type:'get',
					async:false,
					success:function(data){
					//	alert(JSON.stringify(data))
						var obj=new Object()
						obj.today=data.yeaterdayNum
						obj.week=data.weekNum
						obj.month=data.monthNum
						asjczArr[4]=obj
						addAsjcz(asjczArr);
					}
				})
			}
		})

	}

	addAsjcz(asjczArr);
	setInterval(get12345Grid,1*60*1000)
	var zygyArr=[
		{
			title:'用电总量',
			//today:20,
			//week:189,
			//month:1234,
			unit:'万千瓦时',
		},
		{
			title:'用水总量',
			//today:20,
			//week:189,
			//month:1234,
			unit:'万吨',
		},
		{
			title:'供气总量',
			//today:20,
			//week:189,
			//month:1234,
			unit:'万立方米',
		},
	];

	var jtzkArr=[
		{
			title:'出租车客运量',
			//today:35,
			//week:253,
			//month:1534,
			unit:'万人次',
		},
		{
			title:'交通客运量',
			//today:42,
			//week:198,
			//month:1345,
			unit:'万人次',
		},
		{
			title:'交通流量',
			//today:20,
			//week:189,
			//month:1234,
			unit:'车次',
		},
		{
			title:'景点人流量',
			/*today:300,
			week:2600,
			month: 15000,*/
			unit:'人次',
		}
	];
//var zygyArr=[];var jtzkArr=[];
	$.ajax({
		url : STATIC_URL+'/resource/findAll',
		dataType : 'json',
		type : 'get',
		async : false,
		success : function(data) {
			for(var i=0;i<data.length;i++){
				var sct=data[i].sourcetype;
				if(sct=="1"){
					zygyArr[0].today=data[i].timeDay;
					zygyArr[0].week=data[i].timeWeek;
					zygyArr[0].month=data[i].timeMonth;
				}else if(sct==2){
					zygyArr[1].today=data[i].timeDay;
					zygyArr[1].week=data[i].timeWeek;
					zygyArr[1].month=data[i].timeMonth;
				}else if(sct==3){
					zygyArr[2].today=data[i].timeDay;
					zygyArr[2].week=data[i].timeWeek;
					zygyArr[2].month=data[i].timeMonth;
				}else if(sct==4){
					jtzkArr[0].today=data[i].timeDay;
					jtzkArr[0].week=data[i].timeWeek;
					jtzkArr[0].month=data[i].timeMonth;
				}else if(sct==5){
					jtzkArr[1].today=data[i].timeDay;
					jtzkArr[1].week=data[i].timeWeek;
					jtzkArr[1].month=data[i].timeMonth;
				}else if(sct==6){
					jtzkArr[2].today=data[i].timeDay;
					jtzkArr[2].week=data[i].timeWeek;
					jtzkArr[2].month=data[i].timeMonth;
				}else if(sct==7){
					jtzkArr[3].today=data[i].timeDay;
					jtzkArr[3].week=data[i].timeWeek;
					jtzkArr[3].month=data[i].timeMonth;
				}

			/*	if(sct<3){
				zygyArr[sct].today=data[i].timeDay;
				zygyArr[sct].week=data[i].timeWeek;
				zygyArr[sct].month=data[i].timeMonth;
				}
			 else{
				jtzkArr[sct-3].today=data[i].timeDay;
				jtzkArr[sct-3].week=data[i].timeWeek;
				jtzkArr[sct-3].month=data[i].timeMonth;
			 }*/

			}
		}
	})
	addCard(zygyArr,'.zygy-warp') //资源供应
	addCard(jtzkArr,'.jtqk-warp') //交通情况
	var shbzArr=[
		{
			title:'城镇登记失业人数',
			//num:0.3,
			unit:'人',
		},
		{
			title:'民政救助',
			//num:0.3,
			unit:'人次/月',
		},
		{
			title:'最低工资标准',
			//num:0.3,
			unit:'元/月',
		},
		{
			title:'每千人医疗床位',
			//num:0.3,
			unit:'个',
		},
		{
			title:'门诊就诊量',
			//num:0.3,
			unit:'万人次/年',
		},
		{
			title:'城镇登记失业人数',
			//num:0.3,
			unit:'人',
		},
		{
			title:'民政救助',
			//num:0.3,
			unit:'人次/月',
		},
	]
	$.ajax({
		url : STATIC_URL+'/insurance/findAll',
		dataType : 'json',
		type : 'get',
		async : false,
		success : function(data) {
			shbzArr[0].num=data[0].unemployRate;
			shbzArr[1].num=data[0].insurRate;
			shbzArr[2].num=data[0].wageMinimum;
			shbzArr[3].num=data[0].medicalBedThou;
			shbzArr[4].num=data[0].outpatientVisit;
			shbzArr[5].num=data[0].unemployRate;
			shbzArr[6].num=data[0].insurRate;
		}
	})

	addShbz(shbzArr)
	var hjbzArr=[
		{
			title:'生活垃圾处理',
			num:2064,
			unit:'吨/日',
		},
		{
			title:'污水处理量',
			num:49.73,
			unit:'万吨/日',
		},
		{
			title:'生活垃圾处理',
			num:8256,
			unit:'吨/周',
		},
		{
			title:'污水处理量',
			num:348.14,
			unit:'万吨/周',
		},
		{
			title:'生活垃圾处理',
			num:51600,
			unit:'吨/月',
		},
		{
			title:'污水处理量',
			num:1497,
			unit:'万吨/月',
		},
	]
	$.ajax({
		url : STATIC_URL+'/allowance/findAll',
		dataType : 'json',
		type : 'get',
		async : false,
		success : function(data) {
			for(var i=0;i<data.length;i++){
				var index=data[i].id
				if(index==1){
					hjbzArr[0].num=data[i].wasteDisSum;
					hjbzArr[1].num=data[i].sewageTreatSum;
				}else if(index==2){
					hjbzArr[2].num=data[i].wasteDisSum;
					hjbzArr[3].num=data[i].sewageTreatSum;
				}else if(index==3){
					hjbzArr[4].num=data[i].wasteDisSum;
					hjbzArr[5].num=data[i].sewageTreatSum;
				}
			}
			addHjbz(hjbzArr) //环境保障
		}
	})
	//addHjbz(hjbzArr) //环境保障
})
function addjbgk(arr){ //基本概况
	$('.vital-signs .top-box ul').html('')
	for(let i=0;i<arr.length;i++)
	{
		$('.vital-signs .top-box ul').append('<li><div class="text-centered"><p>'+arr[i].title+'</p><div class="bottom-text"><span class="num-font">'+arr[i].num+'</span><p>'+arr[i].unit+'</p></div></div><div class="border-box border-right"></div><div class="border-box border-bottom"></div></li>')
	}
}
function addAsjcz(arr){
	for(let i=0;i<arr.length;i++)
	{
		$('.vital-signs .main-list').eq(i).find('.num-font').eq(0).html(arr[i].today)
		$('.vital-signs .main-list').eq(i).find('.num-font').eq(1).html(arr[i].week)
		$('.vital-signs .main-list').eq(i).find('.num-font').eq(2).html(arr[i].month)
	}
}
function addCard(arr,classStr)
{
	var boxObj=$(classStr).find('.list-box');
	var ListObj=$(classStr).find('.card-box');
	//var distanceH=boxObj.height()-ListObj.height();
	var distanceH=50;
	var distanceW=boxObj.width()-ListObj.width();
	var apartH=Math.floor(distanceH/(arr.length-1));
	var apartW=Math.floor(distanceW/(arr.length-1));
	var opacity=(1-(arr.length-1)*0.1)<0.4?'0.4':(1-(arr.length-1)*0.1)
	boxObj.html('');
	for(let i=0;i<arr.length;i++)
	{
		boxObj.append('<div class="card-box" style="opacity:'+((1-(arr.length-1-i)*0.1)<opacity?opacity:(1-(arr.length-1-i)*0.1))+';left:'+(apartW*i)+'px;top:'+(apartH*i)+'px"><div class="card-title"><div class="text-centered">'+arr[i].title+'</div></div><div class="card-text"><p>昨日<span class="num-font">'+arr[i].today+'</span>'+arr[i].unit+'</p><p>本周<span class="num-font">'+arr[i].week+'</span>'+arr[i].unit+'</p><p>当月<span class="num-font">'+arr[i].month+'</span>'+arr[i].unit+'</p></div></div>')
	}
	var cardTime='';
	var cardTime1='';
	timeInt();
	$(classStr).mouseenter(function(){
		clearInterval(cardTime1);
		clearInterval(cardTime);
	})
	$(classStr).mouseleave(function(){
		$(classStr).find('.card-box').removeClass('card-box-ac')
		cardTime1=setTimeout(function(){
			timeInt();
		},1000)
	})
	$(classStr).on('click','.card-box',function(){
		opacityNum=$(classStr).find('.card-box').index($(this));
		$(classStr).find('.card-box').removeClass('card-box-ac')
		$(this).addClass('card-box-ac');
	})
	function timeInt(){
		clearInterval(cardTime);
		cardTime=setInterval(function(){
			var aniList=$(classStr).find('.card-box');
			if(aniList.length==arr.length)
			{
				for(let i=aniList.length-1;i>-1;i--)
				{
					if(i==aniList.length-1)
					{
						aniList.eq(i).animate({'top':distanceH-aniList.height()+'px','opacity':0},1000,function(){
							aniList.eq(aniList.length-1).remove();
						})
					}
					else
					{
						aniList.eq(i).animate({left:(apartW*(i+1)),top:apartH*(i+1),'opacity':(opacity+(i+1)*0.1)},1000)
					}
				}
				arr.unshift(arr.splice(arr.length-1 , 1)[0]);
				boxObj.prepend('<div class="card-box" style="opacity:'+opacity+';left:0px;top:0px"><div class="card-title"><div class="text-centered">'+arr[0].title+'</div></div><div class="card-text"><p>昨日<span class="num-font">'+arr[0].today+'</span>'+arr[0].unit+'</p><p>本周<span class="num-font">'+arr[0].week+'</span>'+arr[0].unit+'</p><p>当月<span class="num-font">'+arr[0].month+'</span>'+arr[0].unit+'</p></div></div>')
			}
			else
			{
				window.location.reload()
			}
		},5000)
	}
}
function addShbz(arr)
{
	$('.shbz-warp .text-box').html('');
	var maxNum=arr.length>5?5:arr.length
	for(var i=0;i<maxNum;i++)
	{
		$('.shbz-warp .text-box').append('<div style="left:'+i*10+'%;top:'+i*20+'%" class="text-list"><p>'+arr[i].title+'</p><p><span class="num-font">'+arr[i].num+'</span>'+arr[i].unit+'</p></div>')
	}
	if(arr.length>5)
	{
		var startNum=i;
		var time='';
		var distance=$('.shbz-warp .text-list').height();
		clearInterval(time);
		time=setInterval(function(){
			if($('.shbz-warp .text-list').length==5)
			{
				$('.shbz-warp .text-box').append('<div style="left:40%;top:100%;opacity:0" class="text-list"><p>'+arr[startNum].title+'</p><p><span class="num-font">'+arr[startNum].num+'</span>'+arr[startNum].unit+'</p></div>')
				for(let i=0;i<$('.shbz-warp .text-list').length;i++)
				{
					if(i==0)
					{
						$('.shbz-warp .text-list').eq(i).animate({top:-distance,opacity:0},1000,function(){
							$('.shbz-warp .text-list').eq(i).remove();
						})
					}
					else if(i==$('.shbz-warp .text-list').length-1)
					{
						$('.shbz-warp .text-list').eq(i).animate({top:(i-1)*20+'%',opacity:1},900)
					}
					else
					{
						$('.shbz-warp .text-list').eq(i).animate({left:(i-1)*10+'%',top:(i-1)*20+'%'},900)
					}
				}
				startNum++;
				if(startNum>=arr.length)
				{
					startNum=0;
				}
			}
			else
			{
				window.location.reload()
			}

		},5000)
	}
}
function addHjbz(arr)
{
	$('.hjbz-warp .text-box').html('');
	var maxNum=arr.length>2?2:arr.length
	for(var i=0;i<maxNum;i++)
	{
		$('.hjbz-warp .text-box').append('<div style="left:'+(10-i*5)+'%;top:'+i*50+'%" class="text-list"><p>'+arr[i].title+'</p><p><span class="num-font">'+arr[i].num+'</span>'+arr[i].unit+'</p></div>')
	}
	if(arr.length>2)
	{
		var startNum=i;
		var time='';
		var distance=$('.hjbz-warp .text-list').height();
		clearInterval(time)
		time=setInterval(function(){
			if($('.hjbz-warp .text-list').length==2)
			{
				$('.hjbz-warp .text-box').append('<div style="left:0%;top:100%;opacity:0" class="text-list"><p>'+arr[startNum].title+'</p><p><span class="num-font">'+arr[startNum].num+'</span>'+arr[startNum].unit+'</p></div>')
				$('.hjbz-warp .text-box').append('<div style="left:-5%;top:150%;opacity:0" class="text-list"><p>'+arr[startNum+1].title+'</p><p><span class="num-font">'+arr[startNum+1].num+'</span>'+arr[startNum].unit+'</p></div>')
				for(let i=0;i<$('.hjbz-warp .text-list').length;i++)
				{
					if(i==0)
					{
						let num=i;
						$('.hjbz-warp .text-list').eq(num).animate({top:-distance,opacity:0},300,function(){
							$(this).remove();
						})
					}
					if(i==1)
					{
						let num=i;
						$('.hjbz-warp .text-list').eq(num).animate({left:(10-(num-1)*5)+'%',top:(num-1)*50+'%',opacity:1},300,function(){
							$(this).animate({top:-distance,opacity:0},300,function(){
								$(this).remove();
							})
						})
					}
					else
					{
						let num=i;
						$('.hjbz-warp .text-list').eq(num).animate({left:(10-(num-1)*5)+'%',top:(num-1)*50+'%',opacity:1},300,function(){
							$(this).animate({left:(10-(num-2)*5)+'%',top:(num-2)*50+'%',opacity:1},300)
						})
					}
				}
				startNum+=2;
				if(startNum>=arr.length)
				{
					startNum=0;
				}
			}
			else
			{
				window.location.reload()
			}

		},5000)

	}
}
