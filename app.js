const http = require('http')
const fs = require('fs')
const port = 1131

const server = http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('app.html',function(error,data) {
        if (error) {
            res.writeHead(404)
            res.write('404-File Not Found!')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log('Somthing went wrong!:'+error)
    } else {
        console.log('Server is on port:'+port)
    }
})
