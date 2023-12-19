const express = require("express")
const connectToMongo = require("./db")
const cors = require('cors')

connectToMongo();

const app = express();
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("server running...")
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/detail', require('./routes/detail'))

app.listen(5000, () => {
    console.log("Server running on port: http://localhost:5000")
})