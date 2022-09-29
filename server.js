const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            tittle: "D",
            message: "esenvolvendo serviços e aplicações"
        },
        {
            tittle: "E",
            message: "EJS é uma linguagem complexa, porém, muito divertida"
        },
        {
            tittle: "M",
            message: "esmo aprendendo sobre, não pare de estudar"
        },
        {
            tittle: "A",
            message: "prendizado completar muito importante para a formação"
        },
        {
            tittle: "I",
            message: "mpressinante"
        },
        {
            tittle: "S",
            message: "uperando as metas todos os dias"
        },

    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas em HTML utilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/Sobre", function (req, res) {
    res.render("pages/about");
});

app.listen(8080);
console.log("rodando");