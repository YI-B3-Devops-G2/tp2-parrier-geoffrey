const Express = require('express');
const Server = Express();
const PORT = process.env.PORT || 3030;
const redis = require("redis")
const { Client } = require('pg')

const postgreClient = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})


Server.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    postgreClient.connect();
});

const redisClient = redis.createClient({ host: process.env.REDIS_HOST });

Server.get('/', function (req, res)
{
    res.json({ message: "Hello World" });
});


Server.get('/status', async (req, res) =>
{
    query = "SELECT date_trunc('second', current_timestamp - pg_postmaster_start_time()) as uptime";
    result = await postgreClient.query(query);
    
    res.json({
        status: "OK",
        postgresUptime: String,
        redisConnectedClients: Number
    });
});