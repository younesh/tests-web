        <div class="row">
            <div class="col-2">
                <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('thumbnail', array( 'class' => 'img-fluid' ));  ?></a> 
            </div>
            <div class="col-10">
                <h1> <a href="<?php the_permalink(); ?>">  <?php the_title(); ?> </a>  </h1>
                <p>
                    <?php
                        echo from0_meta_poste( 
                            esc_attr( get_the_date('c')),
                            esc_html(get_the_date()),
                            get_the_category_list(', '),
                            get_the_tag_list('', ', ')
                        );
                    ?> 
                </p>
                <p>
                    <?php the_excerpt(); ?>
                </p>
            </div>
        </div>