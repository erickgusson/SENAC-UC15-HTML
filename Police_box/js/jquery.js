let indexSlide = 0;

function ShowSlide(index) {
    const carrossel = $(".carrossel");
    const totalSlide = 3;

    if (index > totalSlide) {
        indexSlide = 0;
    } else if (index < 0) {
        indexSlide = totalSlide;
    } else {
        indexSlide = index;
    }

    // console.log(indexSlide);

    const offset = -indexSlide * 100;
    carrossel.css("transform", `translateX(${offset}%)`);
}

function AnteriorSlide() {
    indexSlide--;
    ShowSlide(indexSlide);
}

function ProximoSlide() {
    indexSlide++;
    ShowSlide(indexSlide);
}

setInterval(() => {
    ProximoSlide();
}, 5000);