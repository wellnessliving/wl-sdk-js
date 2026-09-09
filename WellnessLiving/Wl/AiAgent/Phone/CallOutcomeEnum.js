/**
 * List of outcomes of a CAASI Phone Agent call.
 */
function Wl_AiAgent_Phone_CallOutcomeEnum()
{
  // Empty constructor.
}

/**
 * The caller requested a callback from staff.
 *
 * @type {number}
 */
Wl_AiAgent_Phone_CallOutcomeEnum.CALLBACK_REQUESTED = 3;

/**
 * The call was resolved by CAASI without staff involvement.
 *
 * @type {number}
 */
Wl_AiAgent_Phone_CallOutcomeEnum.RESOLVED = 1;

/**
 * The call was transferred to a live staff member.
 *
 * @type {number}
 */
Wl_AiAgent_Phone_CallOutcomeEnum.TRANSFERRED = 2;
