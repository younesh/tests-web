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
  <div class="page">
    <!-- Header : begin -->
   <!-- <%= require('html-loader!./tpl-included/header.html') %> -->

    <header class="header">
      <div class="container">
        <div class="menu-descktop">
          <?php
            wp_nav_menu( array(
              'menu' => 'top-menu',
              'theme_location' => 'primary' // position , deja declaré ds functions.php
            ));
          ?>
        </div>
      </div>
    </header>
    <!-- Header : end  -->