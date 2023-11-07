import express from "express";
import cors from 'cors'
import { config } from 'dotenv';
import { connectToDatabase } from './src/config/database.js'
import { route } from "./src/data_managment/routes.js";
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())



// Load environment variables from config.env file
config({
    path: './src/config/config.env', // Adjust the path as needed
});

connectToDatabase()

app.use("/api", route)


app.get('/', (req, res) => {
    res.send("your api is ruuning ....")
})


app.listen(process.env.port, () => {
    console.log(`Server running on port ${process.env.port}`)
})

