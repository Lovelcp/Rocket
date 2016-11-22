//
// 时间戳转换
//

const {clipboard} = require('electron');
var moment = require('moment');

/**
 * 显示当前时间
 */
function showCurrentFormatTime() {
    $('#input-current-format-time').val(moment().format('YYYY-MM-DD HH:mm:ss'));
}

/**
 * 显示当前时间戳
 */
function showCurrentUnixTimestamp() {
    $('#input-current-timestamp').val(moment().unix());
}

var showCurrentTimestampInterval, showCurrentFormatTimeInterval;

/**
 * 开始显示当前时间并且会隔一秒就刷新一次:包括格式化的时间以及时间戳
 */
function startShowCurrentTime() {
    //每隔1秒显示一次当前时间戳
    showCurrentTimestampInterval = setInterval(() => {
        showCurrentUnixTimestamp();
    }, 1000);

    //每隔1秒刷新一次当前时间
    showCurrentFormatTimeInterval = setInterval(() => {
        showCurrentFormatTime();
    }, 1000);
}

startShowCurrentTime();

/**
 * 停止自动刷新当前时间
 */
function stopShowCurrentTime() {
    clearInterval(showCurrentFormatTimeInterval);
    clearInterval(showCurrentTimestampInterval);
}

/**
 * 绑定相应的事件
 */
$('#button-time-format-current-start').click(() => {
    startShowCurrentTime();
});
$('#button-time-format-current-stop').click(() => {
    stopShowCurrentTime();
});

/**
 * 拷贝当前时间
 */
$('#button-time-format-copy-current-format-time').click(() => {
    clipboard.writeText($('#input-current-format-time').val());
});

/**
 * 拷贝当前时间戳
 */
$('#button-time-format-copy-current-timestamp').click(() => {
    clipboard.writeText($('#input-current-timestamp').val());
});
