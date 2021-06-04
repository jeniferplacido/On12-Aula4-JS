const { truncate } = require("fs");

const livros =[
    {
        "nome": "50 tons de cinza",
        "categoria":"Romance",
        "paginas": 547,
        "recomenda": true,
        "leu": true

    },
    {
        "nome": "50 tons mais escuro",
        "categoria":"Romance",
        "paginas": 496,
        "recomenda": true,
        "leu": true
    },
    {
        "nome": "50 tons de liberdade",
        "categoria":"Romance",  
        "paginas": 547,
        "recomenda": true,
        "leu": false
    },
    {
        "nome": "Um amor para recordar",
        "categoria": "Romance",
        "paginas": 186,
        "recomenda": true,
        "leu": false
    },
    {
        "nome": "Bridgerton: O Duque e Eu",
        "categoria": "Romance",
        "paginas": 	304,
        "recomenda": true,
        "leu": false
    },
    {
        "nome": "A Culpa é das Estrelas",
        "categoria": "Romance",
        "paginas": 255,
        "recomenda": true,
        "leu": false
    },
    {
        "nome": "Como Eu Era Antes de Você",
        "categoria": "Romance",
        "paginas": 320,
        "recomenda": true,
        "leu": false
    },
    {
        "nome": "Terapia, urgente!: O namorado nº 3",
        "categoria": "Comédia",
        "paginas": 11,
        "recomenda": true,
        "leu": false
    },
    {
        "nome": "Radicci 30 anos: 1130",
        "categoria": "Comédia",
        "paginas": 208,
        "recomenda": false,
        "leu": false
    },
    {
        "nome": "A louca dos gatos",
        "categoria": "Comédia",
        "paginas": 112,
        "recomenda": false,
        "leu": false
    },
    {
        "nome": "Sentimento do mundo",
        "categoria": "Poesia",
        "paginas": 96,
        "recomenda": true,
        "leu": false
    },
    {
        "nome": "A teus pés",
        "categoria": "Poesia",
        "paginas": 144,
        "recomenda": false,
        "leu": false
    },
    {
        "nome": "Poesia com rapadura",
        "categoria": "Poesia",
        "paginas": 192,
        "recomenda": false,
        "leu": false
    },
    {
        "nome": "Os Segredos da Mente Milionária",
        "categoria": "AutoAjuda",
        "paginas": 176,
        "recomenda": true,
        "leu": false
    },
    {
        "nome": "Pai Rico, Pai Pobre",
        "categoria": "AutoAjuda",
        "paginas": 192,
        "recomenda": true,
        "leu": false
    },
    {
        "nome": " O Milagre da Manhã",
        "categoria": "AutoAjuda",
        "paginas": 196,
        "recomenda": true,
        "leu": false
    },
    {
        "nome": "Código limpo",
        "categoria": "Programaçao",
        "paginas": 456,
        "recomenda": true,
        "leu": false
    },
    {
        "nome": "Como Ser Um Programador Melhor.",
        "categoria": "Programaçao",
        "paginas": 383,
        "recomenda": true,
        "leu": false
    },
    {
        "nome": "Use a Cabeça! Java",
        "categoria": "Programaçao",
        "paginas": 496,
        "recomenda": true,
        "leu": false
    }
]
module.exports = livros