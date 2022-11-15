<?php 
/*
    Template Name: template cours
*/
?>

<?php get_header() ?>

<main class="main-cours">
    <?php 
        if(have_posts()):
            while(have_posts()):
                the_post();
            the_content(null, true);
            endwhile;
        endif;
    ?>
</main>

<?php get_footer() ?>