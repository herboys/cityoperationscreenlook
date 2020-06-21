function addTableList(name,arr)
{
	$(name).find('.list-box').html('');
	for(let i=0;i<arr.length;i++)
	{
		setTimeout(function(){
			$(name).find('.list-box').append('<div class="table-list"><p>'+arr[i].address+'</p><p>'+arr[i].name+'</p><p>'+arr[i].name1+'</p><p class="num">'+arr[i].num+'</p><p>'+arr[i].phone+'</p></div>')
		},200*i)

	}
}
$(function(){
	var coreArr=[
		{
			address:'安亭镇',
			leader:'马维康',
			name:'李金华',
			name1:'张明玉',
			num:'6',
			phone:'66742920',
		},
		{
			address:'嘉定新城(马陆镇)',
			leader:'马维康',
			name:'王鑫',
			name1:'张晨',
			num:'12',
			phone:'66742920',
		},
		{
			address:'南翔镇',
			leader:'马维康',
			name:'李嘉',
			name1:'何维',
			num:'6',
			phone:'66742920',
		},
		{
			address:'江桥镇',
			leader:'马维康',
			name:'王亮',
			name1:'刘颖',
			num:'12',
			phone:'66742920',
		},
		{
			address:'徐行镇',
			leader:'马维康',
			name:'冯青青',
			name1:'谢云峰',
			num:'6',
			phone:'66742920',
		},
		{
			address:'外冈镇',
			leader:'马维康',
			name:'王尔陆',
			name1:'胡新宇',
			num:'12',
			phone:'66742920',
		},
		{
			address:'华亭镇',
			leader:'马维康',
			name:'李思佳',
			name1:'张欣桐',
			num:'6',
			phone:'66742920',
		},
		{
			address:'嘉定镇街道',
			leader:'刘芸',
			name:'刘梦瑶',
			name1:'寇小天',
			num:'12',
			phone:'66742920',
		},
		{
			address:'新成路街道',
			leader:'何以',
			name:'林琳',
			name1:'杨洋',
			num:'6',
			phone:'66742920',
		},
		{
			address:'真新街道',
			leader:'李晓康',
			name:'王亮亮',
			name1:'张晨',
			num:'12',
			phone:'66742920',
		},
		{
			address:'嘉定工业区',
			leader:'马萌萌',
			name:'李梦雪',
			name1:'张溪',
			num:'6',
			phone:'66742920',
		},
		{
			address:'菊园新区',
			leader:'倪盈盈',
			name:'王瑞',
			name1:'冯鑫',
			num:'12',
			phone:'66742920',
		},
	]
	addTableList1('.core-table',coreArr);
	var linkageArr=[
		{
			address:'安亭镇',
			leader:'马鹏远',
			name:'李欣然',
			name1:'张丽丽',
			num:'6',
			phone:'66742920',
		},
		{
			address:'南翔镇',
			leader:'刘芳',
			name:'付美玲',
			name1:'何江',
			num:'12',
			phone:'66742920',
		},				{
			address:'嘉定新城(马陆镇)',
			leader:'梁璐',
			name:'李琪琪',
			name1:'张玉兰',
			num:'6',
			phone:'66742920',
		},
		{
			address:'徐行镇',
			leader:'康宁',
			name:'王京',
			name1:'杨振东',
			num:'12',
			phone:'66742920',
		},				
		{
			address:'江桥镇',
			leader:'马维康',
			name:'李琳琳',
			name1:'张玉华',
			num:'6',
			phone:'66742920',
		},
		{
			address:'安亭镇',
			leader:'马鹏远',
			name:'李欣然',
			name1:'张丽丽',
			num:'6',
			phone:'66742920',
		},
		{
			address:'江桥镇',
			leader:'马维康',
			name:'李琳琳',
			name1:'张玉华',
			num:'6',
			phone:'66742920',
		},
	]
	addTableList1('.linkage-table',linkageArr)

})
var linkageTime='';
var linkageNum=0;
var linkageMax='';

function addTableList1(name,arr)
{
	$(name).find('.list-box').html('');
	for(let i=0;i<arr.length;i++)
	{
		setTimeout(function(){
			$(name).find('.list-box').append('<div class="table-list"><p>'+arr[i].address+'</p><p>'+arr[i].leader+'</p><p>'+arr[i].name+'</p><p>'+arr[i].name1+'</p><p class="num">'+arr[i].num+'</p><p>'+arr[i].phone+'</p></div>')
		},200*i)
		if(name=='.linkage-table'&&i==arr.length-1&&arr.length>6)
		{
			linkageMax=arr.length;
			linkageNum=0;
			setTimeout(function(){
				var html=$(name).find('.list-box').html();
				$(name).find('.list-box').append(html);
			 	linkageInt();
				 $(name).mouseenter(function(){
				 	clearInterval(linkageTime)
				 })
				 $(name).mouseleave(function(){
			 		linkageInt();
				 })
			},200*i+200)
	
		}
	}
}
function linkageInt(){
	var moveT=$('.linkage-table').find('.table-list').eq(0).height()-8;
	//alert(moveT)
	linkageTime=setInterval(() => {
			if(linkageNum>=linkageMax/6)
			{
				linkageNum=-1;
				$('.linkage-table .list-box').css({top:-moveT*linkageNum});
			}
			linkageNum++;
		
	
			$('.linkage-table .list-box').animate({top:-(moveT+1)*linkageNum*6},1000,function(){
				//if(linkageNum>=linkageMax/6)
				//{
				//	linkageNum=0;
				//	$('.linkage-table .list-box').css({top:-moveT*linkageNum});
				//	$('.linkage-table .list-box').css({top:-0});
				//}
			})
		}
		, 5000);
}