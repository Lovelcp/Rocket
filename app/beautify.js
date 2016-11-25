//
// 格式美化
//


// TODO 参考  https://github.com/josdejong/jsoneditor

var preContainer = document.getElementById("jsoneditor-pre");
var preOptions = {
    mode: 'text'
};
var preEditor = new JSONEditor(preContainer, preOptions);

var afterContainer = document.getElementById("jsoneditor-after");
var afterOptions = {
    mode: 'tree'
};
var afterEditor = new JSONEditor(afterContainer, afterOptions);

function jsonBeautify(rawJson) {
    afterEditor.set(rawJson);
}

$('#button-json-beautify').click(() => {
    jsonBeautify(preEditor.get());
});

