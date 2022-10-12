<?php
    /*
     Template Name: à propos
    */
<<<<<<< Updated upstream
?>
=======
?>
<?php get_header() ?>
    
    <main class="main">
        <div>
        <?php 
            if(have_posts()):
                while(have_posts()):
                    the_post();
                the_title("<h2>", "</h2>");
                the_content(null, true);
                endwhile;
            endif;
        ?>
        </div>
        <p>bro!! Ne pas oublier de modifier <a href="404.php">la page 404</a> pour les prochaines versions !! new new new</p>
    </main>
    
<?php get_footer() ?>
>>>>>>> Stashed changes
