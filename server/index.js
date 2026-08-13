const express = require(`express`);
const cors = require(`cors`);
const app=express();
const PORT = 5000;
app.use(cors());
app.get(`/`,(req,res)=>{res.send("Hello World from Express server!");});
app.get(`/api/hello`,(req,res) => {res.json({message: `Hello World kutoka Node/Express backend!`});});
    app.listen(PORT,() => {
        console.log(`Server inaendesha kwenye http://localhost:${PORT}`);});
    