const express = require('express');
const PORT = 3000;
const app = express();

app.get('/',(req,res) => {
    res.send("hello world");
})

app.listen(PORT,() => {
    console.log(`The server listening at: http://localhost:${PORT}`);
})