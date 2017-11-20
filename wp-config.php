<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'omniveo');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'accessdenied123');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', 'utf8_unicode_ci');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '=<Xwj1z$@gRw`zY<!0JnR[$2!@>T6tJiNkf&zz}8z>VeokcgOJVl6w{SDU%_IxY1');
define('SECURE_AUTH_KEY',  's^@4#~0I_09#?LgDd!RaBuft/[US#J(njQ|~|CE?0&{cU,*nO6#CRg^IV%]@7L*n');
define('LOGGED_IN_KEY',    'g+`rr[{f>1ziG`vv6<(dB+XJ@zprZQNbXwTIhL*sZ|b_V45E9u,b]C9oz3~3=@`:');
define('NONCE_KEY',        'qP:G?}=8Q<:-&o/[3mlm7!Yx~{&$X)WP+GaFTWPYzJ!ymDh1):uUG(&%47J%^Q+l');
define('AUTH_SALT',        'D%!P;$4CD-<wq KW&/5k6W}/P&/QdL jEnOU9VZS/@AhN=g+X?^1H:/ql>:T_w<u');
define('SECURE_AUTH_SALT', '<SJZ?+9s:5~oM0xL?Gklc$mf7AU3DuhU0|urQC0^;7>fzk]Up&&dy9_4m5#uERD!');
define('LOGGED_IN_SALT',   'k9uD$dI^ik?z}5,YGbyi/!aHM_R=+4[dCO?PYgZ !qQjcWa !+RDa#A !pkH[z|J');
define('NONCE_SALT',       '(rns(`%srRI}%R/5R&;*Bwd.J&TPLKPu#@nY8CtRAwuO,3_:`{7lr>2ry4as^2$l');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

define( 'AUTOSAVE_INTERVAL', 300 );
define( 'WP_POST_REVISIONS', 5 );
define( 'EMPTY_TRASH_DAYS', 7 );
define( 'WP_CRON_LOCK_TIMEOUT', 120 );
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
