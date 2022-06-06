var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/upDinheiro", function (req, res) {
    usuarioController.upDinheiro(req, res);
})
router.post("/historico", function (req, res) {
    usuarioController.historico(req, res);
})
router.post("/listHist", function (req, res) {
    usuarioController.listHist(req, res);
})

module.exports = router;