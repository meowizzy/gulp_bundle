<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo the_title(); ?></title>
    <?php
    $cur_lang = pll_current_language('slug');
    $template_url = get_bloginfo('template_directory');
    ?>
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo $template_url;?>/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo $template_url;?>/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo $template_url;?>/favicon/favicon-16x16.png">
    <link rel="manifest" href="<?php echo $template_url;?>/favicon/site.webmanifest">
    <link rel="mask-icon" href="<?php echo $template_url;?>/favicon/safari-pinned-tab.svg" color="#2f55f2">
    <meta name="msapplication-TileColor" content="#2f55f2">
    <meta name="theme-color" content="#2f55f2">
    <?php wp_head(); ?>


</head>

<body>