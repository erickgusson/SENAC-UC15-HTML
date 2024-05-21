<!DOCTYPE html>
<html lang="pt-br">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Police Public Call Box</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/carrossel.css">
    <link rel="stylesheet" href="css/footer.css">

</head>

<body>

    <?php require './pages/templates/header.php' ?>

    <section id="banner">

        <main class="carrossel-container">

            <div class="carrossel">

                <img src="img/banners/banner_corrigido_1.png" alt="Banner do Cantor Cleinton Rasta">
                <img src="img/banners/banner_corrigido_2.png" alt="Banner do Filme do Tin Tin">
                <img src="img/banners/banner_corrigido_3.png" alt="Banner do Filme do Hobbit">
                <img src="img/banners/banner_corrigido_4.png" alt="Banner do Jogo Warframe">

            </div>

            <button class="anterior" onclick="javascript:AnteriorSlide()"> <i class="bi bi-arrow-left"></i> </button>
            <button class="proximo" onclick="javascript:ProximoSlide()"> <i class="bi bi-arrow-right"></i> </button>

        </main>

    </section>

    <?php require './pages/produto.php' ?>

    <?php require './pages/templates/footer.php' ?>

</body>

<script src="js/script.js"></script>

</html>