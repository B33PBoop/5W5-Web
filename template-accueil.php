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

    the_title("<h2 class='title'>", "</h2>");

    $text = apply_filters('the_content', get_the_content() );
    $paragraphs = explode('</p>', $text);
    ?>
    <div class="container_description">
    <div class="description"> <?php echo $paragraphs[0]?></div>
    <button class="savoir_plus"> <?php echo $paragraphs[1]?> </button>
    </div>
    <?php
    if ( $gallery = get_post_gallery( get_the_ID(), false ) ) :
        // Loop through all the image and output them one by one.
        
        echo "<div class='container_carousel'>";
        echo "<button class='bouton_droite bouton_carousel' onclick='carousel(`droite`)'><span class='material-symbols-outlined'>
        keyboard_double_arrow_left
        </span></button>";
        
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
        echo "<button class='bouton_gauche bouton_carousel' onclick='carousel(`gauche`)'><span class='material-symbols-outlined'>
        keyboard_double_arrow_right
        </span></button>";
        echo "</div>";
        
        
    endif;
endwhile;
?>
    
</main>

<?php get_footer() ?>