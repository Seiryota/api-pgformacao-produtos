const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Quais os tipos de esquemas que vai receber,

const produtoSchema = new Schema ({
    nome: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    quantidade: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Produto", produtoSchema);