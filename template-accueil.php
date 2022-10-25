<?php 
/*
    Template Name: template accueil
*/
?>

<?php get_header() ?>

<main class="main-accueil">

<?php

/* The loop */
while ( have_posts() ) : the_post();
    if ( $gallery = get_post_gallery( get_the_ID(), false ) ) :
        // Loop through all the image and output them one by one.
        echo "<button class='bouton_droite' onclick='carousel(`droite`)'><span class='material-symbols-outlined'>
        keyboard_double_arrow_left
        </span></button>";
        echo "<div class='container_carousel'>";
        foreach ( $gallery['src'] AS $src ) {
                    ?>
                    <img src="<?php echo $src; ?>" class="img_carousel" alt="Gallery image" />
            <?php
        }
        echo "</div>";
        echo "<button class='bouton_gauche' onclick='carousel(`gauche`)'><span class='material-symbols-outlined'>
        keyboard_double_arrow_right
        </span></button>";
    endif;
endwhile;
?>
    
</main>

<?php
    get_footer()
?>