// Getting dependencies from module
import express from 'express';
import cors from 'cors';

import "dotenv/config";

// Initialize App
const app = express();

// Use Cors (Cross origin Resources Sharing)
app.use(cors())

// Set Route or URL
app.get('/', (req, res)=>{
    res.send("Hello World")
})

// Set About URl
app.get('/about', (req, res) => {
    res.send("Hello World, Here is a content about us")
});
// Set Local Host and our server
app.listen(process.env.PORT, ()=>{
    console.log(`App.js server started at port ${process.env.PORT}!`)
})