const http = require('http')

http.createServer((req, res) => {
    console.log(req.url)
    console.log('================')
    console.log( req.headers.cookie)
    res.writeHead(200, { 'Set-Cookie' : 'myCookie=test'})
    res.end('Hello Cookie')
})
.listen(8083, () => {
    console.log('8083번 포트')
})