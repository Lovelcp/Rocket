let myNotification = new Notification('Rocket定时提醒', {
    body: '该点外卖啦'
});

myNotification.onclick = () => {
    console.log('Notification clicked')
};

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
