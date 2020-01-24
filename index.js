const express = require('express')

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'welcome'
    })
})

server.post('/stuff', (req, res) => {

})

server.delete('/stuff/:id', (req, res) => {

})

if (!module.parent) {
    server.listen(port, () => {
        console.log(`\n=> Server up on port 5000\n`)
    })
}
    
module.exports = server