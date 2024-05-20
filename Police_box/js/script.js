// var      Variavel para usar na página todoa
// let      Variavel para usar no contexto
// const    Constante que não se altera

let indexSlide = 0;

function ShowSlide(index) {
    const carrossel = document.querySelector(".carrossel");

    const totalSlide = 3;

    if (index > totalSlide) {
        indexSlide = 0
    }

    else if (index < 0 ) {
        indexSlide = totalSlide;
    }

    else {
        indexSlide = index;
    }

    // console.log(indexSlide);

    const offset = -indexSlide * 100;
    carrossel.style.transform = `translateX(${offset}%)`
}

function AnteriorSlide() {
    indexSlide--;

    // if (indexSlide < 0) {
    //     indexSlide = 3;
    // }

    ShowSlide(indexSlide);
}

function ProximoSlide() {
    indexSlide++;

    // if (indexSlide > 3) {
    //     indexSlide = 0;
    // }

    ShowSlide(indexSlide);
}