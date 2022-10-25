<?php 
/*
    Template Name: template A Projets
*/
?>

<?php get_header() ?>

<main class="main-projects">
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
