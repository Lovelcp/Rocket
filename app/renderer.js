var CryptoJS = require("crypto-js");
var moment = require('moment');

function showUnixTimestamp() {
    $('#input-current-timestamp').val(moment().unix());
}
setInterval(() => {
    showUnixTimestamp();
}, 1000); //每隔一秒执行一次

let myNotification = new Notification('Rocket定时提醒', {
    body: '该点外卖啦'
});

myNotification.onclick = () => {
    console.log('Notification clicked')
};

//
// 加密解密 https://github.com/brix/crypto-js
//
/**
 * MD5加密
 */
$('#button-md5-crypt').click(() => {
    $('#text-hash-crypt-after').val(CryptoJS.MD5($('#text-hash-crypt-pre').val()).toString());
});
/**
 * SHA1加密
 */
$('#button-sha1-crypt').click(() => {
    $('#text-hash-crypt-after').val(CryptoJS.SHA1($('#text-hash-crypt-pre').val().toString()));
});
/**
 * SHA256加密
 */
$('#button-sha256-crypt').click(() => {
    $('#text-hash-crypt-after').val(CryptoJS.SHA256($('#text-hash-crypt-pre').val().toString()));
});


//
// 编解码
//
$('#button-url-encode').click(() => {
    $('#text-url-format-after').val(encodeURI($('#text-url-format-pre').val()));
});

$('#button-url-encode-components').click(() => {
    $('#text-url-format-after').val(encodeURIComponent($('#text-url-format-pre').val()));
});

$('#button-url-decode').click(() => {
    $('#text-url-format-after').val(decodeURI($('#text-url-format-pre').val()));
});

$('#button-url-decode-components').click(() => {
    $('#text-url-format-after').val(decodeURIComponent($('#text-url-format-pre').val()));
});
