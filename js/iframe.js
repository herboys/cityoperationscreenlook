
function openIframe(iframeUrl){
    var str='<iframe src="'+iframeUrl+'" width="140%" height="140%" frameborder="0"  style="transform: scale(0.5);margin-left:-34.5%;margin-top:-10%"></iframe>'
    $("#iframeDiv").html("")
    $("#iframeDiv").html(str)
    $("#publicIframe").show()
}

function closeIframe(){
    $("#iframeDiv").html("")
    $("#publicIframe").hide()
}