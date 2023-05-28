const controller = require('./controller')

module.exports = (req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
          controller.index(req,res)
        } else if (req.url === '/doggee.jpeg') {
            controller.getDoggeeJpeg(req,res)
        }
    }
    else if (req.method === 'POST') {
        handlePost(req, res)
    }

}

const handlePost = (req, res) => {
    let postData = ''
    req.on('data', (chunk) => {
        postData += chunk.toString()
    })
    req.on('end', () => {
        postData = JSON.parse(postData)
        console.log('type of = ',typeof postData)
        controller.user(postData,res)
    })
}