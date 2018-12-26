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
    <!-- Header : end  -->
    <!--middle : begin  -->
    <div class="middle">
      <div class="container">
        <div class="row">
          <div class="jumborton">
            <h1> heading page ...</h1>
          </div>


          <!-- liste de poste  --> 
          <?php
            if (have_posts()): // en test si en a des resulatat
              while (have_posts()): // tant qu on a des resultat en booble
                the_post();  // l'article en ccours
                the_title(); echo "<br />"; // le titre de l'article en cours  
              endwhile;
            else:
              echo "y a aycan resultat !!! "; 
            endif;
          ?>
          <section>
            <?php if (have_posts()):  ?> 
            <?php  while (have_posts()):  the_post(); ?> 
            <div class="row">
              <div class="col-2">
                <img src="<?php echo get_template_directory_uri();?>/screenshot.png" alt="" class="img-fluid">
              </div>
              <div class="col-10">
                  <h1> <?php the_title(); ?>  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime corrupti distinctio quaerat nobis assumenda, quas nemo soluta inventore voluptas! Error esse, molestiae accusantium nisi id eligendi ducimus dolore nam commodi.
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
    </div>
    <!--middle : end  -->
   <!-- <%= require('html-loader!./tpl-included/footer.html') %> --> 
  </div>

    <?php wp_footer(); ?>
</body>

</html>