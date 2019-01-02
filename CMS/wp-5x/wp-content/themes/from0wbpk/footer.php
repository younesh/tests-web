   <!-- <%= require('html-loader!./tpl-included/footer.html') %> -->
    <footer>
         <div class="container">
           <div class="menu-footer">
            <?php
              wp_nav_menu( array(
                'menu' => 'footer-menu',
                'theme_location' => 'footer' // position , deja declaré ds functions.php
              ));
            ?>
           </div>
         </div>
    </footer>
  </div>

    <?php wp_footer(); ?>
</body>

</html>