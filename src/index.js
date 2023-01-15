const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb+srv://Seiryota1:W$539541wswu@cluster0.fc2aqpy.mongodb.net/?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Mongoose conectado com sucesso");
});

db.on("error", () => {
    console.log("Mongoose não conseguiu conectar com o banco");
});

db.on("disconnected", () => {
    console.log("Mongoose desconectou");
});

process.on("SIGINT", () => {
    db.close(() => {
        console.log('Mongoose default connection is disconnected due application termination');
        process.exit(0);
    });
});

require("./models/produto.model");
require("./routes/index")(app);

app.listen(3033);