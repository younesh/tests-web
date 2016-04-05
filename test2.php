<!-- FCX  -->

<div class="data_box_author_info">
    <p>
        <?php print t('On @datetime by <a href="@author_link">@author</a>',
            array('@datetime' => format_date($node->created , 'short'),
                '@author_link' => url('user/' .$node->uid),
                '@author' => strlen($node->name) > 20 ? lynkoa_api_truncate($node->name, 20) : $node->name)); ?>
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

<style>


    @media screen and (min-width: 640px) {

        .article_actions {
            margin-left: 0px;
        }
        .comment-display .article_actions {
            padding: 10px 10px 0px;
        }
        #questions_page ._2col_leftcol .pane-views-panes,
        ._2col_leftcol .create_button_big,
        ._2col_leftcol nav{
            display: block;
        }
        ._2col_leftcol {
            float: left;
            width: 42%;
            padding-right: 13px;
            font-size: 11px;
        }
        ._2col_maincol {
            float: left;
            width: 58%;
            padding-left: 12px;
        }
        ._2col_leftcol nav {
            padding: 20px;
        }
        ._2col_leftcol h3 {
            font-size: 30px;
            font-weight: 300;
            line-height: 40px;
        }
        /* Facets */

        ._2col_leftcol .button-accordion i{
            display: inline;
            float: right;
        }

        ._2col_leftcol .menu-deroulant li:before{
            display: none;
        }
        ._2col_leftcol ul.informations-accordion li.selected:before{
            margin-right: -16px;
            font-size: 20px;
            color: #CECECE;
            display: inline-block;
        }

        ._2col_leftcol .informations-accordion li{
            padding-left: 20px;
        }
        ._2col_leftcol .informations-accordion li.unselected{
            opacity: 0.80;
        }
        ._2col_leftcol .informations-accordion li.unselected i,
        ._2col_leftcol .informations-accordion li.selected i {
            margin: 0px 6px;
            display: inline-block;
        }
        ._2col_leftcol .informations-accordion li.unselected a.link i,
        ._2col_leftcol .informations-accordion li.selected a.link i {
            opacity: 0;
            margin: 0;
            width: 0;
        }
        ._2col_leftcol .informations-accordion li a{
            line-height: 21px;
            display: inline-block;
            font-style: italic;
            border-bottom: 1px dotted rgba(255,255,255,0);
            transition:  padding-left 0.5s, border-color 0.5s ease;
        }
        ._2col_leftcol .informations-accordion li a i{
            transition: width 0.2s ease,opacity 0.2s ease;
        }
        ._2col_leftcol .informations-accordion li a:focus,
        ._2col_leftcol .informations-accordion li a:hover{
            padding-left: 2px;
            border-color: rgb(77, 142, 197);
        }
        ._2col_leftcol .informations-accordion li.unselected a:hover i,
        ._2col_leftcol .informations-accordion li.selected a:hover i{
            opacity: 1;
            width: 14px;
        }
        ._2col_leftcol .informations-accordion li.selected a:focus,
        ._2col_leftcol .informations-accordion li.selected a:hover{
            background-position: -504px -397px;
        }
        ._2col_leftcol .informations-accordion li a span{
            font-weight: bold;
            font-style: normal;
        }
        /* Misc left col */
        .pane-lynkoa-solr-lynkoa-solr-get-content-like-this .views-row,
        .pane-news-view-news-panel-pane-3 .views-row,
        ._2col_leftcol > section > div.pane-content > div.field,
        ._2col_leftcol aside ul{
            background: #ffffff;
        }
        .pane-lynkoa-solr-lynkoa-solr-get-content-like-this .views-row,
        .pane-news-view-news-panel-pane-3 .views-row,
        ._2col_leftcol > section > div.pane-content > div.field,
        ._2col_leftcol aside p,
        ._2col_leftcol aside ul {
            line-height: 21px;
            color: #313131;
        }
        ._2col_leftcol > section > div.pane-content > div.field-type-text,
        .pane-lynkoa-solr-lynkoa-solr-get-content-like-this .views-row,
        .pane-news-view-news-panel-pane-3 .views-row,
        ._2col_leftcol aside ul.aside_normal_list{
            padding: 15px;
        }
        .aside_normal_list .more_less_link{
            text-align: center;
        }
        .aside_normal_list .icon_button{
            display: inline-block;
            float: right;
            clear: both;
            margin: 15px 0 10px;
        }

        ._2col_leftcol .aside_big_list li {
            padding: 15px;
        }

        ._2col_leftcol .aside_big_list li p,
        ._2col_leftcol .view-content .row p {
            margin-bottom: 0px;
        }

        ._2col_leftcol aside p.data_box_answer_count {
            font-size: 11px;
        }
        ._2col_leftcol .data_box_title{
            font-size: 13px;
        }
        ._2col_leftcol aside .aside_normal_list .link-participant{
            font-size: 10px;
            font-weight: bold;
            float: left;
        }
        .pane-news-view-news-panel-pane-3 .views-row .data_box_sub,
        .pane-news-view-news-panel-pane-3 .views-row .data_box_sub div {
            font-size: 0;
        }
        .pane-news-view-news-panel-pane-3 .views-row .data_box_sub time,
        .pane-news-view-news-panel-pane-3 .views-row .data_box_sub li{
            font-size: 10px;
        }
        .pane-news-view-news-panel-pane-3 .views-row .data_box_sub div,
        .pane-news-view-news-panel-pane-3 .views-row .data_box_sub ul,
        .pane-news-view-news-panel-pane-3 .views-row .data_box_sub ul li {
            display: inline-block;
        }
        ._2col_leftcol aside .aside_normal_list .link-participant .ly-avatar{
            display: none;
        }
        ._2col_leftcol aside .aside_normal_list .fivestar_big{
            float: right;
            padding-top: 3px;
        }
        ._2col_leftcol aside.aside_users_list li{
            padding: 0;
            clear: both;
            height: 100px;
            display: block;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list p.username{
            height: 46px;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list p.data_box_title{
            height: 75px;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list p.data_box_title,
        ._2col_leftcol aside.aside_users_list .aside_big_list p.username{
            padding: 10px 10px 5px 0;
            line-height: 16px;
            margin-bottom: 0;
            font-size: 13px;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list p.username a{
            border-bottom-color: #ffffff;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list p.username a:focus,
        ._2col_leftcol aside.aside_users_list .aside_big_list p.username a:hover{
            background-color:transparent;
            color: #313131;
            border-bottom: 1px dotted #313131;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list .points{
            height: 18px;
            line-height: 16px;
            margin-bottom: 0;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list .medals{
            height: 28px;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list p.medals{
            font-style: italic;
            color: #999;
            margin-bottom: 0;
            line-height: 28px;
            font-size: 11px;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list div.medals a{
            border-bottom-width: 0;
            -webkit-transition: 0.2s opacity;
            transition: 0.2s opacity;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list div.medals a:focus,
        ._2col_leftcol aside.aside_users_list .aside_big_list div.medals a:hover{
            background: transparent;
            opacity: 0.7;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list div.medals a img{
            height: 28px;
            width: 28px;
            margin-right: 3px;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list .views-row:first-child figure {
            box-shadow: none;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list figure{
            float: left;
            width: 100px;
            height: 100px;
            margin-right: 10px;
            background-image: url("../../img/default_avatar.png");
            background-position: center center;
            background-size: 110px 110px;
        }
        ._2col_leftcol aside.aside_users_list .aside_big_list figure img{
            width: 100%;
            height: 100%;
        }

        /* Single left col */
        h2.custom_h2,
        ._2col_maincol article.single h2.custom_h2,
        .pane-askyq-view-questions-panel-pane-1 > h2,
        .pane-node-comments h2,
        .pane-nodecomment-form h2,
        ._2col_leftcol > section > h2,
        ._2col_leftcol aside h2 {
            display: block;
            line-height: 50px;
            text-indent: 20px;
        }
        .aside-title-with-link span,
        ._2col_maincol article.single h3,
        .pane-node-comments h2,
        .pane-nodecomment-form h2,
        ._2col_leftcol > section > h2,
        ._2col_leftcol aside h2 {
            font-size: 20px;
        }
        ._2col_leftcol aside h2.aside-title-with-link {
            font-size: 0;
        }
        .aside-title-with-link > * {
            display: inline-block;
            vertical-align: top;
            height: 50px;
            text-indent: 0;
        }
        .aside-title-with-link > span {
            width: calc(100% - 70px);
        }
        .aside-title-with-link a {
            width: 50px;
            font-size: 6px;
            overflow: hidden;
            color: #fff;
            border-left: 1px solid rgba(255,255,255,0.3);
        }
        .aside-title-with-link a:focus,
        .aside-title-with-link a:hover {
            background: rgba(255,255,255,0.3);
        }
        .aside-title-with-link a span {
            text-indent: 60px;
        }
        .aside-title-with-link a span {
            text-indent: 60px;
        }
        ._2col_maincol article.single h3{
            font-weight: 300;
            margin-bottom: 20px;
        }
        ._2col_leftcol > section > div.pane-content > div.field{
            box-shadow: 0 4px 4px -4px rgba(0,0,0,0.6),
            0 4px 4px -4px rgba(0,0,0,0.6) inset;
            margin-bottom: 25px;
        }
        #recipes_page ._2col_leftcol .field-type-filefield .field-item{
            box-shadow: none;
        }
        .sub_links.author_contributions,
        ._2col_maincol article.single .variant_original_button a,
        ._2col_maincol article.single .data_box h2,
        ._2col_leftcol .ly-column-cadre {
            display: block;
        }
        ._2col_leftcol .ly-column-cadre.pane-page-title {
            display: none;
        }
        ._2col_maincol article.single h2 .fivestar_big{
            display: inline-block;
            vertical-align: -75%;
        }
        ._2col_maincol article.single .data_box{
            box-shadow: none;
        }
        ._2col_maincol article.single .data_box_top{
            padding: 25px 25px 10px;
        }
        ._2col_maincol article.single h2{
            line-height: 30px;
            margin-bottom: 20px;
        }
        ._2col_maincol .icon_button{
            font-size: 12px;
            display: inline-block;
            box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
        }
        ._2col_maincol article.single .data_box_author{
            height: 60px;
        }
        ._2col_maincol article.single .sub_links.author_contributions{
            padding-right: 0px;
        }
        article.single .author_contributions li{
            display: inline-block;
            padding-left: 15px;
        }
        section.step-list{
            padding: 20px 20px 5px;
        }
        section.step-list .informations-accordion {
            padding-left: 5px;
            padding-right: 5px;
        }
        /* Main col */
        body ul.main_results_filters {
            background: transparent;
            padding: 0;
            box-shadow: none;
        }
        ul.main_results_filters div{
            border-left: 1px solid #a3a3a3;
            padding: 0 10px;
            float: left;
            width: 50%;
            margin-bottom: 25px;
        }
        .item-list ul.pager {
            text-align: right;
            font-size: 0;
            padding-right: 20px;
        }
        #questions_page ._2col_maincol article.excerpt .data_box h2,
        ._2col_maincol .view-askyq-view-questions article.excerpt .data_box h2 {
            font-size: 15px;
            line-height: 20px;
        }
        #questions_page ._2col_maincol article.excerpt .data_box_status,
        .view-askyq-view-questions article.excerpt .data_box_status {
            line-height: 75px;
        }
        #questions_page ._2col_maincol article.excerpt .data_box_status,
        .view-askyq-view-questions article.excerpt .data_box_status,
        .question_status_box li {
            height: 75px;
        }



        /* .question_status_box li.question_status_icon.icon_resolved {
             background-position: center -1070px;
         }
         .question_status_box li.question_status_icon.icon_answered {
             background-position: center -1170px;
         }
         .question_status_box li.question_status_icon.icon_notanswered {
             background-position: center -1270px;
         }

     */

        .question_status_box li.question_status_icon.icon_resolved:before ,
        .question_status_box li.question_status_icon.icon_notanswered:before,
        .question_status_box li.question_status_icon.icon_answered:before{

            font-size: 34px;
        }






        .question_status_box li.count_box {
            font-size: 30px;
            padding-top: 23px;
        }
        .question_status_box li.count_box span {
            font-size: 12px;
        }

    }

</style>