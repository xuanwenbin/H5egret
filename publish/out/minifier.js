var fs = require('fs');
var minify = require('html-minifier').minify;

var publishPath = "../warships/bin-release/web/1/";

fs.readFile(publishPath + 'index.html', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    fs.writeFile(publishPath + 'index.html',
        minify(data, {
            removeComments: true,
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true
        }),
        function() {
            console.log('index.html 压缩完成');
        }
    );
});
