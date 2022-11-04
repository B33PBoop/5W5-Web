<?php 

function web_5w5_enqueue(){
    wp_enqueue_style('style', get_stylesheet_uri());
    //wp_enqueue_style('style-base', get_template_directory_uri() . '/style.css', array(), filemtime(get_template_directory() . '/style.css'), false);
    //wp_enqueue_style('cidw-4w4-police-google', "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@300;400;500&family=Roboto&display=swap", false);
    wp_enqueue_script( "carousel_script" , get_template_directory_uri() . "/js/carousel.js", array(), true);
    wp_enqueue_script( "display_text_script" , get_template_directory_uri() . "/js/textDisplay.js", array(), true);

}


add_action("wp_enqueue_scripts", "web_5w5_enqueue");


function web_5w5_register_nav_menus(){
    register_nav_menus( array(
        'menu_header' => __('Menu Header', 'web_5w5'),
        'menu_footer' => __('Menu Footer', 'web_5w5')
    ) );
}
add_action('after_setup_theme', 'web_5w5_register_nav_menus', 0);


?>