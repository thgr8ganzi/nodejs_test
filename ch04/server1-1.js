const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    res.write('<h1>hello node</h1>')
    res.end('<p>hello Server!</p>')
})
server.listen(8080)

server.on('listening', () => {
    console.log('8080포트에서 서버 대기 중 입니다')
})
server.on('error', (err) => {
    console.error(err)
})