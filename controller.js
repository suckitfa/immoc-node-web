const fs = require('fs')
module.exports = {
    index(req,res) {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.end('404')
            } else {
                res.end(data)
            }
        })
    },
    user(postData,res) {
        console.log('postData = ', postData)
        res.end('ok')
    },
    getDoggeeJpeg (req,res) {
        fs.readFile('./doggee.jpeg', (err, data) => {
            if (err) {
                res.end('404')
            } else {
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    }

}