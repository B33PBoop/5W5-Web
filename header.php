<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Ubuntu&display=swap" rel="stylesheet">
    <title>Document</title>
    <?php wp_head() ?>
</head>
<body>
    <header class="header">
        <?php 
            wp_nav_menu(array(
                "menu" => "burger",
                "container" => "div"
            ))
        ?>
        
        <a href="http://localhost/PW5W5/" id="home_icon"></a> <!--Remplacer le href du lien par le lien de la page principale si le site est téléversé ailleurs -->

        <?php 
            wp_nav_menu(array( 
                "menu" => "header",
                "container" => "nav"
            ))
        ?>
    </header>