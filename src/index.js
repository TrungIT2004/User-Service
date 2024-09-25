// const app = require('./express-app')
// const { PORT } = require('./configs/configs')
// const Pool = require('./database/connnection')
// const userRoute = require('./api/routes/userRoute')

// const startServer = async () => {
//     app.listen(PORT, () => {
//         console.log('Server started at port', PORT)
//     })
// }

// // Routes
// app.use('/v1/users', userRoute)


// // Connect to PG and start Server
// Pool.connect()
//     .then( () => {
//         console.log('PostgreSQL DB started')
//         startServer()
//     })
//     .catch( (err) => {
//         console.log(err)
//     })

const honoApp = require('./express-app')
const { PORT } = require('./configs/configs')
const Pool = require('./database/connnection')

const startServer = async () => {
    honoApp.serve({
        port: PORT,
    }), () => {
        console.log('Hono server started at port', PORT)
    };
};

// Connect to PG and start Server
Pool.connect()
    .then(() => {
        console.log('PostgreSQL DB started');
        startServer();
    })
    .catch((err) => {
        console.log(err);
    });

