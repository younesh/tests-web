<?php get_header(); ?>
    <!--middle : begin  -->
    <div class="middle category-page">
      <div class="container">
        <!-- liste de poste  --> 
        <section>
            <h2> liste des article de l'etiquette : <span> <?php single_tag_title('', true);  ?> </span> </h2>
          <?php if (have_posts()):  ?>
          <?php  while (have_posts()):  the_post(); ?> 
                <?php get_template_part('content'); ?>
          <?php  endwhile; ?> 
          <?php else: ?>
            <span class="success"> y a aycan resultat !!!   </span>
          <?php  endif; ?>
        </section>
      </div>
    </div>
    <!--middle : end  -->
<?php get_footer(); ?>

