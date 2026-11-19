/**
 * Returns the list of business quizzes together with client registration and import status.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Quiz_QuizListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Whether to show active or inactive quizzes.
   *
   * Each element should be one of {@link Core_Sid_YesNoSid} constants.
   *
   * @get get
   * @type {number[]}
   */
  this.a_active_id = undefined;

  /**
   * @typedef {{}} Wl_Quiz_QuizListModel_a_list_a_config
   * @property {boolean} show_numbering Whether numbering is shown for elements that support numbering.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizListModel_a_list
   * @property {Wl_Quiz_QuizListModel_a_list_a_config} a_config Quiz form configuration:
   * @property {string} dtu_create Date and time the quiz was created, in UTC.
   * @property {string} dtu_edit Date and time the quiz was last edited, in UTC.
   * @property {boolean} is_active Whether the quiz is active. `true` if active, `false` otherwise.
   * @property {string} k_quiz Quiz key.
   * @property {string} s_file Unique random string used for the form kiosk mode page.
   * @property {string} text_title Quiz title.
   * @property {?string} uid_create Key of the user who created the quiz. `null` if unknown or imported.
   * @property {?string} uid_edit Key of the user who last edited the quiz. `null` if unknown or imported.
   */

  /**
   * List of available quizzes within quiz holder:
   *
   * @get result
   * @type {Wl_Quiz_QuizListModel_a_list}
   */
  this.a_list = undefined;

  /**
   * List of quiz keys, needed for registration.
   *
   * @get result
   * @type {string[]}
   */
  this.a_quiz_register = undefined;

  /**
   * Shows which register quizzes must be returned.
   * `true` if return quizzes before registration, `false` otherwise.
   * `null` if return all quizzes for registration.
   *
   * @get get
   * @type {?boolean}
   */
  this.is_register_before = null;

  /**
   * Business key within which quiz is managed.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Quiz login key.
   *
   * @get get
   * @type {string}
   */
  this.k_quiz_login = "";

  /**
   * Filter phrase to filter quizzes by name.
   *
   * @get get
   * @type {string}
   */
  this.text_search = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Quiz_QuizListModel);

/**
 * @inheritDoc
 */
Wl_Quiz_QuizListModel.prototype.config=function()
{
  return {"a_field":{"a_active_id":{"get":{"get":true}},"a_list":{"get":{"result":true}},"a_quiz_register":{"get":{"result":true}},"is_register_before":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_quiz_login":{"get":{"get":true}},"text_search":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Quiz_QuizListModel.instanceGet
 * @param {string} k_business Business key within which quiz is managed.
 * @returns {Wl_Quiz_QuizListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the list of business quizzes together with client registration and import status.
 *
 * Loads the quiz list for the business filtered by active state and search phrase, then
 * marks which quizzes still require registration for the current login and which quizzes
 * were imported from an external system. Also stores the requested active-state filter as
 * the user's default quiz view.
 *
 * @function
 * @name Wl_Quiz_QuizListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
