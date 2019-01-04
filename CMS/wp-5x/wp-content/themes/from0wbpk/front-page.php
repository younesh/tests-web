<?php get_header(); ?>
    <!--middle : begin  -->
    <div class="middle home-page">
      <div class="container">
        <!-- liste de poste  --> 
        <section>
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

