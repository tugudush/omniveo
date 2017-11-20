<?php
/**
 * Showcase Pro
 *
 * This file adds the landing page template to the Showcase Pro Theme.
 *
 * @package Showcase
 * @author  Bloom
 * @license GPL-2.0+
 * @link    http://my.studiopress.com/themes/showcase/
 */

/*
Template Name: Landing
*/

// Add landing body class to the head
add_filter( 'body_class', 'showcase_add_body_class' );
function showcase_add_body_class( $classes ) {

	$classes[] = 'showcase-landing';
	return $classes;

}

// Force full-width-content layout
add_filter( 'genesis_pre_get_option_site_layout', '__genesis_return_full_width_content' );

// Remove site header elements
remove_action( 'genesis_header', 'genesis_header_markup_open', 5 );
remove_action( 'genesis_header', 'genesis_do_header' );
remove_action( 'genesis_header', 'genesis_header_markup_close', 15 );

// Remove navigation
remove_theme_support( 'genesis-menus' );

// Remove breadcrumbs
remove_action( 'genesis_before_loop', 'genesis_do_breadcrumbs' );

// Remove the Before Footer Widget Area
remove_action( 'genesis_before_footer', 'showcase_before_footer_widget_area', 5 );

// Remove site footer widgets
remove_theme_support( 'genesis-footer-widgets' );

// Remove site footer elements
remove_action( 'genesis_footer', 'genesis_footer_markup_open', 5 );
remove_action( 'genesis_footer', 'genesis_do_footer' );
remove_action( 'genesis_footer', 'genesis_footer_markup_close', 15 );

genesis();
