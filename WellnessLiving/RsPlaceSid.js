/**
 * The list of available modes.
 */
function RsPlaceSid()
{
  // Empty constructor.
}

/**
 * Backend mode.
 *
 * @type {number}
 */
RsPlaceSid.BACKEND = 2;

/**
 * The script is executed in the background (like an asynchronous task, regular task or a cron method).
 *
 * @type {number}
 */
RsPlaceSid.BACKGROUND = 5;

/**
 * Directory pages.
 *
 * @type {number}
 */
RsPlaceSid.DIRECTORY = 3;

/**
 * Default frontend mode. All pages not in backend mode except microsite and directory pages.
 *
 * @type {number}
 */
RsPlaceSid.FRONTEND = 1;

/**
 * Microsite pages.
 *
 * @type {number}
 */
RsPlaceSid.MICROSITE = 4;
