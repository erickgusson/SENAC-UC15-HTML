function botao() {
    // Variáveis selecionadas pelo ID usando jQuery
    const $corpo = $("#corpo");
    console.log($corpo);

    const $caixa = $("#caixa");
    console.log($caixa);

    const $titulo = $("#titulo_principal");
    console.log($titulo);

    const $palavras = $("#palavras");
    console.log($palavras);

    // Obtendo a lista de classes existentes
    const classeCorpo = $corpo.attr('class');
    console.log(classeCorpo);

    // Separando as classes em um array
    const classeCorpoSeparada = classeCorpo.split(" ");
    console.log(classeCorpoSeparada);

    for (let cont = 0; cont < 2; cont++) {
        if (classeCorpoSeparada[cont] === 'bg1') {
            // Quando a cor de fundo é 1 e será trocada para 2
            $corpo.removeClass("bg1").addClass("bg2");
            $caixa.removeClass("bg2").addClass("bg1");
            $titulo.removeClass("ft1").addClass("ft2");
            $palavras.removeClass("ft2").addClass("ft1");
        } else if (classeCorpoSeparada[cont] === 'bg2') {
            // Quando a cor de fundo é 2 e será trocada para 1
            $corpo.removeClass("bg2").addClass("bg1");
            $caixa.removeClass("bg1").addClass("bg2");
            $titulo.removeClass("ft2").addClass("ft1");
            $palavras.removeClass("ft1").addClass("ft2");
        }
    }
}