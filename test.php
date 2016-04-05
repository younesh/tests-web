
<!-- GLOBAL -->
<div class="points_actions_group arrow collapsed expanded">
    <h4><a class="points_accordion color_dark" href="#"><?php print t('Global'); ?><span class="arrow_ico open"><span class="sprite_main color_main arrow_up"></span><span class="sprite_main color_main arrow_down"></span></span></a></h4>
    <ul class="points_actions global_points">
        <li class="global_points">
            <?php if (user_is_logged_in()) : ?>
            <span class="points_ok">
        <?php else : ?>
                <span class="points_not_yet">
        <?php endif; ?>
                    <span class="status_icon"></span>
                    <?php print l(t('Registration on @site_name grants you @points points', array("@points" => variable_get("userpoints_register_register", 50), '@site_name' => variable_get('site_name', 'Sobizzz'))), "user"); ?>
          </span>
        </li>

        <li class="global_points">
            <?php if (user_is_logged_in()) : ?>
            <?php if($actions['profile_completion'] == 100) : ?>
            <span class="points_ok">
          <?php else : ?>
                <span class="points_not_yet">
          <?php endif; ?>
                    <?php endif; ?>
                    <span class="status_icon"></span>
                    <?php print l(t('Get a 100% profile completion and earn @points points', array("@points" => "50")), "user"); ?>
            </span>
        </li>

        <li class="global_points">
            <?php if (user_is_logged_in()) : ?>
            <?php if(isset($actions['connection'])) : ?>
            <span class="points_ok">
          <?php else : ?>
                <span class="points_not_yet">
          <?php endif; ?>
                    <?php endif; ?>
                    <span class="status_icon"></span>
                    <?php print l(t('Each connection on the site gives @points points (1 connection per day recorded)', array("@points" => variable_get("userpoint_earned-connection-point", 30))), ""); ?>
        </span>
        </li>

        <li class="global_points">
            <?php if (user_is_logged_in()) : ?>
            <?php if($actions['invites'] > 0) : ?>
            <span class="points_ok">
          <?php else : ?>
                <span class="points_not_yet">
          <?php endif; ?>
                    <?php endif; ?>
                    <span class="status_icon"></span>
          <span class="referral_action">
            <?php $txt = t('Member registration through your referral gives you @points points. ', array("@points" => "30")); ?>
            <?php print l($txt, "user/referral") .
                '</span><br />' . t('There is no limit, invite as many friends as you want. ') .
                ' ' . t('20 friends through referral will grant you with a 1500 points bonus.'); ?>
        </span>
        </li>
    </ul>
    <div class="spacer"></div>
</div>
/