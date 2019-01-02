<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <!-- <%= require('html-loader!./tpl-included/head.html') %> -->

  <meta charset="<?php bloginfo('charset') ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="description de la home , bla bla blavla& ... ">

  <title>wp : constract a neww theme </title>

  <?php wp_head(); ?>
</head>
<body>
  <div class="page page-home">
    <!-- Header : begin -->
   <!-- <%= require('html-loader!./tpl-included/header.html') %> -->

    <header class="header">
        <div class="menu-descktop">
          <?php
            wp_nav_menu( array(
              'menu' => 'top-menu',
              'theme_location' => 'primary' // position , deja declaré ds functions.php
            ));
          ?>
        </div>
    </header>
    <!-- Header : end  -->
    <!--middle : begin  -->
    <div class="middle">
      <div class="container">

          <!-- liste de poste  --> 
          <?php
           /* 
           if (have_posts()): // en test si en a des resulatat
              while (have_posts()): // tant qu on a des resultat en booble
                the_post();  // l'article en ccours
                the_title(); echo "<br />"; // le titre de l'article en cours  
              endwhile;
            else:
              echo "y a aycan resultat !!! "; 
            endif; 
            */
          ?>
          <section>
            <?php if (have_posts()):  ?> 
            <?php  while (have_posts()):  the_post(); ?> 
            <div class="row">
              <div class="col-2">
                <?php the_post_thumbnail('thumbnail', array( 'class' => 'img-fluid' ));  ?>
              </div>
              <div class="col-10">
                  <h1> <?php the_title(); ?>  </h1>
                  <p>
                    <?php the_excerpt(); ?>
                </p>
              </div>
            </div>
            <?php  endwhile; ?> 
            <?php else: ?>
              <span class="success"> y a aycan resultat !!!   </span>
            <?php  endif; ?>
          </section>

      </div>
    </div>
    <!--middle : end  -->
   <!-- <%= require('html-loader!./tpl-included/footer.html') %> -->
    <footer>
        <?php
          wp_nav_menu( array(
            'menu' => 'footer-menu',
            'theme_location' => 'footer' // position , deja declaré ds functions.php
          ));
        ?> 
    </footer>
  </div>

    <?php wp_footer(); ?>
</body>

</html>