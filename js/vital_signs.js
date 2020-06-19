$(function(){
	var jbqkArr=[
		{
			title:'常住人口',
			num:'215.53',
			unit:'万'
		},
		{
			title:'户籍人口',
			num:'68.28',
			unit:'万'
		},
		{
			title:'面积',
			num:'464.2',
			unit:'平方公里'
		},
		{
			title:'人口密度',
			num:'2801',
			unit:'人/平方公里'
		},
		{
			title:'GDP',
			num:'2362.7',
			unit:'亿元/季'
		},
		{
			title:'人均',
			num:'7350',
			unit:'元/月 '
		},

	];
	addjbgk(jbqkArr);
	var asjczArr=[
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
	]
	addAsjcz(asjczArr);
	var zygyArr=[
		{
			title:'用电总量',
			today:20,
			week:189,
			month:1234,
			unit:'度',
		},
		{
			title:'用水总量',
			today:20,
			week:189,
			month:1234,
			unit:'度',
		},
		{
			title:'供气总量',
			today:20,
			week:189,
			month:1234,
			unit:'度',
		},
	];

	var jtzkArr=[
		{
			title:'城市道路网密度',
			today:35,
			week:253,
			month:1534,
			unit:'度',
		},
		{
			title:'交通客运量',
			today:42,
			week:198,
			month:1345,
			unit:'度',
		},
		{
			title:'交通流量',
			today:20,
			week:189,
			month:1234,
			unit:'度',
		},
		{
			title:'景区景点人流',
			today:61,
			week:248,
			month:1453,
			unit:'度',
		},
	];

	addCard(zygyArr,'.zygy-warp')
	addCard(jtzkArr,'.jtqk-warp')
	var shbzArr=[
		{
			title:'城镇登记失业率',
			num:0.3,
			unit:'%',
		},
		{
			title:'社保综合参保率',
			num:0.3,
			unit:'%',
		},
		{
			title:'最低工资标准',
			num:0.3,
			unit:'%',
		},
		{
			title:'每千人医疗床位',
			num:0.3,
			unit:'%',
		},
		{
			title:'门诊就诊量',
			num:0.3,
			unit:'%',
		},
		{
			title:'城镇登记失业率',
			num:0.3,
			unit:'%',
		},
		{
			title:'社保综合参保率',
			num:0.3,
			unit:'%',
		},
	]
	addShbz(shbzArr)
	var hjbzArr=[
		{
			title:'生活垃圾处理',
			num:28940,
			unit:'吨/日',
		},
		{
			title:'污水处理量',
			num:3415567,
			unit:'吨/日',
		},
		{
			title:'生活垃圾处理',
			num:28940,
			unit:'吨/周',
		},
		{
			title:'污水处理量',
			num:3415567,
			unit:'吨/周',
		},
		{
			title:'生活垃圾处理',
			num:28940,
			unit:'吨/月',
		},
		{
			title:'污水处理量',
			num:3415567,
			unit:'吨/月',
		},
	]
	addHjbz(hjbzArr)
})
function addjbgk(arr){
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
	var distanceH=boxObj.height()-ListObj.height();
	var distanceW=boxObj.width()-ListObj.width();
	var apartH=Math.floor(distanceH/(arr.length-1));
	var apartW=Math.floor(distanceW/(arr.length-1));
	var opacity=(1-(arr.length-1)*0.1)<0.4?'0.4':(1-(arr.length-1)*0.1)
	boxObj.html('');
	for(let i=0;i<arr.length;i++)
	{
		boxObj.append('<div class="card-box" style="opacity:'+((1-(arr.length-1-i)*0.1)<opacity?opacity:(1-(arr.length-1-i)*0.1))+';left:'+(apartW*i)+'px;top:'+(apartH*i)+'px"><div class="card-title"><div class="text-centered">'+arr[i].title+'</div></div><div class="card-text"><p>今日<span class="num-font">'+arr[i].today+'</span>'+arr[i].unit+'</p><p>本周<span class="num-font">'+arr[i].week+'</span>'+arr[i].unit+'</p><p>当月<span class="num-font">'+arr[i].month+'</span>'+arr[i].unit+'</p></div></div>')
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
				boxObj.prepend('<div class="card-box" style="opacity:'+opacity+';left:0px;top:0px"><div class="card-title"><div class="text-centered">'+arr[0].title+'</div></div><div class="card-text"><p>今日<span class="num-font">'+arr[0].today+'</span>'+arr[0].unit+'</p><p>本周<span class="num-font">'+arr[0].week+'</span>'+arr[0].unit+'</p><p>当月<span class="num-font">'+arr[0].month+'</span>'+arr[0].unit+'</p></div></div>')
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
						$('.shbz-warp .text-list').eq(i).animate({top:-distance,opacity:0},700,function(){
							$('.shbz-warp .text-list').eq(i).remove();
						})
					}
					else if(i==$('.shbz-warp .text-list').length-1)
					{
						$('.shbz-warp .text-list').eq(i).animate({top:(i-1)*20+'%',opacity:1},600)
					}
					else
					{
						$('.shbz-warp .text-list').eq(i).animate({left:(i-1)*10+'%',top:(i-1)*20+'%'},600)
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

		},3000)
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

		},3000)
		
	}
}