<?php
/**
 * Plugin Name: Simple WP Data Store
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('admin_menu', function () {
    add_menu_page(
        'Simple WP Data Store',
        'Simple WP Data Store',
        'manage_options',
        'simple-wp-data-store',
        function() {
            echo '<div id="simple-wp-data-store">React App goes here...</div>';
        }
    );
});

add_action( 'admin_enqueue_scripts', function($page) {
    if($page !== 'toplevel_page_simple-wp-data-store') {
        return;
    }

    $asset_file = require __DIR__ . '/build/index.asset.php';

    wp_register_script(
        'simple-wp-data-store',
        plugins_url( '/build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version'],
        true
    );

    wp_enqueue_script( 'simple-wp-data-store' );
});

