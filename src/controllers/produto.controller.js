const mongoose = require("mongoose");
const Produto = mongoose.model("Produto");
const validation = require("../validations/produto.validation");

// req - requisição e res - response (resposta).

// Função criar produto.
exports.criarProduto = async (req, res) => {
    try {
        await validation.validarProduto.validate(req.body);
        const produto = new Produto(req.body);
        await produto.save();
        res.status(200).json({ message: "Produto criado com sucesso" });
    } catch (e) {
        res.status(400).send(e);
    }
};

// Função listar produto.
exports.listarProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find({});
        res.status(200).send(produtos);
    } catch (e) {
        res.status(400).send(e);
    }
};

// Função listar apenas um produto.
exports.listarUmProduto = async (req, res) => {
    try {
        const produto = await Produto.findOne({ _id: req.params.id });
        res.status(200).send(produto);
    } catch (e) {
        res.status(400).send(e);
    }
};

// Função excluir/deletar produto.
exports.deletarProduto = async (req, res) => {
    try {
        await Produto.findByIdAndDelete(req.params.id);
        res.status(201).send();
    } catch (e) {
        res.status(400).send(e);
    }
};

// Função editar/update o produto.
exports.editarProduto = async (req, res) => {
    try {
        const produto = await Produto.findByIdAndUpdate(req.params.id, {
            $set: req.body,
            new: true,
        });
        res.status(200).send(produto);
    } catch (e) {
        res.status(400).send(e);
    }
};
