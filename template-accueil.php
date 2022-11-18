<?php 
/*
    Template Name: template accueil
*/
?>

<?php get_header() ?>

<main class="main-accueil">

<?php
/* The loop */
while ( have_posts() ) : the_post();

    the_content() 
    ?>
    <div class="leCarousel">
    <?php
    if ( $gallery = get_post_gallery( get_the_ID(), false ) ) :
        // Loop through all the image and output them one by one.
        
        echo "<button class='bouton_gauche bouton_carousel' onclick='carousel(`droite`)'><span class='material-symbols-outlined'>
        keyboard_double_arrow_left
        </span></button>";
       
        echo "<div class='container_carousel'>";

        
        
        $galleryIds = explode( ",", $gallery['ids'] );

        foreach ( $galleryIds as $id) {
            $attachment = wp_prepare_attachment_for_js($id);
            ?>
            <div class="container_img_caption">
                <?php
            ?>
                <img src="<?php echo $attachment['url']; ?>" class="my-custom-class"/>
                <p><?php echo $attachment['caption'] ?></p>
            </div>  
            <?php
            
        }

        

        echo "</div>";
        echo "<button class='bouton_droite bouton_carousel' onclick='carousel(`gauche`)'><span class='material-symbols-outlined'>
        keyboard_double_arrow_right
        </span></button>";
        
        
    endif;
endwhile;
?>
 </div>   
</main>

<?php get_footer() ?>