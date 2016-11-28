//
// 网络工具
// - IP地址查询: https://www.npmjs.com/package/geoip-lite
//

var geoip = require('geoip-lite');

/**
 * 通过geo IP模块查询IP地址
 */
$('#button-ip-location').click(() => {
    var result = geoip.lookup($('#input-ip-location').val());
    console.log(result);
});
