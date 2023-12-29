<?php
add_theme_support('post-thumbnails');
add_image_size('full-hd-size', 1920, 1080, false);
add_image_size('2k-size', 2048, 1080, false);
add_image_size('logo-size', 250, 35, false);
add_image_size('news-size', 812, 536, false);
add_image_size('blog-size', 682, 682, false);
add_image_size('about-grid-size', 412, 412, false);

if (function_exists('acf_add_options_page')) {
    $languages = pll_languages_list();
    foreach ($languages as $lang) {
        acf_add_options_page(array(
            'page_title' => 'Опции сайта (' . strtoupper($lang) . ')',
            'menu_title' => __('Опции сайта (' . strtoupper($lang) . ')', 'apay'),
            'menu_slug' => "site-options-${lang}",
            'post_id' => $lang
        ));
    }
}

if (!function_exists('theme_setup')) {
    function theme_setup() {
        // Кастомное лого
        add_theme_support( 'custom-logo', [
            'flex-width'  => false,
            'flex-height' => false,
            'header-text' => '',
            'unlink-homepage-logo' => false, // WP 5.5
        ]);
    }

    add_action('after_setup_theme', 'theme_setup');
}

add_action('after_setup_theme', function () {
    register_nav_menus([
        'main_menu' => 'Основное меню',
    ]);
});