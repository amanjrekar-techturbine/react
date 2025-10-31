import express from "express";
import cors from "cors";
import pool from "./config/postgres.js"

const app = express();

app.use(cors())
app.use(express.json())

// Login
app.post("/api/customers/login", async (req, res)=>{
    const {email, password} = req.body;

    let query = "SELECT * FROM customers WHERE email = $1 AND password = $2;";

    try {
        const result = await pool.query(query, [email, password])

        if (result.rowCount == 0) {
            return res.status(404).send("Invalid username or password!");
        }

        return res.status(200).send("Login successful!");
    } catch (error) {
        console.log(error)
        return res.status(400).send("Email already exists!")
    }
})

// Register
app.post("/api/customers/register", async (req, res)=>{
    const {name, email, password} = req.body;

    let query = "INSERT INTO customers(name, email, password) VALUES($1, $2, $3)";

    try {
        await pool.query(query, [name, email, password])
        return res.status(201).send("Registered successfully");
    } catch (error) {
        console.log(error)
        return res.status(400).send("Email already exists!")
    }
})

app.listen(3000, ()=>{
    console.log("Server started at port 3000");
})