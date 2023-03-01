const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '/成绩.txt'), 'utf-8', function (err, dataStr) {
    if (err) {
        return  console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功' + dataStr)
    const arrOld = dataStr.split(' ')
    // console.log(arrOld)
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', '：'))
    })
    // console.log(arrNew)
    const newStr = arrNew.join('\r\n')
    // console.log(newStr)
    fs.writeFile('成绩-ok.txt', newStr, function (err) {
        if (err) {
            return console.log('写入文件失败！' +err.message)
        }
        console.log('写入文件成功！')
    })
})
