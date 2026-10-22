/**
 * List of render modes.
 */
function Core_Quiz_RenderModeSid()
{
  // Empty constructor.
}

/**
 * Mode for displaying the error message about access restriction to private quiz.
 *
 * @type {number}
 */
Core_Quiz_RenderModeSid.ACCESS_DENIED_PRIVATE = 8;

/**
 * Mode to provide ability to perform question amendment.
 *
 * @type {number}
 */
Core_Quiz_RenderModeSid.AMEND = 5;

/**
 * Mode to display only part of the question with answer element.
 *
 * @type {number}
 */
Core_Quiz_RenderModeSid.AMEND_ADD = 7;

/**
 * Mode to display only answer of the question without actual question information.
 *
 * @type {number}
 */
Core_Quiz_RenderModeSid.ANSWER = 6;

/**
 * Edit mode on quiz edit form.
 *
 * @type {number}
 */
Core_Quiz_RenderModeSid.EDIT = 2;

/**
 * Preview mode on quiz edit form.
 *
 * @type {number}
 */
Core_Quiz_RenderModeSid.PREVIEW = 1;

/**
 * Mode to display element with response.
 *
 * @type {number}
 */
Core_Quiz_RenderModeSid.REPORT = 4;

/**
 * Response mode on the form where response expected.
 *
 * @type {number}
 */
Core_Quiz_RenderModeSid.RESPONSE = 3;
