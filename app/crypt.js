//
// 加密解密 https://github.com/brix/crypto-js
//

var CryptoJS = require("crypto-js");

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
