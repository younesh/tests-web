<?php


/*-------  CHARGEMENT DE SCRIPT .... ------------*/

define('FROM0_VERSION', '1.0.0');

 function from0_script () {
   wp_enqueue_style('from0_mainStyle', get_template_directory_uri() . '/style.css', array('from0_libBootsrap'), FROM0_VERSION, 'all');
   wp_enqueue_style('from0_libBootsrap', get_template_directory_uri() . '/bootstrap.min.css', array(), FROM0_VERSION, 'all');
   wp_enqueue_script('from0_mainJs', get_template_directory_uri() . '/js/main.js', array('jquery'), FROM0_VERSION, true);
}

add_action('wp_enqueue_scripts', 'from0_script');


// charger des scripts ds le BO wp 
 function from0_admin_script () {
   wp_enqueue_style('from0_admin_libBootsrap', get_template_directory_uri() . '/bootstrap.min.css', array(), FROM0_VERSION, 'all');
}

add_action('admin_init', 'from0_admin_script');



/* ----------  UTILITAIRES ------------- */
function from0_setup () {

    // ajouter le support des vignettes 
    add_theme_support('post-thumbnails');

    // enlever/cacher  le numero de version wp
    remove_action ('wp_head','wp_generator');

    // ajouter la balise title
    add_theme_support('title-tag');

    // activer la gestion des menu > primary et secondary c'est des declaration de postion qu'en verra en BO
    register_nav_menus(array('primary' => 'principal', 'secondary'=>'Secondaire', 'footer' => 'Footer'));
}

  add_action ('after_setup_theme', 'from0_setup');
