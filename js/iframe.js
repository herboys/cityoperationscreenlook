
function openIframe(iframeUrl){
    var str='<iframe src="'+iframeUrl+'" width="100%" height="100%" frameborder="0"></iframe>'
    $("#iframeDiv").html("")
    $("#iframeDiv").html(str)
    $("#publicIframe").show()
}

function closeIframe(){
    $("#iframeDiv").html("")
    $("#publicIframe").hide()
}