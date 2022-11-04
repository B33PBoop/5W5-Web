<?php 
/*
    Template Name: template A Projets
*/
?>

<?php get_header() ?>

<main class="main-projects">
<?php 
while ( have_posts() ) : the_post();

    the_title("<h2 class='title'>", "</h2>");

    $text = apply_filters('the_content', get_the_content() );
    $paragraphs = explode('</p>', $text);
    $nb = 0;

    foreach($paragraphs as $id){   
        $nb += 1; 
        echo $id;
        if($nb < count($paragraphs)){
            echo "<div class='bouton' onclick='displayText(`$nb`)'>button</div>";
        }
        }
    ?>

    <?php

endwhile;
    ?>  
</main>

<?php get_footer() ?>
