<aside class="user_profile">
    <!-- Toolbar for logged in user -->
    <!-- Toolbar for SEARCH-->
    <div class="search">
        <div class="search_toolbar">
            <?php if (module_exists("lynkoa_solr")) : ?>
                <?php print lynkoa_solr_addon(); ?>
            <?php endif; ?>
        </div>
    </div>



    <?php if (module_exists("lynkoa_profile")) : ?>

        <?php if (user_is_logged_in()) : ?>
            <div class="user_block">
                <!-- AVATAR -->
                <?php print l(lynkoa_api_get_avatar_html($user, 'origami_profile_avatar_aero'), 'user', array(
                    'html' => true,
                    'attributes' => array(
                        'title' => t('View Profile'),
                        'class' => 'profile_avatar_link sprite_main'
                    )
                )); ?>
                <div class="user_details">
                    <div class="user_name_points">
                        <!-- USERNAME -->
                        <?php print lynkoa_profile_get_profile($user->uid, "myprofile"); ?>
                    </div>
                    <ul class="user_icons">
                        <!-- NOTIFICATIONS & MESSAGES-->
                        <?php if (module_exists("lynkoa_profile_notifications")) : ?>
                            <?php print lynkoa_profile_notifications_addon_display_notif($user); ?>
                            <?php print lynkoa_profile_notifications_addon_display_pm($user); ?>
                        <?php endif; ?>
                        <li class="logout_btn_wrapper">
                            <?php print l(t('Log out'), 'logout', array(
                                'html' => true,
                                'attributes' => array('class' => 'logout_btn text_dark sprite_main')
                            )); ?>
                        </li>
                    </ul>
                </div>
                <!-- user_details end -->

            </div><!-- user_block end -->
        <?php else : ?>
            <div class="user_block user_block_logout">
                <ul>
                    <li>
                        <?php print l('<span>' . t('Register') . '</span>', 'user/register', array(
                            'query' => drupal_get_destination(),
                            'html' => true,
                            'attributes' => array('class' => 'sprite_main')
                        )); ?>
                    </li>
                    <li>
                        <?php print l('<span>' . t('Sign in') . '</span>', 'user/login', array(
                            'query' => drupal_get_destination(),
                            'html' => true,
                            'attributes' => array('class' => 'sprite_main')
                        )); ?>
                    </li>
                </ul>
            </div><!-- user_block end -->
        <?php endif; ?>
    <?php endif; ?>

</aside>