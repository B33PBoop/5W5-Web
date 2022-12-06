<?php
// Template Name: Template 404
?>

<?php get_header() ?>

<main class="main_404">
    <?php if (have_posts()): the_post(); ?>
        <?php the_content() ?>   
    <?php endif ?>

    <a href="http://localhost:81/PW5W5/" class="home_link">
        Cliquez Ici pour retourner à la page principale.
    </a>
</main>

<?php get_footer() ?>