const express = require('express')
const {db, add, remove} = require('./data/data')

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'welcome'
    })
})

server.post('/stuff', (req, res) => {
    add(req.body)
    
})

server.delete('/stuff', (req, res) => {
    remove('last')
})

if (!module.parent) {
    server.listen(port, () => {
        console.log(`\n=> Server up on port 5000\n`)
    })
}
    
module.exports = server