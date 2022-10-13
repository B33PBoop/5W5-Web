<?php
    /*
     Template Name: à propos
    */
?>
<?php get_header() ?>
    
    <main class="main_template_a_propos">
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
    