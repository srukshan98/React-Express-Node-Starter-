const express = require('express');

const port = 5000;

const app = express();

app.get("/api/",(req,res)=>{
    const customers = [
        {id: 1, name: "Sachith"},
        {id: 2, name: "Shawn"},
        {id: 3, name: "RUkshan"}
    ]
    res.json(customers);
})

app.listen(port, () => console.log(`Server Started at port ${port}`));