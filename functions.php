<?php 

function web_5w5_enqueue(){
    wp_enqueue_style('style', get_stylesheet_uri());
    //wp_enqueue_style('style-base', get_template_directory_uri() . '/style.css', array(), filemtime(get_template_directory() . '/style.css'), false);
    //wp_enqueue_style('cidw-4w4-police-google', "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@300;400;500&family=Roboto&display=swap", false);
    wp_enqueue_script( "web_5w5-js-carousel" , get_template_directory_uri() . "/js/carousel.js", array(), true);
    wp_enqueue_script( "web_5w5-js-dropdown-icon", get_template_directory_uri() . "/js/dropdown_icon.js", array(), true);
    wp_enqueue_script( "web_5w5-js-dropdown-menu", get_template_directory_uri() . "/js/dropdown_menu.js", array(), true);
    wp_enqueue_script( "web_5w5-js-display_text" , get_template_directory_uri() . "/js/textDisplay.js", array(), true);


}


add_action("wp_enqueue_scripts", "web_5w5_enqueue");


function web_5w5_register_nav_menus(){
    register_nav_menus( array(
        'menu_header' => __('Menu Header', 'web_5w5'),
        'menu_footer' => __('Menu Footer', 'web_5w5')
    ) );
}

function web_5w5_custom_logo_setup(){
    $settings = array(
        'height' => 100,
        'width' => 250,
        'flex-width' => true,
        'flex-height' => true,
    );
    add_theme_support('custom-logo', $settings);
}
add_action('after_setup_theme', 'web_5w5_register_nav_menus', 0);
add_action('after_setup_theme', 'web_5w5_custom_logo_setup');
?>