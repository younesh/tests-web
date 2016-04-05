<!-- THEME VISIATIV -->

<div class="data_box_author_info">
    <p>
        <?php strlen($node->name) > 20 ? lynkoa_api_truncate($node->name, 20) : $node->name; ?>
        <?php print lynkoa_api_convert_date($node->created) ." " .t('by') ." " .l("", url('user/' .$node->uid));?>
    </p>
    <?php if(module_exists('toques_enterprise') && $certified_member): ?>
        <?php $enterprise = node_load($enterprise_id); ?>
        <p>
            <?php print t('Certified by <a href="@company_link">@company_title</a>',
                array(
                    '@company_link' => url('node/' .$enterprise_id),
                    '@company_title' => $enterprise->title
                )); ?>
        </p>
    <?php endif; ?>
</div>


----- question

<p>
    <?php strlen($node->name) > 20 ? lynkoa_api_truncate($node->name, 20) : $node->name; ?>
    <?php print lynkoa_api_convert_date($node->created) ." " .t('by') ." " .l("", url('user/' .$node->uid));?>
</p>


---- news

<p>
    <?php print lynkoa_api_convert_date($node->created) ." ";  ?>
    <?php print t("by") . ' ' ; ?><?php print l($node->name, "user/".$node->uid); ?>
</p>