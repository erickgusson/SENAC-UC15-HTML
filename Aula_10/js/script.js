function botao() {

    // variavel = document selecionado pelo ID
    corpo = document.getElementById("corpo");
    console.log(corpo);

    caixa = document.getElementById("caixa");
    console.log(caixa);

    titulo = document.getElementById("titulo_principal");
    console.log(titulo);

    palavras = document.getElementById("palavras")
    console.log(palavras);

    // className -> lista os nomes da classe existente
    classeCorpo = corpo.className;
    console.log(classeCorpo);


    // split -> separa em array o texto
    classeCorpoSeparada = classeCorpo.split(" ");
    console.log(classeCorpoSeparada);


    for (cont = 0; cont < 2; cont++) {

        if (classeCorpoSeparada[cont] == 'bg1') {

            //quando a cor de fundo 1 e ser trocada 2

            corpo.classList.remove("bg1");
            corpo.classList.add("bg2");

            caixa.classList.remove("bg2");
            caixa.classList.add("bg1");

            titulo.classList.remove("ft1")
            titulo.classList.add("ft2")

            palavras.classList.remove("ft2")
            palavras.classList.add("ft1")

        }

        else if (classeCorpoSeparada[cont] == 'bg2') {

            //quando a cor de fundo 2 e ser trocada para 1 

            corpo.classList.remove("bg2");
            corpo.classList.add("bg1");

            caixa.classList.remove("bg1");
            caixa.classList.add("bg2");

            titulo.classList.remove("ft2")
            titulo.classList.add("ft1")

            palavras.classList.remove("ft1")
            palavras.classList.add("ft2")

        }

    }



}