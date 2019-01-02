<?php get_header(); ?>
    <!--middle : begin  -->
    <div class="middle single-page">
      <div class="container">


        <div class="row">
            <div class="col-md-8">
                <!-- liste de poste  --> 
                <section>
                <?php if (have_posts()):  ?> 
                <?php  while (have_posts()):  the_post(); 
                    $date_post = sprintf('<time class="entry-date" datetime="%1$s">%2$s</time>',
                        esc_attr( get_the_date('c')), esc_html(get_the_date())
                    );
                ?> 
                <div class="row">
                    <div class="col-12">
                        <?php the_post_thumbnail('thumbnail', array( 'class' => 'img-fluid' ));  ?>
                    </div>
                    <div class="col-12">
                        <h1>   <?php the_title(); ?>  </h1>
                        <p>
                        <?php
                            echo from0_meta_poste( 
                                esc_attr( get_the_date('c')),
                                esc_html(get_the_date()),
                                get_the_category_list(', ')
                            );
                        ?> 
                        </p>

                        <p>
                        <?php the_content(); ?>
                    </p>
                    </div>
                </div>
                <?php  endwhile; ?> 
                <?php else: ?>
                    <span class="success"> y a aycan resultat !!!   </span>
                <?php  endif; ?>
                </section>
            </div>
            <div class="col-md-4">
               <?php require_once("inc/aside.php"); ?>        
            </div>
        </div>
      </div>
    </div>
    <!--middle : end  --> 
<?php get_footer(); ?>

