const {Pool} = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pt2026_db',
    password: 'Sanyiwa',
    port: 5432,
});
const express = require('express');
const cors = require('cors');
const app=express();
const PORT = 5000;
app.use(cors());
app.get('/',(req,res)=>{res.send("Hello World from Express server!");});
app.get('/api/hello',(req,res) => {res.json({message: 'Hello World kutoka Node/Express backend!'});});
app.get('/api/test-db',async (req,res) => {
    try {
        const result = await pool.query('SELECT*FROM test_connection');
        res.json(result.rows);
    }catch (err) {
        res.status(500).json({ error: err.message });
    }
});  
    app.listen(PORT,() => {
        console.log(`Server inaendesha kwenye http://localhost:${PORT}`);});

