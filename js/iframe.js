
function openIframe(iframeUrl){
    var str='<iframe src="'+iframeUrl+'" width="143%" height="143%" frameborder="0"  style="transform: scale(0.49);margin-left:-36.3%;margin-top:-10%"></iframe>'
    $("#iframeDiv").html("")
    $("#iframeDiv").html(str)
    $("#publicIframe").show()
}

function closeIframe(){
    $("#iframeDiv").html("")
    $("#publicIframe").hide()
}