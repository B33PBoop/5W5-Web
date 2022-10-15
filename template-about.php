<?php 
/*
    Template Name: template A Propos
*/
?>

<?php get_header() ?>

<main class="main_about">
    <?php 
        if(have_posts()):
            while(have_posts()):
                the_post();
            the_title("<h2>", "</h2>");
            the_content(null, true);
            endwhile;
        endif;
    ?>
</main>
