/**
 * Deletes from the client profile.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Quiz_Login_QuizLoginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of quizzes keys.
   *
   * `null` when we do not send data from frontend and send `k_quiz` instead.
   *
   * @post post
   * @type {?string[]}
   */
  this.a_quiz = null;

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @delete get
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Whether filling out a form is obligatory and should be passed urgently.
   * `true` - obligatory, `false` - otherwise.
   *
   * @put post
   * @type {boolean}
   */
  this.is_require = false;

  /**
   * Business key within which quiz is managed.
   *
   * @delete get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Quiz login key.
   *
   * @delete get
   * @post get
   * @type {string}
   */
  this.k_quiz = "";

  /**
   * Quiz login key.
   *
   * @delete get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_quiz_login = "";

  /**
   * Quiz response key.
   *
   * Passed when need change hidden status for draft response(which created from request), otherwise `null`.
   *
   * @put get
   * @type {?string}
   */
  this.k_quiz_response = null;

  /**
   * Visit key.
   *
   * @post post
   * @type {string}
   */
  this.k_visit = "";

  /**
   * UID of the client.
   *
   * @post post
   * @type {string}
   */
  this.uid_client = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Quiz_Login_QuizLoginModel);

/**
 * @inheritDoc
 */
Wl_Quiz_Login_QuizLoginModel.prototype.config=function()
{
  return {"a_field":{"a_quiz":{"post":{"post":true}},"id_mode":{"delete":{"get":true}},"is_require":{"put":{"post":true}},"k_business":{"delete":{"get":true},"post":{"get":true},"put":{"get":true}},"k_quiz":{"delete":{"get":true},"post":{"get":true}},"k_quiz_login":{"delete":{"get":true},"post":{"get":true},"put":{"get":true}},"k_quiz_response":{"put":{"get":true}},"k_visit":{"post":{"post":true}},"uid_client":{"post":{"post":true}}}};
};

/**
 * Deletes from the client profile.
 *
 * Validates access and that the quiz exists, resolves the quiz login record (considering franchise
 * businesses when travel mode is flexible), validates that the quiz login can be deleted, then removes it,
 * logs the removal, reindexes the client in search, and clears the related report and quiz note caches.
 *
 * @function
 * @name Wl_Quiz_Login_QuizLoginModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Adds quiz for client profile.
 *
 * Validates access to the target client and to the requested quiz or quizzes, requiring exactly one of
 * `k_quiz` or `a_quiz` to be provided and all requested quizzes to exist and be active. If a visit is
 * provided, marks the quizzes as uncompleted for that visit; otherwise creates new quiz login records for
 * manual assignment. Clears the quiz note cache afterwards.
 *
 * @function
 * @name Wl_Quiz_Login_QuizLoginModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Updates the required flag of a quiz login.
 *
 * Resolves the quiz login key from the response key when needed, validates access to the quiz login,
 * updates its record in the business shard to make it visible and set the required flag, then clears the
 * quiz login cache and the related report cache.
 *
 * @function
 * @name Wl_Quiz_Login_QuizLoginModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
