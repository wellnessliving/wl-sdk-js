/**
 * Class/Event booking process sid class.
 */
function Wl_Book_Process_ProcessSpaSid()
{
  // Empty constructor.
}

/**
 * Step "Class details".
 *
 * Special step - a container for combining other steps.
 *
 * This constant has been added to the SID class to match the steps interface in JS.
 *
 * Adding a step to the queue is done on the client side (in JS).
 *
 * The list of steps that can be displayed on {@link \Wl\Book\Process\ProcessSpaSid::DETAIL_COLLECTION}.
 *
 * Designed for Client Web View.
 *
 * @constant
 * @default 10
 * @name Wl_Book_Process_ProcessSpaSid.DETAIL
 * @type {number}
 */
Wl_Book_Process_ProcessSpaSid.DETAIL=10;

/**
 * Step "Documents".
 *
 * Special step - a container for combining other steps.
 *
 * This constant has been added to the SID class to match the steps interface in JS
 *
 * Adding a step to the queue is done on the client side (in JS).
 *
 * The list of steps that can be displayed on:
 *  * {@link \Wl\Book\Process\ProcessSpaSid::QUIZ}
 *  * Purchase options contract
 *
 * Designed for Client Web View.
 *
 * @constant
 * @default 8
 * @name Wl_Book_Process_ProcessSpaSid.DOCUMENT
 * @type {number}
 */
Wl_Book_Process_ProcessSpaSid.DOCUMENT=8;

/**
 * Step "Frequency".
 * It is necessary to select booking frequency.
 *
 * Designed for Client Web View.
 *
 * @constant
 * @default 9
 * @name Wl_Book_Process_ProcessSpaSid.FREQUENCY
 * @type {number}
 */
Wl_Book_Process_ProcessSpaSid.FREQUENCY=9;

/**
 * Information about the class.
 *
 * In the SPA app, this step combines the following steps:
 * * {@link \Wl\Book\Process\ProcessSpaSid::FREQUENCY}
 * * {@link \Wl\Book\Process\ProcessSpaSid::SESSION}
 *
 * @constant
 * @default 2
 * @name Wl_Book_Process_ProcessSpaSid.INFO
 * @type {number}
 */
Wl_Book_Process_ProcessSpaSid.INFO=2;

/**
 * Installment selection.
 *
 * @constant
 * @default 4
 * @name Wl_Book_Process_ProcessSpaSid.INSTALLMENT
 * @type {number}
 */
Wl_Book_Process_ProcessSpaSid.INSTALLMENT=4;

/**
 * Sign in, Sign up, fill in all necessary account data.
 *
 * @constant
 * @default 1
 * @name Wl_Book_Process_ProcessSpaSid.PASSPORT
 * @type {number}
 */
Wl_Book_Process_ProcessSpaSid.PASSPORT=1;

/**
 * Card data and the booking confirmation.
 *
 * @constant
 * @default 5
 * @name Wl_Book_Process_ProcessSpaSid.PAYMENT
 * @type {number}
 */
Wl_Book_Process_ProcessSpaSid.PAYMENT=5;

/**
 * Quizzes attached to the class.
 *
 * @constant
 * @default 7
 * @name Wl_Book_Process_ProcessSpaSid.QUIZ
 * @type {number}
 */
Wl_Book_Process_ProcessSpaSid.QUIZ=7;

/**
 * Booking for.
 *
 * @constant
 * @default 12
 * @name Wl_Book_Process_ProcessSpaSid.RELATION
 * @type {number}
 */
Wl_Book_Process_ProcessSpaSid.RELATION=12;

/**
 * Selection of assets.
 *
 * @constant
 * @default 6
 * @name Wl_Book_Process_ProcessSpaSid.RESOURCE
 * @type {number}
 */
Wl_Book_Process_ProcessSpaSid.RESOURCE=6;

/**
 * Session selection step for a session event.
 *
 * Designed for Client Web View.
 *
 * @constant
 * @default 11
 * @name Wl_Book_Process_ProcessSpaSid.SESSION
 * @type {number}
 */
Wl_Book_Process_ProcessSpaSid.SESSION=11;

/**
 * A list of possible Purchase Options to be bought.
 *
 * @constant
 * @default 3
 * @name Wl_Book_Process_ProcessSpaSid.STORE
 * @type {number}
 */
Wl_Book_Process_ProcessSpaSid.STORE=3;