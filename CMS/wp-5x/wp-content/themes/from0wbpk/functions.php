<?php


/*-------  CHARGEMENT DE SCRIPT .... ------------*/

define('FROM0_VERSION', '1.0.0');

/*
 function from0_script () {
   wp_enqueue_style('from0_mainStyle', get_template_directory_uri() . '/style.css', array('from0_libBootsrap'), FROM0_VERSION, 'all');
   wp_enqueue_style('from0_libBootsrap', get_template_directory_uri() . '/bootstrap.min.css', array(), FROM0_VERSION, 'all');
   wp_enqueue_script('from0_mainJs', get_template_directory_uri() . '/js/main.js', array('jquery'), FROM0_VERSION, true);
}

add_action('wp_enqueue_scripts', 'from0_script');
 */ 



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


  /* Enqueue Styles and Scripts */
function from0_header_scripts()  { 
	wp_enqueue_style('styles', get_stylesheet_directory_uri() . '/dist/css/styles.css');
}
add_action( 'wp_enqueue_scripts', 'from0_header_scripts' );


function from0_footer_scripts()  { 
	wp_enqueue_script( 'vendors.bundle', get_template_directory_uri() . '/dist/js/vendors.bundle.js');
	wp_enqueue_script( 'app.bundle', get_template_directory_uri() . '/dist/js/app.bundle.js'); 
}
add_action( 'wp_footer', 'from0_footer_scripts' );


/* -------------  afficher les meta de larticle : date + ctegorie ---------------- */

 function from0_meta_poste($date01, $date02, $cat, $tag) {
   $chaine = ' <span class="local"> Publié le </span> <time class="entry-date" datetime="' . $date01 . '">' .  $date02 . '</time>';
   $chaine .= '<span class="local"> dans la catégorie : </span> ' . $cat;
   $chaine .= '<span class="local"> ayant l \'etiquette : </span> ' . $tag;
   return  $chaine;
 }   