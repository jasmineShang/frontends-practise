const http = require('http')
const server = http.createServer()
server.on('request', function (req, res) {
    console.log('Someone visit our web server')
    const url = req.url
    // const method = req.method
    // const str = `Your request url is ${url}, and request method is ${method}`
    // const str = `您请求的 URL 地址是 ${req.url}, 请求的 method 类型为 ${req.method}`
    let content = '<h1>404 Not found</h1>'
    if (url === '/' || url === '/indexhtml') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // console.log(str)
    res.end(content)
})
server.listen(8080, function () {
    console.log('server running at http://127.0.0.1:8080')
})
