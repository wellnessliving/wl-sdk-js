/**
 * Sends a reminder notification for an incomplete quiz.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Quiz_Login_QuizRemindModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key within which quiz is managed.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Quiz login key.
   *
   * @post get
   * @type {string}
   */
  this.k_quiz_login = "";

  /**
   * Quiz response key.
   *
   * Passed when need send reminder for draft response(which created from request), otherwise `null`.
   *
   * @post get
   * @type {?string}
   */
  this.k_quiz_response = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Quiz_Login_QuizRemindModel);

/**
 * @inheritDoc
 */
Wl_Quiz_Login_QuizRemindModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"get":true}},"k_quiz_login":{"post":{"get":true}},"k_quiz_response":{"post":{"get":true}}}};
};

/**
 * Sends a reminder notification for an incomplete quiz.
 *
 * Resolves the quiz login key from the response key when needed, validates access and that the quiz login
 * exists and is visible, checks that the quiz is not restricted to staff only, then sends a reminder
 * notification to the client.
 *
 * @function
 * @name Wl_Quiz_Login_QuizRemindModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
