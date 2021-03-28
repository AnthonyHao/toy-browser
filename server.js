const http = require('http')

http.createServer((request, response) => {
  let body = []
  request.on('error', err => {
    console.error(err)
  }).on('data', chunk => {
    body.push(chunk.toString())
  }).on('end', () => {
    body = (Buffer.concat([Buffer.from(body.toString())])).toString()
    console.log('body', body)
    response.writeHead('200', {'Content-Type': 'text/html'})
    response.end(`<html><head><title>abcdefg</title><style>.red { color: red }</style></head><body><div class='red'></div><a url='www.g.com' /><div></div></body></html>`)
  })
}).listen(8090)

console.log('server started')