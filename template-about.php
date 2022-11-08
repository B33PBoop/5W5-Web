<?php 
/*
    Template Name: template A Propos
*/
?>

<?php get_header() ?>

<main class="main_about">

<?php if (have_posts()): the_post(); ?>
   <?php the_content() ?>   
<?php endif ?>

</main>

<?php get_footer() ?>
