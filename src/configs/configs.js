const env = require('dotenv')

const node_env = 'dev'

if ( node_env === 'dev' ) {
    env.config({ path: ".env.dev"})
} else {
    env.config({ path: ".env.prod"})
}


module.exports = {
    PORT: process.env.PORT,
    PG_HOST: process.env.PG_HOST,
    PG_PORT: process.env.PG_PORT,
    PG_USERNAME: process.env.PG_USERNAME,
    PG_PASSWORD: process.env.PG_PASSWORD,
    PG_DATABASE: process.env.PG_DATABASE,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
}