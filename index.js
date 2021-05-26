const express = require ("express");
const app = express();
const importData = require("./data.json");
const importCarga = require("./carga.json")
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/players", (req, res) => {
    res.send(importData);
})

app.get("/cargas", (req, res) => {
    res.send(importCarga);
})

app.listen(port, () => {
    console.log(`EXAMPLE APP IS listening on port http://localhost:${port}`);
});