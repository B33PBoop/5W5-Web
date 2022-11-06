<?php 
/*
    Template Name: template A Projets
*/
?>

<?php get_header() ?>

<main class="main_projects">

<?php if (have_posts()): the_post(); ?>
   <h2><?php the_title() ?></h2>
   <?php the_content() ?>   
<?php endif ?>

</main>

<?php get_footer() ?>
