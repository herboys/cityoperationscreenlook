
function openIframe(iframeUrl){
    var str='<iframe src="'+iframeUrl+'" width="160%" height="160%" frameborder="0"  style="transform: scale(0.45);margin-left:-44%;margin-top:-12.5%"></iframe>'
    $("#iframeDiv").html("")
    $("#iframeDiv").html(str)
    $("#publicIframe").show()
}

function closeIframe(){
    $("#iframeDiv").html("")
    $("#publicIframe").hide()
}