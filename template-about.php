<?php 
/*
    Template Name: template A Propos
*/
?>

<?php get_header() ?>

<main class="main_about">
    <?php 
while ( have_posts() ) : the_post();

    the_title("<h2 class='title'>", "</h2>");

    $text = apply_filters('the_content', get_the_content() );
    $paragraphs = explode('</p>', $text);
    $nb = 0;

    foreach($paragraphs as $id){   
        $nb += 1; 
        echo $id;
        echo "<div class='bouton' onclick='displayText(`$nb`)'>button</div>";
        }
    ?>

    <?php

endwhile;
    ?>
</main>

<?php get_footer() ?>
