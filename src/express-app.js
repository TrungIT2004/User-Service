// const express = require('express')
// const { Hono }= require('hono')
// const cors = require('cors')
// const helmet = require('helmet')

// const app = express()

// app.use(express.json())

// app.use(cors({
//     origin: '*',
//     credentials: true,
// }))

// app.use(helmet())

// module.exports = app


const { Hono }= require('hono')

const honoApp = new Hono()

honoApp.use(Hono.json())
honoApp.use(Hono.helmet())
honoApp.use(Hono.cors({
    origin: "*",
    credentials: true
}))

module.exports = honoApp