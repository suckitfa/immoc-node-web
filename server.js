// 导入http模块
const http = require('http')
const fs = require('fs')
const { parse } = require('path')
const { url } = require('inspector')
const querystring = require('querystring')
const router = require('./router')
// 创建服务器
// 获取服务器的实例对象
const server = http.createServer((req, res) => {
    // req: 请求对象
    // console.log('req = ',req.headers)
    // res: 响应对象
    // 设置响应头
    // res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // 设置响应体
    // res.end('<h1>hello world</h1>')
})
server.on('request',(req,res) => {
    // const urlParsedObj = parse(req.url,true)
    // parse url
    // console.log('urlParsedObj = ',urlParsedObj)
    // const method = req.method
    // console.log('method = ',method)
    // console.log('req.url = ',req.url)
    // const url = new URL(req.url,`http://${req.headers.host}`)
    // console.log('url = ',url)
    // console.log(url.parse(req.url))
    router(req,res)
})

server.on('close',() => {
    console.log('closing server'    )
})

server.listen(3000, () => {
    console.log('服务器启动成功了，可以通过 http://localhost:3000/ 来进行访问   ')
})
