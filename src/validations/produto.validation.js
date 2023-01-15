const yup = require("yup");

exports.validarProduto = yup.object({
    nome: yup.string("nome é do tipo string").required("nome é obrigatório"),
    preco: yup.number("preco é o tipo numero").required("preco é obrigatório"),
    quantidade: yup.number("quantidade é do tipo número").required("quantidade é obrigatório"),
});