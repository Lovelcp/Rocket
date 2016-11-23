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

/**
 * 绑定时间戳转北京时间
 */
$('#button-timestamp-to-format-time').click(() => {
    timestampToFormatTime($('#input-timestamp').val());
});

/**
 * 时间戳转北京时间
 * @param timestamp
 */
function timestampToFormatTime(timestamp) {
    var parser = moment.unix(timestamp);
    if (parser == null) {
        return;
    }
    $('#input-format-time-year').val(parser.weekYear());
    $('#input-format-time-month').val(parser.month() + 1); // 月份从0开始
    $('#input-format-time-day').val(parser.date());
    $('#input-format-time-hour').val(parser.hour());
    $('#input-format-time-min').val(parser.minute());
    $('#input-format-time-sec').val(parser.second());
}

/**
 * 绑定北京时间转时间戳
 */
$('#button-format-time-to-timestamp').click(() => {
    formatTimeToTimestamp();
});

/**
 * 北京时间转时间戳
 */
function formatTimeToTimestamp() {
    var year = $('#input-format-time-year').val();
    var month = $('#input-format-time-month').val();
    var day = $('#input-format-time-day').val();
    var hour = $('#input-format-time-hour').val();
    var min = $('#input-format-time-min').val();
    var sec = $('#input-format-time-sec').val();
    var parser = moment(`${year}-${month}-${day} ${hour}:${min}:${sec}`, "YYYY-MM-DD HH:mm:ss");
    if (parser.isValid()) {
        var timestamp = moment(`${year}-${month}-${day} ${hour}:${min}:${sec}`, "YYYY-MM-DD HH:mm:ss").unix();
        $('#input-timestamp').val(timestamp);
    }
    else {
        alert("请输入正确的时间格式");
    }
}

/**
 * 启动时直接填充当前时间戳
 */
timestampToFormatTime(moment().unix());
formatTimeToTimestamp();