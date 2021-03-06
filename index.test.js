const supertest = require('supertest')

const server = require('./index')

test('welcome route', async () => {
    const res = await supertest(server).get('/')
    console.log(res)

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toBe('welcome')
})