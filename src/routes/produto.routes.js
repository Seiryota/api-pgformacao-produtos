const produtoController = require("../controllers/produto.controller");

module.exports = app => {
    app.post("/produto", produtoController.criarProduto);
    app.get("/produto", produtoController.listarProdutos);
    app.get("/produto/:id", produtoController.listarUmProduto);
    app.delete("/produto/:id", produtoController.deletarProduto);
    app.put("/produto/:id", produtoController.editarProduto);
};