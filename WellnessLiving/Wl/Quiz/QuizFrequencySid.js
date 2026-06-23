/**
 * List of quiz frequency types.
 */
function Wl_Quiz_QuizFrequencySid()
{
  // Empty constructor.
}

/**
 * Client will be asked to complete the quiz every time they book a service or purchase item.
 *
 * @type {number}
 */
Wl_Quiz_QuizFrequencySid.EVERY = 1;

/**
 * Client will be asked to complete the quiz the first time they book a service or purchase item.
 *
 * @type {number}
 */
Wl_Quiz_QuizFrequencySid.FIRST = 2;

/**
 * Client will be asked to complete the quiz only one time when they book a service or purchase item.
 *
 * @type {number}
 */
Wl_Quiz_QuizFrequencySid.ONCE = 3;
