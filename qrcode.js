/*
* @Author: shiyunfei
* @Date:   2017-12-22 09:14:00
* @Last Modified by:   shiyunfei
* @Last Modified time: 2017-12-26 14:17:39
*/
document.write('<script type="text/javascript" src = "./jquery.qrcode.min.js"></script>');//引入生成二维码的基础js
function doQrcode(url){
	//生成二维码
	if(!url){
		return false;
	}
	var canopy = '<div class="qrcode-canopy-div" style="left:0px;top:0px;position:fixed;height:100%;width:100%;z-index:10000;">'
				+'<div style="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);z-index:999;border:2px solid rgb(115, 175, 241);">'
				+'<img style="position:absolute;right:-10px;top:-10px;" src="./close.png" alt="" onclick="closeQrcode();" class="close-qrcode">'
				+'<div class="qr-code-title" style="text-align:center;color:#fff;height:40px;line-height:40px;">请用手机扫描二维码</div>'
				+'<div id="qr-code"></div>'
				+'<a id="download-qrcode"></a>'
				+'<div style="text-align:center;height:20px;line-height:20px;"><a onclick="saveQrCode();" style="cursor: pointer;color:#fff">下载二维码</a></div>'
				+'</div><div style="background:#000;filter:alpha(opacity=10);opacity:.4;left:0px;top:0px;position:absolute;height:100%;width:100%;"></div>'
				+'</div>';
	$("body").append(canopy);
	$('#qr-code').qrcode(url);
}
function closeQrcode(){
	$(".qrcode-canopy-div").remove();
}
function saveQrCode(){
	var timestamp = Date.parse(new Date());
    var canvas = $('#qr-code').find("canvas").get(0);
    try {//解决IE转base64时缓存不足，canvas转blob下载
        var blob = canvas.msToBlob();
        navigator.msSaveBlob(blob, timestamp+'.jpg');
    } catch (e) {//如果为其他浏览器，使用base64转码下载
        var url = canvas.toDataURL('image/jpeg');
        $("#download-qrcode").attr('href', url).attr("download",timestamp+".jpg").get(0).click();
    }
    closeQrcode();
}

function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
