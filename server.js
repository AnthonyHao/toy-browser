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
    response.end(
      `<html>
        <head>
          <title>abcdefg</title>
          <style>
           #container {
             height: 300px;
             width: 500px;
             display: flex;
           }
           #container #myid{
             width: 200px;
           }
           #container .c1 {
             flex: 1;
           }
          </style>
        </head>
        <body>
            <div id='container'>
              <div id='myid' />
              <div class='c1' />
            </div>
        </body>`
      )})
}).listen(8090)

console.log('server started')