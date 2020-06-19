function addTableList(name,arr)
{
	$(name).find('.list-box').html('');
	console.log($(name));
	for(let i=0;i<arr.length;i++)
	{
		setTimeout(function(){
			$(name).find('.list-box').append('<div class="table-list"><p>'+arr[i].address+'</p><p>'+arr[i].name+'</p><p>'+arr[i].name1+'</p><p class="num">'+arr[i].num+'</p><p>'+arr[i].phone+'</p></div>')
		},200*i)

	}
}

function addTableList1(name,arr)
{
	$(name).find('.list-box').html('');
	console.log($(name));
	for(let i=0;i<arr.length;i++)
	{
		setTimeout(function(){
			$(name).find('.list-box').append('<div class="table-list"><p>'+arr[i].address+'</p><p>'+arr[i].leader+'</p><p>'+arr[i].name+'</p><p>'+arr[i].name1+'</p><p class="num">'+arr[i].num+'</p><p>'+arr[i].phone+'</p></div>')
		},200*i)

	}
}
