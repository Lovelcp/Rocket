//
// 格式美化
// 用到了jsoneditor插件 https://github.com/josdejong/jsoneditor
//
const {clipboard} = require('electron');

// 美化前的jsoneditor
var preContainer = document.getElementById("jsoneditor-pre");
var preOptions = {
    mode: 'text'
};
var preEditor = new JSONEditor(preContainer, preOptions);

// 美化后的jsoneditor
var afterContainer = document.getElementById("jsoneditor-after");
var afterOptions = {
    mode: 'tree'
};
var afterEditor = new JSONEditor(afterContainer, afterOptions);

/**
 * json美化上到下
 */
$('#button-json-beautify-down').click(() => {
    afterEditor.set(preEditor.get());
});

/**
 * json美化下到上
 */
$('#button-json-beautify-up').click(() => {
    preEditor.set(afterEditor.get());
});

/**
 * 拷贝上面json编辑器的值
 */
$('#button-json-copy').click(() => {
    clipboard.writeText(afterEditor.get());
});
