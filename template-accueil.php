<?php 
/*
    Template Name: template accueil
*/
?>

<?php get_header() ?>

<main class="main-accueil">


<?php if (have_posts()): the_post(); ?>
   <?php the_content() ?>   
<?php endif ?>
 
</main>

<?php get_footer() ?>