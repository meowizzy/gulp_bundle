<?php

add_action('wp_enqueue_scripts', 'turn_on');
add_action('wp_footer', 'script_theme');
function turn_on()
{
    wp_enqueue_style('main-style', get_template_directory_uri() . '/bundle/css/main.min.css');
    wp_enqueue_style('default-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('swiper', '//cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
}

function script_theme()
{
    wp_enqueue_script( 'swiper', '//cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js' );
    wp_enqueue_script('main-js', get_template_directory_uri() . '/build/js/cm.min.js');
}