const fs = require('fs')
const path = require('path')
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
fs.readFile(path.join(__dirname, '/index.html'), 'utf-8', (err, dataStr) => {
    if (err) return console.log('读取html文件失败！')
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    console.log(r1)
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, '/index.css'), newCSS, function (err) {
        if (err) return console.log('写入CSS样式失败！' + err.message)
        console.log('写入CSS样式成功！')
    })
}

function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr)
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, '/index.js'), newJS, function (err) {
        if (err) return console.log('写入 Javascript 脚本失败！' + err.message)
        console.log('写入 Javascript 脚本成功！')
    })
}

function resolveHTML(htmlStr) {
    const newHTML = htmlStr
        .replace(regStyle, '<link rel="stylesheet" href="index.css">')
        .replace(regScript, '<script src="index.js"></script>')

    fs.writeFile(path.join(__dirname, '/index.html'), newHTML, function (err) {
        if (err) return console.log('写入HTML失败！' + err.message)
        console.log('写入HTML成功！')
    })
}
