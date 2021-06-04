const livros = require('./database')

livros.sort((a,b)=>a.categoria - b.categoria)

const pegarInfo = require('readline-sync');

const verLivrosPorCategoria = pegarInfo.question('Você deseja escolher um livro por categoria?(S/N?)')

if(verLivrosPorCategoria.toLocaleUpperCase() ==='S'){
    console.log("As categorias disponíveis são:")
    console.table("Romance, Poesia, Comédia, Programação e AutoAjuda")

const escolherCategoria = pegarInfo.question("Digite a categoria: ")

const categorias = livros.filter(livros => livros.categoria === escolherCategoria)
console.table(categorias)
}else{
    console.log('Esses são todos os livros')
    console.log(livros)
}

